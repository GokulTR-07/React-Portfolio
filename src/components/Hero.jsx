import React from "react";
import Webdev from "../assets/Webdev.json";
import Lottie from "lottie-react";

function Hero() {
  return (
    <div className="border-b border-lime-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-14 text-6xl font-thin tracking-wider lg:mt-16 lg:text-7xl">
              Gokul T
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-wide text-transparent">
              Full Stack Developer
            </span>
            <p className="my-4 max-w-xl py-6 font-light tracking-tighter">
              I'm a passionate MERN stack developer with a knack for building
              dynamic and responsive web applications. With expertise in
              MongoDB, Express.js, React.js, and Node.js, I craft seamless user
              experiences and robust backend solutions. My work is driven by a
              commitment to innovation, quality, and continuous learning.
              Welcome to my portfolio, where you can explore my diverse projects
              and learn more about my journey and growth in the world of web
              development.
            </p>
            <a href="https://drive.google.com/file/d/1X_oh5Hp4b0sQ4Y4AZvSvzya3o9v04fj9/view?usp=drive_link" target="_blank" className="hover:bg-lime-500 hover:text-black shadow-2xl shadow-lime-200 hover:shadow-lime-300 hover:shadow-xl rounded">
              <button className="border py-2 px-5 rounded font-medium">Click to view Resume</button>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <Lottie animationData={Webdev} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
