package com.onlyhi.dao;

import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsLog;

/**
 * �γ�Ԥ���û���ˮ��daoҵ��ӿ�
 * @author csy
 *
 */
public interface LeadsLogDao {

	/**
	 * �����γ�Ԥ���û���ˮ��Ϣ
	 * @param leadsLog {@link LeadsLog}
	 * @return {@link Integer}
	 */
	int createLeadsLog(LeadsLog leadsLog);
}
