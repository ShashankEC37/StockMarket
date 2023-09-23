

import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from "./Components/Presentation"
import AboutImage from "./images/Frame 19.png";
import AboutImage1 from "./images/download.png";
import Contact from './Components/Contact';
import Screeners from './Components/Screeners';
import Services from './Components/Services';
import Recomendations from './Components/Recomendations';
import Blogs from './Components/Blogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/screeners" element={<Screeners />} />
        <Route path="/services" element={<Services />} />
        <Route path="/screeners/recomendation" element={<Recomendations />} />
        <Route path="/blogs" element={<Blogs />} />


      </Routes>
    </div>
  </Router>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <Feature />
      <Presentation />
      <About image={AboutImage} title="24/7 Support for any queries" button="Get The App" />
      <About image={AboutImage1} title="Grow Your Wealth with our Expert Registered Investment Advisers" button="Get The App" />
      <Contact />
    </>
  );
}


export default App;
