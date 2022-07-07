import React from 'react';
import { CloudFlare, cPanel, imunify360, LiteSpeed, Sobtaculous, WordPress } from '../assets';

const Brands = () => {
  return (
    <div id = "About" className='flex xl:flex-row flex-col justify-between items-center xl:py-16 sm:py-8 py-4'>
      <div className='w-full xl:w-auto sm:w-5/6 xl:flex-1 pr-6 xl:pb-0 lg:pb-8 pb-12'>
        <h1 className='font-standard2 xl:text-[48px] text-[36px] font-extrabold xl:text-left text-center pb-4'>True Cloud Web  Hosting</h1>
        <p className='font-standard2 xl:text-[18px] text-[16px] leading-[24px] sm:leading-[32px] xl:text-left text-center'>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
      </div>
      <div className='xl:w-auto lg:w-2/3 md:w-5/6 w-full xl:flex-1 lg:pl-6'>
        <div className='flex sm:flex-row flex-col justify-between items-center'>
          <img className = "sm:pb-0 pb-10" src = {cPanel} alt = "cPanel" />
          <img className = "sm:pb-0 pb-10" src = {imunify360} alt = "imunify360" />
          <img className = "sm:pb-0 pb-10" src = {LiteSpeed} alt = "LiteSpeed" />
        </div>
        <div className='flex sm:flex-row flex-col justify-between items-center'>
          <img className = "sm:pb-0 pb-10" src = {Sobtaculous} alt = "Sobtaculous" />
          <img className = "sm:pb-0 pb-10" src = {WordPress} alt = "WordPress" />
          <img className = "sm:pb-0 pb-10" src = {CloudFlare} alt = "CloudFlare" />
        </div>
      </div>
    </div>
  )
}

export default Brands