

// ==== Import Bootstrap Css =======

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from "./Common/Headaer/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Plants from "./Plants";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          {/* <Route path="/contact" exact element={<Contact />} /> */}
          <Route path="/plants" exact element={<Plants />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
