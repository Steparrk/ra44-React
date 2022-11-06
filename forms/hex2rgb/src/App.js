import './App.css';
import React from "react";

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

  function hexToRgb(hex) {

    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `RGB(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
  }

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={hex} onChange={handleBackgroundColor}></input>
      </form>
      <span className="rgb">{rgb}</span>
    </div>
  );
}

export default App;
