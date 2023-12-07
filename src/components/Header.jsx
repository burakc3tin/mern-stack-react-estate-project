import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
        <h1 className='font-bold text-xl sm:text-3xl flex flex-wrap'>
            <span className='text-slate-500'>Burak</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center" action="">
            <input type="text" className='bg-transparent focus:outline-none w-24 sm:w-64' placeholder="Search..." name="" id="" />
            <FaSearch className='text-slate-500'/>
        </form>
        <ul className='flex gap-4'>
            <Link to="/home">
            <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer font-bold'>Home</li></Link>
            <Link to="/about">
            <li  className='hidden sm:inline text-slate-700 hover:underline cursor-pointer font-bold'>About</li></Link>
            <Link to="/signin">
            <li  className=' text-slate-700 hover:underline cursor-pointer font-bold'>Sign In</li>
            </Link>
        </ul>
        </div>
  
    </header>
  )
}