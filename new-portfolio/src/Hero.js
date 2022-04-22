import React from 'react';
import './index.css';
import Resume from './images/resume-final.pdf';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero-background'>
        <div className='pt-40 text-left md:px-32'>
            <div>
                <h4 className='text-white font-jakarta font-semibold text-xl pink-text tracking-wide pb-6 pl-2 md:pl-0 md:pb-3'>Hi, my name is</h4>
                <h1 className='text-white text-7xl pb-6 font-jakarta font-semibold pl-2 md:pl-0'>Ryan Hubbuck.</h1>
                <h2 className='text-white font-jakarta text-xl text-center md:text-left md:text-4xl'>- Front-end Developer -</h2>
            </div>
            <div className='flex flex-row pt-8 md:pt-44 w-full justify-around '>
                <Link to='work' spy={true} smooth={true} offset={-120} className='cursor-pointer flex flex-col items-center hover:scale-125 transition-all duration-100 ease-in'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <p className='text-white text-lg font-jakarta'>Work</p>
                </Link>
                <Link to='contact' spy={true} smooth={true} offset={-120} className='cursor-pointer flex flex-col items-center hover:scale-125 transition-all duration-100 ease-in'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <p className='text-white text-lg font-jakarta'>Contact</p>
                </Link>
                <a href={Resume} target='_blank' rel='noreferrer' className='cursor-pointer flex flex-col items-center hover:scale-125 transition-all duration-100 ease-in'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <p className='text-white text-lg font-jakarta'>Resume</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero