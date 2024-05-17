import NavbarComponent from "./components/NavbarComponent";
import ScrollToTop from "./components/ScrollToTop";
import BodyContentComponent from "./components/BodyContentComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Kikori from "./pages/work/Kikori";
import Paella_Bowls from "./pages/work/Paella_Bowls";
import Schedulete from "./pages/work/Schedulete";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
    <NavbarComponent/>
    <ScrollToTop/>
    <Routes>
        <Route path="/react-portfolio" element={<BodyContentComponent/>}/>
        <Route path="/react-portfolio/About" element={<About/>}/>
        <Route path="/react-portfolio/Contact" element={<Contact/>}/>
        <Route path="/react-portfolio/Kikori" element={<Kikori/>} />
        <Route path="/react-portfolio/Paella_Bowls" element={<Paella_Bowls/>} />
        <Route path="/react-portfolio/Schedulete" element={<Schedulete/>}/>
    </Routes>
    </>

  );
}

export default App;

// npm start - runs server
//ctrl c - terminated batch job
// npm run deploy - uploads the site