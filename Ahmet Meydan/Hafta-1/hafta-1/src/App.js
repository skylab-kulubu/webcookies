import { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <p>
        {number}
      </p>
      <div className='buttons'>
        <button onClick={() => {
          setNumber(number + 1);
        }}>
          Increment
        </button>
        <button onClick={() => {
          setNumber(number - 1);
        }}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
