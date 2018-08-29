package com.onlyhi.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlyhi.dao.LeadsLogDao;
import com.onlyhi.repository.onlyhiedu.mapper.LeadsLogMapper;
import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsLog;

/**
 *  �γ�Ԥ���û���ˮ��daoҵ��ӿ�ʵ��
 * @author csy
 *
 */
@Component(value = "LeadsLogDaoImpl")
public class LeadsLogDaoImpl implements LeadsLogDao{
	
	@Autowired
	private LeadsLogMapper leadsLogMapper;

	@Override
	public int createLeadsLog(LeadsLog leadsLog) {
		return leadsLogMapper.insertSelective(leadsLog);
	}

}
