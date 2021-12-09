import Home from './page/home/home';
import './App.css';
import Gallery from './page/gallery/gallery';
import {Route, Routes} from "react-router-dom"
import Contact from './page/contact/contact';
import Projects from './page/projects/projects';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/conatc" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  );
}

export default App;
