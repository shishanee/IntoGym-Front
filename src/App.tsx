import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Sign from "./components/Sign/Sign";
import Shop from "./components/Shop/Shop";
import Schedule from "./components/Schedule/Schedule";
import Follow from "./components/Follow/Follow";
import { useSelector } from "react-redux";
import Profile from "./components/Profile/Profile";

function App() {
  const token = useSelector((state) => state.application.token);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        {token && <Route path="/login" element={<Navigate to={"/"} />} />}
        {token && <Route path="/sign" element={<Navigate to={"/"} />} />}
        {token && <Route path="/register" element={<Navigate to={"/"} />} />}
        {token && <Route path="/profile" element={<Profile />} />}
      </Routes>
      <Routes>
        <Route path="/sign" element={<Sign />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/s" element={<Schedule />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
