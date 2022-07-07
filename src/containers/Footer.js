import React from 'react';
import { LogoWhite, Heart } from '../assets';

const Footer = () => {

  const Header = (props) => {
    return (
      <h3 className='pb-6 font-standard2 font-bold text-[16px] text-[#fff] leading-[24px] cursor-pointer'>{props.text}</h3>
    )
  }

  const Item = (props) => {
    return (
      <p className='xl:mb-6 mb-4 font-standard2 font-light xl:text-[16px] md:text-[14px] text-[13px] xl:leading-[32px] leading-[28px] text-[#fff] cursor-pointer'>{props.text}</p>
    )
  }

  return (
    <div className='mt-24 xl:px-[112px] md:px-[80px] px-[40px] py-[80px] bg-[#B00000]'>
      <div className='w-full flex lg:flex-row flex-col justify-between items-start'>
        <section className='xl:w-[350px] lg:w-[300px] w-full lg:mr-24 mr-0 lg:pb-0 pb-12'>
          <img className = "pb-4" src = {LogoWhite} alt = "Logo" />
          <p className='font-standard2 xl:text-[16px] text-[14px] xl:leading-[32px] leading-[28px] text-[#fff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
        </section>
        <div className='w-full flex justify-between items-start flex-wrap'>
          <nav className='min-w-[130px] mb-8'>
            <Header text = "Service" />
            <Item text = "Domain" />
            <Item text = "Shared Hosting" />
            <Item text = "Cloud Hosting" />
            <Item text = "Private hosting" />
          </nav>
          <nav className='min-w-[130px] mb-8'>
            <Header text = "Hosting" />
            <Item text = "Cheap Hosting" />
            <Item text = "Hosting Wordpress" />
            <Item text = "Email Hosting" />
            <Item text = "Hosting Unlimited" />
          </nav>
          <nav className='min-w-[130px] mb-8'>
            <Header text = "Company" />
            <Item text = "About" />
            <Item text = "Career" />
            <Item text = "Contact Us" />
          </nav>
          <nav className='min-w-[120px] mb-8'>
            <Header text = "Help" />
            <Item text = "FAQ" />
            <Item text = "Support" />
          </nav>
        </div>
      </div>
      <div className='flex justify-start items-center pt-20'>
        <p className='font-standard2 xl:text-[16px] sm:text-[14px] text-[12px] font-light leading-[32px] text-[#fff]'>Built by Ilia with </p>
        <img className = "px-1" src = {Heart} alt = "Heart"/>
        <p className='font-standard2 xl:text-[16px] sm:text-[14px] text-[12px] font-light leading-[32px] text-[#fff]'> in Moscow. Copyright 2022</p>
      </div>
    </div>
  )
}

export default Footer