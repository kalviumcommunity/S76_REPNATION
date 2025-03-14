const express = require('express');
const Exercise = require('./exerciseSchema');
const router = express.Router();


router.post('/exercises', async (req, res) => {
    try {
        const newExercise = new Exercise(req.body);
        await newExercise.save();
        res.status(201).json({ message: "Exercise added successfully!", data: newExercise });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/exercises', async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/exercises/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);
        if (!exercise) return res.status(404).json({ message: "Exercise not found!" });
        res.status(200).json(exercise);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/exercises/:id', async (req, res) => {
    try {
        const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedExercise) return res.status(404).json({ message: "Exercise not found!" });
        res.status(200).json({ message: "Exercise updated successfully!", data: updatedExercise });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/exercises/:id', async (req, res) => {
    try {
        const deletedExercise = await Exercise.findByIdAndDelete(req.params.id);
        if (!deletedExercise) return res.status(404).json({ message: "Exercise not found!" });
        res.status(200).json({ message: "Exercise deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
