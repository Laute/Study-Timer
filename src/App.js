import { useState, useEffect } from 'react'; 

function App() {
  const [timer, setTimer] = useState(60);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    if (!counting) return;
    setTimeout(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, [timer, counting]); 

  const startHandler = () => {
    setTimer(60);
    setCounting(true);
  }
  
  return (
    <div>
      {timer}
      <button onClick={startHandler}>Start</button>
    </div>
  );
}

export default App;
