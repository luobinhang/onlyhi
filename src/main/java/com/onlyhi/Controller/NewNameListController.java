package com.onlyhi.Controller;

import java.io.IOException;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.onlyhi.repository.onlyhiedu.mbg_po.Channel;
import com.onlyhi.repository.onlyhiedu.mbg_po.Leads;
import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsLog;
import com.onlyhi.repository.onlyhiedu.vo.leadsVo;
import com.onlyhi.service.ChannelSrevice;
import com.onlyhi.service.LeadsLogService;
import com.onlyhi.service.LeadsService;
import com.onlyhi.util.DateUtil;
import com.onlyhi.util.OnlyhiResponse;
import com.onlyhi.util.SHAEncrypt;
import com.onlyhi.util.ValidateUtil;

@Component
@RequestMapping("NewNameList")
public class NewNameListController {

	@Resource(name = "LeadsServiceImpl")
	private LeadsService leadsService;
	
	@Resource(name = "ChannelServiceImpl")
	private ChannelSrevice channelSrevice;
	
	@Resource(name = "LeadsLogServiceImpl")
	private LeadsLogService leadsLogService;
	
	/**
	 * 报名和注册
	 * @param leadsVo
	 * @param httpReq
	 * @param response
	 */
	@CrossOrigin
	@RequestMapping(value = "createNewNameList")
    @ResponseBody
    public void createClassReserve(leadsVo leadsVo,HttpServletRequest httpReq,HttpServletResponse response){
		response.setCharacterEncoding("utf-8");
		String resultJson;
		
		//获取jsonp回调函数
	 	String jsonpCallback = httpReq.getParameter("jsoncallback");
		try{
			Leads user = leadsService.login(leadsVo.getPhone());
			
			if(!ValidateUtil.isNotEmpty(leadsVo.getPhone())){//判断电话号码是否为空
				resultJson = OnlyhiResponse.error("电话号码为空").toJson();
			}else if(ValidateUtil.isNotEmpty(user.getPassword()) && ValidateUtil.isNotEmpty(leadsVo.getPassword())){
				resultJson = OnlyhiResponse.error("该手机号已被注册!").toJson();
			}else if(!ValidateUtil.isNotEmpty(leadsVo.getName())){//判断姓名是否为空
				resultJson = OnlyhiResponse.error("姓名为空").toJson();
			}else{
				LeadsLog leadsLog = new LeadsLog();
		    	//查询用户注册的渠道号
		    	if(ValidateUtil.isNotEmpty(leadsVo.getAdid())){
					Channel channel = channelSrevice.getChannelByAdid(leadsVo.getAdid());
					leadsLog.setChannelUuid(channel.getUuid());//渠道号
					leadsVo.setChannelUuid(channel.getUuid());//渠道号
				}else{
					  leadsVo.setAdid("JYXNWCFSQQ");//adid
				}
		    	
		    	//添加课程预定流水号表记录
		    	leadsLog.setName(leadsVo.getName());//用户姓名
		    	leadsLog.setPhone(leadsVo.getPhone());//电话号码
		    	leadsLog.setGrade(leadsVo.getGrade());//年级
		    	leadsLog.setSubject(leadsVo.getSubject());//课程
		    	leadsLog.setSignupDate(DateUtil.getNextYearDate(0));//报名时间
		    	leadsLog.setConnectStatus("create");//状态
		    	leadsLog.setStatus(true);
		    	leadsLog.setJh(leadsVo.getJh());//计划
		    	leadsLog.setDy(leadsVo.getDy());//单元
		    	leadsLog.setKeyNum(leadsVo.getKeyNum());//关键字
		    	leadsLogService.createLeadsLog(leadsLog);//插入数据库
		    	
		    	//判断在leads表中是否存在相同手机号的用户
		    	boolean flag = leadsService.isExistByPhone(leadsVo.getPhone());
		    	
		    	leadsVo.setUpdateDate(DateUtil.getNextYearDate(0));//更新时间
				leadsVo.setSignupDate(DateUtil.getNextYearDate(0));//报名时间
				leadsVo.setConnectStatus("create");
				leadsVo.setStatus(true);
		    	//true:存在 false:不存在
		    	if(flag){
		    		//更新用戶
		    		leadsService.updateLeads(leadsVo);
		    	}else{
		    		//新建用戶0
		    		leadsVo.setUuid(UUID.randomUUID().toString().toUpperCase());
		    		leadsService.createLeads(leadsVo);
		    	}
		    	//返回json字符結果
		    	resultJson = OnlyhiResponse.success(null).toJson();
			}
    	response.getWriter().print(jsonpCallback+"("+resultJson+")");
    	} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 登陆
	 * @param leadsVo
	 * @param httpReq
	 * @param response
	 */
	@CrossOrigin
	@RequestMapping(value = "login")
    @ResponseBody
    public void login(leadsVo leadsVo,HttpServletRequest httpReq,HttpServletResponse response){
		response.setCharacterEncoding("utf-8");
		String resultJson;
		
		//获取jsonp回调函数
	 	String jsonpCallback = httpReq.getParameter("jsoncallback");
		try{
			//判断姓名是否为空
			if(!ValidateUtil.isNotEmpty(leadsVo.getPhone())){
				resultJson = OnlyhiResponse.error("手机号为空").toJson();
			//判断电话号码是否为空	
			}else if(!ValidateUtil.isNotEmpty(leadsVo.getPassword())){
				resultJson = OnlyhiResponse.error("密码为空").toJson();
			//判断时间戳是否为空	
			}else if(!ValidateUtil.isNotEmpty(leadsVo.getTimestamp())){
				resultJson = OnlyhiResponse.error("时间戳为空").toJson();
			}else{
				Leads user = leadsService.login(leadsVo.getPhone());
				String shaPassword = SHAEncrypt.SHA512(user.getPassword()+leadsVo.getTimestamp());
				if(leadsVo.getPassword().equals(shaPassword)){
					//验证通过
					resultJson = OnlyhiResponse.success(user).toJson();
				}else{
					resultJson = OnlyhiResponse.error("登陆失败,请确认用户名或密码正确!").toJson();
				}
			}
    	response.getWriter().print(jsonpCallback+"("+resultJson+")");
    	} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 修改密码
	 * @param leadsVo
	 * @param httpReq
	 * @param response
	 */
	@CrossOrigin
	@RequestMapping(value = "changeSecret")
    @ResponseBody
    public void changeSecret(leadsVo leadsVo,HttpServletRequest httpReq,HttpServletResponse response){
		response.setCharacterEncoding("utf-8");
		String resultJson;

		//获取jsonp回调函数
	 	String jsonpCallback = httpReq.getParameter("jsoncallback");
		try{
			//判断姓名是否为空
			if(!ValidateUtil.isNotEmpty(leadsVo.getPhone())){
				resultJson = OnlyhiResponse.error("手机号为空").toJson();
			//判断电话号码是否为空	
			}else if(!ValidateUtil.isNotEmpty(leadsVo.getPassword())){
				resultJson = OnlyhiResponse.error("密码为空").toJson();
			}else{

				int num = leadsService.changeSecret(leadsVo);
				
				if(num > 0){
					//修改成功
					resultJson = OnlyhiResponse.success("密码修改成功!").toJson();
				}else{
					resultJson = OnlyhiResponse.error("密码修改失败!").toJson();
				}
			}
    	response.getWriter().print(jsonpCallback+"("+resultJson+")");
    	} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 验证注册
	 * @param leadsVo
	 * @param httpReq
	 * @param response
	 */
	@CrossOrigin
	@RequestMapping(value = "checkPhone")
    @ResponseBody
    public void checkPhone(leadsVo leadsVo,HttpServletRequest httpReq,HttpServletResponse response){
		response.setCharacterEncoding("utf-8");
		String resultJson;
		
		//获取jsonp回调函数
	 	String jsonpCallback = httpReq.getParameter("jsoncallback");
		try{
			Leads user = leadsService.login(leadsVo.getPhone());
			
			if(ValidateUtil.isNotEmpty(user.getPassword())){
				resultJson = OnlyhiResponse.error("该手机号已被注册!").toJson();
			}else{
		    	//返回json字符結果
		    	resultJson = OnlyhiResponse.success("手机号验证通过!").toJson();
			}
    	response.getWriter().print(jsonpCallback+"("+resultJson+")");
    	} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
