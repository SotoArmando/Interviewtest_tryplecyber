import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Randomnnumbers from './Brain';

function App() {
  const [numberElements, setNumberElements] = useState<number>(10);
  const [exceptionNumberisnotreal] = [(e:number) => (e < 0 ? 'Number is not real' : '')] 

  const handleSequencyUpdate = function (e: React.FormEvent<HTMLInputElement>): void {
    setNumberElements(parseInt(e.currentTarget.value));
  }

  return (
    <div className="App" >
    <input value={numberElements} type="number" onChange={handleSequencyUpdate} />
    <div>Output: </div>
      {
        [Randomnnumbers(numberElements).map(e =>
          <div>{e}</div>
        ),
        <span className="error">{exceptionNumberisnotreal(numberElements)}</span>
        ]
      }
    </div>
  );
}

export default App;
