const express = require('express')
const router = express.Router()

const {createWorkout,getAllWorkouts,getWorkoutByID,deleteByID,updateWorkout} = require('../controller/workoutController')

router.get("/all",getAllWorkouts)
router.get("/workout/:id",getWorkoutByID)

router.post("/create/workout",createWorkout)
router.delete("/workout/:id",deleteByID)
router.patch("/workout/:id",updateWorkout)

module.exports = router