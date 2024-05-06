import React from "react";
import { Button } from "./../layouts/Button";
import { BlogCard } from "../layouts/BlogCard";
import img from "../../public/doc3.png";
import img2 from "../../public/doc1.png";
import img3 from "../../public/doc2.png";
import img4 from "../../public/doc4.png";
import img5 from "../../public/doc2.png";
import img6 from "../../public/doc3.png";

export const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Posts
          </h1>
          <p className="mt-2 lg:text-start text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            ipsum.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <button className="px-4 py-2 rounded-md hover:bg-green-500 transition duration-300 text-white bg-orange-400">
            Our Articles
          </button>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex  flex-wrap justify-center gap-5">
          <BlogCard img={img} heading="Unrevealing my mysteries of sleep" />
          <BlogCard img={img2} heading="The heart-healthy diets" />
          <BlogCard img={img3} heading="Understanding pediatric vaccinations" />
          <BlogCard img={img4} heading="Navigating Mental Health" />
          <BlogCard img={img5} heading="The Important of Regular Excercise" />
          <BlogCard img={img6} heading="Skin health" />
        </div>
      </div>
    </div>
  );
};
