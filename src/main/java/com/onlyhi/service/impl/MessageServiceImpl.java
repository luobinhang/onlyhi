package com.onlyhi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlyhi.dao.IMessageDao;
import com.onlyhi.repository.onlyhiedu.mapper.MessageMapper;
import com.onlyhi.repository.onlyhiedu.mbg_po.Message;
import com.onlyhi.service.IMessageService;

/**
 * 和创蓝短信发送的返回流水dao接口实现
 * @author csy
 *
 */
@Component(value = "MessageServiceImpl")
public class MessageServiceImpl implements IMessageService{

	@Autowired
	private IMessageDao messageDAO;
	
	@Override
	public int insertMessage(Message message) {
		
		return messageDAO.insertMessage(message);
	}
	
}
