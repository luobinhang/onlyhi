package com.onlyhi.service;

import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsLog;

/**
 *  �γ�Ԥ���û���ˮ��serviceҵ��ӿ�
 * @author csy
 *
 */
public interface LeadsLogService {

	/**
	 * �����γ�Ԥ���û���ˮ��Ϣ
	 * @param leadsLog {@link LeadsLog}
	 * @return {@link Integer}
	 */
	int createLeadsLog(LeadsLog leadsLog);
}
