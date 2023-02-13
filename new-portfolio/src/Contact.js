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
        <div className='h-min md:w-min w-full absolute right-0 bottom-0 px-8'>
            
            <div className='md:min-w-[310px] font-anonymous md:font-bold'>
                <p className='w-full text-center md:text-right text-[14px] md:text-[16px]'>If you're interested in work or collaberation, leave your info and I'll get back to you.</p>
                <form ref={form} onSubmit={sendEmail} className='w-full'>
                    <div class="form-group mb-4 md:mb-8">
                        <input type="text" name="name" required placeholder='Name' 
                        className='block
                        w-full
                        px-3
                        py-1.5
                        md:text-[16px]
                        text-[14px]
                        font-anonymous
                        font-bold
                       border-black
                        transition
                        ease-in-out
                        m-0
                        border-b-[1px]
                        focus:outline-none'
                        />
                    </div>
                    <div class="form-group mb-4 md:mb-8">
                        <input type="email" name="email" required placeholder='Email Address' className='block
                        w-full
                        px-3
                        py-1.5
                        md:text-[16px]
                        text-[14px]
                        font-anonymous
                        font-bold
                        border-black
                        transition
                        ease-in-out
                        m-0
                        border-b-[1px]
                        focus:outline-none' />
                    </div>
                    <div class="form-group mb-4 md:mb-8">
                        <textarea name="message" required placeholder='Message' className='block
                        w-full
                        px-3
                        py-1.5
                        md:text-[16px]
                        text-[14px]
                        font-anonymous
                        font-bold
                        border-black
                        transition
                        ease-in-out
                        m-0
                        border-b-[1px]
                        focus:outline-none' />
                    </div>
                    <input type="submit" value="SEND" className='inline-block px-4 py-1 border-2 font-bold button-shadow border-black uppercase hover:bg-[#f2f2f2] transition duration-150 ease-in-out cursor-pointer md:text-[16px] text-[14px]' />
                </form>
            </div>
        </div>
    )
}

export default Contact