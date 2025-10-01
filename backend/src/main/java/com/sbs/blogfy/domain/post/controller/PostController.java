package com.sbs.blogfy.domain.post.controller;

import com.sbs.blogfy.domain.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/post")
public class PostController {
  private final PostService postService;

  @GetMapping("/list")
  public String list() {
    return "list";
  }
}
