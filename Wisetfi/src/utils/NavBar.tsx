import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar glass-morphism px-10 rounded-[25px] mt-5 sticky top-5 z-[100]">
      <div className="flex items-center gap-2">
        <img src={logo} alt="WiSetFi" className="w-[40px] h-[40px]" />
        <span className="text-white font-poppins font-bold text-[20px]">WiSetFi</span>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.id}
            whileHover={{ scale: 1.1, color: "#33bbcf" }}
            className={`font-poppins font-medium cursor-pointer
          text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
          text-white`}
          >
            <a href={`/${nav.id}`}>
              {nav.title}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 glass-morphism absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[100]"
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      index === navLinks.length - 1 ? "mb-0" : "mb-4"
                    } text-white`}
                  >
                    <a href={`/${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
