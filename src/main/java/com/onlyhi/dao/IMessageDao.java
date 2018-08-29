package com.onlyhi.dao;

import com.onlyhi.repository.onlyhiedu.mbg_po.Message;

/**
 * 短信DAO
 * @author csy
 *
 */
public interface IMessageDao {

	/**
	 * 发送短信请求并创建和创蓝短信发送的响应流水记录
	 * @return {@link Integer}
	 */
	int insertMessage(Message message);
}
