package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.UserTask;
import com.onlyhi.repository.onlyhiedu.mbg_po.UserTaskExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyUserTaskMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UserTaskMapper extends MyUserTaskMapper {
    int countByExample(UserTaskExample example);

    int deleteByExample(UserTaskExample example);

    int deleteByPrimaryKey(Long id);

    int insert(UserTask record);

    int insertSelective(UserTask record);

    List<UserTask> selectByExample(UserTaskExample example);

    UserTask selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") UserTask record, @Param("example") UserTaskExample example);

    int updateByExample(@Param("record") UserTask record, @Param("example") UserTaskExample example);

    int updateByPrimaryKeySelective(UserTask record);

    int updateByPrimaryKey(UserTask record);
}