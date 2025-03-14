const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    equipment: { type: String, required: true },
    muscles_targeted: { type: [String], required: true },
    difficulty: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    video_link: { type: String, required: true }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
