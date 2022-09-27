import Carousel from './components/Carousel/Carousel.jsx'
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
           <Carousel />
          <Routes>
            <Route
              path="/category/:categoryId"
            />
            <Route
              path="/detail/:productsId"
            />
        </Routes>
        <Footer />
        </BrowserRouter>
  
    </div>
  );
}

export default App;
