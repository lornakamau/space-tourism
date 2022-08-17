import logo from "../assets/shared/logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const Navbar = (props) => {
  const open = props.open;
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
  const overlayStyle = {
    background: `rgba(255, 255, 255, 0.06)`,
    boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
    backdropFilter: `blur(8.9px)`,

    /* From https://css.glass */
// background: `rgba(255, 255, 255, 0.48)`,
// boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
// backdropFilter: `blur(6.1px)`

// background: `rgba(255, 255, 255, 0.04)`,
// backdropFilter: `blur(81.5485px)`
  }

  return (
    <>
      <div className="w-full relative" id="myNav">
        <div className="absolute top-0 left-0 h-[4rem] md:h-[5.5rem] lg:h-[6.5rem] mt-0 lg:mt-8 flex items-center text-white w-full">
          <img
            src={logo}
            alt="logo"
            className="w-[3rem] lg:w-[4rem] mx-4 lg:mx-8"
          />
          <div className="h-[1px] bg-[#979797] w-full -mr-[2rem] z-20 hidden lg:block"></div>
          <div className="hidden md:block justify-self-end ml-auto">
            <div className="flex">
              <ul
                style={navStyle}
                className="pl-8 lg:pl-16 pr-0 lg:pr-[10rem] text-[14px] lg:text-[16px] h-[4rem]  md:h-[5.5rem] lg:h-[6.5rem]"
              >
                {links.map(({ id, name, link, style }) => (
                  <NavLink to={link} key={id} activeclassName="nav-active">
                    <li
                      className={`nav-link uppercase mx-7 my-auto cursor-pointer flex h-full items-center md:${style} border-b-[3px] border-transparent hover:border-white hover:border-opacity-25`}
                      // border-opacity-95
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
            <Ul open={open} className="overlay" >
              {links.map(({ id, name, link, styleSm }) => (
                <NavLink to={link} key={id} activeclassName="nav-active">
                  <li
                    className={`nav-link uppercase pl-10 py-4 my-[0.5rem] cursor-pointer flex items-center ${styleSm} border-r-[5px] border-transparent hover:border-white hover:border-opacity-25`}
                    // border-opacity-95
                  >
                    <span className="font-bold mr-4">
                      0{id - 1}
                    </span>{" "}
                    {name}
                  </li>
                </NavLink>
              ))}
            </Ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
