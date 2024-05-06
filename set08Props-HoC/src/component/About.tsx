import React from "react";
import img from "../../public/doc2.png";

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-bold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-justify lg:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          necessitatibus laudantium ipsum quis! Assumenda quae aliquam sunt.
          Dolores, molestiae officiis?
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa
          omnis asperiores aspernatur amet cupiditate incidunt voluptatem harum.
          Magnam, minus.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
          eligendi harum! Nihil fugit ratione ducimus veritatis voluptatum
          laborum, inventore quia.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img src={img} alt="" className="rounded-lg" />
      </div>
    </div>
  );
};
