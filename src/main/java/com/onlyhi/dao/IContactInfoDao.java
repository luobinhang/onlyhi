package com.onlyhi.dao;

import com.onlyhi.repository.onlyhiedu.mbg_po.ContactInfo;

/**
 * 订单Dao
 * @author Icey
 *
 */
public interface IContactInfoDao {

	/**
	 * 添加联系人
	 * @return {@link Integer}
	 */
	long insertContactInfo(ContactInfo contactInfo);
	
	/**
	 * 删除联系人
	 * @return {@link Integer}
	 */
	int deleteContactInfoById(long id);
}
