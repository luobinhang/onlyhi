package com.onlyhi.service;

import com.onlyhi.repository.onlyhiedu.mbg_po.Leads;

/**
 * 
 * @author csy
 *
 */
public interface LeadsService {

	/**
	 * 
	 * @param classReserve
	 *            {@link NewNameList}
	 * @return {@link Integer}
	 */
	int createLeads(Leads leads);
	/**
	 * 通过手机号码查询是否存在当前用户
	 * @param phone 手机号码
	 * @return {@link Boolean}
	 */
	boolean isExistByPhone(String phone);
	
	/**
	 * 更新用戶信息
	 * @param leads {@link Leads}
	 */
	void updateLeads(Leads leads);
	
	/**
	 * 登陆
	 * @param leads {@link Leads}
	 */
	Leads login(String phone);
	
	/**
	 * 修改密码
	 * @param leads {@link Leads}
	 */
	int changeSecret(Leads leads);
}
