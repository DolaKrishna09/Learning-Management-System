import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Dummy";
import CoursesHomePage from "./CoursesHomePage";
import About from "./Dummy";
import Branches from "./Dummy";
import ContactUs from "./Dummy";
import Faqs from "./Dummy";
import StudentLogin from "./Dummy";
import AdminLogin from "./Dummy";
import FacultyLogin from "./Dummy";

function NavRoute() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesHomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
      </Routes>
    </Router>
  );
}

export default NavRoute;