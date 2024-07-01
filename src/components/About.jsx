import React from "react";
import Lottie from 'lottie-react';
import Dev from '../assets/Dev.json'
import {motion} from "framer-motion";

function About() {
  return (
    <div className="border-b border-lime-900 pb-4" id="about">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">
        About <span className="text-lime-300 font-medium">Me</span>
      </motion.h2>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center">
            <Lottie animationData={Dev} />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center gap-4 my-2 max-w-xl py-6">
            <p className="">
              Hello! I'm Gokul, a dedicated MERN stack developer with a passion
              for creating dynamic, efficient, and user-friendly web
              applications. My journey in web development began one year ago,
              and since then, I've honed my skills in MongoDB, Express.js,
              React, and Node.js.
            </p>

            <p>
              I thrive on solving complex problems and delivering innovative
              solutions. My portfolio showcases a variety of projects, each
              reflecting my commitment to quality and attention to detail.
              Whether I'm developing a new application from scratch or
              optimizing existing systems, I always aim to create seamless and
              engaging user experiences.
            </p>

            <p>
              Beyond coding, I enjoy pencil art, which keeps me inspired and
              energized. I'm always eager to learn new technologies and stay
              updated with industry trends, ensuring that my work remains
              cutting-edge and relevant.
            </p>

            <p>
              Thank you for visiting my portfolio. I look forward to connecting
              and potentially collaborating on exciting projects!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
