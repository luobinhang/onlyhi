package com.onlyhi.pingxx;

/**
 * Ping++相关工具类
 * @author Icey
 * @date 2016-12-17
 *
 */
public class PingxxUtil {
	/**
     * Pingpp 管理平台对应的 API Key，api_key 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击管理平台右上角公司名称->开发信息-> Secret Key
     */
//     public final static String apiKey = "sk_test_zf5SCGi5yT4OffTuTSOWbzL0";//测试
     public final static String apiKey = "sk_live_GOW9O8mzz9aTbHiTeHDSu5WH";//正式
    /**
     * Pingpp 管理平台对应的应用 ID，app_id 获取方式：登录 [Dashboard](https://dashboard.pingxx.com)->点击你创建的应用->应用首页->应用 ID(App ID)
     */
    public final static String appId = "app_jznfLKLenTePbXT8";

    /**
   * 设置请求签名密钥，密钥对需要你自己用 openssl 工具生成，如何生成可以参考帮助中心：https://help.pingxx.com/article/123161；
   * 生成密钥后，需要在代码中设置请求签名的私钥(rsa_private_key.pem)；
   * 然后登录 [Dashboard](https://dashboard.pingxx.com)->点击右上角公司名称->开发信息->商户公钥（用于商户身份验证）
   * 将你的公钥复制粘贴进去并且保存->先启用 Test 模式进行测试->测试通过后启用 Live 模式
   */
    public final static String privateKey = "-----BEGIN RSA PRIVATE KEY-----\n"+
												"MIICXgIBAAKBgQCe8d9T8r/Hcvhe7EvOOuZA6eimSXgcKIt8JpZK+csr9EkrCXQv\n"+
												"oORT9+zoHFTBlHicLrFGVW1ZRkI2rHS0iIZ7o7lcB77BlxDNYpII+Q5Nsuhgx/TO\n"+
												"74gLVJF4EI8Sjc+lmUgrTymAqxVNMuBVEIQ194aeRv/tDJOPzG69W6Gc/wIDAQAB\n"+
												"AoGBAIYFNGY4nXSzgLGpVRIDn/rEQKNV96zmkxaQAtIdZi8dwERFqG4wn9Ydiuj8\n"+
												"WosPgdNPm7LOfXF1SIeJSq6fH6T01bHfZ8il1/LxoMpQ+Huz6G8+haPHVcMPxvxd\n"+
												"mKeaUzvawvTw/rKxPte4WlNYaj/vSnjmdrFwJMERNSyemL5BAkEAzqp5aEzybqt5\n"+
												"DUUQGfWZqtOrSY4PiHiPPPCbv+xibezLnFf0B1z4qJWjet1Y0xJwI/m+R32XKx0w\n"+
												"CQaAQhxJqQJBAMTjHzs0eQUl28jSUYg7DkrPEzBwaPPw/aaoDMBQiU7GHnfDubLt\n"+
												"CQ6XkBz+bZ2vVGl9FgdnsF71uqpOb4XAamcCQQCiNK8hq/ND5ZYXUjN3DItVxtjT\n"+
												"3IpYhLd4DylPk8sVmBufVHEWLmSEfR5Y2s5SrFAUDHrKRcqWbkw7aTzVproxAkEA\n"+
												"g0sNzZZdSZCIcu/FjPoMuthB7KBZbKr9CwCvmCNcnRpCwQzVLbshughaAuurv2Zm\n"+
												"/P18Di4YEAr/kohBmEjK6wJATLVdCVGkFFfB1PO1zQubU4BL/0+nw+bmN4BTAW1s\n"+
												"ySe/BzPz0Wn0puehOnQWtDsqxlV0xa5PjX/Ns9NQt50xXg==\n"+
												"-----END RSA PRIVATE KEY-----\n";
    
    /**
     * ping++publicKey
     */
    public final static String pingxxPublicKey ="-----BEGIN PUBLIC KEY-----\n"+
												"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtk9cHPWiSipopicV0QQX\n"+
												"ylGcBvuPkkMt6h6kTSXH4Ds7NVrlSfac+ODge+bnkQM0h37vP6o77qDpBoXKO4Oj\n"+
												"1R39jB8yYn+Sk4Jhj/D93HAREPjhyJuf5SXLGLkoXUVI0ugaPs0GTSQeWUYItGRC\n"+
												"X3Uh0s5DKRl+IpeTDmdsc81zaBBoh8UaDxWfnvsZNQhJbLFOwX686k8FdUmSn/8R\n"+
												"tJH4kygVXzcvELWpG6sdBpW04VAvLY0ouhX0g3xZ5E3jDqMWM4YQv3XPOHFTzr1B\n"+
												"Te7bBicW1AktMFqn079V53EokE753yKhjfJWLKbHqyN7v1pXPumVhUMBqJccy00W\n"+
												"/wIDAQAB\n"+
												"-----END PUBLIC KEY-----";
    
    public final static String publicKey ="-----BEGIN PUBLIC KEY-----\n"+
    											"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCe8d9T8r/Hcvhe7EvOOuZA6eim\n"+
												"SXgcKIt8JpZK+csr9EkrCXQvoORT9+zoHFTBlHicLrFGVW1ZRkI2rHS0iIZ7o7lc\n"+
												"B77BlxDNYpII+Q5Nsuhgx/TO74gLVJF4EI8Sjc+lmUgrTymAqxVNMuBVEIQ194ae\n"+
												"Rv/tDJOPzG69W6Gc/wIDAQAB\n"+
												"-----END PUBLIC KEY-----";
    
    /**
     * 微信公共号里面获取 openid 时的回跳 URL
     */
    public static String redirectUrl = "http://www.onlyeduhi.cn/";
    /**
     * 微信公共号的 appId，通常为 `wx` 开头的字符串
     */
    public static String wxAppId="wx2b401a5aaf830bf1";
    /**
     * 微信公共号的 secret
     */
    public static String wxAppSecret ="gUOZjrKHeTXIvaOgPpxzivycXv2ZMoze";
    
}
