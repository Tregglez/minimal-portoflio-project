import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'

const Navbar = () => {
  // Hamburger Menu
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 text-black'>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <img
            src="/moon.png"
            alt="set to dark mode"
            className='w-5 h-6 mx-10 cursor-pointer'
          />
        ) : (
          <img
            src="/light-sun.png"
            alt="set to light mode"
            className='w-6 h-6 mx-10 cursor-pointer'
          />
        )}
      </button>

      {/* Hamburger */}
      <div onClick={handleClick} className="z-10">
        {theme === "light" ? (
          !toggle ? (
            <img
              src="/cross.png"
              alt="open navbar"
              className="w-7 h-6 cursor-pointer hover:animate-spin"
            />
          ) : (
            <img
              src="/closed-cross.png"
              alt="close navbar"
              className="w-7 h-6 cursor-pointer"
            />
          )
        ) : (
          !toggle ? (
            <img
              src="/light-cross.png"
              alt="open navbar"
              className="w-7 h-6 cursor-pointer hover:animate-spin"
            />
          ) : (
            <img
              src="/light-closed-cross.png"
              alt="close navbar"
              className="w-7 h-6 cursor-pointer"
            />
          )
        )}
      </div>

      {/* Menu */}
      {/* Mobile Menu */}
      <div
        className={
          !toggle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#f2aee9] dark:bg-[#272F27] font-bold flex flex-col justify-center items-start"
        }
        img
        src="/background.jpeg"
      >
        <div className="w-10/12 mx-auto md:w-8/12 lg:w-6/12">
          <div className="flex justify-between items-center h-40 group">
            <div className="my-6 text-[48px] text-black flex">
              <p className="text-[15px] text-[#CD49C0] dark:text-[#58C55C] leading-10 py-2 my-0 mr-1 lg:text-[20px] lg:leading-5 lg:py-7">
                01
              </p>
              <a href="/">
                <p className="lg:text-[70px] dark:text-white">Home</p>
              </a>
            </div>
            <div>
              {theme === "light" ? (
                <img
                  src="/public/gifs/Home pink.gif"
                  alt=""
                  className="navbar-image hidden group-hover:block"
                />
              ) : (
                <img
                  src="/public/gifs/green house.gif"
                  alt=""
                  className="navbar-image hidden group-hover:block"
                />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="my-6 text-[48px] text-black flex">
              <p className="text-[15px] text-[#CD49C0] dark:text-[#58C55C] leading-10 py-2 my-0 mr-1 lg:text-[20px] lg:leading-5 lg:py-7">
                02
              </p>
              <a href="/projects">
                <p className="lg:text-[70px] dark:text-white">Projects</p>
              </a>
            </div>
            <div>
              {theme === "light" ? (
                <img
                  src="/public/gifs/com pink.gif"
                  alt=""
                  className="navbar-image hidden group-hover:block"
                />
              ) : (
                <img
                  src="/public/gifs/green com-crop.gif"
                  alt=""
                  className="navbar-image hidden group-hover:block"
                />
              )}
            </div>
          </div>

          <div className="flex justify-between items-center group">
            <div className="my-6 text-[48px] text-black flex">
              <p className="text-[15px] text-[#CD49C0] dark:text-[#58C55C] leading-10 py-2 my-0 mr-1 lg:text-[20px] lg:leading-5 lg:py-7">
                03
              </p>
              <a href="/about">
                <p className="lg:text-[70px] dark:text-white">About</p>
              </a>
            </div>
            <div>
              {theme === "light" ? (
                <img
                  src="/public/gifs/Projects pink.gif"
                  alt=""
                  className="navbar-image hidden group-hover:block"
                />
              ) : (
                <img
                  src="/public/gifs/green human.gif"
                  alt=""
                  className="navbar-image hidden group-hover:block"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};


export default Navbar
