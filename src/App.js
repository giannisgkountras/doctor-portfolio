import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
