import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <div>Tewaisuu Restaurant</div>
        <div className='text-red-800'>ADMIN </div>
        <button className='bg-blue-950 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm '>Đăng xuất</button>
    </div>
  )
}

export default Navbar