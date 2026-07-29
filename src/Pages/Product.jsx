import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 pt-4 text-sm '> 
            <Link to='/Product/men'>Men</Link>
            <Link to='/Product/Women'>Women</Link>
            <Link to='/Product/Kids'>Kids</Link>
        </div>
        

        <Outlet/>
    </div>
  )
}

export default Product