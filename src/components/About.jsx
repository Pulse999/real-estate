import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{duration:1}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once: false}}
        className='flex flex-col items-center justify-center container mx-auto p-14 md: px-20 lg:px-32
        w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-extralight'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mt-5 mb-10'>We are a leading real estate company committed to providing exceptional services and solutions to our clients. Our mission is to help individuals and families find their dream homes while ensuring a seamless and enjoyable experience throughout the entire process.</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:h-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq.Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                 <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati officia ipsum nihil voluptates necessitatibus quaerat, illum provident vel quia laboriosam enim, culpa ullam velit! Ad autem deserunt quibusdam aliquam ab!</p>
                 <button className='bg-blue-600 text-white py-2 px-8 rounded'>Learn more</button>
            </div>
        </div>

    </motion.div>
  )
}

export default About