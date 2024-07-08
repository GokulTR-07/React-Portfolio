import React from "react";
import Webdev from "../assets/Webdev.json";
import Lottie from "lottie-react";
import {motion} from "framer-motion"

function Hero() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible:{
      x:0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay},
    },
  })
  return (
    <div className="border-b border-lime-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-14 text-6xl font-thin tracking-wider lg:mt-16 lg:text-7xl">
              Gokul T
            </motion.h1>
            <motion.p 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-4xl tracking-wide text-transparent text-3xl">
              Full Stack Developer
            </motion.p>
            <motion.p 
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl py-6 font-light tracking-tighter">
              I'm a passionate MERN stack developer with a knack for building
              dynamic and responsive web applications. With expertise in
              MongoDB, Express.js, React.js, and Node.js, I craft seamless user
              experiences and robust backend solutions. My work is driven by a
              commitment to innovation, quality, and continuous learning.
              Welcome to my portfolio, where you can explore my diverse projects
              and learn more about my journey and growth in the world of web
              development.
            </motion.p>
            <motion.a 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            href="https://drive.google.com/file/d/1eUXUIhdv6JARxCIUGKWfb7apTnz7KAN5/view?usp=drive_link" target="_blank" className="hover:bg-lime-500 hover:text-black shadow-2xl shadow-lime-200 hover:shadow-lime-300 hover:shadow-xl rounded">
              <button className="border py-2 px-5 rounded font-medium">Click to view Resume</button>
            </motion.a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
          initial={{ x: 100, opacity: 0}}
          animate={{ x: 0, opacity: 1}}
          transition={{duration: 1, delay: 1.2}}
          className="flex justify-center">
            <Lottie animationData={Webdev} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
