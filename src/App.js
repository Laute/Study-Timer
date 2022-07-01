import { useState, useEffect } from 'react'; 

function App() {
  const [timer, setTimer] = useState(0); 

  useEffect(() => {
    setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []); 

  return (
    <div>
      {timer}
    </div>
  );
}

export default App;
