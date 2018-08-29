package com.onlyhi.service;

import com.onlyhi.repository.onlyhiedu.mbg_po.Leads;

/**
 * 
 * @author csy
 *
 */
public interface LeadsService {

	/**
	 * 
	 * @param classReserve
	 *            {@link NewNameList}
	 * @return {@link Integer}
	 */
	int createLeads(Leads leads);
	/**
	 * ͨ���ֻ������ѯ�Ƿ���ڵ�ǰ�û�
	 * @param phone �ֻ�����
	 * @return {@link Boolean}
	 */
	boolean isExistByPhone(String phone);
	
	/**
	 * �����Ñ���Ϣ
	 * @param leads {@link Leads}
	 */
	void updateLeads(Leads leads);
	
	/**
	 * ��½
	 * @param leads {@link Leads}
	 */
	Leads login(String phone);
	
	/**
	 * �޸�����
	 * @param leads {@link Leads}
	 */
	int changeSecret(Leads leads);
}
