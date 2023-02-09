import React from "react";
import { Link } from "react-router-dom";
import Datetest from "../Utility/datetest";
export const Header = () => {
  return (
    <>
      <header >
        <div className="Logo container text-center">
          <Datetest />
          <Link to={"/"}>
           <h1>NewsDotCom</h1> 
          </Link>
        </div>
      </header>
    </>
  );
};
