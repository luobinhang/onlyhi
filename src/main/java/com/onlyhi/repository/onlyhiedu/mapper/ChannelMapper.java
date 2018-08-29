package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.Channel;
import com.onlyhi.repository.onlyhiedu.mbg_po.ChannelExample;
import com.onlyhi.repository.onlyhiedu.mbg_po.ChannelKey;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyChannelMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ChannelMapper extends MyChannelMapper {
    int countByExample(ChannelExample example);

    int deleteByExample(ChannelExample example);

    int deleteByPrimaryKey(ChannelKey key);

    int insert(Channel record);

    int insertSelective(Channel record);

    List<Channel> selectByExample(ChannelExample example);

    Channel selectByPrimaryKey(ChannelKey key);

    int updateByExampleSelective(@Param("record") Channel record, @Param("example") ChannelExample example);

    int updateByExample(@Param("record") Channel record, @Param("example") ChannelExample example);

    int updateByPrimaryKeySelective(Channel record);

    int updateByPrimaryKey(Channel record);
}