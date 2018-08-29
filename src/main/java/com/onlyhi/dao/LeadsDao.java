package com.onlyhi.dao;

import com.onlyhi.repository.onlyhiedu.mbg_po.Leads;

/**
 * 去重后的用户预定信息dao业务接口
 * @author csy
 *
 */
public interface LeadsDao {

	/**
	 * 添加用户
	 * 
	 * @param classReserve
	 *            {@link NewNameList}
	 * @return {@link Integer}
	 */
	int createLeads(Leads nameList);
	
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
	 * @param phone 手机号码
	 * @return {@link Boolean}
	 */
	Leads login(String phone);
	
	/**
	 * 修改密码
	 * @param phone 手机号码
	 * @return {@link Boolean}
	 */
	int changeSecret(Leads leads);
}
