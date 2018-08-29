package com.onlyhi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlyhi.dao.ChannelDao;
import com.onlyhi.repository.onlyhiedu.mbg_po.Channel;
import com.onlyhi.service.ChannelSrevice;

@Service(value = "ChannelServiceImpl")
public class ChannelServiceImpl implements ChannelSrevice{

	@Autowired
	private ChannelDao channelDao;
	
	@Override
	public Channel getChannelByAdid(String adid) {
		return channelDao.getChannelByAdid(adid);
	}

}
