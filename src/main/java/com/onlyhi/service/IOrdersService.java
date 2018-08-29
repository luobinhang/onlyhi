package com.onlyhi.service;

import com.onlyhi.repository.onlyhiedu.mbg_po.ContactInfo;
import com.onlyhi.repository.onlyhiedu.mbg_po.Orders;
import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfo;

/**
 * 订单service
 * @author Icey
 *
 */
public interface IOrdersService {

	/**
	 * 提交订单
	 * @return {@link Integer}
	 */
	int insertOrders(Orders order,ContactInfo contactInfo,OrdersInfo ordersInfo);
	
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
