import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github } from "../assets";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";
import leetcode from "../assets/leetcode.svg";
import gfg from "../assets/gfg.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Rajan &nbsp;
            <span className='sm:block hidden'> | Tech Enthuse</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='flex gap-4 ml-5'>
          <a href="https://www.linkedin.com/in/rajan-kumar-080245232/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className='w-9 h-9' />
          </a>
          <a href="https://github.com/rajan0323" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className='w-9 h-9' />
          </a>
          <a href="https://x.com/NologyTricks" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="X" className='w-9 h-9' />
          </a>
          <a href="https://leetcode.com/u/rajankumar_2021/" target="_blank" rel="noopener noreferrer">
            <img src={leetcode} alt="LeetCode" className='w-9 h-9' />
          </a>
          <a href="https://www.geeksforgeeks.org/user/rajankumsafq/" target="_blank" rel="noopener noreferrer">
            <img src={gfg} alt="GeeksforGeeks" className='w-9 h-9' />
          </a>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className='flex gap-4 mt-4'>
              <a href="https://www.linkedin.com/in/rajan-kumar-080245232/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className='w-6 h-6' />
              </a>
              <a href="https://github.com/rajan0323" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className='w-6 h-6' />
              </a>
              <a href="https://x.com/NologyTricks" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="X" className='w-6 h-6' />
              </a>
              <a href="https://leetcode.com/u/rajankumar_2021/" target="_blank" rel="noopener noreferrer">
                <img src={leetcode} alt="LeetCode" className='w-6 h-6' />
              </a>
              <a href="https://www.geeksforgeeks.org/user/rajankumsafq/" target="_blank" rel="noopener noreferrer">
                <img src={gfg} alt="GeeksforGeeks" className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
