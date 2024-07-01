import React from 'react';
import BikersGarage from '../assets/BikersGarage.png';
import BookMyDen from '../assets/BookMyDen.png';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div>
      <div className="border-b border-lime-900 pb-4" id='projects'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-center text-4xl'>Projects
        </motion.h2>
        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center md:justify-center">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4 flex lg:items-center md:justify-center">
              <img src={BikersGarage} alt="" width={300} height={200} className='mb-6 rounded'/>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4 lg:ml-8 ">
               <h6 className='lg:ml-4 font-semibold text-lg text-white rounded bg-red-500 text-center'>Bikers Garage</h6>
               <div className='lg:ml-4 mt-4'>
                <p className='font-medium pb-2 text-slate-400'>KEY FEATURES :</p>

                <p className='font-light text-sm'>Our platform revolutionizes bike servicing, 
                  <br />
                  <br />
                    <span className='font-medium text-lime-300'>Doorstep Service :</span> Access multiple bike shops' services at your doorstep.
                  <br />
                  <span className='font-medium text-lime-300'>Shop Enrollment :</span> Bike shops expand their reach by enrolling and listing services.
                  <br />
                  <span className='font-medium text-lime-300'>User Booking :</span> Browse, view, and book services hassle-free.
                  <br />
                  <span className='font-medium text-lime-300'>Real-time Chat :</span> Seamless user-shop communication for inquiries.
                  <br />
                  <span className='font-medium text-lime-300'>Payment Options :</span> Securely transact via COD, PayPal, or Stripe.
                </p>
                <div className='mt-3 flex flex-wrap'>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>HTML</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>CSS</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>Java Script</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>React.js</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>Node.js</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>Express.js</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>MongoDB</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>Socket.io</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>Stripe</span>
                </div>
               </div>
            </motion.div>
          </div>
        </div>

        <div>
          <div className="mb-8 flex flex-wrap lg:justify-center md:justify-center">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/4 flex lg:items-center md:justify-center">
              <img src={BookMyDen} alt="" width={300} height={200} className='mb-6 rounded'/>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4 lg:ml-8">
               <h6 className='lg:ml-4 font-semibold text-lg text-white rounded bg-red-500 text-center'>
                BookMyDen
              </h6>
               <div className='lg:ml-4 mt-4'>
                <p className='font-medium pb-2 text-slate-400'>KEY FEATURES :</p>

                <p className='font-light text-sm'>I developed a room booking platform that simplifies user bookings and empowers room owners to efficiently showcase and offer their services.
                  <br />
                  <br />
                    <span className='font-medium text-lime-300'>Service Provider Enrollment :</span> Room owners can easily enroll and list their available rooms on the platform, expanding their customer base and business opportunities.

                  <br />
                  <span className='font-medium text-lime-300'>User Booking System :</span> Users can book a variety of rooms based on their preferences, budget, and location requirements, ensuring a seamless booking experience.
                  <br />
                  <span className='font-medium text-lime-300'>Instant Booking Confirmation :</span>  Upon successful booking, users receive instant confirmation of their reservation, eliminating uncertainty and providing peace of mind.
                  <br />
                </p>
                <div className='mt-3 flex flex-wrap'>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>HTML</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>CSS</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>Java script</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>React.js</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>Node.js</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>Express.js</span>
                  <span className='mr-2 mb-2 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-lime-400'>MongoDB</span>
                </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects