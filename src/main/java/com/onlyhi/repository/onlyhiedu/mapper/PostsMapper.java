package com.onlyhi.repository.onlyhiedu.mapper;

import com.onlyhi.repository.onlyhiedu.mbg_po.Posts;
import com.onlyhi.repository.onlyhiedu.mbg_po.PostsExample;
import com.onlyhi.repository.onlyhiedu.my_mapper.MyPostsMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PostsMapper extends MyPostsMapper {
    int countByExample(PostsExample example);

    int deleteByExample(PostsExample example);

    int deleteByPrimaryKey(Long id);

    int insert(Posts record);

    int insertSelective(Posts record);

    List<Posts> selectByExample(PostsExample example);

    Posts selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") Posts record, @Param("example") PostsExample example);

    int updateByExample(@Param("record") Posts record, @Param("example") PostsExample example);

    int updateByPrimaryKeySelective(Posts record);

    int updateByPrimaryKey(Posts record);
}