package com.onlyhi.dao;

import com.onlyhi.repository.onlyhiedu.mbg_po.Channel;

public interface ChannelDao {
     
	/**
	 * 根据adid获取渠道信息
	 * @param adid 
	 * @return
	 */
	Channel getChannelByAdid(String adid);
}
