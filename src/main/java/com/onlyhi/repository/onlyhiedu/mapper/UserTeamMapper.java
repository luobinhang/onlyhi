package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.UserTeam;
import com.onlyhi.repository.onlyhiedu.mbg_po.UserTeamExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyUserTeamMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UserTeamMapper extends MyUserTeamMapper {
    int countByExample(UserTeamExample example);

    int deleteByExample(UserTeamExample example);

    int deleteByPrimaryKey(Long id);

    int insert(UserTeam record);

    int insertSelective(UserTeam record);

    List<UserTeam> selectByExample(UserTeamExample example);

    UserTeam selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") UserTeam record, @Param("example") UserTeamExample example);

    int updateByExample(@Param("record") UserTeam record, @Param("example") UserTeamExample example);

    int updateByPrimaryKeySelective(UserTeam record);

    int updateByPrimaryKey(UserTeam record);
}