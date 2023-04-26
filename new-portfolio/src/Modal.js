import React from 'react';
import './index.css';

const Modal = ({handleClick, title, subtitle, description, link, image1, liveLink, alt}) => {
    let photo1 = require(`${image1}`);

  return (
    <div className='fixed z-30 top-0 left-0 bottom-0 w-full background-shade'>
        <div className='bg-white md:p-5 p-2 md:h-[88%] md:mt-12 mt-10 md:w-[35%] w-4/5 mx-auto rounded-sm flex flex-col div-shadow'>
            <div className='flex justify-between flex-col'>
                <div className='md:w-2/3 md:h-52 w-2/3 h-24 mx-auto rounded' style={{
                    backgroundImage: "url("+photo1+")",
                    backgroundSize: "cover"
                    }}></div>
            </div>
            <div className='flex flex-col justify-between items-end font-anonymous font-bold'>
                <div>
                    <p className='mt-1 md:text-4xl font-raleway font-thin text-center'>{title}</p>
                    <p className='md:mt-5 mt-3 text-[16px] text-center'>{subtitle}</p>
                    <p className='md:mt-5 text-md mt-3 w-[90%] mx-auto text-[16px] text-center'>{description}</p>
                    <div className='my-4'>
                        {alt ? null :
                            <a href={liveLink} target="_blank" rel='noreferrer'>
                                <button type="button" className="inline-block px-4 py-1 border-2 font-bold button-shadow border-black uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out cursor-pointer">Live Site</button>
                            </a>
                        }
                        <a href={link} target="_blank" rel='noreferrer'>
                            <button type="button" className="inline-block px-4 py-1 ml-4 border-2 font-bold button-shadow border-black uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out cursor-pointer">Source Code</button>
                        </a>
                    </div>
                </div>
                <div className='mt-4 md:mt-3'>
                        <button type="button" onClick={handleClick} class="inline-block px-4 py-1 border-2 font-bold button-shadow border-black uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out cursor-pointer">Back</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal