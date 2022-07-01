package com.backend.maxtracker.lift;


import java.util.Date;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "lifts")
class Lift {

    private @Id @GeneratedValue Long id;
    private String exercise;
    private Float weight;
    private String date;

    Lift() {}

    Lift(String exercise, Float weight, String date) {

        this.exercise = exercise;
        this.weight = weight;
        this.date = date;
    }

    public Long getId() {
        return this.id;
    }

    public String getExercise() {
        return this.exercise;
    }

    public Float getWeight() {
        return this.weight;
    }

    public String getDate() {
        return this.date;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Lift))
            return false;
        Lift lift = (Lift) o;
        return Objects.equals(this.id, lift.id) && Objects.equals(this.exercise, lift.exercise)
                && Objects.equals(this.weight, lift.weight);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.exercise, this.weight, this.date);
    }
}