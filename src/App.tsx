import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalStyles.scss";
import Home from "./pages/home/Home";
import Donations from "./pages/donations/Donations";
import Volunteering from "./pages/volunteering/Volunteering";
import User from "./pages/user/User";
import LectureEvents from "./pages/lecturesEvents/LectureEvents";
import Mentoring from "./pages/mentoring/Mentoring";
import Header from "../src/components/header/Header";

export default function App() {
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/user" element={<User />} />
        <Route path="/lecture-events" element={<LectureEvents />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/mentoring" element={<Mentoring />} />
      </Routes>
    </BrowserRouter>
  );
}