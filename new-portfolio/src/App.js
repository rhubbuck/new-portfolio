import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Socials from './Socials';
import SocialSidebar from './SocialSidebar';
import EmailSidebar from './EmailSidebar';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';


import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


function App() {

  const [ homeVisible, setHomeVisible ] = useState(true);
  const [ workVisible, setWorkVisible ] = useState(false);
  const [ contactVisible, setContactVisible] = useState(false);

  const showHome =  () => {
    setHomeVisible(true);
    setWorkVisible(false);
    setContactVisible(false);
  };

  const showWork =  () => {
    setHomeVisible(false);
    setWorkVisible(true);
    setContactVisible(false);
  };

  const showContact =  () => {
    setHomeVisible(false);
    setWorkVisible(false);
    setContactVisible(true);
  };

  return (
    <div className='h-screen w-screen z-30'>
    <div className='h-screen w-screen p-8'>
      <div className='h-full border-[1px] border-black relative'>
      <div className='css-selector absolute top-0 bottom-0 left-0 right-0'></div>
        <div className="App flex w-full h-full justify-between relative p-8">
          <div className='w-1/2 h-full flex flex-col justify-between'>
            <div className='text-left'>
              <h1 className='font-raleway md:text-[51px] font-thin'>Ryan Hubbuck</h1>
              <h2 className='font-raleway md:text-[16px]'>-Software Developer-</h2>
              <ul className='font-anonymous font-bold'>
                <li className='cursor-pointer' onClick={showHome}>Home</li>
                <li className='cursor-pointer' onClick={showWork}>Work</li>
                <li className='cursor-pointer' onClick={showContact}>Contact</li>
              </ul>
          </div>
          <SocialSidebar />
            {/* <EmailSidebar /> */}
          </div>
          <div className='w-1/2 h-full relative'>
            <CSSTransition in={homeVisible} timeout={1200} classNames="hero-class" >
              <div className=''>
                <Element name='hero'><Hero /></Element>
              </div>
            </CSSTransition>
            <CSSTransition in={workVisible} timeout={1200} classNames="work-class" >
              <div style={workVisible ? {display: 'block'} : {display: 'none'}}>
                <Element name='about'><Work /></Element>
              </div>
            </CSSTransition>
            <CSSTransition in={contactVisible} timeout={1200} classNames="contact-class" >
              <div style={contactVisible ? {display: 'block'} : {display: 'none'}}>
                <Element name='about'><Contact /></Element>
              </div>
            </CSSTransition>
          </div>
          {/* <Element name='skills'><Skills /></Element>
          <Element name='work'><Work /></Element>
          <Element name='contact'><Contact /></Element> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
