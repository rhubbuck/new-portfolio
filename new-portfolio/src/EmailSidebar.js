import React from 'react';
import './index.css';

const EmailSidebar = () => {
  return (
    <div className='fixed text-white right-0 bottom-0 z-50 hidden md:block'>
        <ul>
            <li className='sidebar-email font-jakarta'>
              <a href = "mailto:rhubbuck@example.com">
                rhubbuck@gmail.com
              </a>
            </li>
            <div className='email-line'></div>
        </ul>
    </div>
  )
}

export default EmailSidebar