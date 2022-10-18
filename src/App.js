import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen/MainScreen";
import About from "./Screens/About/About";
import Appointment from "./Screens/Appointment/Appointment";
import Blog from "./Screens/Blog/Blog";
import Contact from "./Screens/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainScreen />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/appointment"} element={<Appointment />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
