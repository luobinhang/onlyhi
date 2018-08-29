package com.onlyhi.dao;

import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfo;

/**
 * 订单Dao
 * @author Icey
 *
 */
public interface IOrdersInfoDao {

	/**
	 * 提交子订单
	 * @return {@link Integer}
	 */
	long insertOrdersInfo(OrdersInfo ordersInfo);
	
	/**
	 * 查询子订单
	 * @return {@link Integer}
	 */
	OrdersInfo queryOrdersInfoByNo(String ordersInfoNo);
	
	/**
	 * 修改子订单(ping++回调)
	 * @return {@link Integer}
	 */
	int updateOrdersInfoByNo(OrdersInfo ordersInfo);
	
}
