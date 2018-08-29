package com.onlyhi.Controller;

import java.security.PublicKey;
import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.onlyhi.pingxx.WebhooksVerifyUtil;
import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfo;
import com.onlyhi.service.IOrdersService;

/**
 * 
 * @author Icey
 *
 */
@Controller
@RequestMapping("webhooks")
public class PingxxController {
	
	@Resource(name = "OrderServiceImpl")
	private IOrdersService orderService;
	
	/**
	 * Webhooks事件
	 * @return {@link String}
	 */
	@CrossOrigin
	@RequestMapping(value = "/runWebhooksVerify", method = RequestMethod.POST)
	@ResponseBody
	public void runWebhooksVerify(HttpServletRequest request,HttpServletResponse response,@RequestBody String eventJson) {
		try {
			request.setCharacterEncoding("UTF8");
			//获得签名
			String signature = request.getHeader("X-Pingplusplus-Signature");
			//获得event对象
			JSONObject event = JSON.parseObject(eventJson);
			PublicKey publicKey= WebhooksVerifyUtil.getPubKey();
			boolean verifyRS=WebhooksVerifyUtil.verifyData(eventJson,signature,publicKey);
			if(verifyRS == true){
				//签名验证成功
				//判断是否为event对象
				if("event".equals(event.getString("object"))){
					//支付对象，支付成功时触发。
					if("charge.succeeded".equals(event.getString("type"))){
						JSONObject data = JSON.parseObject(event.getString("data"));
						JSONObject dataObject = JSON.parseObject(data.getString("object"));

						OrdersInfo oInfo = orderService.queryOrdersInfoByNo(dataObject.getString("order_no"));
						if(oInfo != null){
							OrdersInfo ordersInfo = new OrdersInfo();
							ordersInfo.setOrderInfoNo(dataObject.getString("order_no"));//订单号
							ordersInfo.setPayMethod(dataObject.getString("channel"));//支付方式
							DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
							Date date = new Date(Long.parseLong(dataObject.getString("time_paid")+"000"));
							String dfDate = df.format(date);
							ordersInfo.setPayTime(df.parse(dfDate));//支付时间
							ordersInfo.setPayStatus(dataObject.getBoolean("paid") == true ? 1 : 0);//支付状态
							ordersInfo.setAlreadyPay(dataObject.getDouble("amount_settle") / 100);//已付款（分）
							ordersInfo.setTransactionNo(dataObject.getString("transaction_no"));//支付渠道返回的交易流水号
							int num = orderService.updateOrdersInfoByNo(ordersInfo);
							if(num > 0){
								//成功
								System.out.println("200  成功");
								response.setStatus(200);
							}else{
								//失败
								System.out.println("500  修改失败");
								response.setStatus(500);
							}
						}else{
							//订单不存在
							System.out.println("500  订单不存在");
							response.setStatus(500);
						}
					}
				}
			}else{
				//签名验证失败
				System.out.println("500  签名失败");
				response.setStatus(500);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("500  异常");
			e.printStackTrace();
			response.setStatus(500);
		}
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
