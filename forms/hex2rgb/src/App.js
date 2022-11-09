import './App.css';
import React from "react";
import hexToRgb from './helper'

function App() {
  const[hex, setHex] = React.useState("");
  const[rgb, setRgb] = React.useState("RGB(255, 255, 255)");
  const handleSubmit = evt => {
    evt.preventDefault();
  }

  const handleBackgroundColor = ({target}) => {
    const{value} = target;
    if(value[0] !== "#" || value.length > 7) {
      setHex("");
      setRgb("Ошибка");
      return null;
    }
    let newHex = hexToRgb(value);
    setHex(value);
    if(newHex !== null){
      document.body.style.backgroundColor = `${value}`;
      setRgb(newHex);
    }
  }

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={hex} onChange={handleBackgroundColor} placeholder="Введите hex-код, начиная с #"></input>
      </form>
      <span className="rgb">{rgb}</span>
    </div>
  );
}

export default App;
