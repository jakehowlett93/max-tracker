package com.maxtracker.backend.entity;

import org.hibernate.annotations.Table;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;

@Entity
@Table(name = "lift")
public class Lift {
    @Id
    private long id;
}
