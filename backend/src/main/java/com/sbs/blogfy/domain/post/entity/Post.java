package com.sbs.blogfy.domain.post.entity;

import com.sbs.blogfy.base.entity.BaseEntity;
import jakarta.persistence.Entity;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@ToString(callSuper = true)
public class Post extends BaseEntity {
  private String title;
  private String content;
  private String username;
}
