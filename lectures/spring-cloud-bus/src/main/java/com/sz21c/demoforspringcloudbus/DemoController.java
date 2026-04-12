package com.sz21c.demoforspringcloudbus;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    private final String sayHello;

    public DemoController(@Value("${demo.say-hello}") String sayHello) {
        this.sayHello = sayHello;
    }

    @GetMapping("/hello")
    public String getHello() {
        return sayHello;
    }

    @PostMapping(value = "/hello", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String setHello(@RequestBody String message) {
        return "Successed";
    }
}
