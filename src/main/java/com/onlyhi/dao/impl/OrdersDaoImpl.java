package com.onlyhi.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlyhi.dao.IOrdersDao;
import com.onlyhi.repository.onlyhiedu.mapper.OrdersMapper;
import com.onlyhi.repository.onlyhiedu.mbg_po.Orders;

/**
 * 订单
 * @author Icey
 *
 */
@Component(value = "OrderDaoImpl")
public class OrdersDaoImpl implements IOrdersDao{

	@Autowired
	private OrdersMapper ordersMapper;

	@Override
	public long insertOrders(Orders orders) {
		return ordersMapper.insertSelective(orders);
	}

	@Override
	public int deleteOrdersById(long id) {
		// TODO Auto-generated method stub
		return ordersMapper.deleteByPrimaryKey(id);
	}
	
	
}
