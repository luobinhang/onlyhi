package com.onlyhi.pingxx;

import java.math.BigInteger;
import java.security.SecureRandom;

import com.pingplusplus.Pingpp;

/**
 * Created by Afon on 16/4/26.
 */
public class Main {

    public static void main(String[] args) throws Exception {
    	
        // 设置 API Key
        Pingpp.apiKey = PingxxUtil.apiKey;

        // 设置私钥路径，用于请求签名
        Pingpp.privateKey = PingxxUtil.privateKey;

        /**
         * 或者直接设置私钥内容
         Pingpp.privateKey = "-----BEGIN RSA PRIVATE KEY-----\n" +
         "... 私钥内容字符串 ...\n" +
         "-----END RSA PRIVATE KEY-----\n";
         */
        
        // Charge 示例
//        ChargeExample.runDemos(PingxxUtil.appId);

        /*// Refund 示例
        RefundExample.runDemos();

        // RedEnvelope 示例
        RedEnvelopeExample.runDemos(appId);

        // Transfer 示例
        TransferExample.runDemos(appId);

        // Event 示例
        EventExample.runDemos();

        // Webhooks 验证示例
        WebhooksVerifyExample.runDemos();

        // 微信公众号 openid 相关示例
        WxPubOAuthExample.runDemos(appId);

        // 身份证银行卡信息认证接口
        IdentificationExample.runDemos(appId);

        // 批量付款示例
        BatchTransferExample.runDemos(appId);

        // 报关
        CustomsExample.runDemos(appId);*/
        
//        WxPubOAuthUtil.getOpenid();
    }

    private static SecureRandom random = new SecureRandom();

    public static String randomString(int length) {
        String str = new BigInteger(130, random).toString(32);
        return str.substring(0, length);
    }

    public static int currentTimeSeconds() {
        return (int)(System.currentTimeMillis() / 1000);
    }
}
