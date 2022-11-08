package com.example.snbackend.objects;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    public void setId(long Id) {
        this.Id = Id;
    }
    private String title;
    private String description;
}
