package com.onlyhi.Controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.onlyhi.repository.onlyhiedu.mbg_po.Message;
import com.onlyhi.service.IMessageService;
import com.onlyhi.test.HttpSender;

/**
 * 
 * @author Icey
 *
 */
@Controller
@RequestMapping("msg")
public class HttpSenderController {
	
	@Resource(name = "MessageServiceImpl")
	private IMessageService messageService;
	
	/**
	 * 短信发送
	 * @return {@link String}
	 */
	@CrossOrigin
	@RequestMapping(value = "/sendMsg", method = RequestMethod.POST)
	@ResponseBody
	public String sendPhoneAuthCode(HttpServletRequest request,HttpServletResponse response,String sendPhone,int sendType) {
		Map<String , Object> msgMap = new HashMap<String , Object>();
		Message message = null;
		
		String code = HttpSender.getSixRandom();
		String url = "http://sapi.253.com/msg/";// 应用地址
		String account = "jk_cs_J6";// 账号
		String pswd = "FRp4564457";// 密码
		String mobile = sendPhone;// 手机号码，多个号码使用","分割dd
		String msg = "";
		if(sendType == 0 || sendType == 2){
			msg = "您的验证码是"+code+"。此验证码用于昂立嗨课堂注册或找回密码。5分钟内有效。请勿泄漏并尽快输入验证。源自交大，值得信赖。";
		}else{
			msgMap.put("result", "1");
			msgMap.put("message", "发送类型有误!");
			return JSON.toJSONString(msgMap);
		}
		boolean needstatus = true;// 是否需要状态报告，需要true，不需要false
		String extno = null;// 扩展码
		
		message = new Message("0", msg, code, new Date(), 0, "", extno, sendType, mobile);
		
		String returnString = "";
		try {
			returnString = HttpSender.batchSend(url, account, pswd, mobile, msg, needstatus, extno);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(!"".equals(returnString)){//不为空则解析
			String[] returnStr = returnString.split("\n");
			String[] timeAndState = returnStr[0].split(",");
			String time = timeAndState[0];
			int state = Integer.parseInt(timeAndState[1]);
			if(state == 0){
				message.setMsgId(returnStr[1]);
				message.setSendInfo("发送成功");
				
				msgMap.put("result", "0");
				msgMap.put("message", code);
			}else{
				message.setCode("");
				message.setStatus(state);
				message.setSendInfo(getStateValue(state));
				
				msgMap.put("result", "1");
				msgMap.put("message", "发送失败");
			}
		}
		messageService.insertMessage(message);
		return JSON.toJSONString(msgMap);
	}
	
	/**
	 * 响应状态值说明
	 * @param state 错误码
	 * @return
	 */
	public String getStateValue(int state){
		String stateValue = "";
		switch (state) {
			case 101:
				stateValue = "无此用户";
				break;
			case 102:
				stateValue = "密码错";
				break;
			case 103:
				stateValue = "提交过快（提交速度超过流速限制）";
				break;
			case 104:
				stateValue = "系统忙（因平台侧原因，暂时无法处理提交的短信）";
				break;
			case 105:
				stateValue = "敏感短信（短信内容包含敏感词）";
				break;
			case 106:
				stateValue = "消息长度错（>536或<=0）";
				break;
			case 107:
				stateValue = "包含错误的手机号码";
				break;
			case 108:
				stateValue = "手机号码个数错（群发>50000或<=0;单发>200或<=0）";
				break;
			case 109:
				stateValue = "无发送额度（该用户可用短信数已使用完）";
				break;
			case 110:
				stateValue = "不在发送时间内";
				break;
			case 111:
				stateValue = "超出该账户当月发送额度限制";
				break;
			case 112:
				stateValue = "无此产品，用户没有订购该产品";
				break;
			case 113:
				stateValue = "extno格式错（非数字或者长度不对）";
				break;
			case 115:
				stateValue = "自动审核驳回";
				break;
			case 116:
				stateValue = "签名不合法，未带签名（用户必须带签名的前提下）";
				break;
			case 117:
				stateValue = "IP地址认证错,请求调用的IP地址不是系统登记的IP地址";
				break;
			case 118:
				stateValue = "用户没有相应的发送权限";
				break;
			case 119:
				stateValue = "用户已过期";
				break;
			case 120:
				stateValue = "测试内容不是白名单";
				break;
			default:
				stateValue = "无法识别错误码";
				break;
		}
		return stateValue;
	}
}
