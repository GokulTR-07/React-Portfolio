import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className='pb-10' id='contact'>
      <h2 className="my-5 text-center text-4xl">
        Contact <span className='text-lime-400 font-medium'>Me</span>
      </h2>
      <div className='text-center tracking-tighter space-y-1'>
        <p className="">59/29/2, Kothaval Chavadi Street, West Saidapet, Chennai-15.</p>
        <p className="">Ph.No : 9962467753</p>
        <a href="mailto: gokultr1206@gmail.com" target='_blank'>gokultr1206@gmail.com</a>
        <div className='flex justify-center mt-3 space-x-3'>
          <a href="https://www.linkedin.com/in/gokul-tr/" target='_blank'><FaLinkedin size={20}/></a>
          <a href="https://github.com/GokulTR-07" target='_blank'><BsGithub size={20}/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact