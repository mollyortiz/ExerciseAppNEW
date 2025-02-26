import React, { useState } from "react";

function RunningExercise({ name }) {
  const [laps, setLaps] = useState([]);
  const [startTime, setStartTime] = useState(null);

  const recordLap = () => {
    const now = new Date();
    const lapTime = startTime ? (now - startTime) / 1000 : 0;
    setLaps([...laps, lapTime.toFixed(2)]);
    setStartTime(now);
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={recordLap}>Record Lap</button>
      <h3>Laps:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Lap {index + 1}: {lap} seconds
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;
