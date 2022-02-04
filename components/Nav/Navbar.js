import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Contact from "../Contact/Contact";
import { MenuItems } from "./MenuItems";

const Navbar = ({ textColor }) => {
  const [clicked, setClicked] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const router = useRouter();

  const STYLES = ["megaLight", "megaDark"];

  const checkColor = STYLES.includes(textColor) ? textColor : STYLES[0];

  const changeBg = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 400) {
      setNavBg(true);
    }else {
      setNavBg(false)
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBg);
  }
  
  

  return (
    <div>
      <nav className={navBg? 'container navbarItems scrollBg' : 'container navbarItems' }>
        <div className={` logo pb-2 `}>
          <span className={navBg ? `scrollColor ${checkColor} mega` : ` ${checkColor} mega`}>Mega</span>
          <span className={` law `}>Law</span>
          <span className={navBg ? `scrollColor d-block partners ${checkColor}` : ` d-block partners ${checkColor}` }>Partners</span>
        </div>
        <div className={`px-1 px-sm-0 menuIcon `} onClick={handleClick}>
          {clicked ? (
            <img src="./img/togglerClose.svg" className="img-fluid" />
          ) : (
            <img src="./img/togglerOpen.svg" className="" />
          )}
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.url}>
                <a
                 
                  className={navBg ? `poppins-medium scrollColor ${checkColor} ${item.cName}`: `poppins-medium ${checkColor} ${item.cName}` }
                  target={item.target}
                >
                  {item.title}
                </a>
                </Link>
                
              </li>
            );
          })}
          <div className="d-sm-none py-5">
            <Link href="#">
              <a className="px-3 poppins-medium text-secondary">Instagram</a>
            </Link>
            <Link href="#">
              <a className="px-3 poppins-medium text-secondary">Twitter</a>
            </Link>
            <Link href="#">
              <a className="px-3 poppins-medium text-secondary">Facebook</a>
            </Link>
          </div>
          <div className="d-sm-none text-center">
            <span className="text-secondary">&copy; 2021 Megalaw Partners</span>
          </div>
        </ul>
        <button className={`btn text-white nav-btn`} onClick={() => setIsOpen(true)}>Contact Us</button>
      </nav>

      {/* modal */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div>
              <Contact open={isOpen} close={() => setIsOpen(false)}/>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
