import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";
function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Updated exercises list: Push-Ups (Repetition), Plank (Duration), Running (Fallback)
  const exercises = [
    { name: "Push-Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Running", type: "running" },
  ];

  return (
    <div>
      <h1>Exercise Tracker</h1>

      {/* Show menu if no exercise is selected */}
      {!selectedExercise ? (
        <div>
          <h2>Select an Exercise:</h2>
          {exercises.map((exercise, index) => (
            <button key={index} onClick={() => setSelectedExercise(exercise)}>
              {exercise.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedExercise(null)}>Go Back</button>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : selectedExercise.type === "duration" ? (
            <DurationExercise name={selectedExercise.name} />
          ) : (
            <RunningExercise name={selectedExercise.name} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
