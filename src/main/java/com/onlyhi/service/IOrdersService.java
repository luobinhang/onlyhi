package com.onlyhi.service;

import com.onlyhi.repository.onlyhiedu.mbg_po.ContactInfo;
import com.onlyhi.repository.onlyhiedu.mbg_po.Orders;
import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfo;

/**
 * ����service
 * @author Icey
 *
 */
public interface IOrdersService {

	/**
	 * �ύ����
	 * @return {@link Integer}
	 */
	int insertOrders(Orders order,ContactInfo contactInfo,OrdersInfo ordersInfo);
	
	/**
	 * ��ѯ�Ӷ���
	 * @return {@link Integer}
	 */
	OrdersInfo queryOrdersInfoByNo(String ordersInfoNo);
	
	/**
	 * �޸��Ӷ���(ping++�ص�)
	 * @return {@link Integer}
	 */
	int updateOrdersInfoByNo(OrdersInfo ordersInfo);
	
}
