import React, { useState } from 'react'
import Location from './Location'
import JobPostDate from './JobPostDate'
import WorkExp from './WorkExp'
import EmpType from './EmpType'
import {  motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io";



const Sidebar = ({handleChange}) => {
  const [show, setshow] = useState(false)
  return (
    

    <div className='space-y-5'>
        <div className='flex flex-row justify-between'>
          <h3 className='text-lg font-bold mb-2'>Filters</h3>
          <motion.button 
          whileHover={{scale:1.5}} transition={{duration:.3,type:'tween'}}
          onClick={(e)=>setshow(!show)} className='bg-transparent'><IoIosArrowDown />
          </motion.button>
        </div>
       
        

        <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}  
        transition={{duration:.9,type:'spring'}}
        className={`space-y-5 ${show?'block':'hidden'}`}>
          <Location handleChange={handleChange}/>
          <JobPostDate handleChange={handleChange}/>
          <WorkExp handleChange={handleChange}/>
          <EmpType handleChange={handleChange}/>
        </motion.div>


    </div>
  
  )
}

export default Sidebar