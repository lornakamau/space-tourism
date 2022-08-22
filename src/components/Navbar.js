import logo from "../assets/shared/logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import closed from '../assets/shared/icon-close.svg';
import opened from '../assets/shared/icon-hamburger.svg';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
      styleSm: "mt-16",
      style: "",
    },
    {
      id: 2,
      name: "Destinations",
      link: "/destinations",
      styleSm: "",
      style: "",
    },
    {
      id: 3,
      name: "crew",
      link: "/crew",
      styleSm: "",
      style: "",
    },
    {
      id: 4,
      name: "technology",
      link: "/technology",
      styleSm: "",
      style: "pr-2",
    },
  ];
  const navStyle = {
    /* From https://css.glass */
    background: `rgba(255, 255, 255, 0.06)`,
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(9.6px)",
    display: "flex",
    alignContent: "center",
  };
  const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index: ${({ open }) => (open ? "100" : "0")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: all 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
  return (
    <>
      <div className="w-full relative z-[9999]" id="myNav">
        <div className="absolute top-0 left-0 h-[4rem] md:h-[5.5rem] lg:h-[6.5rem] mt-0 lg:mt-8 flex items-center text-white w-full">
          <img
            src={logo}
            alt="logo"
            className="w-[3rem] lg:w-[4rem] mx-4 lg:mx-8 mt-[25px] md:mt-0"
          />
          <div className="h-[1px] bg-[#979797] w-full -mr-[2rem] z-20 hidden lg:block"></div>
          <div className="hidden md:block justify-self-end ml-auto">
            <div className="flex">
              <ul
                style={navStyle}
                className="pl-8 lg:pl-16 pr-0 lg:pr-[10rem] text-[14px] lg:text-[16px] h-[4rem]  md:h-[5.5rem] lg:h-[6.5rem]"
              >
                {links.map(({ id, name, link, style }) => (
                  <NavLink to={link} key={id} className={`cursor-pointer`}>
                    <li
                      className={`nav-link uppercase mx-7 my-auto flex h-full items-center md:${style} border-b-[3px] border-transparent hover:border-white hover:border-opacity-25`}
                    >
                      <span className="font-bold mr-4 md:hidden lg:block">
                        0{id - 1}
                      </span>{" "}
                      {name}
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <div open={open} className={"overlay md:hidden list-none fixed flex-nowrap flex-row top-0 right-0 h-screen w-[300px] pt-[3.5rem] transition-all duration-[0.3s] ease-in-out " + (open? 'z-[100] translate-x-[0%]' : 'z-0 translate-x-[100%]') }>
              {links.map(({ id, name, link, styleSm }) => (
                <NavLink to={link} key={id} onClick={() => setOpen(!open)} className={`cursor-pointer`}>
                  <li
                    className={`text-bold text-white nav-link uppercase pl-10 py-4 my-[0.5rem] flex items-center ${styleSm} border-r-[5px] border-transparent hover:border-white hover:border-opacity-25`}
                  >
                    <span className="font-[700] mr-4">
                      0{id - 1}
                    </span>{" "}
                    {name}
                  </li>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        {open ?
          <img
            src={closed}
            alt="menu close"
            className="w-[2rem] h-[2rem] cursor-pointer fixed top-[25px] right-[20px] z-[120] md:hidden"
            onClick={() => setOpen(!open)}
          /> :
          <img
            src={opened}
            alt="menu open"
            className="w-[2rem] h-[2rem] cursor-pointer fixed top-[25px] right-[20px] z-[120] md:hidden"
            onClick={() => setOpen(!open)}
          />}
      </div>
    </>
  );
};

export default Navbar
