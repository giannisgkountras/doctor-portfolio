import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen/MainScreen";
import About from "./Screens/About/About";
import Appointment from "./Screens/Appointment/Appointment";
import Blog from "./Screens/Blog/Blog";
import Contact from "./Screens/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainScreen />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/appointment"} element={<Appointment />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
