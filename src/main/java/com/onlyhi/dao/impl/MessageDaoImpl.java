package com.onlyhi.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlyhi.dao.IMessageDao;
import com.onlyhi.repository.onlyhiedu.mapper.MessageMapper;
import com.onlyhi.repository.onlyhiedu.mbg_po.Message;

/**
 * 和创蓝短信发送的返回流水dao接口实现
 * @author Icey
 *
 */
@Component(value = "MessageDaoImpl")
public class MessageDaoImpl implements IMessageDao{

	@Autowired
	private MessageMapper messageMapper;
	
	@Override
	public int insertMessage(Message message) {
		
		return messageMapper.insert(message);
	}
	
}
