package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.ChannelType;
import com.onlyhi.repository.onlyhiedu.mbg_po.ChannelTypeExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyChannelTypeMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ChannelTypeMapper extends MyChannelTypeMapper {
    int countByExample(ChannelTypeExample example);

    int deleteByExample(ChannelTypeExample example);

    int deleteByPrimaryKey(Long id);

    int insert(ChannelType record);

    int insertSelective(ChannelType record);

    List<ChannelType> selectByExample(ChannelTypeExample example);

    ChannelType selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") ChannelType record, @Param("example") ChannelTypeExample example);

    int updateByExample(@Param("record") ChannelType record, @Param("example") ChannelTypeExample example);

    int updateByPrimaryKeySelective(ChannelType record);

    int updateByPrimaryKey(ChannelType record);
}