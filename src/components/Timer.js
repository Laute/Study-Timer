import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './Timer.css';

// total number of periods equals twice the number of study periods as there is
// a break period for each study period
const NUM_STUDY_PERIODS = 4;
const FINAL_PERIOD = NUM_STUDY_PERIODS * 2 - 1;

const Timer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakDuration, setBreakDuration] = useState(3);
  const [longBreakDuration, setLongBreakDuration] = useState(4);
  const [studyDuration, setStudyDuration] = useState(5);
  const [period, setPeriod] = useState(1);
  const [dotIndex, setDotIndex] = useState(0); 
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
    handleDot();
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
    setIsPlaying(false);
    setPeriod(1);
    setDotIndex(0);
    setIsBreak(false);
  };

  const handleSkip = () => {
    handleOnComplete(); 
  }

  const handleDot = () => {
    if (period % 2 === 0) {
      setDotIndex((index) => (index + 1)); 
    }
  }

  return (
    <div className="timer-container">
      <div className="countdown-circle">
        <CountdownCircleTimer
          key={period}
          size={300}
          strokeWidth={20}
          trailStrokeWidth={12}
          isPlaying={isPlaying}
          duration={isBreak ? breakDuration : studyDuration}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={colorsTime}
          onComplete={handleOnComplete}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className="controls"> 
        <button className ="control-button" onClick={() => setIsPlaying((isPlaying) => !isPlaying)}>
          {isPlaying ? "Pause" : "Start"}
        </button>
        <button className ="control-button" onClick={handleRestart}>Restart</button>
        <button className ="control-button" onClick = {handleSkip}>Skip</button>
      </div>

      <div> 
        {Array.from({length: 4}).map((item, index) => (
          <div className={dotIndex === index ? "dot active" : "dot"}></div>
        ))}
      </div>
      
      <div className="timer-settings-container">
        <p>Study Length</p>
        <div className="button-group">
          <button className="duration-button" onClick ={() => setStudyDuration(15 * 60)}>15</button>
          <button className="duration-button" onClick ={() => setStudyDuration(25 * 60)}>25</button>
          <button className="duration-button" onClick ={() => setStudyDuration(30 * 60)}>30</button>
          <button className="duration-button" onClick ={() => setStudyDuration(45 * 60)}>45</button>
          <button className="duration-button" onClick ={() => setStudyDuration(60 * 60)}>60</button>
        </div>
        <input className="time-input" type="number" min="1" onChange={(event) => handleStudyDuration(event)}></input>

        <p>Break Length</p>
        <div className="button-group">
          <button className="duration-button" onClick ={() => setBreakDuration(5 * 60)}>5</button>
          <button className="duration-button" onClick ={() => setBreakDuration(10 * 60)}>10</button>
          <button className="duration-button" onClick ={() => setBreakDuration(15 * 60)}>15</button>
        </div>
        <input className="time-input" type="number" min="1" onChange={(event) => handleBreakDuration(event)}></input>

        <p>Long Break Length</p>
          <div className="button-group">
            <button className="duration-button" onClick ={() => setLongBreakDuration(30 * 60)}>30</button>
            <button className="duration-button" onClick ={() => setLongBreakDuration(45 * 60)}>45</button>
            <button className="duration-button" onClick ={() => setLongBreakDuration(60 * 60)}>60</button>
          </div>
        <input className="time-input" type="number" min="1" onChange={(event) => handleLongBreakDuration(event)}></input>
      </div>
    </div>
  );
};

export default Timer;
