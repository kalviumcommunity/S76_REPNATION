const exerciseData = [
  {
    name: "Incline Dumbbell Press",
    category: "Chest",
    equipment: "Dumbbell",
    muscles_targeted: ["Chest", "Shoulders", "Triceps"],
    difficulty: "Intermediate",
    video_link: "https://youtube.com/shorts/ou6s32mJgjU?feature=shared"
  },
  {
    name: "Barbell Squat",
    category: "Legs",
    equipment: "Barbell",
    muscles_targeted: ["Quadriceps", "Glutes", "Hamstrings"],
    difficulty: "Advanced",
    video_link: "https://youtube.com/shorts/QZpHwzT4qXs?feature=shared"
  },
  {
    name: "Deadlift",
    category: "Back",
    equipment: "Barbell",
    muscles_targeted: ["Back", "Glutes", "Hamstrings"],
    difficulty: "Advanced",
    video_link: "https://youtube.com/shorts/Z4fsaRSLyKo?feature=shared"
  },
  {
    name: "Pull-up",
    category: "Back",
    equipment: "Pull-up Bar",
    muscles_targeted: ["Back", "Biceps", "Shoulders"],
    difficulty: "Intermediate",
    video_link: "https://youtube.com/shorts/2q_aG5M1n6g?feature=shared"
  }
];

const Exercises = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-600 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-white text-center mb-12">Featured Exercises</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {exerciseData.map((exercise, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{exercise.name}</h3>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Category</h4>
                <p className="text-gray-600">{exercise.category}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Equipment</h4>
                <p className="text-gray-600">{exercise.equipment}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Muscles Targeted</h4>
                <ul className="text-gray-600">
                  {exercise.muscles_targeted.map((muscle, idx) => (
                    <li key={idx}>{muscle}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Difficulty</h4>
                <p className="text-gray-600">{exercise.difficulty}</p>
              </div>
              <div className="text-center">
                <a
                  href={exercise.video_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition"
                >
                  Watch Tutorial
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
