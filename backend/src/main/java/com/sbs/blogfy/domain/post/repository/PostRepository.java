package com.sbs.blogfy.domain.post.repository;

import com.sbs.blogfy.domain.post.entity.Post;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long> {

  @Modifying
  @Transactional
  @Query(value = "ALTER TABLE post AUTO_INCREMENT = 1", nativeQuery = true)
  void clearAutoIncrement();
}
