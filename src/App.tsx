import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
