import React from "react";
import Navbar from "./Navbar";
//import Hero from "./Hero";
import Card from "./Card";
//import image from "./images/image 12.png";
import "./App.css";
import data from "./data";
console.log(data);

function App() {
  //<Hero />

  const cards = data.map((item) => {
    return <Card 
          key={item.id}
          item={item}
      />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
