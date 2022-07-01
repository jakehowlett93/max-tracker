package com.backend.maxtracker.lift;

class LiftNotFoundException extends RuntimeException {

    LiftNotFoundException(Long id) {
        super("Could not find lift " + id);
    }
}
