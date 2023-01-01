import React from 'react'
import {ReactComponent as School} from '../../assets/school.svg';
import {ReactComponent as Vector} from '../../assets/Vector.svg';
import {ReactComponent as Google} from '../../assets/Google.svg';

export default function SignUp() {
  return (
    <div className='flex'>
        <div className='w-1/2 h-screen flex flex-col justify-center items-center'>
            <div>
                <p className='text-3xl font-bold'>Welcome</p>
            </div>
            <form className='flex flex-col justify-center items-center'>
                <div className='pt-4 '>
                    <input type='text' placeholder='First Name' className='border rounded-3xl p-2.5 pl-5 w-[200px]'/>
                    <input type='text' placeholder='Last Name' className='ml-10 border rounded-3xl p-2.5 pl-5 w-[200px]'/>
                </div>
                <div className='pt-4'>
                    <input type='text' placeholder='Email' className='border rounded-3xl p-2.5 pl-5 w-[440px]'/>
                </div>
                <div className='pt-4'>
                    <input type='text' placeholder='Address' className='border rounded-3xl p-2.5 pl-5 w-[440px]'/>
                </div>
                <div className='pt-4'>
                    <input type='password' placeholder='Password' className='border rounded-3xl p-2.5 pl-5 w-[440px]'/>
                </div>
                <div className='pt-4'>
                    <input type='password' placeholder='Confirm Password' className='border rounded-3xl p-2.5 pl-5 w-[440px]'/>
                </div>
                <div className='pt-7'>
                    <button className='border rounded-3xl p-2.5 w-[300px] bg-[#2594FA] text-white'>
                        Sign Up
                    </button>
                </div>
                <div className='pt-4'>
                    <button className='border flex rounded-3xl p-2.5 w-[300px] text-[#2594FA] justify-center'>
                        <Google className='mr-3' /> Sign Up with Google
                    </button>
                </div>
            </form>
        </div>

        <div className='w-1/2 h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <School className='w-[600px] h-[600px]'/>
            </div>
            
        </div>
    </div>
  )
}
