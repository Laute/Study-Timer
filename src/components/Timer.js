import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// total number of periods equals twice the number of study periods as there is
// a break period for each study period
const NUM_STUDY_PERIODS = 4;
const FINAL_PERIOD = NUM_STUDY_PERIODS * 2;

const Timer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakDuration, setBreakDuration] = useState(3);
  const [longBreakDuration, setLongBreakDuration] = useState(4);
  const [studyDuration, setStudyDuration] = useState(5);
  const [period, setPeriod] = useState(1);
  const [colorsTime, setColorsTime] = useState(
    [1, 0.6, 0.3, 0].map((x) => studyDuration * x)
  );

  // updates colors time when durations change
  useEffect(() => {
    if (!isBreak) {
      setColorsTime([1, 0.6, 0.3, 0].map((x) => studyDuration * x));
    }
  }, [isBreak, studyDuration]);
  useEffect(() => {
    if (isBreak) {
      setColorsTime([1, 0.6, 0.3, 0].map((x) => breakDuration * x));
    }
  }, [isBreak, breakDuration]);

  const renderTime = ({ remainingTime }) => {
    remainingTime = formatTime({ remainingTime });

    return (
      <div className="timer">
        <div className="text">{isBreak ? "Break" : "Study"}</div>
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  const formatTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;

    // zero-pad seconds
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return `${minutes}:${seconds}`;
  };

  const handleOnComplete = () => {
    // end of study session
    if (period > FINAL_PERIOD) {
      return { shouldRepeat: false };
    }

    // long break
    if (period === FINAL_PERIOD) {
      setBreakDuration(longBreakDuration);
    }

    // study period -> break; or, break -> study period
    setIsBreak((isBreak) => !isBreak);
    // incrementing period restarts the timer as it's the timer key
    setPeriod((period) => period + 1);
  };

  const handleStudyDuration = (event) => {
    setStudyDuration(event.target.value * 60);
  };

  const handleBreakDuration = (event) => {
    setBreakDuration(event.target.value * 60);
  };

  const handleLongBreakDuration = (event) => {
    setLongBreakDuration(event.target.value * 60);
  };

  const handleRestart = () => {
    setIsPlaying((isPlaying) => !isPlaying);
    setPeriod(0);
  };

  return (
    <>
      <CountdownCircleTimer
        key={period}
        isPlaying={isPlaying}
        duration={isBreak ? breakDuration : studyDuration}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={colorsTime}
        onComplete={handleOnComplete}
      >
        {renderTime}
      </CountdownCircleTimer>
      <button onClick={() => setIsPlaying((isPlaying) => !isPlaying)}>
        {isPlaying ? "Pause" : "Start"}
      </button>
      <input onChange={(event) => handleStudyDuration(event)}></input>
      <input onChange={(event) => handleBreakDuration(event)}></input>
      <input onChange={(event) => handleLongBreakDuration(event)}></input>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};

export default Timer;
