import React from 'react'
import { Link } from 'react-router-dom'
import {CiLocationOn} from 'react-icons/ci'
import { FiCalendar, FiClock, FiDollarSign } from 'react-icons/fi'
import {  motion } from "framer-motion"
import Swal from 'sweetalert2'



const Card = ({data}) => {
    const {companyName,companyLogo,jobTitle,minPrice,maxPrice,salaryType,jobLocation,postingDate,employmentType,description}=data
    
    const handleApply=async()=>{
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }
    return (
    <section className='card'>
        <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}  
        transition={{duration:.9,type:'spring'}}>
        <Link to={'/'} className='flex gap-4 flex-col sm:flex-row items-start'>
            <img src={companyLogo} alt="" height={'80px'} width={'80px'}/>
            <div>
                <h4 className='text-primary mb-1'>{companyName}</h4>
                <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

                <div className='text-primary/70 text-base flex flex-wrap gap-3 mb-2'>
                    <span className='flex items-center gap-'><CiLocationOn/>{jobLocation}</span>
                    <span className='flex items-center gap-'><FiClock/>{employmentType}</span>
                    <span className='flex items-center gap-'><FiDollarSign/>{minPrice}-{maxPrice}k</span>
                    <span className='flex items-center gap-'><FiCalendar/>{postingDate}</span>
                </div>

                <p className='text-base text-primary/70'>{description}</p>
                <button onClick={handleApply} className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'>Apply Now</button>
            </div>
        </Link>
        </motion.div>
    </section>
  )
}

export default Card