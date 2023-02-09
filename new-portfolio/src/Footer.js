import React from 'react';
import Resume from './images/resume-final.pdf';


import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Footer = () => {
  return (
    <div className='relative'>
        <div className='flex flex-row justify-between py-6 md:py-14 mt-10 md:px-80 px-8 text-white text-lg bg-[#121212] border-t-4 border-t-white font-anonymous font-bold'>
            <ul>
              <div className='bg-white text-black w-fit mx-auto mb-12 pink-shadow p-2'>
                <h2 className='md:text-2xl text-xl md:text-left text-center font-poppins font-bold leading-loose uppercase'>Useful Links</h2>
              </div>
                <li className='m-2 cursor-pointer'><a href={Resume} target='_blank' rel='noreferrer'>Resume</a></li>
                <li className='m-2'><a href='https://github.com/rhubbuck' target="_blank" rel='noreferrer' className='m-2 cursor-pointer'>Github</a></li>
                <li className='m-2'><a href='https://www.linkedin.com/in/ryan-hubbuck/' target="_blank" rel='noreferrer' className='m-2 cursor-pointer'>LinkedIn</a></li>
            </ul>
            <ul>
              <div className='bg-white text-black w-fit mx-auto mb-12 pink-shadow p-2'>
                <h2 className='md:text-2xl text-xl md:text-left text-center font-poppins font-bold leading-loose uppercase'>Contact Me</h2>
              </div>
                <li className='m-2 cursor-pointer'><a href = "mailto:rhubbuck@example.com">rhubbuck@gmail.com</a></li>
                <li className='m-2'>(865) 804-0597</li>
                <li><br></br></li>
                <Link to='hero' spy={true} smooth={true} offset={-50}>
                <svg className='absolute right-3 bottom-2 md:right-44 md:bottom-10 h-12 w-12 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FF66CC" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer