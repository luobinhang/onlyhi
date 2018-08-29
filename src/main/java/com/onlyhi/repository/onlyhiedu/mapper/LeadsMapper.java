package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.Leads;
import com.onlyhi.repository.onlyhiedu.mbg_po.LeadsExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyLeadsMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface LeadsMapper extends MyLeadsMapper {
    int countByExample(LeadsExample example);

    int deleteByExample(LeadsExample example);

    int deleteByPrimaryKey(Long id);

    int insert(Leads record);

    int insertSelective(Leads record);

    List<Leads> selectByExample(LeadsExample example);

    Leads selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") Leads record, @Param("example") LeadsExample example);

    int updateByExample(@Param("record") Leads record, @Param("example") LeadsExample example);

    int updateByPrimaryKeySelective(Leads record);

    int updateByPrimaryKey(Leads record);
}