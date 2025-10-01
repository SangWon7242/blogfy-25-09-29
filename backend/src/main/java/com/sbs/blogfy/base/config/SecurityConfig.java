package com.sbs.blogfy.base.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .cors(cors -> cors.configurationSource(request -> {
          var corsConfig = new org.springframework.web.cors.CorsConfiguration();
          corsConfig.setAllowedOriginPatterns(List.of("*"));
          corsConfig.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
          corsConfig.setAllowedHeaders(List.of("*"));
          corsConfig.setAllowCredentials(true);
          return corsConfig;
        }))
        .csrf(csrf -> csrf.disable())  // REST API는 CSRF 불필요
        .sessionManagement(session ->
            session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // JWT 사용 시
        )
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/public/**").permitAll()  // 공개 API
            .requestMatchers("/api/**").permitAll()  // 현재는 모두 허용
            .anyRequest().permitAll()
        );

    return http.build();
  }
}
