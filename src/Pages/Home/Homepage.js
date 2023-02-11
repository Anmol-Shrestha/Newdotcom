import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
  const [Article, SetArticle] = useState([]);

  useEffect(() => {
    console.log(Response);
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NY_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.results);
        SetArticle(res.data.results);
      });
  }, []);

  return (
    <>
      <div className="container text-center">
        {Article.map(
          ({ id, published_date: px, byline, title, abstract }) => (
            <div className="wrapper" key={id}>
              <div className="row my-3 border-top border-dark ">
                <div className="col-md-8 p-3 border-end border-dark-subtle">
                  <div className="display-5"> <Link to={`Frontpage/Details/${title}`}>{title}</Link>  </div>
                </div>

                <div className="col-6 col-md-4 p-3"></div>
              </div>

              <div className="row border-bottom border-top border-dark-subtle">
                <div className="col-6 col-md-4 p-3 border-end wch">
                  <article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non nam impedit esse, dolor veniam tempore nesciunt nulla
                    fugit, excepturi eaque consectetur placeat! Neque, sint
                    praesentium? Hic distinctio sed nesciunt natus.</p>
                    
                  </article>
                </div>
                <div className="col-6 col-md-4 p-3 border-end border-dark-subtle wch">
                <article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non nam impedit esse, dolor veniam tempore nesciunt nulla
                    fugit, excepturi eaque consectetur placeat! Neque, sint
                    praesentium? Hic distinctio sed nesciunt natus.</p>
                    
                  </article>
                </div>
                <div className="col-6 col-md-4 p-3 border-dark-subtle wch">
                  <p>
         <em>Abstract:</em> {abstract}
                  </p>
                </div>
              </div>

              <div className="row mb-5 border-bottom border-dark">
                <div className="col-8 text-start border-end">
           
                  <p className="wch">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque rerum numquam suscipit natus deserunt? Tenetur
                    tempore, deserunt porro sequi nostrum possimus aperiam,
                    natus consequuntur omnis tempora ullam? Inventore,
                    consequuntur repudiandae?
                  </p>
                </div>
                <div className="col-4 text-center p-3 wch">
                  <p><strong>
                    {byline} | <p>Published Date : {px}</p>
                  </strong></p>
                  
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
