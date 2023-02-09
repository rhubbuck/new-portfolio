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
    <div className='h-min w-full absolute right-0 bottom-0 text-right'>
    <ul>
        <li onClick={openLashesModal} className="flex my-2 justify-end align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous font-bold'>2021 / Small-business site / React</div>
            <div className='work-title font-raleway'>Lashes By Andrea</div>
        </li>
        <li onClick={openUndergroundModal} className="flex my-2 justify-end align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous font-bold'>2022 / E-commerce / Liquid</div>
            <div className='work-title font-raleway'>Underground Skate Co.</div>
        </li>
        <li onClick={openAlltrailsModal} className="flex my-2 justify-end align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous font-bold'>2022 / Angular / CRUD</div>
            <div className='work-title font-raleway'>AllTrails</div>
        </li>
        <li onClick={openNamaModal} className="flex my-2 justify-end align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous font-bold'>2020 / Restaurant Landing Page</div>
            <div className='work-title font-raleway'>Nama Sushi</div>
        </li>
        <li onClick={openPupModal} className="flex my-2 justify-end align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous font-bold'>2020 / E-commerce / React</div>
            <div className='work-title font-raleway'>PupExpress</div>
        </li>
        <li onClick={openNetflixModal} className="flex my-2 justify-end align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous font-bold'>2021 / Website Clone</div>
            <div className='work-title font-raleway'>Netflix Clone</div>
        </li>
    </ul>
        {/* <div className='bg-white w-fit mx-auto mb-12 pink-shadow p-2'>
            <h2 className='md:text-5xl text-3xl md:text-left text-center font-poppins font-bold leading-loose uppercase'>My Latest Work</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:mx-44 md:gap-x-8 md:gap-y-8 font-anonymous font-bold'>
        <div className='h-9 work-image work-image-5 cursor-pointer pink-shadow'>
                <div className='h-full w-full bg-white opacity-0 hover:opacity-100 hover:border-2 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-bold'>Lashes By Andrea</h3>
                    <h4 className='text-lg'>Small-business site</h4>
                    <button className='inline-block px-6 py-2 border-2 font-bold button-shadow border-black text-xl uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out mt-10' onClick={openLashesModal}>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image work-image-6 cursor-pointer pink-shadow'>
            <div className='h-full w-full bg-white opacity-0 hover:opacity-100 hover:border-2 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-bold'>Undergound Skate Co.</h3>
                    <h4 className='text-lg'>Small-business site</h4>
                    <button className='inline-block px-6 py-2 border-2 font-bold button-shadow border-black text-xl uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out mt-10' onClick={openUndergroundModal}>Learn More</button>
                </div>
            </div>   
            <div className='h-9 work-image cursor-pointer pink-shadow'>
            <div className='h-full w-full bg-white opacity-0 hover:opacity-100 hover:border-2 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-bold'>Nama Sushi</h3>
                    <h4 className='text-lg'>Restaurant Landing Page</h4>
                    <button className='inline-block px-6 py-2 border-2 font-bold button-shadow border-black text-xl uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out mt-10' onClick={openNamaModal}>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image work-image-2 cursor-pointer pink-shadow'>
            <div className='h-full w-full bg-white opacity-0 hover:opacity-100 hover:border-2 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-bold'>PupExpress</h3>
                    <h4 className='text-lg'>E-commerce</h4>
                    <button className='inline-block px-6 py-2 border-2 font-bold button-shadow border-black text-xl uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out mt-10' onClick={openPupModal}>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image work-image-3 cursor-pointer pink-shadow'>
            <div className='h-full w-full bg-white opacity-0 hover:opacity-100 hover:border-2 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-bold'>Netflix</h3>
                    <h4 className='text-lg'>Website Clone</h4>
                    <button className='inline-block px-6 py-2 border-2 font-bold button-shadow border-black text-xl uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out mt-10' onClick={openNetflixModal}>Learn More</button>
                </div>
            </div>
            <div className='h-9 work-image work-image-4 cursor-pointer pink-shadow'>
            <div className='h-full w-full bg-white opacity-0 hover:opacity-100 hover:border-2 transition-all duration-150'>
                    <h3 className='md:pt-20 pt-6 pb-8 text-3xl font-bold'>All Trails</h3>
                    <h4 className='text-lg'>AngularJS Crud</h4>
                    <button className='inline-block px-6 py-2 border-2 font-bold button-shadow border-black text-xl uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out mt-10' onClick={openAlltrailsModal}>Learn More</button>
                </div>
            </div>
     
        </div> */}
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