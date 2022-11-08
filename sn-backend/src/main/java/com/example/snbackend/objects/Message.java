package com.example.snbackend.objects;

import lombok.Data;

@Data
public class Message {
    String msg;

    public Message(String msg) {
        this.msg = msg;
    }
}
