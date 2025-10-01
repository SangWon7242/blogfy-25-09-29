package com.sbs.blogfy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing // JPA auditing 활성화 (날짜 자동 반영)
public class BlogfyApplication {

  public static void main(String[] args) {
    SpringApplication.run(BlogfyApplication.class, args);
  }

}
