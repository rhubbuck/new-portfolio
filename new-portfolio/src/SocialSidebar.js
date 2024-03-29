import React from 'react';
import './index.css';
import Resume from './images/Resume-4-21.pdf';

const SocialSidebar = () => {
  return (
    <div className='font-anonymous md:font-bold lg:text-[16px] text-[14px] absolute top:0 right-1 w-min md:relative'>
        <ul>
            <a href={Resume} target='_blank' rel='noreferrer' className='flex md:my-0 my-2'>
              <p>Resume</p>
              <a href={Resume} target='_blank' rel='noreferrer' >
                <svg width="12px" height="12px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" fill-rule="evenodd" d="M15.08 2.526c.368-1.001-.605-1.974-1.606-1.605L1.878 5.193a1.25 1.25 0 00-.295 2.19l4.07 2.907a.25.25 0 01.057.058l2.907 4.069a1.25 1.25 0 002.19-.295l4.272-11.596zM2.84 6.437l10.645-3.922L9.563 13.16l-2.39-3.344 3.072-3.071a.7.7 0 10-.99-.99L6.184 8.826 2.84 6.437z" clip-rule="evenodd"/></svg>
              </a>
            </a>
            <a  href='https://www.linkedin.com/in/ryan-hubbuck/' target='_blank' rel='noreferrer' className='flex md:my-0 my-2'>
              <p>LinkedIn</p>
              <a href='https://www.linkedin.com/in/ryan-hubbuck/' target="_blank" rel='noreferrer'>
                <svg width="12px" height="12px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" fill-rule="evenodd" d="M15.08 2.526c.368-1.001-.605-1.974-1.606-1.605L1.878 5.193a1.25 1.25 0 00-.295 2.19l4.07 2.907a.25.25 0 01.057.058l2.907 4.069a1.25 1.25 0 002.19-.295l4.272-11.596zM2.84 6.437l10.645-3.922L9.563 13.16l-2.39-3.344 3.072-3.071a.7.7 0 10-.99-.99L6.184 8.826 2.84 6.437z" clip-rule="evenodd"/></svg>
              </a>
            </a>
            <a href='https://github.com/rhubbuck' target='_blank' rel='noreferrer' className='flex md:my-0 my-2'>
              <p>Github</p>
              <a href='https://github.com/rhubbuck' target="_blank" rel='noreferrer'> 
                <svg width="12px" height="12px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" fill-rule="evenodd" d="M15.08 2.526c.368-1.001-.605-1.974-1.606-1.605L1.878 5.193a1.25 1.25 0 00-.295 2.19l4.07 2.907a.25.25 0 01.057.058l2.907 4.069a1.25 1.25 0 002.19-.295l4.272-11.596zM2.84 6.437l10.645-3.922L9.563 13.16l-2.39-3.344 3.072-3.071a.7.7 0 10-.99-.99L6.184 8.826 2.84 6.437z" clip-rule="evenodd"/></svg>
              </a>
            </a>
            <a href = "mailto:rhubbuck@gmail.com" target='_blank' rel='noreferrer' className='flex md:my-0 my-2'>
              <p>Email</p>
              <a href = "mailto:rhubbuck@gmail.com" target="_blank" rel='noreferrer'>
                <svg width="12px" height="12px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" fill-rule="evenodd" d="M15.08 2.526c.368-1.001-.605-1.974-1.606-1.605L1.878 5.193a1.25 1.25 0 00-.295 2.19l4.07 2.907a.25.25 0 01.057.058l2.907 4.069a1.25 1.25 0 002.19-.295l4.272-11.596zM2.84 6.437l10.645-3.922L9.563 13.16l-2.39-3.344 3.072-3.071a.7.7 0 10-.99-.99L6.184 8.826 2.84 6.437z" clip-rule="evenodd"/></svg>
              </a>
            </a>
        </ul>
    </div>
  )
}

export default SocialSidebar
