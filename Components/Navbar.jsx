import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return ( 
    <div className='flex justify-between py-5 px-8 items-center font-poppins'>

        <h3 className='text-xl font-bold'>
            Talha
        </h3>
        <div className=' gap-10 flex font-medium  '>
          
          <Link className='text-lg font-medium' to='/'>Home</Link>
          <Link className='text-lg font-medium' to='/About'>About</Link>
          <Link className='text-lg font-medium' to='/Course'>Courses</Link>
          <Link className='text-lg font-medium' to='/Product'>Product</Link>

          
        </div>
    </div>
  )
}

export default Navbar