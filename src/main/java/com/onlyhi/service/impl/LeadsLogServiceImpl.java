package com.onlyhi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlyhi.dao.LeadsLogDao;
import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsLog;
import com.onlyhi.service.LeadsLogService;

/**
 *  课程预定用户流水表service业务接口实现
 * @author csy
 *
 */
@Service(value = "LeadsLogServiceImpl")
public class LeadsLogServiceImpl implements LeadsLogService{

	@Autowired
	private LeadsLogDao leadsLogDao;
	@Override
	public int createLeadsLog(LeadsLog leadsLog) {
		return leadsLogDao.createLeadsLog(leadsLog);
	}

}
