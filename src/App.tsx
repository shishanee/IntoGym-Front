import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
  );
}

export default App;
