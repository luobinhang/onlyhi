/* *
 * Ping++ Server SDK
 * 说明：
 * 以下代码只是为了方便商户测试而提供的样例代码，商户可根据自己网站需求按照技术文档编写, 并非一定要使用该代码。
 * 接入 webhooks 流程参考开发者中心：https://www.pingxx.com/docs/webhooks/webhooks
 * 该代码仅供学习和研究 Ping++ SDK 使用，仅供参考。
 */
package com.onlyhi.pingxx;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.Signature;
import java.security.SignatureException;
import java.security.spec.X509EncodedKeySpec;
import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.apache.commons.codec.binary.Base64;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfo;
import com.pingplusplus.model.Event;

/**
 * Created by sunkai on 15/5/19. webhooks 验证签名示例
 *
 * 该实例演示如何对 Ping++ webhooks 通知进行验证。
 * 验证是为了让开发者确认该通知来自 Ping++ ，防止恶意伪造通知。用户如果有别的验证机制，可以不进行验证签名。
 *
 * 验证签名需要 签名、公钥、验证信息，该实例采用文件存储方式进行演示。
 * 实际项目中，需要用户从异步通知的 HTTP header 中读取签名，从 HTTP body 中读取验证信息。公钥的存储方式也需要用户自行设定。
 *
 *  该实例仅供演示如何验证签名，请务必不要直接 copy 到实际项目中使用。
 *
 */
public class WebhooksVerifyUtil {

	public static void main(String[] args) {
		try {
			JSONObject eventJson = JSON.parseObject(getStringFromFile("res/webhooks_raw_post_data.json"));
			//判断是否为event对象
			if("event".equals(eventJson.getString("object"))){
				//支付对象，支付成功时触发。
				if("charge.succeeded".equals(eventJson.getString("type"))){
					JSONObject data = JSON.parseObject(eventJson.getString("data"));
					JSONObject dataObject = JSON.parseObject(data.getString("object"));
					
					OrdersInfo ordersInfo = new OrdersInfo();
					ordersInfo.setOrderInfoNo(dataObject.getString("order_no"));//订单号
					ordersInfo.setPayMethod(dataObject.getString("channel"));//支付方式
					
					DateFormat df = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
					Date date = new Date(dataObject.getLong("time_paid"));
					String dfDate = df.format(date);
					ordersInfo.setPayTime(df.parse(dfDate));//支付时间
					
					ordersInfo.setPayStatus(dataObject.getBoolean("paid") == true ? 1 : 0);//支付状态
					ordersInfo.setAlreadyPay(dataObject.getDouble("amount_settle") / 100);//已付款（分）
					ordersInfo.setTransactionNo(dataObject.getString("transaction_no"));//支付渠道返回的交易流水号
					System.out.println(ordersInfo.toString());
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
    public static void runWebhooksVerify(String webhooksRawPostData,String signature) throws Exception {
        boolean result = verifyData(webhooksRawPostData, signature, getPubKey());
        System.out.println("验签结果：" + (result ? "通过" : "失败"));
    }

    /**
     * 读取文件, 部署 web 程序的时候, 签名和验签内容需要从 request 中获得
     * @param filePath
     * @return
     * @throws Exception
     */
    public static String getStringFromFile(String filePath) throws Exception {
        FileInputStream in = new FileInputStream(filePath);
        InputStreamReader inReader = new InputStreamReader(in, "UTF-8");
        BufferedReader bf = new BufferedReader(inReader);
        StringBuilder sb = new StringBuilder();
        String line;
        do {
            line = bf.readLine();
            if (line != null) {
                if (sb.length() != 0) {
                    sb.append("\n");
                }
                sb.append(line);
            }
        } while (line != null);

        return sb.toString();
    }

    /**
     * 获得公钥
     * @return
     * @throws Exception
     */
    public static PublicKey getPubKey() throws Exception {
        String pubKeyString = PingxxUtil.pingxxPublicKey;
        pubKeyString = pubKeyString.replaceAll("(-+BEGIN PUBLIC KEY-+\\r?\\n|-+END PUBLIC KEY-+\\r?\\n?)", "");
        byte[] keyBytes = Base64.decodeBase64(pubKeyString);

        // generate public key
        X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PublicKey publicKey = keyFactory.generatePublic(spec);
        return publicKey;
    }

    /**
     * 验证签名
     * @param dataString
     * @param signatureString
     * @param publicKey
     * @return
     * @throws NoSuchAlgorithmException
     * @throws InvalidKeyException
     * @throws SignatureException
     */
    public static boolean verifyData(String dataString, String signatureString, PublicKey publicKey)
            throws NoSuchAlgorithmException, InvalidKeyException, SignatureException, UnsupportedEncodingException {
        byte[] signatureBytes = Base64.decodeBase64(signatureString);
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initVerify(publicKey);
        signature.update(dataString.getBytes("UTF-8"));
        return signature.verify(signatureBytes);
    }

}
