import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Banner() {
  const [Stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_NY_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.results);
        setStories(res.data.results);
      });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Stories.slice(3, 7).map(({ title, abstract }, i) => (
          <SwiperSlide key={i}>
            <h1>{title}</h1>
            <div
              className="cons "
              style={{
                background: "rgba(0,0,0, 0.2)",
              }}
            >
              <img
                src="https://static01.nyt.com/images/2023/02/07/multimedia/07turkey-quake-vckq/07turkey-quake-vckq-superJumbo.jpg"
                style={{ width: "100%", height: "40vh", objectFit: "cover" }}
                alt={["multimedia"][0]["caption"]}
              />

              <p className="lead">
                {" "}
                <em>Abstract:</em> {abstract}
              </p>
              <hr />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
