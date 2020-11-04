import React from "react";
import "./Home.css";

const Home = ({ greeting }) => {
  return (
    <div className="home">
      <h1>{greeting}</h1>
    </div>
  );
};

export default Home;
