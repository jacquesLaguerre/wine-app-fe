//  import WineList from "./components/WineList";
//  import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
 
    
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      
      <Routes>

        <Route path="/About"  element={<About/>}/>

    
      </Routes>
      
      </BrowserRouter>
      {/* <WineList /> */}
      {/* <Footer/> */}



 
    </div>

  );
}

export default App;
