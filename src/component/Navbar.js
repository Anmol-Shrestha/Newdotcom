import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import TopStories from "../Pages/Topstories/Topstories";
import Homepage from "../Pages/Home/Homepage";
// import Datetest from "../Utility/datetest";
import Detale from "../Pages/Details/Detale";
import Test from "../Pages/Test";
export default function Navbar() {
  return (
    <>
     
        <nav className="navbar navbar-expand-lg container">
          <div className="mx-lg-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to={`/TopStories/MostViewed`}>
                  TOP STORIES
                </Link>
                <Link className="nav-link active" aria-current="page" to={`/`}>
                |  FRONTPAGE |
                </Link>
                <Link className="nav-link" to={`/test`}>
                  FEATURED
                </Link>
              </div>
            </div>
          </div>
        </nav>
   

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/TopStories/MostViewed" element={<TopStories />} />
        <Route path="/test" element={<Test />} />
        <Route path="Frontpage/Details/:title" element={<Detale />} />
        
      </Routes>
    </>
  );
}
