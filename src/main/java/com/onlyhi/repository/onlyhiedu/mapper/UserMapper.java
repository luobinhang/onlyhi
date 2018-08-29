package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.User;
import com.onlyhi.repository.onlyhiedu.mbg_po.UserExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyUserMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UserMapper extends MyUserMapper {
    int countByExample(UserExample example);

    int deleteByExample(UserExample example);

    int deleteByPrimaryKey(Long id);

    int insert(User record);

    int insertSelective(User record);

    List<User> selectByExample(UserExample example);

    User selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") User record, @Param("example") UserExample example);

    int updateByExample(@Param("record") User record, @Param("example") UserExample example);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}