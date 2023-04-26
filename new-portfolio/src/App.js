import './App.css';
import Hero from './Hero';
import Work from './Work';
import Contact from './Contact';
import SocialSidebar from './SocialSidebar';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Element } from 'react-scroll';


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
    <div className='h-screen w-screen p-4 lg:p-8'>
      <div className='h-full border-[1px] border-black relative'>
      <div className='css-selector absolute top-0 bottom-0 left-0 right-0'></div>
        <div className="App flex flex-col lg:flex-row w-full h-full justify-between relative p-4 lg:p-8">
          <div className='lg:w-1/2 h-full flex flex-col justify-between left-half'>
            <div className='text-left'>
              <h1 className='font-raleway text-[28px] md:text-[51px] font-thin'>Ryan Hubbuck</h1>
              <h2 className='font-raleway lg:text-[16px]'>-Software Developer-</h2>
              <ul className='font-anonymous md:font-bold text-[14px] md:text-[16px]'>
                <li className='cursor-pointer my-1 md:my-0' onClick={showHome}>Home</li>
                <li className='cursor-pointer my-1 md:my-0' onClick={showWork}>Work</li>
                <li className='cursor-pointer my-1 md:my-0' onClick={showContact}>Contact</li>
              </ul>
          </div>
          <SocialSidebar />
          </div>
          <div className='lg:w-1/2 h-full relative right-half'>
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
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
