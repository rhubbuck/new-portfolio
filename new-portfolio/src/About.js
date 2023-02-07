import React from 'react';
import './index.css';

const About = () => {
  return (
    <div className='md:mx-96 md:mt-72 mt-28 text-white font-jakarta'>
        <h2 className='md:text-5xl text-3xl md:text-left text-center pb-1 pink-border font-jakarta leading-loose'>A little about me</h2>
        <p className='text-left m-6 my-8 md:text-xl text-lg'>Hi!</p>
        <p className='text-left m-6 my-8 md:text-xl text-lg leading-loose'>My name is Ryan Hubbuck, and I'm a front-end developer currently living in Knoxville, Tennessee.</p>
        <p className='text-left m-6 my-8 md:text-xl text-lg leading-loose'>I am a self-taught front-end developer who has been working freelance since 2020. 
        Coding is my passion, and I am dedicated to staying up-to-date on new technologies and platforms.</p>
        <p className='text-left m-6 my-8 md:text-xl font-open-sans text-lg leading-loose'>If you are in need of help with 
        your personal or small-business website, I would love the opportunity to help you make 
        the most of your online presence.</p>
        <p className='text-left m-6 my-8 md:text-xl font-open-sans text-lg leading-loose'>I look forward to hearing from you!</p>
    </div>
  )
}

export default About