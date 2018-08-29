package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.ContactInfo;
import com.onlyhi.repository.onlyhiedu.mbg_po.ContactInfoExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyContactInfoMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ContactInfoMapper extends MyContactInfoMapper {
    int countByExample(ContactInfoExample example);

    int deleteByExample(ContactInfoExample example);

    int deleteByPrimaryKey(Long contactId);

    int insert(ContactInfo record);

    int insertSelective(ContactInfo record);

    List<ContactInfo> selectByExample(ContactInfoExample example);

    ContactInfo selectByPrimaryKey(Long contactId);

    int updateByExampleSelective(@Param("record") ContactInfo record, @Param("example") ContactInfoExample example);

    int updateByExample(@Param("record") ContactInfo record, @Param("example") ContactInfoExample example);

    int updateByPrimaryKeySelective(ContactInfo record);

    int updateByPrimaryKey(ContactInfo record);
}