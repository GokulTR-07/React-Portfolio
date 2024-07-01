import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
    <div className="flex items-center justify-between py-6 px-8 mb-10">

      <div className='py-4 px-8 rounded-3xl text-center border shadow-lime-200 shadow-2xl hover:bg-lime-300 hover:shadow-lime-300 hover:shadow-2xl'
      id='/'
       >
        <span className='font-medium md:text-4xl text-white hover:text-black '>Gokul <span className='text-lime-500 hover:text-white'>TR</span></span>
        {/* <span className='font-light text-2xl text-orange-400'>Gokul</span>
        <span className='font-bold text-4xl text-white '>T</span>
        <span className='font-bold text-2xl text-green-400'>R</span> */}
      </div>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>  
            {/* toggle class based on isNavOpen state */}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className='flex flex-col items-center justify-between gap-4 font-medium text-black'>
              <li className='border py-2 px-4 rounded-xl text-center shadow-lime-200 shadow-2xl hover:bg-lime-400 hover:shadow-lime-300 hover:shadow-xl'>
                <a href="#about">About</a>
              </li>

              <li className='border py-2 px-4 rounded-xl text-center shadow-lime-200 shadow-2xl hover:bg-lime-400 hover:shadow-lime-300 hover:shadow-xl'>
                <a href="#projects">Projects</a>
              </li>

              <li className='border py-2 px-4 rounded-xl text-center shadow-lime-200 shadow-2xl hover:bg-lime-400 hover:shadow-lime-300 hover:shadow-xl'>
                <a href="#certifications">Certifications</a>
              </li>

              <li className='border py-2 px-4 rounded-xl text-center shadow-lime-200 shadow-2xl hover:bg-lime-400 hover:shadow-lime-300 hover:shadow-xl'>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-white font-medium">
          <li className='border py-2 px-4 rounded-xl text-center shadow-lime-200 shadow-2xl hover:bg-lime-400 hover:shadow-lime-300 hover:shadow-xl hover:text-black hover:border-black'>
            <a href="#about">About</a>
          </li>

          <li className='border py-2 px-4 rounded-xl text-center shadow-lime-200 shadow-2xl hover:bg-lime-400 hover:shadow-lime-300 hover:shadow-xl hover:text-black hover:border-black'>
            <a href="#projects">Projects</a>
          </li>

          <li className='border py-2 px-4 rounded-xl text-center shadow-lime-200 shadow-2xl hover:bg-lime-400 hover:shadow-lime-300 hover:shadow-xl hover:text-black hover:border-black'>
            <a href="#certifications">Certifications</a>
          </li>

          <li className='border py-2 px-4 rounded-xl text-center shadow-lime-200 shadow-2xl hover:bg-lime-400 hover:shadow-lime-300 hover:shadow-xl hover:text-black hover:border-black'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
  </div>
    {/* </nav> */}
    </>
  )
}

export default Navbar