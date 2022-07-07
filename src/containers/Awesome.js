import React from 'react';
import { Triangle1, Triangle2, Triangle3, WhatsApp } from '../assets';

const Awesome = () => {
  return (
    <div id = "Contact" className='flex w-full flex-col justify-center items-center xl:py-20 sm:py-12 py-6 rounded-[16px] bg-[#F7FAFE]'>
      <img className = "relative xl:top-[-100px] sm:top-[-60px] top-[-40px] left-[-100px]" src = {Triangle2} alt = "Triangle"/>
      <h1 className='w-2/3 font-standard font-bold text-center pb-4 xl:text-[64px] lg:text-[48px] sm:text-[36px] text-[28px]'>We're here to make your website awesome.</h1>
      <div className='w-full flex justify-between items-center'>
        <img className = "relative left-[-20px] z-1" src = {Triangle1} alt = "Triangle"/>
        <button className='flex justify-center items-center sm:p-4 p-2 rounded-[8px] bg-[#B00000]'>
          <img className='pr-2' src = {WhatsApp} alt = "WhatsApp"/>
          <p className='font-standard sm:text-[14px] text-[12px] text-[#fff]'>Get  in touch with us</p>
        </button>
        <img className = "relative sm:block hidden right-[-25px]" src = {Triangle3} alt = "Triangle"/>
        <img className = "relative sm:hidden right-[-25px]" src = {Triangle2} alt = "Triangle"/>
      </div>
    </div>
  )
}

export default Awesome