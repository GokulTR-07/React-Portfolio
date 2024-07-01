import React from 'react';
import { Carousel, IconButton } from "@material-tailwind/react";
import Certificate1 from "../assets/Certificate1.png"
import Certificate2 from "../assets/Certificate2.png"
import Certificate3 from "../assets/Certificate3.png"
import Certificate4 from "../assets/Certificate4.png"
import FullStack from "../assets/FullStack.png"
import Certificate6 from "../assets/Certificate6.png"
import Certificate7 from "../assets/Certificate7.png"
import Certificate8 from "../assets/Certificate8.png"
import Certificate9 from "../assets/Certificate9.png"
import { motion } from 'framer-motion';

function Certification() {
  const theme = {
    carousel: {
      defaultProps: {
        prevArrow: ({ loop, handlePrev, firstIndex }) => {
          return (
            <button
              onClick={handlePrev}
              disabled={!loop && firstIndex}
              className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
            >
              <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
            </button>
          );
        },
        nextArrow: ({ loop, handleNext, lastIndex }) => (
          <button
            onClick={handleNext}
            disabled={!loop && lastIndex}
            className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
          </button>
        ),
        navigation: ({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                  activeIndex === i ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        ),
        autoplay: false,
        autoplayDelay: 5000,
        transition: {
          type: "tween",
          duration: 0.5,
        },
        loop: false,
        className: "",
      },
      styles: {
        base: {
          carousel: {
            position: "relative",
            width: "w-full",
            height: "h-full",
            overflowX: "overflow-x-hidden",
            display: "flex",
          },
   
          slide: {
            width: "w-full",
            height: "h-full",
            display: "inline-block",
            flex: "flex-none",
          },
        },
      },
    },
  };
  return (
    <div className='border-b border-lime-900 pb-24' id='certifications'>
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.2 }}
      className='my-20 text-center text-4xl'>Certifications
      </motion.h2>
      <div className='flex flex-wrap lg:justify-center gap-14'>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='w-full max-w-xl lg:w-1/2'>
          <Carousel
            className="rounded-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4 text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4 text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            <img
              src={FullStack}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src={Certificate1}
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src={Certificate2}
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src={Certificate3}
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src={Certificate4}
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src={Certificate6}
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src={Certificate7}
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src={Certificate8}
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src={Certificate9}
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </motion.div>
        
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2 }}>
          <h4 className='text-slate-400 font-medium'>Full Stack Web Development Course from <span className='text-lime-400'>GUVI</span> :</h4>
          <br />
          
          <p className='font-light text-sm'> 
          • Covered comprehensive training in full-stack web development
          technologies, including frontend and backend development.
          
          <br />
          • Developed proficiency in building dynamic web applications using 
          modern framework and technologies.
          
          <br />
          • <span className='text-lime-400'>Topics Covered :</span>  HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, etc.
          </p>
        </motion.div>
      </div>
      
    </div>
  )
}

export default Certification;