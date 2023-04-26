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
    const [ alt, setAlt] = useState();

    const handleClick = () => {
        setModalOpen(false);
      }


    const openModal = (title, subtitle, desc, link, image1, liveLink) => {
        setTitle(title);
        setSubtitle(subtitle);
        setDescription(desc);
        setLink(link);
        setImage1(image1);
        setLiveLink(liveLink);
        setModalOpen(true);
        setAlt(false);
    }

    const openAltModal = (title, subtitle, desc, link, image1 ) => {
        setTitle(title);
        setSubtitle(subtitle);
        setDescription(desc);
        setLink(link);
        setImage1(image1);
        setModalOpen(true);
        setAlt(true);
    }

  return (
    <div className='h-min w-full absolute right-0 bottom-0 text-right'>
    <ul>
        <li onClick={() => {openAltModal("A* Search Visualizer", "Python/tkinter/Pygame", "This program utilizes the A Star Search Algorithm to find the shortest route between two points. Tkinter and Pygame are used to create the GUI and allow users to set points and draw walls.", "https://github.com/rhubbuck/MazeAStar", "./images/astar.png")}} className="flex my-2 md:justify-end justify-between align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous md:font-bold hidden md:block'>2020 / Python</div>
            <div className='work-subtitle font-anonymous md:font-bold block md:hidden'>2020 / Python</div>
            <div className='work-title font-raleway'>A* Search Visualizer</div>
        </li>
        <li onClick={() => {openModal("AllTrails", "AngularJS/Firebase", "User profiles and posts are stored in a noSQL database and authentication is required for users to sign-in and create accounts. Within the application users can view a main feed of all posts, create their own trail posts of various types, and change or delete their old posts through database manipulation.", "https://github.com/rhubbuck/angular-crud", "./images/alltrails.png", "https://rhubbuck.github.io/angular-crud/")}} className="flex my-2 md:justify-end justify-between align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous md:font-bold hidden md:block'>2022 / CRUD / Angular</div>
            <div className='work-subtitle font-anonymous md:font-bold block md:hidden'>2022 / Angular</div>
            <div className='work-title font-raleway'>AllTrails</div>
        </li>
        <li onClick={() => {openModal("Lashes By Andrea", "React", "Small business landing page with integrated scheduling, contact for clients, services, and a gallery.", "https://github.com/rhubbuck/react-lashes-website", "./images/lashes.png", "https://lashes-by-andrea.com/")}} className="flex my-2 md:justify-end justify-between align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous md:font-bold hidden md:block'>2021 / Small-business site / React</div>
            <div className='work-subtitle font-anonymous md:font-bold block md:hidden'>2021 / React</div>
            <div className='work-title font-raleway'>Lashes By Andrea</div>
        </li>
        <li onClick={() => {openAltModal("Underground Skate", "React/Rest API/Hydrogen", "E-commerce page for a small business. Shopify is used for handling the back-end, while their new Hydrogen framework, React, and PHP are used for the front-end.", "https://github.com/rhubbuck/Hydrogen-New", "./images/underground.png")}} className="flex my-2 md:justify-end justify-between align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous md:font-bold hidden md:block'>2022 / E-commerce / Liquid</div>
            <div className='work-subtitle font-anonymous md:font-bold block md:hidden'>2022 / Liquid</div>
            <div className='work-title font-raleway'>Underground Skate</div>
        </li>
        <li onClick={() => {openModal("Nama Sushi", "React/Firebase", "Mock restaurant landing page with restaurant information, menus, and the ability to make reservations. Reservation information is saved into a backend sql database to be reviewed and handled by restaurant management/staff.", "https://github.com/rhubbuck/react-restaurant", "./images/nama1.png", "https://rhubbuck.github.io/react-restaurant/")}} className="flex my-2 md:justify-end justify-between align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous md:font-bold hidden md:block'>2020 / Restaurant Landing Page</div>
            <div className='work-subtitle font-anonymous md:font-bold block md:hidden'>2020 / React</div>
            <div className='work-title font-raleway'>Nama Sushi</div>
        </li>
        <li onClick={() => {openModal("PupExpress", "React/Commerce.js/Stripe.js", "E-commerce site created using the React framework. Commerce.js is used for the back-end inventory management through a database, and Stripe.js was used for the final card payments/processings.", "https://github.com/rhubbuck/react-ecommerce", "./images/pupexpress.png", "https://rhubbuck.github.io/react-ecommerce/")}} className="flex my-2 md:justify-end justify-between align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous md:font-bold hidden md:block'>2020 / E-commerce / React</div>
            <div className='work-subtitle font-anonymous md:font-bold block md:hidden'>2020 / React</div>
            <div className='work-title font-raleway'>PupExpress</div>
        </li>
        <li onClick={() => {openModal("Netflix Clone", "React/Rest API", "Mock site used as a display of ability to capture the styling and overall feel of a website or project. Movies, shows, and like percentage are pulled from an API prior to proper formatting and rendering.", "https://github.com/rhubbuck/API-clone", "./images/netflix.png", "https://rhubbuck.github.io/API-clone/")}} className="flex my-2 md:justify-end justify-between align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous md:font-bold hidden md:block'>2021 / Website Clone</div>
            <div className='work-subtitle font-anonymous md:font-bold block md:hidden'>2021 / React</div>
            <div className='work-title font-raleway'>Netflix Clone</div>
        </li>
        <li onClick={() => {openAltModal("Inventory Manager", "C++", "This program can handle collections/inventories of any kind. Complete features include reading in a file, outputting a backup file, presenting itemized lists with quantities of items and charts, the ability to search for items and add values, and tabulating totals of total collection quantity and value.", "https://github.com/rhubbuck/grocery_inventory", "./images/item-manager.png")}}  className="flex my-2 md:justify-end justify-between align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous md:font-bold hidden md:block'>2023 / C++</div>
            <div className='work-subtitle font-anonymous md:font-bold block md:hidden'>2023 / C++</div>
            <div className='work-title font-raleway'>Inventory Manager</div>
        </li>
        <li onClick={() => {openAltModal("Pong", "Python/Pygame", "I recreated the classic game Pong within Python using Pygame. Seperate inputs allow users to control the paddles independenty, and the ball reacts dynamically to walls and paddles to accelerate and change angles accordingly.", "https://github.com/rhubbuck/PythonPongGame", "./images/pong.png")}}  className="flex my-2 md:justify-end justify-between align-baseline cursor-pointer hover:scale-105 hover:transition-all hover:duration-100">
            <div className='work-subtitle font-anonymous md:font-bold hidden md:block'>2020 / Python</div>
            <div className='work-subtitle font-anonymous md:font-bold block md:hidden'>2020 / Python</div>
            <div className='work-title font-raleway'>Pong</div>
        </li>
    </ul>
        {modalOpen && <Modal 
                            handleClick={handleClick} 
                            title={title} subtitle={subtitle} 
                            description={description} 
                            link={link} 
                            image1={image1}
                            liveLink={liveLink}
                            alt={alt}
                            />}
    </div>
  )
}

export default Work