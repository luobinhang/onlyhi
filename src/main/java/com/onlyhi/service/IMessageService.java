package com.onlyhi.service;

import com.onlyhi.repository.onlyhiedu.mbg_po.Message;

/**
 * 
 * @author Icey
 *
 */
public interface IMessageService {

	/**
	 * ���������ˮ��¼
	 * @return {@link Integer}
	 */
	int insertMessage(Message message);
	
}
