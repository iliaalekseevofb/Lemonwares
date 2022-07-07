import React, {useState} from 'react';
import { Check } from '../assets';

const Packages = () => {

  const[toggleSwitch, setToggleSwitch] = useState(true);
  const[toggleTabSwitch, setToggleTabSwitch] = useState(true);
  const[toggleMonthly, setToggleMonthly] = useState(true);
  const[toggleBasic, setToggleBasic] = useState(true);

  const Header = () => {
    return (
      <div className='flex flex-col jsutify-center items-center xl:pb-12 pb-8'>
        <h1 className='max-w-[650px]font-standard font-semibold xl:text-[50px] sm:text-[36px] text-[28px] text-center pb-4'>Ready to get started with Lemon Wares?</h1>
        <h3 className='font-standard xl:text-[25px] sm:text-[20px] text-[18px] text-center'>Choose the package that suits you</h3>
      </div>
    )
  }

  const Button = () => {
    return (
      <div>
        {toggleSwitch ?
          <button onClick = {() => {
            setToggleSwitch(false)
            setToggleMonthly(false)
          }} className='flex w-[93px] h-[50px] items-center px-[9px] rounded-[73px] bg-[#B00000] cursor-pointer'>
            <div className='w-[30px] h-[30px] bg-[#fff] rounded-full'></div>
          </button>
        : <button onClick = {() => {
          setToggleSwitch(true)
          setToggleMonthly(true)
          }} className='flex w-[93px] h-[50px] justify-end items-center px-[9px] rounded-[73px] bg-[#B00000] cursor-pointer'>
            <div className='w-[30px] h-[30px] bg-[#fff] rounded-full'></div>
          </button>
        }
      </div>
    )
  }

  const Switcher = () => {
    return (
      <div className='flex xl:w-[500px] sm:w-[450px] w-[320px] justify-between items-center sm:pl-[80px] pl-0'>
        <h3 className='font-standard xl:text-[25px] sm:text-[20px] text-[18px]'>Monthly</h3>
        <Button />
        <div className='flex sm:flex-row flex-col justify-between items-center'>
          <h3 className='font-standard xl:text-[25px] sm:text-[20px] text-[18px] pr-4'>Yearly</h3>
          <p className='w-fit px-2 py-1 font-standard text-[10px] font-medium bg-[#FFE87A] rounded-[8px]'>
            20% discount
          </p>
        </div>
      </div>
    )
  }

  const TabSwitcher = () => {
    return (
      <div className='w-full flex justify-center items-center'>
        {
          toggleTabSwitch 
            ?
            <div className='flex sm:w-[50%] w-[90%] justify-center items-center xl:pt-16 xl:pb-16 pt-8 pb-12'>
              <button onClick = {() => {
                setToggleTabSwitch(true)
                setToggleBasic(true)
                }} className='w-1/2 font-standard font-semibold xl:text-[30px] text-[24px] xl:leading-auto leading-[40px] border-b-4 border-[#B00000] text-center'>Basic</button>
              <button onClick = {() => {
                setToggleTabSwitch(false)
                setToggleBasic(false)
                }} className='w-1/2 font-standard font-semibold xl:text-[30px] text-[24px] xl:leading-auto leading-[40px] border-b-4 border-[#C4C4C4] text-center'>Premium</button>
            </div>
            : 
            <div className='flex justify-center items-center sm:w-[50%] w-[90%] xl:pt-16 xl:pb-16 pt-8 pb-12'>
              <button onClick = {() => {
                setToggleTabSwitch(true)
                setToggleBasic(true)
                }} className='w-1/2 font-standard font-semibold xl:text-[30px] text-[24px] xl:leading-auto leading-[40px] border-b-4 border-[#C4C4C4] text-center'>Basic</button>
              <button onClick = {() => {
                setToggleTabSwitch(false)
                setToggleBasic(false)
                }} className='w-1/2 font-standard font-semibold xl:text-[30px] text-[24px] xl:leading-auto leading-[40px] border-b-4 border-[#B00000] text-center'>Premium</button>
            </div>
        }
      </div>
    )
  }

  const CheckBox = (props) => {
    return (
      <div className='flex items-center pb-4'>
        <img className='pr-6' src = {Check} alt = "Check" />
        <p className={toggleBasic ? 'font-standard2 font-bold text-[16px] text-[#808080]' : 'font-standard2 font-bold text-[16px] text-[#000]'}>{props.feature}</p>
      </div>
    )
  }

  const Package = (props) => {
    return (
      <div className = {toggleBasic ? 'xl:w-[300px] w-[270px] h-[700px] border-2 border-[#C4C4C4] rounded-[15px] p-8 cursor-pointer mx-8 lg:mb-0 mb-8' : 'hidden xl:w-[300px] w-[270px] h-[700px] border-2 border-[#C4C4C4] rounded-[15px] p-8 cursor-pointer mx-8 lg:mb-0 mb-8'}>
        <header className='font-standard font-semibold text-[28px] pb-1'>{props.type}</header>
        <p className='font-standard text-[12px] leading-[18px] pb-6'>with all your customers via all conversation channels in one central dashboard.</p>
        <h1 className={toggleMonthly ? 'font-standard font-semibold text-[42px] leading-[42px] pb-2' : 'font-standard font-semibold text-[42px] leading-[32px] pb-2 yearlyColor'}>{props.price}</h1>
        <p className='font-standard font-light text-[14px] pb-8'>{toggleMonthly ? 'Per month' : 'Per year'}</p>
        <button className='button2 font-standard font-semibold text-[14px] w-full py-3 mb-6'>Choose this Plan</button>
        <CheckBox feature = "2GB SSD" />
        <CheckBox feature = "10GB Bandwidth" />
        <CheckBox feature = "15 Email Accounts" />
        <CheckBox feature = "Unlimited Database" />
        <CheckBox feature = "4 Subdomains" />
        <CheckBox feature = "1 Parked Domain" />
        <CheckBox feature = "2 Websites" />
        <CheckBox feature = "Free SSL" />
        <CheckBox feature = "Softaculous" />
      </div>
    )
  }

  const PackagePremium = (props) => {
    return (
      <div className = {toggleBasic ? 'hidden xl:w-[300px] w-[270px] h-[700px] border-2 border-[#C4C4C4] rounded-[15px] p-8 cursor-pointer mx-8 lg:mb-0 mb-8 premiumPackage' : 'xl:w-[300px] w-[270px] h-[700px] border-2 border-[#C4C4C4] rounded-[15px] p-8 cursor-pointer mx-8 lg:mb-0 mb-8 premiumPackage'}>
        <header className='font-standard font-semibold text-[28px] pb-1'>{props.type}</header>
        <p className='font-standard text-[12px] leading-[18px] pb-6'>with all your customers via all conversation channels in one central dashboard.</p>
        <h1 className={toggleMonthly ? 'font-standard font-semibold text-[42px] leading-[42px] pb-2' : 'font-standard font-semibold text-[42px] leading-[32px] pb-2 yearlyColor'}>{props.price}</h1>
        <p className='font-standard font-light text-[14px] pb-8'>{toggleMonthly ? 'Per month' : 'Per year'}</p>
        <button className='button2 font-standard font-semibold text-[14px] w-full py-3 mb-6'>Choose this Plan</button>
        <CheckBox feature = "10GB SSD" />
        <CheckBox feature = "20GB Bandwidth" />
        <CheckBox feature = "30 Email Accounts" />
        <CheckBox feature = "Unlimited Database" />
        <CheckBox feature = "8 Subdomains" />
        <CheckBox feature = "1 Parked Domain" />
        <CheckBox feature = "4 Websites" />
        <CheckBox feature = "Free SSL" />
        <CheckBox feature = "Softaculous" />
      </div>
    )
  }

  return (
    <div id = "Plans" className='xl:pt-16 pt-8 flex flex-col justify-center items-center pb-12'>
      <Header />
      <Switcher />
      <TabSwitcher />
      <div className='flex lg:flex-row flex-col justify-between items-center'>
        <Package type = "Starter" price = {toggleMonthly ? "$2.80" : "$27.00" }/>
        <Package type = "Standard" price = {toggleMonthly ? "$4.20" : "$40.00"} />
        <Package type = "Suprem" price = {toggleMonthly ? "$7.00" : "$67.00"} />
        <PackagePremium type = "Starter" price = {toggleMonthly ? "$4.20" : "$40.00" }/>
        <PackagePremium type = "Standard" price = {toggleMonthly ? "$7.00" : "$67.00"} />
        <PackagePremium type = "Suprem" price = {toggleMonthly ? "$12.40" : "$120.00"} />
      </div>
    </div>
  )
}

export default Packages;