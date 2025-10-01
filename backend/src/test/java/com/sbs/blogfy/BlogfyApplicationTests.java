package com.sbs.blogfy;

import com.sbs.blogfy.domain.post.entity.Post;
import com.sbs.blogfy.domain.post.repository.PostRepository;
import com.sbs.blogfy.domain.post.service.PostService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.stream.IntStream;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ActiveProfiles("test")
class BlogfyApplicationTests {
  @Autowired
  private PostService postService;

  @Autowired
  private PostRepository postRepository;

  @BeforeEach
  void beforeEach() {
    // 모든 게시물 삭제
    postRepository.deleteAll();
    postRepository.clearAutoIncrement();
  }

  @Test
  @DisplayName("게시물 데이터 생성")
  void t01() {
    Post post1 = postService.create(
        "게시물 제목1",
        "게시물 내용1",
        "user1"
    );

    Post post2 = postService.create(
        "게시물 제목2",
        "게시물 내용2",
        "user2"
    );

    // ~~ 보다 크다.
    assertThat(postRepository.count()).isGreaterThan(1);
  }

  @Test
  @DisplayName("테스트 게시물 데이터 생성")
  void t02() {
    IntStream.rangeClosed(1, 10)
        .forEach(i -> 
            postService.create(
                "테스트 제목입니다. %d".formatted(i),
                "테스트 내용입니다. %d".formatted(i),
                "user1")
        );
  }
}
