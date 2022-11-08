package com.example.snbackend.controllers;

import com.example.snbackend.objects.Message;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/test")
public class TestController {

    @GetMapping
    public ResponseEntity<Message> get() {
       return new ResponseEntity<>(new Message("hi from spring boot"), HttpStatus.OK) ;
    }
}
