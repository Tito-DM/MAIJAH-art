import Home from './page/home/home';
import './App.css';
import Gallery from './page/gallery/gallery';
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
  );
}

export default App;
