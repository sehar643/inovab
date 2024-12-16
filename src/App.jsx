import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import SignUp from "./pages/signUp/SignUp";
import LogIn from "./pages/login/LogIn";
import ContactUs from "./pages/contactUs/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import TransparencyStability from "./pages/transparency/TransparencyStability";
import BuildCurrency from "./pages/buildCurrency/BuildCurrency";
import News from "./pages/news/News";
import StoriesAndInterviews from "./pages/storiesAndInterviews";
import Dashboard from "./pages/dashboard/Dashboard";
import Overview from "./pages/dashboard/Overview";
import Profile from "./pages/dashboard/Profile";
import Analytics from "./pages/dashboard/Analytics";
import Messages from "./pages/dashboard/Messages";
import Settings from "./pages/dashboard/Settings";
import GetInTouch from "./pages/getInTouchForm/GetInTouch";
import Partnership from "./pages/partnership/Partnership";
import ProtectedRoute from "./components/ProtectedRoute";
import RewardCriteria from "./pages/criteria/RewardCriteria";
import Privacy from "./pages/privacy/privacy";
import Terms from "./pages/terms/terms";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease", // Default easing for animations
      delay: 0, // Default delay for animations
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/transparency" element={<TransparencyStability />} />
            <Route path="/about" element={<BuildCurrency />} />
            <Route path="/media" element={<News />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/getInTouch" element={<GetInTouch />} />
            <Route path="/news" element={<StoriesAndInterviews />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/criteria" element={<RewardCriteria />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms-policy" element={<Terms />} />
          </Route>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Analytics />} />
            <Route path="analytics" element={<Analytics />} />
            {/* <Route path="profile" element={<Profile />} /> */}
            {/* <Route path="messages" element={<Messages />} /> */}
            <Route path="files" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
