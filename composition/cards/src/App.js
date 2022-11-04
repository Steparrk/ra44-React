import Card from './Card';
import './App.css';
import React from 'react';
import img from './img.svg';

function App() {
  let title = "Special title treatment";
  let text = "With supporting text below as a natural lead-in to additional content.";
  if(img !== null) {
    title = "Card title";
    text = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  }
  return (
    <Card title={title} text={text}>
      {img === null ? null : <img src={img} className="card-img-top" alt="..."/>}
    </Card>
  );
}
export default App;
