package com.onlyhi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlyhi.dao.LeadsDao;
import com.onlyhi.repository.onlyhiedu.mbg_po.Leads;
import com.onlyhi.service.LeadsService;

@Service(value = "LeadsServiceImpl")
public class LeadsServiceImpl implements LeadsService{
	
	@Autowired
	private LeadsDao leadsDao;

	@Override
	public int createLeads(Leads leads) {
		return leadsDao.createLeads(leads);
	}

	@Override
	public boolean isExistByPhone(String phone) {
		return leadsDao.isExistByPhone(phone);
	}

	@Override
	public void updateLeads(Leads leads) {
		leadsDao.updateLeads(leads);		
	}

	@Override
	public Leads login(String phone) {
		return leadsDao.login(phone);
	}

	@Override
	public int changeSecret(Leads leads) {
		return leadsDao.changeSecret(leads);
	}

}
