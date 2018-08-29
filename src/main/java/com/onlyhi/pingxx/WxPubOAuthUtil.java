package com.onlyhi.pingxx;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import com.pingplusplus.model.Charge;
import com.pingplusplus.util.WxpubOAuth;

/**
 * 微信公共账号，付款签名示例
 *
 * 开发者需要填写 apiKey 、appId 、url 和 openid 。
 *
 * apiKey 有 TestKey 和 LiveKey 两种。
 *
 * TestKey 模式下不会产生真实的交易。
 *
 * openid 是发送红包的对象在公共平台下的 openid ,获得 openid 的方法可以参考微信文档：http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html
 *
 */
public class WxPubOAuthUtil {
    public static String getOpenid() throws UnsupportedEncodingException {
        System.out.println("1. 你需要有一个处理回跳的 URL");
        String redirectUrl = PingxxUtil.redirectUrl;

        String url = WxpubOAuth.createOauthUrlForCode(PingxxUtil.wxAppId, redirectUrl, false);
        System.out.println("2. 跳转到该 URL");
        System.out.println(url);

        String openid = getOpenidWithCode();
        return openid;
    }

    public static String getOpenidWithCode() throws UnsupportedEncodingException {
        String openid = WxpubOAuth.getOpenId(PingxxUtil.wxAppId,PingxxUtil. wxAppSecret, "code");
        System.out.println(openid);
        return openid;
    }
    
}

