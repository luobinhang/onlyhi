package com.onlyhi.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlyhi.dao.IContactInfoDao;
import com.onlyhi.dao.IOrdersDao;
import com.onlyhi.dao.IOrdersInfoDao;
import com.onlyhi.repository.onlyhiedu.mbg_po.ContactInfo;
import com.onlyhi.repository.onlyhiedu.mbg_po.Orders;
import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfo;
import com.onlyhi.service.IOrdersService;

/**
 * 订单service
 * @author Icey
 *
 */
@Component(value = "OrderServiceImpl")
public class OrdersServiceImpl implements IOrdersService{

	@Autowired
	private IOrdersDao orderDao;

	@Autowired
	private IContactInfoDao contactInfoDao;
	
	@Autowired
	private IOrdersInfoDao orderInfoDao;
	
	@Override
	public int insertOrders(Orders order,ContactInfo contactInfo,OrdersInfo ordersInfo) {
		long contactId = 0;
		long orderId = 0;
		long orderInfoId = 0;
		Date date = new Date();
		try {
			//保存联系人信息
			contactInfo.setCreateDate(date);
			contactInfoDao.insertContactInfo(contactInfo);
			contactId = contactInfo.getContactId();
			if(contactId > 0){
				//保存订单信息
				order.setContactId(contactInfo.getContactId());
				order.setAccountPayable(order.getTotalPrice());
				order.setAlreadyPay(0.00);
				order.setPendingPay(order.getTotalPrice());
				order.setSubtotal(order.getTotalPrice());
				order.setTotal(order.getTotalPrice());
				order.setOrderTime(date);
				order.setCreateDate(date);
				orderDao.insertOrders(order);
				orderId = order.getOrderId();
				if(orderId > 0){
					//保存订单子表信息
					ordersInfo.setOrderInfoNo(order.getOrderNo()+"001");
					ordersInfo.setOrderNo(order.getOrderNo());
					ordersInfo.setCourseId(order.getCourseId());
					ordersInfo.setCourseName(order.getCourseName());
					ordersInfo.setAccountPayable(order.getAccountPayable());
					ordersInfo.setAlreadyPay(0.00);
					ordersInfo.setSplitTime(date);
					ordersInfo.setPayMethod(order.getPayMethod());
					ordersInfo.setCreateDate(date);

					orderInfoDao.insertOrdersInfo(ordersInfo);
					orderInfoId = ordersInfo.getOrderInfoId();
					if(orderInfoId > 0){
						return 1;
					}else{
						contactInfoDao.deleteContactInfoById(contactId);
						orderDao.deleteOrdersById(orderId);
						return 0;
					}
				}else{
					contactInfoDao.deleteContactInfoById(contactId);
					return 0;
				}
			}else{
				return 0;
			}
		} catch (Exception e) {
			contactInfoDao.deleteContactInfoById(contactId);
			orderDao.deleteOrdersById(orderId);
			return 0;
		}
	}

	@Override
	public OrdersInfo queryOrdersInfoByNo(String ordersInfoNo) {
		return orderInfoDao.queryOrdersInfoByNo(ordersInfoNo);
	}

	@Override
	public int updateOrdersInfoByNo(OrdersInfo ordersInfo) {
		return orderInfoDao.updateOrdersInfoByNo(ordersInfo);
	}
	
}
