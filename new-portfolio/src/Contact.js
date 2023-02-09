import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Socials from './Socials';

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
        <div className='h-min w-min absolute right-0 bottom-0'>
            
            <div className='min-w-[340px] font-anonymous font-bold'>
                
                <p className='w-full text-right'>If you're interested in work or collaberation, leave your info and I'll get back to you.</p>
                <form ref={form} onSubmit={sendEmail} className='w-full'>
                    <div class="form-group mb-8">
                        <input type="text" name="name" required placeholder='Name' 
                        className='block
                        w-full
                        px-3
                        py-1.5
                        text-lg
                        font-anonymous
                        font-bold
                        border-pink-400
                        transition
                        ease-in-out
                        m-0
                        border-b-2
                        focus:outline-none'
                        />
                    </div>
                    <div class="form-group mb-8">
                        <input type="email" name="email" required placeholder='Email Address' className='block
                        w-full
                        px-3
                        py-1.5
                        text-lg
                        font-anonymous
                        font-bold
                        border-pink-400
                        transition
                        ease-in-out
                        m-0
                        border-b-2
                        focus:outline-none' />
                    </div>
                    <div class="form-group mb-8">
                        <textarea name="message" required placeholder='Message' className='block
                        w-full
                        px-3
                        py-1.5
                        text-lg
                        font-anonymous
                        font-bold
                        border-pink-400
                        transition
                        ease-in-out
                        m-0
                        border-b-2
                        focus:outline-none' />
                    </div>
                    <input type="submit" value="SEND" className='inline-block px-6 py-2 border-2 font-bold button-shadow border-black uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default Contact