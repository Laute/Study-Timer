import { useState, useEffect } from 'react'; 

function App() {
  const [timer, setTimer] = useState(60);
  const [counting, setCounting] = useState(false);
  const [studyLength, setStudyLength] = useState(0); 
  const [breakLength, setBreakLength] = useState(0); 

  useEffect(() => {
    if (!counting) return;
    setTimeout(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, [timer, counting]); 

  const startHandler = () => {
    setTimer(studyLength);
    setCounting(true);
  }
  
  const handleStudyChange = (event) => {
    setStudyLength(event.target.value);
  }

  const handleBreakChange = (event) => {
    setBreakLength(event.target.value); 
  }
  
  return (
    <div>
      {timer}
      <button onClick={startHandler}>Start</button>
      <input onChange={(event) => handleStudyChange(event)}></input>
      <input onChange={(event) => handleBreakChange(event)}></input>
    </div>
  );
}

export default App;
