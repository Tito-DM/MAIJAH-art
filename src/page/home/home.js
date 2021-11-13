import React from "react";
import NavBar from "../../components/navbar/navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <nav className="nav">
        <NavBar />
      </nav>
      
      <main className="home-main"></main>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "40%",
        }}
      >
        <div className="typewriter">
          <h1>
            Ajuda-nos a promover a pagina Art é vida
          </h1>
          <h3>
          Ajuda-nos a promover 
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
