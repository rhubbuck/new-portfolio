import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ij20fx9', 'template_v8xyku7', form.current, 'user_ViWYiGu4yLdFIXPcCAgcc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

  return (
        <div className='block p-8 mx-auto'>
            <h1 className='md:text-5xl text-3xl mb-10 text-white font-jakarta pink-border pb-1 max-w-md mx-auto'>Let's connect!</h1>
            <p className='text-white mx-auto max-w-2xl pb-8 md:text-lg text-base'>If you're interested in contracted or full-time work, or just want to say hi and talk, just leave your info 
            and I'll get in touch soon.</p>
            <form ref={form} onSubmit={sendEmail} className='max-w-md mx-auto'>
                <div class="form-group mb-8">
                    <input type="text" name="name" required placeholder='Name' 
                    className='block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700 
                    bg-slate-900 border-b-2 
                    border-gray-400
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none' />
                </div>
                <div class="form-group mb-8">
                    <input type="email" name="email" required placeholder='Email Address' className='block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-slate-900 border-b-2 
                    border-gray-400
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none' />
                </div>
                <div class="form-group mb-8">
                    <textarea name="message" required placeholder='Message' className='block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-slate-900 border-b-2 
                    border-gray-400
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none' />
                </div>
                <input type="submit" value="SEND" className='inline-block mt-4 
                font-jakarta
                cursor-pointer
                w-full 
                px-6 
                py-2 
                border-2 
                border-gray-400 
                text-pink-400
                font-medium 
                text-xs 
                leading-tight 
                uppercase 
                rounded 
                hover:bg-black 
                hover:bg-opacity-5 
                focus:outline-none 
                focus:ring-0 
                transition 
                duration-150 
                ease-in-out' />
            </form>
        </div>
    )
}

export default Contact