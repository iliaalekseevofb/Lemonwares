import React from 'react';
import { Quote, CLI, JPNL, LeeveOn, QuoteSmall } from '../assets';

const Testimonials = () => {

  const Testimonial = (props) => {
    return (
      <div className={props.className}>
        <img src = {QuoteSmall} className = {props.classNameQuote} alt = "Testimonial" />
        <div className='pl-4'>
          <img className = "pb-3" src = {props.src} alt = "QuoteSmall" />
          <div>
            <p className='font-standard2 xl:text-[16px] text-[14px] xl:leading-[32px] leading-[24px]'>{props.text}</p>
            <h4 className='font-standard2 font-bold text-[18px] pt-3'>{props.author}</h4>
            <p className='font-standard2 font-medium text-[14px] text-[#969BAB]'>{props.position}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id = "BlogNews" className='sm:pt-12 pt-4 flex md:flex-row flex-col justify-center items-center'>
      <div className='xl:w-5/12 md:w-1/2 w-full md:pr-8 md:mb-0 mb-12'>
        <img className='absolute' src = {Quote} alt = "Testimonial" />
        <div className='pt-14 md:pl-24 pl-0 pb-8'>
          <h1 className='font-standard2 font-extrabold xl:text-[48px] sm:text-[36px] text-[32px] md:text-left text-center'>Real Stories from Real Customers</h1>
          <p className='font-standard2 xl:text-[18px] text-[16px] md:text-left text-center' >Get inspired by these stories.</p>
        </div>
        <div className='w-full flex md:justify-end justify-center'>
          <Testimonial 
            className = "flex xl:w-[350px] md:w-[270px] w-full xl:h-[458px] h-[360px] justify-center items-start rounded-[8px] testimonial-shadow px-8 py-4" 
            classNameQuote = "pt-24"
            src = {CLI} 
            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem"
            author = "Floyd Miles"
            position = "Vice President, CLI"
          />
        </div>
      </div>
      <div className='xl:w-5/12 md:w-1/2 w-full'>
        <Testimonial
          className = "flex xl:w-[445px] md:w-[370px] w-full xl:h-[340px] md:h-[280px] h-auto justify-center items-start mb-8 rounded-[8px] testimonial-shadow px-8 py-4" 
          classNameQuote = "pt-24"
          src = {JPNL} 
          text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem"
          author = "Jane Cooper"
          position = "CEO, JPNL"
        />
        <Testimonial
          className = "flex xl:w-[350px] md:w-[320px] w-full xl:h-[256px] md:h-[220px] h-auto md:justify-center justify-start items-start rounded-[8px] testimonial-shadow px-8 py-4" 
          classNameQuote = "pt-24"
          src = {LeeveOn} 
          text = "LemonWares saved our time in Hosting my company page."
          author = "Kristine Watson"
          position = "Co-Founder, LeeveOn Branding"
        />
      </div>
    </div>
  )
}

export default Testimonials