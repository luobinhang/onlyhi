package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.FormsChannel;
import com.onlyhi.repository.onlyhiedu.mbg_po.FormsChannelExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyFormsChannelMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface FormsChannelMapper extends MyFormsChannelMapper {
    int countByExample(FormsChannelExample example);

    int deleteByExample(FormsChannelExample example);

    int deleteByPrimaryKey(Long id);

    int insert(FormsChannel record);

    int insertSelective(FormsChannel record);

    List<FormsChannel> selectByExample(FormsChannelExample example);

    FormsChannel selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") FormsChannel record, @Param("example") FormsChannelExample example);

    int updateByExample(@Param("record") FormsChannel record, @Param("example") FormsChannelExample example);

    int updateByPrimaryKeySelective(FormsChannel record);

    int updateByPrimaryKey(FormsChannel record);
}