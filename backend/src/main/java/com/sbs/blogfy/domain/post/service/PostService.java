package com.sbs.blogfy.domain.post.service;

import com.sbs.blogfy.domain.post.entity.Post;
import com.sbs.blogfy.domain.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {
  private  final PostRepository postRepository;

  public Post create(String title, String content, String username) {
    Post post = Post.builder()
        .title(title)
        .content(content)
        .username(username)
        .build();

    postRepository.save(post);

    return post;
  }

  public List<Post> getPosts() {
    return postRepository.findByOrderByIdDesc();
  }
}
