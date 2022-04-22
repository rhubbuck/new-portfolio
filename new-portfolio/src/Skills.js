import React from 'react';
import './index.css';

const Skills = () => {
  return (
    <div className='md:mt-72 mt-28 font-jakarta'>
        <h2 className='md:mx-96 text-white md:text-5xl text-3xl text-center md:text-left pink-border pb-1'>Technologies I work with</h2>
        <div className='flex md:flex-row flex-col justify-between md:mx-96 mt-8 text-white'>
            <ul className='mb-8 md:mb-0'>
                <header className='text-2xl mb-4'>Languages</header>
                <li className='text-md md:text-lg'>Javascript</li>
                <li className='text-md md:text-lg'>Typescript</li>
                <li className='text-md md:text-lg'>HTML</li>
                <li className='text-md md:text-lg'>CSS</li>
                <li className='text-md md:text-lg'>SCSS / Sass</li>
                <li className='text-md md:text-lg'>Liquid</li>
            </ul>
            <ul className='mb-8 md:mb-0'>
                <header className='text-2xl mb-4'>Frameworks</header>
                <li className='text-md md:text-lg'>React</li>
                <li className='text-md md:text-lg'>AngularJS</li>
                <li className='text-md md:text-lg'>Hydrogen</li>
            </ul>
            <ul className='mb-8 md:mb-0'>
                <header className='text-2xl mb-4'>Additional</header>
                <li className='text-md md:text-lg'>Git</li>
                <li className='text-md md:text-lg'>NodeJS</li>
                <li className='text-md md:text-lg'>Bootstrap</li>
                <li className='text-md md:text-lg'>MaterialUI</li>
                <li className='text-md md:text-lg'>Tailwind</li>
                <li className='text-md md:text-lg'>Docker</li>
            </ul>
        </div>
    </div>
  )
}

export default Skills