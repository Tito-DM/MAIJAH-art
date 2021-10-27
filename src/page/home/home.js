import React from "react"
import NavBar from "../../components/navbar/navbar";
import "./home.css"


const Home =()=>{
    return(
      <div className="home-page">
          <nav className="nav">
            <NavBar/>
          </nav>
          <main className="home-main">
            
         
        
          </main>
          <div style={{
              position:"absolute",
              top: "20%",
              left:"40%",
          }}>
          Ajuda-nos a promover a pagina, dando o seu testemunho. 
          Contanos a sua estória de como okueca e o sentigo de irmandade 
          ajudou a salvar uma vida.
          </div>
      </div>
    )
}

export default Home;