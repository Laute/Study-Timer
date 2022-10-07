import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './Timer.css';
import StepperComponent from "./Stepper";
import logo from '../pages/Header/logo.svg';
import pfp from '../pages/Header/profile.svg'

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
  const [stepperIndex, setStepperIndex] = useState(0); 
  const [showSettings, setShowSettings] = useState(true);
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
    handleStepper();
    handleBreakStats();

    // end of study session
    if (period > FINAL_PERIOD) { 
      setIsPlaying(false);
      handleTotalStats();
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

  // Recording break statistics 
  const handleBreakStats = () => {
    if (isBreak) {
      // Dummy user 
      const userId = 0; 
      const data = JSON.parse(localStorage.getItem('users')); 
      console.log(data); 
      
      if (data === null) { // If localStorage is empty, add first user (and its stats) in an array
        const newSession = {
          id: userId, 
          breakStats: [Date.now()], 
          totalStats: [], 
        }

        localStorage.setItem('users', JSON.stringify([newSession])); 
      } else if (data.find(user => user.id === userId) === undefined) { // If user does not exist in localStorage, create and add user obj to localStorage array 
        const newUser = {
          id: userId, 
          breakStats: [Date.now()], 
          totalStats: [], 
        }

        data.push(newUser); 
        localStorage.setItem('users', JSON.stringify(data));
      } else { // Get user obj with id = userId, add date to user's breakStats array
        data.find(user => user.id === userId).breakStats.push(Date.now()); 
        localStorage.setItem('users', JSON.stringify(data));
      }
    }
  }

  // Recording total time studied stats 
  const handleTotalStats = () => {
    // Dummy user 
    const userId = 0;

    const newStat = {
      date: Date.now(), 
      timeStudied: studyDuration * NUM_STUDY_PERIODS, // in seconds 
    } 

    const data = JSON.parse(localStorage.getItem('users')); 
    console.log(data);

    // Get user with userId, add to newStat obj to totalStats array 
    data.find(user => user.id === userId).totalStats.push(newStat); 
    localStorage.setItem('users', JSON.stringify(data));
  }

  const handleStudyDuration = (event) => {
    setStudyDuration(event.target.value * 60);
  };

  const handleBreakDuration = (event) => {
    setBreakDuration(event.target.value * 60);
  };

  const handleLongBreakDuration = (event) => {
    setLongBreakDuration(event.target.value * 60);
  };

  const handleStart = () => {
    setIsPlaying(!isPlaying);
    isPlaying && period === 0 ? setShowSettings(true) : setShowSettings(false)
  }

  const handleRestart = () => {
    setIsPlaying(false);
    setShowSettings(true);
    setPeriod(1);
    setStepperIndex(0);
    setIsBreak(false);
  };

  const handleSkip = () => {
    handleOnComplete(); 
  }

  const handleStepper = () => {
    if (period % 2 === 0) {
      setStepperIndex((index) => (index + 1)); 
    }
  }

  const handleStudyInput = (duration) => {
    setStudyDuration(duration * 60); 
    document.getElementById("study-input").value = `${duration}`;
  }

  const handleBreakInput = (duration) => {
    setBreakDuration(duration * 60); 
    document.getElementById("break-input").value = `${duration}`;
  }

  const handleLongBreakInput = (duration) => {
    setLongBreakDuration(duration * 60); 
    document.getElementById("long-break-input").value = `${duration}`;
  }

  return (
    <div className="timer-container">
      <nav>
        <div className="nav">
          <div><Link to="/timer"><img className="logos" src={logo} alt="Logo"/></Link></div>
          <p className="name">POMODORO</p>
          <div><Link to="/profile"><img className="logos" src={pfp}/></Link></div>
        </div>
      </nav>
      <div className="period-container">
        <div className={!isBreak ? "period-indicator active" : "period-indicator"}>
          <p className="period-label">Study</p>
        </div>
        <div className={isBreak ? "period-indicator active" : "period-indicator"}>
          <p className="period-label">Break</p>
        </div>
      </div>

      <div className="stepper-container">
        <StepperComponent index={stepperIndex} />
      </div>

      <div className="countdown-circle">
        <CountdownCircleTimer
          key={period}
          size={300}
          strokeWidth={12}
          trailStrokeWidth={9}
          isPlaying={isPlaying}
          duration={isBreak ? breakDuration : studyDuration}
          colors={["#EBBDCB", "#FDD0AD", "#D3B1FA", "#B4D9EF"]}
          trailColor={"#E4E6EA"}
          colorsTime={colorsTime}
          onComplete={handleOnComplete}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      
      <div className="controls-container"> 
        <button className ="control-button" onClick={handleStart}>
          {isPlaying ? "Pause" : "Start"}
        </button>
        <button className ="control-button" onClick = {handleSkip}>Skip</button>
        <button className ="control-button" onClick={handleRestart}>Restart</button>
        <button className ="control-button" onClick = {() => {setShowSettings(!showSettings)}}>Settings</button>
      </div>
      
      {showSettings && <div className="timer-settings-container">
        <p className="presets-labels">Study Length</p>
        <div className="presets-container">
          <div className="button-group">
            <button className="duration-button" onClick ={() => handleStudyInput(15)}>15</button>
            <button className="duration-button" onClick ={() => handleStudyInput(25)}>25</button>
            <button className="duration-button" onClick ={() => handleStudyInput(30)}>30</button>
            <button className="duration-button" onClick ={() => handleStudyInput(45)}>45</button>
            <button className="duration-button" onClick ={() => handleStudyInput(60)}>60</button>
          </div>
          <input id="study-input" type="number" min="1" onChange={(event) => handleStudyDuration(event)}></input>
        </div>
        
        <p className="presets-labels">Break Length</p>
        <div className="presets-container">
          <div className="button-group">
            <button className="duration-button" onClick ={() => handleBreakInput(5)}>5</button>
            <button className="duration-button" onClick ={() => handleBreakInput(10)}>10</button>
            <button className="duration-button" onClick ={() => handleBreakInput(15)}>15</button>
          </div>
          <input id="break-input" type="number" min="1" onChange={(event) => handleBreakDuration(event)}></input>
        </div>

        <p className="presets-labels">Long Break Length</p>
        <div className="presets-container">
          <div className="button-group">
            <button className="duration-button" onClick ={() => handleLongBreakInput(30)}>30</button>
            <button className="duration-button" onClick ={() => handleLongBreakInput(45)}>45</button>
            <button className="duration-button" onClick ={() => handleLongBreakInput(60)}>60</button>
          </div>
          <input id="long-break-input" type="number" min="1" onChange={(event) => handleLongBreakDuration(event)}></input>
        </div>

      </div>}
    </div>
  );
};

export default Timer;
