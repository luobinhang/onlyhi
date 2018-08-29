package com.onlyhi.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlyhi.dao.LeadsDao;
import com.onlyhi.repository.onlyhiedu.mapper.LeadsMapper;
import com.onlyhi.repository.onlyhiedu.mbg_po.Leads;
import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsExample;

@Component(value = "LeadsDaoImpl")
public class LeadsDaoImpl implements LeadsDao {

	@Autowired
	private LeadsMapper leadsMapper;

	@Override
	public int createLeads(Leads nameList) {

		return leadsMapper.insertSelective(nameList);
	}

	@Override
	public boolean isExistByPhone(String phone) {
		LeadsExample leadsExample = new LeadsExample();
		leadsExample.createCriteria().andPhoneEqualTo(phone);
		int num = leadsMapper.countByExample(leadsExample);
		if (num > 0)
			return true;
		return false;
	}

	@Override
	public void updateLeads(Leads leads) {
		LeadsExample leadsExample = new LeadsExample();
		leadsExample.createCriteria().andPhoneEqualTo(leads.getPhone());
		int num = leadsMapper.updateByExampleSelective(leads, leadsExample);
	}

	@Override
	public Leads login(String phone) {
		Leads leads = new Leads();
		LeadsExample leadsExample = new LeadsExample();
		leadsExample.createCriteria().andPhoneEqualTo(phone);
		 List<Leads> list = leadsMapper.selectByExample(leadsExample);
		 if(list != null && list.size() > 0){
			 leads = list.get(0);
		 }
		return leads;
	}

	@Override
	public int changeSecret(Leads leads) {
		LeadsExample leadsExample = new LeadsExample();
		leadsExample.createCriteria().andPhoneEqualTo(leads.getPhone());
		return leadsMapper.updateByExampleSelective(leads, leadsExample);
	}

}
