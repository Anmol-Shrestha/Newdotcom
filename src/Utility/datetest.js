import React from "react";
import "./utility.css"
export default function Datetest() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();

  let format = month + "-" + day + "-" + year;

  return (
    <>
    <div className="date">
     {format} A.D</div>
    </>
  );
}
