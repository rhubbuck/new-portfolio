import React, {useState} from 'react';

import './index.css';
import Modal from './Modal';

const Work = () => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ title, setTitle] = useState('');
    const [ subtitle, setSubtitle] = useState('');
    const [ description, setDescription] = useState('');
    const [ link, setLink] = useState('');
    const [ image1, setImage1] = useState();
    const [ liveLink, setLiveLink] = useState();
    const [ codeLink, setCodeLink] = useState();

    const handleClick = () => {
        setModalOpen(false);
      }

    const openNamaModal = () => {
        setTitle('Nama');
        setSubtitle('React/Firebase');
        setDescription('Mock restaurant landing page with restaurant information and menus. Reservation information is saved into a backend database to be reviewed and handled by restaurant management/staff.');
        setLink('https://github.com/rhubbuck/react-restaurant');
        setImage1('./images/nama1.png');
        setLiveLink('https://rhubbuck.github.io/react-restaurant/');
        setCodeLink('https://github.com/rhubbuck/react-restaurant');
        setModalOpen(true);
    }

    const openPupModal = () => {
        setTitle('Pupexpress');
        setSubtitle('React/Commerce.js/Stripe.js');
        setDescription('E-commerce site created using the Angular framework. I used Commerce.js for the back-end, and Stripe.js was used for the final card payments/processings.');
        setLink('https://github.com/rhubbuck/react-ecommerce');
        setImage1('./images/pupexpress.png');
        setLiveLink('https://rhubbuck.github.io/react-ecommerce/');
        setCodeLink('https://github.com/rhubbuck/react-ecommerce');
        setModalOpen(true);
    }

    const openNetflixModal = () => {
        setTitle('Netflix Clone');
        setSubtitle('React/TMDB API');
        setDescription('Mock site used as a display of ability to capture the styling and overall feel of a website or project. Movies, shows, and like percentage are pulled from an API. ');
        setLink('https://github.com/rhubbuck/API-clone');
        setImage1('./images/netflix.png');
        setLiveLink('https://rhubbuck.github.io/API-clone/');
        setCodeLink('https://github.com/rhubbuck/API-clone');
        setModalOpen(true);
    }

    const openAlltrailsModal = () => {
        setTitle('AllTrails');
        setSubtitle('AngularJS/Firebase');
        setDescription('Firebase authentication was used to create and store user profiles. A main feed page shows all trails added by all users, while there is a seperate page to view and edit your own trail posts.');
        setLink('https://github.com/rhubbuck/angular-crud');
        setImage1('./images/alltrails.png');
        setModalOpen(true);
        setLiveLink('https://rhubbuck.github.io/angular-crud/');
        setCodeLink('https://github.com/rhubbuck/angular-crud');
    }

    const openLashesModal = () => {
        setTitle('Lashes By Andrea');
        setSubtitle('React');
        setDescription('Small business landing page with integrated scheduling, contact for clients, services, and a gallery.');
        setLink('https://github.com/rhubbuck/react-lashes-website');
        setImage1('./images/lashes.png');
        setModalOpen(true);
        setLiveLink('https://lashes-by-andrea.com/');
        setCodeLink('https://github.com/rhubbuck/react-lashes-website');
    }

    const openUndergroundModal = () => {
        setTitle('Underground Skate');
        setSubtitle('Shopify Hydrogen');
        setDescription('E-commerce page for a small business. Shopify is used for handling the back-end, while their new Hydrogen framework is used for the front-end.');
        setLink('https://github.com/rhubbuck/Hydrogen-New');
        setImage1('./images/underground.png');
        setLiveLink('https://demo-image-lrxjdbohrq-ue.a.run.app/');
        setCodeLink('https://github.com/rhubbuck/Hydrogen-New');
        setModalOpen(true);
    }

  return (
    <div className='md:mt-72 mt-28 font-jakarta'>
        <header className='text-white md:text-5xl text-3xl md:text-left text-center md:mx-96 mb-12 pink-border'>My Latest Work</header>
        <div className='grid grid-cols-1 md:grid-cols-2 md:mx-44 md:gap-x-5'>
        <div className='h-9 work-image work-image-5 cursor-pointer'>
                <div className='h-full w-full bg-slate-900 opacity-0 hover:opacity-100 hover:border-2 hover:border-pink-400 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-semibold text-white'>Lashes By Andrea</h3>
                    <h4 className='text-white'>Small-business site</h4>
                    <button className='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-slate-900 transition duration-150 ease-in-out mt-10' onClick={openLashesModal}>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image work-image-6 cursor-pointer'>
                <div className='h-full w-full bg-slate-900 opacity-0 hover:opacity-100 hover:border-2 hover:border-pink-400 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-semibold text-white'>Underground Skate Co.</h3>
                    <h4 className='text-white'>Small-business site</h4>
                    <button className='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-slate-900 transition duration-150 ease-in-out mt-10' onClick={openUndergroundModal}>Learn More</button>
                </div>
            </div>   
            <div className='h-9 work-image cursor-pointer'>
                <div className='h-full w-full bg-slate-900 opacity-0 hover:opacity-100 hover:border-2 hover:border-pink-400 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-semibold text-white'>Nama Sushi</h3>
                    <h4 className='text-white'>Restaurant landing page</h4>
                    <button className='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-slate-900 transition duration-150 ease-in-out mt-10' onClick={openNamaModal}>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image work-image-2 cursor-pointer'>
                <div className='h-full w-full bg-slate-900 opacity-0 hover:opacity-100 hover:border-2 hover:border-pink-400 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-semibold text-white'>Pupexpress</h3>
                    <h4 className='text-white'>E-commerce</h4>
                    <button className='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-slate-900 transition duration-150 ease-in-out mt-10' onClick={openPupModal}>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image work-image-3 cursor-pointer'>
                <div className='h-full w-full bg-slate-900 opacity-0 hover:opacity-100 hover:border-2 hover:border-pink-400 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-semibold text-white'>Netflix</h3>
                    <h4 className='text-white'>Website clone</h4>
                    <button className='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-slate-900 transition duration-150 ease-in-out mt-10' onClick={openNetflixModal}>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image work-image-4 cursor-pointer'>
                <div className='h-full w-full bg-slate-900 opacity-0 hover:opacity-100 hover:border-2 hover:border-pink-400 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-semibold text-white'>Alltrails</h3>
                    <h4 className='text-white'>AngularJS CRUD</h4>
                    <button className='inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-slate-900 transition duration-150 ease-in-out mt-10' onClick={openAlltrailsModal}>Learn More</button>
                </div>
            </div>
     
        </div>
        {modalOpen && <Modal 
                            handleClick={handleClick} 
                            title={title} subtitle={subtitle} 
                            description={description} 
                            link={link} 
                            image1={image1}
                            liveLink={liveLink}
                            codeLink={codeLink}
                            />}
    </div>
  )
}

export default Work