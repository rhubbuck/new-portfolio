import React from 'react';
import './index.css';
import Resume from './images/resume-final.pdf';
import backgroundSVG from './images/svg-portfolio-bg.png';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Hero = () => {
  return (
    <div className='w-full h-min absolute text-left max-w-[14rem] right-0 bottom-0'>
        <div className='font-anonymous font-bold leading-tight'>
            <p>I am a front-end developer in Knoxville, Tennessee, and development is my passion. I enjoy building aesthetic and functional 
            applications, and I am dedicated to staying up-to-date on new technologies and platforms. If you are in need of help with your 
            personal or small-business website, I would love the opportunity to help you make the most of your online presence.
            </p>
        </div>
        {/* <div className='absolute top-0 left-0 h-full w-full left-hero-svg'></div> */}
        {/* <img src={backgroundSVG} alt="" className='z-0 absolute top-0 left-0 w-1/2 rotate-90 overflow-hidden translate-x-[-46%] translate-y-[-4%]'></img>
        <img src={backgroundSVG} alt="" className='z-0 absolute top-0 right-0 w-1/2 rotate-[270deg] overflow-hidden translate-x-[36%] translate-y-[-31%]'></img> */}
        {/* <div className='text-left border-2 border-black div-shadow relative bg-white w-fit mx-auto'>
            <div className='p-8'>
                <h4 className='font-anonymous font-bold text-3xl pink-text tracking-wide pb-6 pl-2 md:pl-0 md:pb-3'>Hi, my name is</h4>
                <h1 className='text-7xl pb-6 font-poppins font-bold tracking-wider pl-2 md:pl-0'>Ryan Hubbuck</h1>
                <h2 className='font-anonymous font-bold text-xl text-center md:tracking-tight md:text-4xl'>-software  developer-</h2>
            </div>
            <div className='flex flex-row pt-12 md:pt-12 w-full justify-around '>
                <Link to='work' spy={true} smooth={true} offset={-120} className='border-black border-2 button-shadow p-4 w-1/5 cursor-pointer flex flex-col items-center hover:bg-[#f2f2f2] transition duration-150 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <p className='text-lg md:text-xl font-anonymous font-bold'>Work</p>
                </Link>
                <Link to='contact' spy={true} smooth={true} offset={-120} className='border-black border-2 button-shadow p-4 w-1/5 cursor-pointer flex flex-col items-center hover:bg-[#f2f2f2] transition duration-150 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <p className='text-lg md:text-xl font-anonymous font-bold'>Contact</p>
                </Link>
                <a href={Resume} target='_blank' rel='noreferrer' className='border-black border-2 button-shadow p-4 w-1/5 cursor-pointer flex flex-col items-center hover:bg-[#f2f2f2] transition duration-150 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <p className='text-lg md:text-xl font-anonymous font-bold'>Resume</p>
                </a>
            </div>
        </div> */}
    </div>
  )
}

export default Hero