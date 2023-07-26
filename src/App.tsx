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
import AboutUs from "./components/AboutUs/AboutUs";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./components/Profile/Profile";
import Balance from "./components/Profile/SideBar/Balance";
import SignOut from "./components/Profile/SideBar/SignOut";
import { fetchUser } from "./features/userSlice";
import { useEffect } from "react";

function App() {
  const token = useSelector((state) => state.application.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        {token && <Route path="/login" element={<Navigate to={"/"} />} />}
        {token && <Route path="/sign" element={<Navigate to={"/"} />} />}
        {token && <Route path="/register" element={<Navigate to={"/"} />} />}
        {token && <Route path="/profile" element={<Profile />} />}
        {token && <Route path="/balance" element={<Balance />} />}
        {token && <Route path="/signout" element={<SignOut />} />}
      </Routes>
      <Routes>
        <Route path="/sign" element={<Sign />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/s" element={<Schedule/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/s" element={<Schedule />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
