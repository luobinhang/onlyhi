package com.onlyhi.service;

import com.onlyhi.repository.onlyhiedu.mbg_po.Channel;

public interface ChannelSrevice {

	/**
	 * 根据adid获取渠道信息
	 * @param adid 
	 * @return
	 */
	Channel getChannelByAdid(String adid);
}
