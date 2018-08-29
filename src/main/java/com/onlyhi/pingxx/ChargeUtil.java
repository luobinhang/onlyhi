/**
 * Ping++ Server SDK
 * 说明：
 * 以下代码只是为了方便商户测试而提供的样例代码，商户可根据自己网站需求按照技术文档编写, 并非一定要使用该代码。
 * 接入支付流程参考开发者中心：https://www.pingxx.com/docs/server/charge ，文档可筛选后端语言和接入渠道。
 * 该代码仅供学习和研究 Ping++ SDK 使用，仅供参考。
 */
package com.onlyhi.pingxx;

import java.util.Map;

import com.pingplusplus.Pingpp;
import com.pingplusplus.exception.APIConnectionException;
import com.pingplusplus.exception.APIException;
import com.pingplusplus.exception.AuthenticationException;
import com.pingplusplus.exception.ChannelException;
import com.pingplusplus.exception.InvalidRequestException;
import com.pingplusplus.exception.PingppException;
import com.pingplusplus.exception.RateLimitException;
import com.pingplusplus.model.Charge;

/**
 * Charge 对象相关示例
 *
 * 该实例程序演示了如何从 Ping++ 服务器获得 charge ，查询 charge。
 *
 * 开发者需要填写 apiKey 和 appId ，
 *
 * apiKey 有 TestKey 和 LiveKey 两种。
 *
 * TestKey 模式下不会产生真实的交易。
 */
public class ChargeUtil {
	
    /**
     * 创建 Charge
     *
     * 创建 Charge 用户需要组装一个 map 对象作为参数传递给 Charge.create();
     * map 里面参数的具体说明请参考：https://www.pingxx.com/api#api-c-new
     * @return Charge
     */
    public static Charge createCharge(Map<String, Object> chargeMap) {
    	// 设置 API Key
        Pingpp.apiKey = PingxxUtil.apiKey;

        // 设置私钥路径，用于请求签名
        Pingpp.privateKey = PingxxUtil.privateKey;
        
        Charge charge = null;
        try {
            //发起交易请求
            charge = Charge.create(chargeMap);
        } catch (APIConnectionException e) {
            e.printStackTrace();
        } catch (ChannelException e) {
            e.printStackTrace();
        } catch (RateLimitException e) {
            e.printStackTrace();
        } catch (AuthenticationException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        } catch (InvalidRequestException e) {
            e.printStackTrace();
        }
        return charge;
    }
    
    /**
     * 创建 Charge (微信公众号)
     *
     * 创建 Charge 用户需要组装一个 map 对象作为参数传递给 Charge.create();
     * map 里面参数的具体说明请参考：https://www.pingxx.com/api#api-c-new
     * @return Charge
     */
    public static Charge createChargeWithOpenid(Map<String, Object> chargeMap) {
        Charge charge = null;
        
        try {
            //发起交易请求
            charge = Charge.create(chargeMap);
            // 传到客户端请先转成字符串 .toString(), 调该方法，会自动转成正确的 JSON 字符串
            String chargeString = charge.toString();
        } catch (PingppException e) {
            e.printStackTrace();
        }
        return charge;
    }
}
