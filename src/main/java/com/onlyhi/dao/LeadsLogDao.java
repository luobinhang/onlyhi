package com.onlyhi.dao;

import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsLog;

/**
 * 课程预定用户流水表dao业务接口
 * @author csy
 *
 */
public interface LeadsLogDao {

	/**
	 * 创建课程预定用户流水信息
	 * @param leadsLog {@link LeadsLog}
	 * @return {@link Integer}
	 */
	int createLeadsLog(LeadsLog leadsLog);
}
