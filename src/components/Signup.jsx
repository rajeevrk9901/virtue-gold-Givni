import React from 'react'
import goldImg from '../assets/images/goldImg.png'
import vietue_logo_2 from '../../public/vietue_logo_2.png'
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className='flex justify-center items-center md:mx-16 mx-5 md:my-16 my-5'>
      <div className=' flex md:flex-row flex-col bg-blue-300 shadow-2xl'>
        
        <div className='md:p-10 p-5 w-[400px]'>
        {/* <div className='flex justify-center'> */}
          <h1 className='text-center text-2xl font-semibold text-gray-600 pb-2'>Signup</h1>
        {/* </div> */}
          <form action="">
            <div className='flex gap-2'>
              <i class="fa-solid fa-user bg-white p-3 my-[9px]"></i> <input type="text" name="" id="" placeholder='username' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-envelope bg-white p-3 my-[9px]"></i> <input type="email" name="" id="" placeholder='email' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-mobile bg-white p-3 my-[9px]"></i> <input type="text" name="" id="" placeholder='mobile no' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            {/* <div className='flex gap-2'>
              <i class="fa-solid fa-calendar-days bg-white p-3 my-[9px]"></i> <input type="date"  name="" id="" placeholder='date of birth'  className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none text-gray-400 hover:text-gray-900 focus:text-gray-900' />
            </div> */}
            <div className='flex gap-2'>
              <i class="fa-solid fa-lock bg-white p-3 my-[9px]"></i> <input type="password" name="" id="" placeholder='password' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-key bg-white p-3 my-[9px]"></i><input type="password" name="" id="" placeholder='confirm password' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none ' />
            </div>
            <button className='bg-green-500 text-white text-xl font-semibold py-2 px-3 my-4 w-full'>SIGNUP</button>
            <p className='text-gray-600 font-semibold'>Already Signup? - <a href="" className='text-purple-800'>Login</a></p> 
            

          </form>
        </div>

        <div className=' bg-red-400 text-white px-8 py-14 md:block hidden'>
          <img src={vietue_logo_2} width={150} alt="vietue_logo_2" className='pb-2' /> 
          <img src={goldImg} alt="goldImg" width={200}  />
        </div>

      </div>
    </div>
  )
}

export default Signup