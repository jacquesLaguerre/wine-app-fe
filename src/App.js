import WineList from "./components/WineList";
 import Footer from "./components/Footer";
import Favorites from "./components/pages/Favorites";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/pages/WelcomePage";
import About from "./components/pages/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
<Route path="/" element={<WelcomePage/>}/>
         <Route path="wine-list" element={<WineList/>}/>
          {/* <Route path="/Home" element={<WineList />} /> */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
