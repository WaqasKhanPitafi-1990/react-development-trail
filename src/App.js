import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Signup from "./pages/auth/signup/signup";
import Home from "./pages/auth/signup/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
