package com.onlyhi.Controller;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.onlyhi.pingxx.ChargeUtil;
import com.onlyhi.pingxx.PingxxUtil;
import com.onlyhi.pingxx.WxPubOAuthUtil;
import com.onlyhi.repository.onlyhiedu.mbg_po.ContactInfo;
import com.onlyhi.repository.onlyhiedu.mbg_po.Leads;
import com.onlyhi.repository.onlyhiedu.mbg_po.Orders;
import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfo;
import com.onlyhi.service.IOrdersService;
import com.onlyhi.service.LeadsService;
import com.onlyhi.util.CommonConstants;
import com.onlyhi.util.OnlyhiResponse;
import com.onlyhi.util.OnlyhiUtil;
import com.onlyhi.util.ValidateUtil;
import com.onlyhi.util.ZXingCode;
import com.pingplusplus.model.Charge;

@Component
@RequestMapping("order")
public class OrdersController {

	@Resource(name = "OrderServiceImpl")
	private IOrdersService orderService;
	
	@Resource(name = "LeadsServiceImpl")
	private LeadsService leadsService;
	
	
	/**
	 * 提交订单
	 * @param order
	 * @param contactInfo
	 * @param leads
	 * @param httpReq
	 * @param response
	 */
	@CrossOrigin
	@RequestMapping(value = "addOrder", method = RequestMethod.POST)
    @ResponseBody
    public void addOrder(Orders order,ContactInfo contactInfo,Leads leads,HttpServletRequest request,HttpServletResponse response){
		response.setCharacterEncoding("utf-8");
		Map<String, Object> resultMap = new HashMap<String, Object>();
		String resultJson;
		
		Leads user = leadsService.login(leads.getUuid());
		if(user == null){
			resultJson = OnlyhiResponse.error("请确认用户信息是否正确").toJson();
		}else if(leads.getPassword().equals(user.getPassword())){
			order.setUserId(user.getId());
			try{
				if(!ValidateUtil.isNotEmpty(order.getCourseName())){//判断课程名称是否为空
					resultJson = OnlyhiResponse.error("课程名称为空").toJson();
				}else if(order.getCourseId() == 0){//判断课程编号是否为空
					resultJson = OnlyhiResponse.error("课程编号为空").toJson();
				}else if(order.getClassHour() == 0){//判断课时是否为空
					resultJson = OnlyhiResponse.error("购买课时为空").toJson();
				}else if(!ValidateUtil.isNotEmpty(order.getPayMethod())){//判断支付方式是否为空
					resultJson = OnlyhiResponse.error("支付方式为空").toJson();
				}else if(!ValidateUtil.isNotEmpty(contactInfo.getStuName())){//判断学生名字是否为空
					resultJson = OnlyhiResponse.error("学生名字为空").toJson();
				}else if(!ValidateUtil.isNotEmpty(contactInfo.getParentName())){//判断家长姓名是否为空
					resultJson = OnlyhiResponse.error("家长姓名为空").toJson();
				}else if(!ValidateUtil.isNotEmpty(contactInfo.getPhone())){//判断联系方式是否为空
					resultJson = OnlyhiResponse.error("联系方式为空").toJson();
				}else if(!ValidateUtil.isNotEmpty(contactInfo.getAddress())){//判断详细地址是否为空
					resultJson = OnlyhiResponse.error("详细地址为空").toJson();
				}else{
					//判断支付方式
					if(!"wx_pub_qr".equals(order.getPayMethod()) && !"alipay_pc_direct".equals(order.getPayMethod()) && !"upacp_pc".equals(order.getPayMethod())){
						order.setPayMethod("offline_transfer");
					}
					order.setOrderNo(OnlyhiUtil.getOrderNo());
					OrdersInfo ordersInfo = new OrdersInfo();
					int num = orderService.insertOrders(order, contactInfo,ordersInfo);
					if(num > 0){
						Map<String, Object> chargeMap = new HashMap<String, Object>();
						
						chargeMap.put("amount", ordersInfo.getAccountPayable() * 100);//订单总金额, 人民币单位：分（如订单总金额为 1 元，此处请填 100）
				        chargeMap.put("currency", "cny");
				        chargeMap.put("subject", ordersInfo.getCourseName());//课程名字
				        chargeMap.put("body", ordersInfo.getCourseName()+","+order.getClassHour());//商品描述信息（课程名字，课程时长）
				        chargeMap.put("order_no", ordersInfo.getOrderInfoNo());// 推荐使用 8-20 位，要求数字或字母，不允许其他字符(16位)
				        chargeMap.put("channel", ordersInfo.getPayMethod());// 支付使用的第三方支付渠道取值，请参考：https://www.pingxx.com/api#api-c-new
				        chargeMap.put("client_ip", request.getRemoteAddr()); // 发起支付请求客户端的 IP 地址，格式为 IPV4，如: 127.0.0.1
				        Map<String, String> app = new HashMap<String, String>();
				        app.put("id", PingxxUtil.appId);
				        chargeMap.put("app", app);
				        
				        Map<String, Object> extra = new HashMap<String, Object>();
				        if("wx_pub_qr".equals(order.getPayMethod())){
				        	extra.put("product_id", order.getCourseId());
						}else if("alipay_pc_direct".equals(order.getPayMethod())){
				        	extra.put("success_url", "http://www.onlyeduhi.cn/buy/personal.html?orderno="+ordersInfo.getOrderNo());
						}else if("upacp_pc".equals(order.getPayMethod())){
				        	extra.put("result_url", "http://www.onlyeduhi.cn/buy/personal.html?orderno="+ordersInfo.getOrderNo());
						}else{
							//尚未开通
						}
				        chargeMap.put("extra", extra);
						
						Charge charge = ChargeUtil.createCharge(chargeMap);
						
						JSONObject chargeStr = JSON.parseObject(charge.toString());
						JSONObject credentialStr = JSON.parseObject(chargeStr.getString("credential"));
						
						DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
						Date date = new Date(Long.parseLong(chargeStr.getString("time_expire")+"000"));
						String dfDate = df.format(date);
						if("wx_pub_qr".equals(order.getPayMethod())){
							String wxpubqr = credentialStr.getString("wx_pub_qr");
							String uploadPath = request.getSession().getServletContext().getRealPath(CommonConstants.PAY_QR)+File.separator;
							
							File dir = new File(uploadPath);
							if (!dir.exists())
					        	dir.mkdirs();
							String qr = ordersInfo.getOrderInfoNo()+".png";
							ZXingCode.getLogoQRCode(wxpubqr, "微信扫码支付",uploadPath+qr);
							
							resultMap.put("ordersinfo_no", ordersInfo.getOrderInfoNo());
							resultMap.put("ordersinfo_time", dfDate);
							resultMap.put("qr_url", File.separator+CommonConstants.PAY_QR+File.separator+qr);
							resultJson = OnlyhiResponse.success(resultMap).toJson();
						}else{
							resultMap.put("ordersinfo_no", ordersInfo.getOrderInfoNo());
							resultMap.put("ordersinfo_time", dfDate);
							resultMap.put("charge", charge.toString());
							resultJson = OnlyhiResponse.success(resultMap).toJson();
						}
					}else{
						resultJson = OnlyhiResponse.error("订单提交失败!").toJson();
					}
				}
				response.getWriter().print(resultJson);
	    	} catch (IOException e) {
				e.printStackTrace();
			}
		}else{
			resultJson = OnlyhiResponse.error("请确认用户信息是否正确!").toJson();
		}
	}
	
	/**
	 * 获取微信code
	 * @param httpReq
	 * @param response
	 */
	@CrossOrigin
	@RequestMapping(value = "getUserCode", method = RequestMethod.POST)
    @ResponseBody
    public void getUserCode(HttpServletRequest request,HttpServletResponse response){
		response.setCharacterEncoding("utf-8");
		String resultJson = null;
		try{
			WxPubOAuthUtil.getOpenid();
			response.getWriter().print(resultJson);
    	} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
