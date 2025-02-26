import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const secs = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Time: {formatTime(seconds)}</p>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setSeconds(0);
          setIsRunning(false);
        }}
      >
        {" "}
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;
