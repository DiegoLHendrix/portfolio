import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Microcontrollers from "./components/Microcontrollers";
import FinalProject from "./components/FinalProject";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path={"about"} element={<About />} />
                  <Route path={"Contact"} element={<Contact />} />
                  <Route path={"Microcontrollers"} element={<Microcontrollers />} />
                  <Route path={"FinalProject"} element={<FinalProject />} />
              </Route>
          </Routes>
      </>
  );
}

export default App;
