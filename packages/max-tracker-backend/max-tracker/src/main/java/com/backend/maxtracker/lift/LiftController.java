package com.backend.maxtracker.lift;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class LiftController {

    private final LiftRepository repository;

    LiftController(LiftRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/lifts")
    List<Lift> all() {
        return repository.findAll();
    }
    // end::get-aggregate-root[]

    @PostMapping("/lifts")
    Lift newLift(@RequestBody Lift newLift) {
        return repository.save(newLift);
    }

    // Single item

    @GetMapping("/lifts/{id}")
    Lift one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new LiftNotFoundException(id));
    }

    @PutMapping("/lifts/{id}")
    Lift replaceLift(@RequestBody Lift newLift, @PathVariable Long id) {

        return repository.findById(id)
                .map(lift -> {
                    lift.setExercise(newLift.getExercise());
                    lift.setWeight(newLift.getWeight());
                    lift.setDate(newLift.getDate());
                    return repository.save(lift);
                })
                .orElseGet(() -> {
                    newLift.setId(id);
                    return repository.save(newLift);
                });
    }

    @DeleteMapping("/lifts/{id}")
    void deleteLift(@PathVariable Long id) {
        repository.deleteById(id);
    }
}