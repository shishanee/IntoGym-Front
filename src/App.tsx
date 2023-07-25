import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Sign from "./components/Sign/Sign";
import Follow from "./components/Follow/Follow";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/follow" element={<Follow/>}/>
        <Route path="/sign" element={<Sign />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
