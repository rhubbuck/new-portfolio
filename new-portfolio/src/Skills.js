import React from 'react';
import './index.css';

const Skills = () => {
  return (
    <div className='skills-wrapper'>
    <div className='md:pt-40 md:pb-40 mt-28'>
        <div className='bg-white w-fit mx-auto mb-12 p-2 div-shadow'>
            <h2 className='md:text-5xl text-3xl md:text-left text-center font-poppins font-bold leading-loose uppercase'>Technologies I work with</h2>
        </div>
        <div className='flex md:flex-row flex-col justify-between md:mx-96 mt-14 w-fit p-6 font-anonymous font-bold'>
            <ul className='mb-8 md:mb-0 mx-5 bg-white div-shadow p-4  hover:scale-105 transition-all duration-100 ease-in'>
                <header className='text-3xl mb-8 tracking-wide'>Languages</header>
                <li className='text-md md:text-lg'>Javascript</li>
                <li className='text-md md:text-lg'>Typescript</li>
                <li className='text-md md:text-lg'>HTML</li>
                <li className='text-md md:text-lg'>CSS</li>
                <li className='text-md md:text-lg'>SCSS / Sass</li>
            </ul>
            <ul className='mb-8 md:mb-0 mx-5 bg-white div-shadow p-4  hover:scale-105 transition-all duration-100 ease-in'>
                <header className='text-3xl mb-8 tracking-wide'>Frameworks</header>
                <li className='text-md md:text-lg'>React</li>
                <li className='text-md md:text-lg'>AngularJS</li>
                <li className='text-md md:text-lg'>Hydrogen</li>
            </ul>
            <ul className='mb-8 md:mb-0 mx-5 bg-white div-shadow p-4  hover:scale-105 transition-all duration-100 ease-in'>
                <header className='text-3xl mb-8 tracking-wide'>Additional</header>
                <li className='text-md md:text-lg'>Git</li>
                <li className='text-md md:text-lg'>NodeJS</li>
                <li className='text-md md:text-lg'>Bootstrap</li>
                <li className='text-md md:text-lg'>MaterialUI</li>
                <li className='text-md md:text-lg'>Tailwind</li>
                <li className='text-md md:text-lg'>Docker</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Skills