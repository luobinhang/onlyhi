package com.onlyhi.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlyhi.dao.IContactInfoDao;
import com.onlyhi.repository.onlyhiedu.mapper.ContactInfoMapper;
import com.onlyhi.repository.onlyhiedu.mbg_po.ContactInfo;

/**
 * 订单
 * @author Icey
 *
 */
@Component(value = "ContactInfoDaoImpl")
public class ContactInfoDaoImpl implements IContactInfoDao{

	@Autowired
	private ContactInfoMapper contactInfoMapper;

	@Override
	public long insertContactInfo(ContactInfo contactInfo) {
		long id = contactInfoMapper.insertSelective(contactInfo);
		return id;
	}

	@Override
	public int deleteContactInfoById(long id) {
		// TODO Auto-generated method stub
		return contactInfoMapper.deleteByPrimaryKey(id);
	}
	
	
}
