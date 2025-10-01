package com.sbs.blogfy.domain.home.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // @Controller + @ResponseBody
@RequestMapping("/api/home")
public class HomeController {

  @GetMapping
  public String home() {
    return "Hello World!";
  }
}
