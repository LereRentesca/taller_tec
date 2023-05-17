import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import 'bootstrap'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Catalog from "./pages/catalog"
import Footer from "./components/footer"
import About from "./pages/about"

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;