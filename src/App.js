import React, { useState } from 'react';
import './App.css';

 const App = () => {

  let [counter, setCounter] = useState(0);

  let changeCounter = (e) =>{
    setCounter(
      counter = e.target.value.length
    )
  }

    return (
      <div className="container">
        <textarea rows="3" onChange={changeCounter}></textarea>
        <div className="counter">{counter}</div>
      </div>
    );
  }

export default App;
