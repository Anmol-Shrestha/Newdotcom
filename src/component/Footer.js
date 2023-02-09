import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillNotification,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <footer>
        <hr />
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Link to={"/"}>
                  <h1>
                    News <br /> DotCom
                  </h1>
                </Link>
              </div>

              <div className="col-3">
                <ul>
                  <li className="lh">
                    <h5>Browse</h5>
                  </li>
                  <li>
                    <Link to="/">Frontpage</Link>
                  </li>
                  <li>
                    <Link to="/TopStories/MostViewed">Top Stories</Link>
                  </li>
                  <li>
                    <Link to="/test">Featured</Link>
                  </li>
                </ul>
              </div>
              <div className="col-3">

             <ul>
              <li className="lh"><h5>Company</h5></li>
              <li>
                <Link to={``}>About Us</Link>
              </li>
              <li>
                <Link to={``}>Career</Link>
              </li>
              <li>
                <Link to={``}>Contact Us</Link>
              </li>
             </ul>

              </div>
            </div>
 <hr />
            <div className="row py-2">
              <div className="col-4 border-end border-dark">
                © 2023 Newsdotcom{" "}
              </div>
              <div className="col-4 border-end border-dark d-flex justify-content-between">
                <Link to={``}>Terms of Services</Link>
                <Link to={``}>
                  Privacy
                </Link>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <AiFillNotification style={{ fontSize: "28px", marginLeft:"20px"}} />
                <AiFillFacebook style={{ fontSize: "28px", marginLeft:"20px"}} />
                <AiFillInstagram style={{ fontSize: "28px", marginLeft:"20px"}} />
              </div>
            </div>
        </div>
        </div>
      </footer>
    </>
  );
}
