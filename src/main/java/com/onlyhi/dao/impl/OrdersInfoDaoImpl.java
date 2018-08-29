package com.onlyhi.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.onlyhi.dao.IOrdersInfoDao;
import com.onlyhi.repository.onlyhiedu.mapper.OrdersInfoMapper;
import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfo;
import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfoExample;

/**
 * 订单
 * @author Icey
 *
 */
@Component(value = "OrdersInfoDaoImpl")
public class OrdersInfoDaoImpl implements IOrdersInfoDao{

	@Autowired
	private OrdersInfoMapper ordersInfoMapper;

	@Override
	public long insertOrdersInfo(OrdersInfo ordersInfo) {
		return ordersInfoMapper.insertSelective(ordersInfo);
	}

	@Override
	public OrdersInfo queryOrdersInfoByNo(String ordersInfoNo) {
		OrdersInfoExample ordersInfoExample = new OrdersInfoExample();
		ordersInfoExample.createCriteria().andOrderInfoNoEqualTo(ordersInfoNo);
		List<OrdersInfo> list = ordersInfoMapper.selectByExample(ordersInfoExample);
		if(list != null && list.size() > 0){
			return list.get(0);
		}else{
			return null;
		}
	}

	@Override
	public int updateOrdersInfoByNo(OrdersInfo ordersInfo) {
		OrdersInfoExample ordersInfoExample = new OrdersInfoExample();
		ordersInfoExample.createCriteria().andOrderInfoNoEqualTo(ordersInfo.getOrderInfoNo());
		ordersInfo.setOrderInfoNo(null);
		return ordersInfoMapper.updateByExampleSelective(ordersInfo, ordersInfoExample);
	}
	
	
}
