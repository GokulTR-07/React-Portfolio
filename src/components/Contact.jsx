import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="pb-10" id="contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-5 text-center text-4xl"
      >
        Contact <span className="text-lime-400 font-medium">Me</span>
      </motion.h2>
      <motion.div 
      whileInView={{opacity: 1, y: 0}}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      className="text-center tracking-tighter space-y-1">
        <motion.p 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="">
          59/29/2, Kothaval Chavadi Street, West Saidapet, Chennai-15.
        </motion.p>
        <motion.p 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="">Ph.No : 9962467753</motion.p>
        <motion.a 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        href="mailto: gokultr1206@gmail.com" target="_blank">
          gokultr1206@gmail.com
        </motion.a>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-3 space-x-3">
          <a href="https://www.linkedin.com/in/gokul-tr/" target="_blank">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/GokulTR-07" target="_blank">
            <BsGithub size={20} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
