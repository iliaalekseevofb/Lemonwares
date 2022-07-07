import React, {useState} from 'react';
import { Logo, Phone } from '../assets';
import {IoMdMenu} from "react-icons/io";
import {VscChromeClose} from "react-icons/vsc";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);

  const Login = () => {

    return (
      <div className={toggleLogin ? 'fixed top-0 left-0 w-full h-full loginBackground z-10' : 'hidden top-0 left-0 w-full h-full loginBackground z-10'}>
          <div className='w-full flex justify-center items-center'>
              <div className='w-full relative top-[100px] xl:w-[600px] xl:h-[520px] lg:w-[500px] lg:h-[420px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[400px] w-[280px] h-[450px] bg-white rounded-[10px]'>
                  <div className='flex justify-center items-center w-full text-center font-standard font-semibold md:text-[20px] lg:text-[24px] xl:text-[32px] py-3 sm:py-4 lg:py-6 signGradient rounded-t-[10px] text-white'>
                      <VscChromeClose onClick={() => setToggleLogin(false)} className='absolute right-[20px] cursor-pointer' size={28} color = "#fff" /><h2>Sign In</h2>
                  </div>
                  <div className='pt-8 flex flex-col w-full justify-center items-center'>
                      <input placeholder='Login' className='p-2 sm:p-3 xl:p-4 rounded-full outline-0 bg-[#E7E7E7] sm:w-2/3 w-5/6 mb-4'></input>
                      <input placeholder='Password' className='p-2 sm:p-3 xl:p-4 rounded-full outline-0 bg-[#E7E7E7] sm:w-2/3 w-5/6'></input>
                  </div>
                  <div className='w-full flex justify-center items-center mt-6'>
                      <p className='font-standard pr-1'>Forgot</p>
                      <a className='font-standard text-[#B00000]' href = "./">Login</a>
                      <p className='font-standard px-1'>/</p>
                      <a className='font-standard text-[#B00000]' href = "./">Password</a>
                      <p className='font-standard'>?</p>
                  </div>
                  <div className='w-full flex justify-center items-center mt-6'>
                      <a href = "./" className='px-6 md:px-8 xl:px-10 py-2 md:py-3 xl:py-4 signGradient text-white md:text-[16px] xl:text-[20px] font-standard font-semibold rounded-full'>Sign In</a>
                  </div>
                  <div className='flex sm:flex-row flex-col justify-center items-center mt-8'>
                      <p className='pr-1 font-standard'>Don't have an account yet?</p>
                      <a className='font-standard text-[#B00000]' href = "./"> Sign Up</a>
                  </div>
              </div>
          </div>
      </div>
    )
  }

  const NavMenuLg = () => {
    return (
      <div className='xl:hidden absolute sm:top-[20vh] top-[15vh] right-0 left-0 bg-[#fff] flex flex-col justify-center items-center shadow-xl'>
        <a href = "#About" onClick={() => {setToggleMenu(false)}} className='w-full text-center NavMenuItem font-standard font-medium text-[18px] py-5 border-t-[1px] border-[#C4C4C4]'>About</a>
        <a href = "#BlogNews" onClick={() => {setToggleMenu(false)}} className='w-full text-center NavMenuItem font-standard font-medium text-[18px] py-5'>Blog&News</a>
        <a href = "#Contact" onClick={() => {setToggleMenu(false)}} className='w-full text-center NavMenuItem font-standard font-medium text-[18px] py-5'>Contact</a>
        <a href = "#Plans" onClick={() => {setToggleMenu(false)}} className='lg:hidden block font-standard font-semibold text-[18px] text-[#B00000] py-5 NavMenuItem w-full text-center'>Our Services</a>
        <button onClick={() => {
          setToggleMenu(false)
          setToggleLogin(true)
          }} className='lg:hidden block font-standard font-semibold text-[18px] text-[#B00000] py-5 NavMenuItem w-full text-center'>Account</button>
      </div>
    )
  }

  return (
    <div className='w-full flex justify-between items-center sm:h-[20vh] h-[15vh]'>
      <div className='flex justify-between items-center lg:w-[270px] w-auto'>
        <a href = "./"><img src = {Logo} alt = "Logo" /></a>
        <div className='border-b-[3px] border-[#B00000] leading-loose lg:block hidden'>
          <a href = "#Plans" className='font-standard font-semibold text-[15px]'>Our Services</a>
        </div>
      </div>

      <nav className='xl:flex hidden justify-between items-center w-[320px]'>
        <a href = "#About" className='font-standard font-semibold text-[15px]'>About</a>
        <a href = "#BlogNews" className='font-standard font-semibold text-[15px]'>Blog&News</a>
        <a href = "#Contact" className='font-standard font-semibold text-[15px]'>Contact</a>
      </nav>

      <div className='flex justify-end items-center'>
        <button onClick={() => {setToggleLogin(true)}} className='font-standard font-semibold text-[15px] pr-6 border-r-2 border-[#DAD8D8] sm:block hidden mr-4'>Account</button>
        <a href='./' className='sm:flex hidden justify-center items-center pl-2'>
          <img className = "pr-2" src = {Phone} alt = "Phone" />
          <p className='font-standard font-semibold text-[15px] mr-4'>+2349067322844</p>
        </a>
        {toggleMenu
        ? <VscChromeClose className = "xl:hidden block cursor-pointer" size={32} color = "#000" onClick={() => {setToggleMenu(false)}}/>
        : <IoMdMenu className = "xl:hidden block cursor-pointer" size={32} color = "#000" onClick={() => {setToggleMenu(true)}}/>}
        {toggleMenu && (<NavMenuLg />)}
        {toggleLogin && (<Login />)}
      </div>
    </div>
  )
}

export default Navbar