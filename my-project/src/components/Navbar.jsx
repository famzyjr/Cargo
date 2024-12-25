import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../Assets/nav-logo.png';
const Navbar = () => {
  return (
    <div className='flex  items-center  fixed left-0 top-0 mt-10'>
     <img src={image} alt="" />
     <div className='bg-[#FFFFFF80]   flex justify-center items-center w-[522px] h-[88px] rounded-[50px]'>
     <ul className=' flex justify-center  gap-10'>
       <NavLink to='/'><li>Home</li></NavLink>
       <NavLink to='/About'><li>About</li></NavLink>
       <NavLink to='/services'><li>Service</li></NavLink>
       <NavLink to='/Blog'><li>Blog</li></NavLink>
        <div><NavLink to='/'><li >Contact Us</li></NavLink></div>
      </ul>
      
     </div>
    </div>
  )
}

export default Navbar