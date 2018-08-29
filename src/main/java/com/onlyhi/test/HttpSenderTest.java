package com.onlyhi.test;

public class HttpSenderTest {
	public static void main(String[] args) {
		String url = "http://sapi.253.com/msg/";// 应用地址
		String account = "jk_cs_J6";// 账号
		String pswd = "FRp4564457";// 密码
		String mobile = "18318870070";// 手机号码，多个号码使用","分割
		String msg = "Icey用户，您好！教务老师将在24小时内联系您，请保持手机号码畅通。源自交大，值得信赖。";// 短信内容
		boolean needstatus = true;// 是否需要状态报告，需要true，不需要false
		String extno = null;// 扩展码
		
		try {
			String returnString = HttpSender.batchSend(url, account, pswd, mobile, msg, needstatus, extno);
			System.out.println(returnString);
			// TODO 处理返回值,参见HTTP协议文档
		} catch (Exception e) {
			// TODO 处理异常
			e.printStackTrace();
		}
	}
}
