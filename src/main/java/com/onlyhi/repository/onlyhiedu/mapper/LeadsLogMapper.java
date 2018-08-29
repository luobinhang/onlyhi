package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsLog;
import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsLogExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyLeadsLogMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface LeadsLogMapper extends MyLeadsLogMapper {
    int countByExample(LeadsLogExample example);

    int deleteByExample(LeadsLogExample example);

    int deleteByPrimaryKey(Long id);

    int insert(LeadsLog record);

    int insertSelective(LeadsLog record);

    List<LeadsLog> selectByExample(LeadsLogExample example);

    LeadsLog selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") LeadsLog record, @Param("example") LeadsLogExample example);

    int updateByExample(@Param("record") LeadsLog record, @Param("example") LeadsLogExample example);

    int updateByPrimaryKeySelective(LeadsLog record);

    int updateByPrimaryKey(LeadsLog record);
}