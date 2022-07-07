import React from 'react';
import { CLIbig, JPNLbig, JrangoGlasses, KoraneScents, LeeveOnBig, NadineGhaida } from '../assets';

const Serve = () => {
  return (
    <div id = "About" className='flex lg:flex-row flex-col justify-between items-center md:py-24 py-16'>
      <div className='lg:flex-1 xl:pr-10 pr-0 w-full'>
        <h1 className='font-standard2 xl:text-[48px] text-[36px] font-extrabold pb-4 lg:text-left text-center'>We serve over 100 Nigerian Websites</h1>
        <p className='font-standard2 xl:text-[18px] text-[16px] xl:leading-[32px] leading-[26px] lg:text-left text-center'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
      </div>
      <div className='flex-1 xl:pl-10 pl-6'>
        <div className='flex sm:flex-row flex-col justify-between items-center'>
          <img src = {JPNLbig} alt = "JPNLbig" />
          <img className='sm:px-12 lg:px-0' src = {KoraneScents} alt = "KoraneScents" />
          <img src = {NadineGhaida} alt = "NadineGhaida" />
        </div>
        <div className='flex sm:flex-row flex-col justify-between items-center'>
          <img src = {LeeveOnBig} alt = "LeeveOnBig" />
          <img className='sm:px-12 lg:px-0' src = {JrangoGlasses} alt = "JrangoGlasses" />
          <img src = {CLIbig} alt = "CLIbig" />
        </div>
      </div>
    </div>
  )
}

export default Serve