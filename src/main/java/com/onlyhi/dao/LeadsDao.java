package com.onlyhi.dao;

import com.onlyhi.repository.onlyhiedu.mbg_po.Leads;

/**
 * ȥ�غ���û�Ԥ����Ϣdaoҵ��ӿ�
 * @author csy
 *
 */
public interface LeadsDao {

	/**
	 * ����û�
	 * 
	 * @param classReserve
	 *            {@link NewNameList}
	 * @return {@link Integer}
	 */
	int createLeads(Leads nameList);
	
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
	 * @param phone �ֻ�����
	 * @return {@link Boolean}
	 */
	Leads login(String phone);
	
	/**
	 * �޸�����
	 * @param phone �ֻ�����
	 * @return {@link Boolean}
	 */
	int changeSecret(Leads leads);
}
