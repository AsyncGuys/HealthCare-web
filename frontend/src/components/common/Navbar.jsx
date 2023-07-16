 import { useState,useEffect} from "react";
import { FaBars} from "react-icons/fa";
import {GrClose} from 'react-icons/gr'
import Logo from '../../Assets/Logo/HealthLogo.png.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [blurValue, setBlurValue] = useState(0);
   const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  
  const Links = [
    { name: "Home", link: "/" },
    // { name: "Map", link: "/map" },
    // { name: "Hospitals", link: "/hospitals" },
    // { name: "Contact Us", link: "/contact" },
  ];
  useEffect(() => {
    function handleScroll() {
      const newBlurValue = Math.min(10, window.scrollY / 100);
      setBlurValue(newBlurValue);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id="navbar" className="z-50 w-full fixed top-0 left-0 h-[50px]">
      <div className={`md:flex items-center justify-between py-2 xl:px-16 px-3 md:px-14 bg-opacity-0`} style={{backdropFilter: `blur(${blurValue}px)`}}>
        <Link to="/">
        <div className="cursor-pointer">
          <img
            className="w-[140px] md:w-[170px] xl:w-[230px] h-auto"
            src={Logo}
            alt="Logo"
          />
        </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl  font-bold text-black absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <GrClose/> :<FaBars/>}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 font-defaultFont absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 text-black bg-white" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 md:ml-4 sm:tracking-tighter md:text-[10px] lg:text-[11px]  xl:text-2xl font-normal xl:tracking-wider leading-5 md:my-0 my-7"
            >
              <a
                href={link.link}
                className="hover:underline hover:delay-1500 transition-transform ease-in-out scale-x-0 hover:scale-x-1 underline-offset-8 decoration-[#F9F7F7] text-gray-300 hover:text-[#1F1534] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="relative cursor-pointer">
            <div className="flex mb-6 md:mb-0" onClick={() => setServiceOpen(!serviceOpen)}>
            </div>
          </div>
{/* 
          <button
            className=" md:text-[12px] hover:text-black  xl:text-[18px] font-normal tracking-wider leading-5 text-[#ffffff]  border-[#ffffff] border-2 font-defaultFont px-5 py-1 rounded md:ml-8 hover:bg-[#ffffff]
    duration-500"
          >
            Logout
          </button> */}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
