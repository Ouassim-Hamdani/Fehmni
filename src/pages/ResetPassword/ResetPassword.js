import React from 'react'
import {ReactComponent as Resetpasscoul} from '../../assets/Resetpasscoul.svg';
import {ReactComponent as Onlinestudy} from '../../assets/Onlinestudy.svg';

export default function () {
  return (
    <div className='flex'>
        <div className='w-1/2 h-screen'>
          <Onlinestudy />
        </div>
        <div className='w-1/2 h-screen flex justify-center items-center flex-col'>
            <div>
              logo
            </div>
            <div className='pt-12'>
              <p className='text-3xl font-bold'>Reset Password</p>
            </div>
            <form className='flex justify-center items-center flex-col'>
              <div className='pt-10'>
                <input type='password' placeholder='New Password' className='border p-3 w-[300px] rounded-3xl pl-7' />
              </div>
              <div className='pt-6'>
                <input type='password' placeholder='Confirm Password' className='border p-3 w-[300px] rounded-3xl pl-7' />
              </div>
              <div className='pt-10'>
                <button className='border p-3 w-[300px] rounded-3xl bg-[#2594FA] text-white font-semibold'>
                  Reset
                </button>
              </div>
             
            </form>
        </div>
    </div>
  )
}
