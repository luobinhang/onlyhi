package com.onlyhi.service;

import com.onlyhi.repository.onlyhiedu.mbg_po.Message;

/**
 * 
 * @author Icey
 *
 */
public interface IMessageService {

	/**
	 * 插入短信流水记录
	 * @return {@link Integer}
	 */
	int insertMessage(Message message);
	
}
