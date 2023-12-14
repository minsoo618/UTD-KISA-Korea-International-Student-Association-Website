import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./sections/Navbar/Navbar1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./sections/pages/Contact";
import SliderData from "./sections/pages/SliderData";
import Main from "./sections/pages/Main";
import AboutUs from "./sections/pages/AboutUs";
import SignIn from "./sections/pages/SignIn";
import Calendar1 from "./sections/pages/Calendar1";
import Profile from "./sections/pages/Profile";
import Faculties from "./sections/pages/Faculties";
import Footer from "./sections/pages/Footer";
import WriteMain from "./sections/pages/WriteMain";
import WriteMainPast from "./sections/pages/WriteMainPast";
import WriteMainUpcome from "./sections/pages/WriteMainUpcome";
import GalleryPrint from "./sections/pages/GalleryPrint";
import Other from "./sections/pages/Other";
import { authService } from "./fbase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setUserObj("");
      }
    });
  }, []);

  

  // useEffect(() => {
  //   authService.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserObj({
  //         displayName: user.displayName,
  //         uid: user.uid,
  //       });
  //     } else {
  //       setUserObj(null);
  //     }
  //   });
  // }, []);

  // async function loginFun() {
  //   authService.onAuthStateChanged((user) => {
  //     if (user) {
  //       //로그인 완료 -> Home(Home.js)화면으로 이동
  //       setIsLoggedIn(true);
  //       setUserObj(user);
  //     } else {
  //       //로그인 필요 -> 로그인(Auth.js)에 유지
  //       setIsLoggedIn(false);
  //     }
  //   });
  // }

  // useEffect(() => {
  //   loginFun();
  // }, []);

  return (
    <>
      <div className="wrap-container">
        <Router>
          <Navbar isLoggedIn={Boolean(userObj)} userObj={userObj} />
          <Routes>
            <Route path="/SliderData" exact element={<SliderData />} />
            <Route path="/Contact" exact element={<Contact />} />
            <Route path="/Main" exact element={<Main />} />
            <Route path="/Other" exact element={<Other />} />
            <Route path="/AboutUs" exact element={<AboutUs />} />
            <Route path="/Events" exact element={<Calendar1 />} />
            <Route path="/signIn" exact element={<SignIn />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/Faculties" exact element={<Faculties />} />
            <Route path="/GalleryPrint" exact element={<GalleryPrint />} />
            <Route path="/WriteMain" exact element={<WriteMain userObj={userObj}/>} />
            <Route path="/WriteMainPast" exact element={<WriteMainPast userObj={userObj}/>} />
            <Route path="/WriteMainUpcome" exact element={<WriteMainUpcome userObj={userObj}/>} />
          </Routes>
        </Router>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
