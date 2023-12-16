import React from "react";
import Navbar from "./Navbar";
//import Hero from "./Hero";
import Card from "./Card";
import image from "./images/image 12.png";
import "./App.css";

function App() {
  //<Hero />  
  return (
    <div className="App">
      
      <Navbar />
      <Card 
      img={image}
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136}
      />
    </div>
  );
}

export default App;
