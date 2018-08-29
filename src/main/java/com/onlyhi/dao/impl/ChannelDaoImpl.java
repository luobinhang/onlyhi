package com.onlyhi.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlyhi.dao.ChannelDao;
import com.onlyhi.repository.onlyhiedu.mapper.ChannelMapper;
import com.onlyhi.repository.onlyhiedu.mbg_po.Channel;
import com.onlyhi.repository.onlyhiedu.mbg_po.ChannelExample;

@Component(value = "ChannelDaoImpl")
public class ChannelDaoImpl implements ChannelDao{
	
	@Autowired
	private ChannelMapper channelMapper;

	@Override
	public Channel getChannelByAdid(String adid) {
		ChannelExample channelExample = new ChannelExample();
		channelExample.createCriteria().andAdidEqualTo(adid);
		List<Channel> channelList = channelMapper.selectByExample(channelExample);
		return channelList.get(0);
	}

}
