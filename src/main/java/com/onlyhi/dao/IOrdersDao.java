package com.onlyhi.dao;

import com.onlyhi.repository.onlyhiedu.mbg_po.Orders;

/**
 * 订单Dao
 * @author Icey
 *
 */
public interface IOrdersDao {

	/**
	 * 提交订单
	 * @return {@link Integer}
	 */
	long insertOrders(Orders orders);
	
	/**
	 * 删除订单
	 * @return {@link Integer}
	 */
	int deleteOrdersById(long id);
	
}
