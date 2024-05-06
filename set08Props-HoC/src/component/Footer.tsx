import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div className="text-white bg-backgrounColor rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-5 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">PRINCEZY</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            dignissimos incidunt sapiente dolorum cupiditate explicabo ipsam!
            Molestias qui repellendus placeat?
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Abou us</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              Service
            </Link>
            <Link
              to="doctor"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              Doctors
            </Link>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              Blogs
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Service</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="service"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              Lap Test
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              Service
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              Service
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              Service
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav>
            <Link to="contact" smooth={true} duration={500}>
              123 kaka street ,portharcourt
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              6749 Akwa ibom state
            </Link>

            <Link to="contact" smooth={true} duration={500}>
              Supported@care.com
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-3">
          @copyright developed by
          <span className=" text-hoverColor"> Umoren victor</span> | frontend
          developer
        </p>
      </div>
    </div>
  );
};
