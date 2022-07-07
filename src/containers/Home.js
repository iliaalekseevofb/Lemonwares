import React, {useState} from 'react';
import {Woman} from "../assets";

const Home = () => {

  const[toggleTabs, setToggleTabs] = useState(1);


  return (
    <div className='w-full flex lg:flex-row flex-col justify-between items-center pt-8 xl:pb-12 pb-8'>
      <div className='lg:w-1/2 w-full lg:block flex flex-col justify-center items-center lg:pr-4 pr-0 lg:pb-0 pb-12'>
        <div className='pb-[25px]'>
          <button onClick={() => setToggleTabs(1)} className={toggleTabs===1 ? 'active-tab sm:px-4 px-3' : 'tab sm:px-4 px-3'}>Hosting</button>
          <button onClick={() => setToggleTabs(2)} className={toggleTabs===2 ? 'active-tab sm:px-4 px-3' : 'tab sm:px-4 px-3'}>Domain</button>
          <button onClick={() => setToggleTabs(3)} className={toggleTabs===3 ? 'active-tab sm:px-4 px-3' : 'tab sm:px-4 px-3'}>SEO</button>
          <button onClick={() => setToggleTabs(4)} className={toggleTabs===4 ? 'active-tab sm:px-4 px-3' : 'tab sm:px-4 px-3'}>Email</button>
        </div>
        <div className={toggleTabs === 1 ? 'flex flex-col justify-center lg:items-start items-center' : 'hidden'}>
          <h1 className='lg:w-auto w-5/6 xl:text-[64px] sm:text-[48px] text-[32px] font-standard font-bold xl:leading-[80px] sm:leading-[60px] leading-[48px] lg:text-left text-center'>Premium Web Hosting for Your Website</h1>
          <p className='lg:w-auto w-5/6 text-[16px] text-[#808080] font-standard tracking-wider sm:py-[40px] py-[24px] lg:text-left text-center'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
          <div className='sm:w-[425px] flex sm:flex-row flex-col justify-between items-center'>
            <button className='w-[200px] button sm:mb-0 mb-4 sm:mr-6 mr-0'>Create an Account</button>
            <button className='w-[200px] button'><a href = "#Plans">Choose your plan</a></button>
          </div>
        </div>
        <div className={toggleTabs === 2 ? 'flex flex-col justify-center lg:items-start items-center' : 'hidden'}>
          <h1 className='lg:w-auto w-5/6 xl:text-[64px] sm:text-[48px] text-[32px] font-standard font-bold xl:leading-[80px] sm:leading-[60px] leading-[48px] lg:text-left text-center'>Choose the most suitable domain for your site</h1>
          <p className='lg:w-auto w-5/6 text-[16px] text-[#808080] font-standard tracking-wider sm:py-[40px] py-[24px] lg:text-left text-center'>Choose from millions of available domains and own them for one of the lowest prices on the market.</p>
          <div className='sm:w-[425px] flex sm:flex-row flex-col justify-between items-center'>
            <button className='w-[200px] button sm:mb-0 mb-4 sm:mr-6 mr-0'>Create an Account</button>
            <button className='w-[200px] button'><a href = "#Plans">Choose your plan</a></button>
          </div>
        </div>
        <div className={toggleTabs === 3 ? 'flex flex-col justify-center lg:items-start items-center' : 'hidden'}>
          <h1 className='lg:w-auto w-5/6 xl:text-[64px] sm:text-[48px] text-[32px] font-standard font-bold xl:leading-[80px] sm:leading-[60px] leading-[48px] lg:text-left text-center'>Leave SEO optimization to our experts</h1>
          <p className='lg:w-auto w-5/6 text-[16px] text-[#808080] font-standard tracking-wider sm:py-[40px] py-[24px] lg:text-left text-center'>Get the experts' opinion and promote your site in search for the best price. Results will shock you!</p>
          <div className='sm:w-[425px] flex sm:flex-row flex-col justify-between items-center'>
            <button className='w-[200px] button sm:mb-0 mb-4 sm:mr-6 mr-0'>Create an Account</button>
            <button className='w-[200px] button'><a href = "#Plans">Choose your plan</a></button>
          </div>
        </div>
        <div className={toggleTabs === 4 ? 'flex flex-col justify-center lg:items-start items-center' : 'hidden'}>
          <h1 className='lg:w-auto w-5/6 xl:text-[64px] sm:text-[48px] text-[32px] font-standard font-bold xl:leading-[80px] sm:leading-[60px] leading-[48px] lg:text-left text-center'>Grow your loyal audience with email newsletters</h1>
          <p className='lg:w-auto w-5/6 text-[16px] text-[#808080] font-standard tracking-wider sm:py-[40px] py-[24px] lg:text-left text-center'>Increase your customer base with regular emails from the professionals at Lemon Wares.</p>
          <div className='sm:w-[425px] flex sm:flex-row flex-col justify-between items-center'>
            <button className='w-[200px] button sm:mb-0 mb-4 sm:mr-6 mr-0'>Create an Account</button>
            <button className='w-[200px] button'><a href = "#Plans">Choose your plan</a></button>
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 w-3/4 flex lg:justify-end justify-center items-center'>
        <img src = {Woman} alt = "Woman" />
      </div>
    </div>
  )
}

export default Home