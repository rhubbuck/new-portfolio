import React, { useState } from 'react';
import './index.css';

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Header = () => {
  const [ showMenu, setShowMenu ] = useState(false);

  const openMenu = () => {
    // console.log(isSidebar)
    setShowMenu(!showMenu);
  }

  return (
    <div className='bg-slate-900 flex justify-between py-6 md:px-32 px-6 fixed w-full z-10 items-center'>
        <div className='flex text-white text-xl items-center'>
            <Link className='mx-2 border-2 border-[#FF66cc] p-2 cursor-pointer font-jakarta font-bold' to='hero' spy={true} smooth={true} offset={-50}>RH</Link>
        </div>
        <div className='md:block hidden'>
            <ul className='flex flex-row text-white'>
                <Link to='about' spy={true} smooth={true} offset={-120} className='mx-4 text-lg cursor-pointer hover:scale-110 transition-all duration-100 ease-out font-jakarta'>About</Link>
                <Link to='work' spy={true} smooth={true} offset={-120} className='mx-4 text-lg cursor-pointer hover:scale-110 transition-all duration-100 ease-out font-jakarta'>Projects</Link>
                <Link to='contact' spy={true} smooth={true} offset={-120} className='mx-4 text-lg cursor-pointer hover:scale-110 transition-all duration-100 ease-out font-jakarta'>Contact</Link>
            </ul>
        </div>
        <div className='md:hidden'>
          <svg onClick={openMenu} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {showMenu &&
          <div className="mobile-menu fixed right-0 w-full h-full mt-4 background-shade font-jakarta">
            <div className='w-full h-full fixed right-0 transition-all duration-200'>
              <ul className=" text-white pt-4 text-xl">
                <li class="active"><Link to='hero' spy={true} smooth={true} offset={-90} onClick={openMenu} className="block px-2 pt-4 pb-2 border-b border-b-white w-fit mx-auto">Home</Link></li>
                <li><Link to='about' spy={true} smooth={true} offset={-90} onClick={openMenu} className="block px-2 pt-4 pb-2 transition duration-300 border-b border-b-white w-fit mx-auto">About</Link></li>
                <li><Link to='work' spy={true} smooth={true} offset={-90} onClick={openMenu} className="block px-2 pt-4 pb-2  transition duration-300 border-b border-b-white w-fit mx-auto">My Work</Link></li>
                <li><Link to='contact' spy={true} smooth={true} offset={-90} onClick={openMenu} className="block px-2 pt-4 pb-2  transition duration-300 border-b border-b-white w-fit mx-auto">Contact</Link></li>
              </ul>
            </div>
          </div>
          }
        </div>
    </div>
  )
}

export default Header