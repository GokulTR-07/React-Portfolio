import React from 'react'
import { DiJavascript, DiMysql } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiJavascriptLine, RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'

function Technologies() {
  return (
    <div className='border-b border-lime-900 pb-24'>
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-lime-500 p-4">
          <RiJavascriptLine className='text-5xl text-yellow-300'/>
        </div>
        <div className="rounded-2xl border-4 border-lime-500 p-4">
          <RiReactjsLine className='text-5xl text-cyan-400'/>
        </div>
        <div className="rounded-2xl border-4 border-lime-500 p-4">
          <SiMongodb className='text-5xl text-green-400'/>
        </div>
        <div className="rounded-2xl border-4 border-lime-500 p-4">
          <FaNodeJs className='text-5xl text-green-400'/>
        </div>
        <div className="rounded-2xl border-4 border-lime-500 p-4">
          <SiExpress className='text-5xl text-white'/>
        </div>
        <div className="rounded-2xl border-4 border-lime-500 p-4">
          <DiMysql className='text-5xl text-sky-400'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies