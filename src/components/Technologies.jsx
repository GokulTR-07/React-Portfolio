import React from 'react'
import { DiJavascript, DiMysql } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiJavascriptLine, RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { easeIn, motion } from 'framer-motion';

function Technologies() {
  const iconVariants = (duration) => ({
    initial : { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className='border-b border-lime-900 pb-24'>
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies
      </motion.h2>
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-lime-500 p-4">
          <RiJavascriptLine className='text-5xl text-yellow-300'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-lime-500 p-4">
          <RiReactjsLine className='text-5xl text-cyan-400'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-lime-500 p-4">
          <SiMongodb className='text-5xl text-green-400'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-lime-500 p-4">
          <FaNodeJs className='text-5xl text-green-400'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-lime-500 p-4">
          <SiExpress className='text-5xl text-white'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-lime-500 p-4">
          <DiMysql className='text-5xl text-sky-400'/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies