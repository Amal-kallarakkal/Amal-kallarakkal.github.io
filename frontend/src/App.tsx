
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing }  from './components/Landing';
// import { Room }  from './components/room';
import Home from "./components/Home";
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
     <Route path = "/" element = {<Home/>}/>
     <Route path="/landing" element = {<Landing/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
