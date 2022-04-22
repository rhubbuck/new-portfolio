import React from 'react';
import './index.css';

const Modal = ({handleClick, title, subtitle, description, link, image1, liveLink, codeLink}) => {
    let photo1 = require(`${image1}`);

  return (
    <div className='fixed z-30 top-0 left-0 bottom-0 w-full background-shade'>
        <div className='bg-white md:p-5 p-2 md:h-4/5 md:mt-20 mt-10 md:w-2/5 w-4/5 mx-auto rounded-sm flex flex-col'>
            <div className='flex justify-between flex-col'>
                <div className='md:w-2/3 md:h-52 w-2/3 h-24 mx-auto rounded' style={{
                    backgroundImage: "url("+photo1+")",
                    backgroundSize: "cover"
                    }}></div>
            </div>
            <div className='flex flex-col justify-between items-end font-jakarta'>
                <div>
                    <p className='mt-1 md:text-4xl font-semibold'>{title}</p>
                    <p className='md:text-xl md:mt-5 mt-3'>{subtitle}</p>
                    <p className='md:text-lg md:mt-5 mx-2 text-sm mt-3'>{description}</p>
                    <p className='md:text-md underline text-sm md:mt-5 mt-3'>{link}</p>
                    <div>
                        <a href={liveLink} target="_blank" rel='noreferrer'>
                            <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out mx-2 mt-4">Live Site</button>
                        </a>
                        <a href={codeLink} target="_blank" rel='noreferrer'>
                            <button type="button" className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out mx-2 mt-4">Source Code</button>
                        </a>
                    </div>
                </div>
                <div className='mt-5 md:mt-0'>
                        <button type="button" onClick={handleClick} class="inline-block text-right px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Back</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal