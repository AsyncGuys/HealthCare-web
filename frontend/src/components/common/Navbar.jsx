 import React, { useState } from "react";
import { FaBars,} from "react-icons/fa";
import Logo from '../../Assets/Logo/HealthLogo.png.png'

const Navbar = () => {


   let [open, setOpen] = useState(false);
  let [serviceOpen, setServiceOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Map", link: "/map" },
    { name: "Doctor-Bot", link: "/bot" },
    { name: "Ambulance", link: "/ambulance" },
    { name: "Hospitals", link: "/hospitals" },
  ];

  return (
    <section id="navbar" className="z-50 shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#37306B] py-4 xl:px-16 px-6 md:px-14">
        <div className="cursor-pointer">
          <img
            className="w-[140px] md:w-[170px] xl:w-[230px] h-auto"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl  font-bold text-white absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FaBars name={open ? "close" : "menu"}></FaBars>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 font-defaultFont absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 md:ml-4 sm:tracking-tighter md:text-[10px] lg:text-[11px]  xl:text-2xl font-normal xl:tracking-wider leading-5 md:my-0 my-7"
            >
              <a
                href={link.link}
                className="hover:underline hover:delay-1500 transition-transform ease-in-out scale-x-0 hover:scale-x-1 underline-offset-8 decoration-[#F9F7F7] text-[#545B77] hover:text-gray-300 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="relative cursor-pointer">
            <div className="flex mb-6 md:mb-0" onClick={() => setServiceOpen(!serviceOpen)}>
            </div>
          </div>

          <button
            className=" md:text-[12px] hover:text-black  xl:text-[18px] font-normal tracking-wider leading-5 text-[#ffffff]  border-[#ffffff] border-2 font-defaultFont px-5 py-1 rounded md:ml-8 hover:bg-[#ffffff]
    duration-500"
          >
            Logout
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
