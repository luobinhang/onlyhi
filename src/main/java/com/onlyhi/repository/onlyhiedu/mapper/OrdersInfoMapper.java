package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfo;
import com.onlyhi.repository.onlyhiedu.mbg_po.OrdersInfoExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyOrdersInfoMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface OrdersInfoMapper extends MyOrdersInfoMapper {
    int countByExample(OrdersInfoExample example);

    int deleteByExample(OrdersInfoExample example);

    int deleteByPrimaryKey(Long orderInfoId);

    int insert(OrdersInfo record);

    int insertSelective(OrdersInfo record);

    List<OrdersInfo> selectByExample(OrdersInfoExample example);

    OrdersInfo selectByPrimaryKey(Long orderInfoId);

    int updateByExampleSelective(@Param("record") OrdersInfo record, @Param("example") OrdersInfoExample example);

    int updateByExample(@Param("record") OrdersInfo record, @Param("example") OrdersInfoExample example);

    int updateByPrimaryKeySelective(OrdersInfo record);

    int updateByPrimaryKey(OrdersInfo record);
}