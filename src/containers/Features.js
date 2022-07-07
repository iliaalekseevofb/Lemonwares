import React from 'react';
import { Blazing, SSL, Support, Uptime } from '../assets';

const Features = () => {

  const Item = (props) => {
    return (
      <div className={'flex flex-col justify-center items-center ' + props.className}>
        <img src = {props.src} alt = "Feature" />
        <h3 className='font-standard font-bold text-[20px] pt-[12px] pb-[8px] text-center'>{props.heading}</h3>
        <p className='font-standard font-light text-[12px] text-center'>{props.text}</p>
      </div>
    )
  }

  return (
    <div className='flex sm:flex-row flex-col justify-between items-start xl:pt-12 pt-8 xl:pb-16 pb-12'>
      <div className='flex sm:block lg:flex justify-center items-center sm:flex-row flex-col lg:justify-between lg:items-start lg:pr-0 pr-4'>
        <Item className = "lg:pr-[60px] lg:pb-0 pb-12" src = {Uptime} heading = "99.9% Uptime" text = "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."/>
        <Item className = "lg:pr-[60px] lg:pb-0 pb-12" src = {Blazing} heading = "Blazing Fast Web Hosting" text = "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."/>
      </div>
      <div className='sm:block lg:flex lg:justify-between lg:items-start lg:pr-0 pr-4'>
        <Item className = "lg:pr-[60px] lg:pb-0 pb-12" src = {SSL} heading = "Free SSL Certificates" text = "We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."/>
        <Item src = {Support} heading = "24x7 Friendly Support" text = "We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."/>
      </div>
    </div>
  )
}

export default Features