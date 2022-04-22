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


import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <Header />
      <SocialSidebar />
      <EmailSidebar />
      <Element name='hero'><Hero /></Element>
      <Element name='about'><About /></Element>
      <Element name='skills'><Skills /></Element>
      <Element name='work'><Work /></Element>
      {/* <Modal /> */}
      <Socials />
      <Element name='contact'><Contact /></Element>
      <Footer />
    </div>
  );
}

export default App;
