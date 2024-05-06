import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Contact } from "./Contact";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgrounColor shadow-[rgba(0,_0,_0_0.20)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              <h1 className="text-2xl font-semibold">Prinzy</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition-all duration-300"
            >
              Home
            </Link>
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

          <div className="hidden lg:flex">
            <button
              onClick={openForm}
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition ease-out duration-300"
            >
              Contact Us
            </button>
          </div>
          {showForm && <Contact closeForm={closeForm} />}
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "transparent" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgrounColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-hoverColor transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-hoverColor transition-all duration-300"
          >
            About us
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
          <div className=" lg:hidden">
            <button
              onClick={openForm}
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition ease-out duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
