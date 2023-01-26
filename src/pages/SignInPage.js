import React from 'react'
import {ReactComponent as Crayon} from '../assets/Crayon.svg';
import {ReactComponent as Google} from '../assets/Google.svg';
import Blurry  from '../components/Blurry';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Blurry2  from '../components/Blurry2';
export const SignInPage = () => {
const [showBlurry, setShowBlurry] = useState(false)

  return (
    <Fragment>
        <div className='flex cover bg-gray-100'>
            <div className='md:w-1/2 w-full h-screen flex flex-col justify-center items-center'>
                <div>
                    <p className='text-3xl font-semibold'>Welcome Back</p>
                </div>
                <form className='flex flex-col justify-center items-center'>
                    <div className='pt-8'>
                        <input type='text' placeholder='Your Email' className='border rounded-3xl p-2.5 pl-5 w-[300px]'/>
                    </div>
                    <div className='pt-6'>
                        <input type='password' placeholder='Your Password' className='border rounded-3xl p-2.5 pl-5 w-[300px]'/>
                    </div>
                    <div className='pt-8'>
                        <button className='border rounded-3xl p-2.5 w-[300px] bg-[#2594FA] text-white'>
                            Sign in
                        </button>
                    </div>
                    <div className='pt-6 '>
                        <button className='border flex rounded-3xl bg-white p-2.5 w-[300px] text-[#2594FA] justify-center font-semibold'>
                            <Google className='mr-3' /> Sign In with Google
                        </button>
                    </div>
                    <div className='pt-3' onClick={() => setShowBlurry(true)}>
                        <p className='text-[#2594FA] cursor-pointer'>Forget your password?</p>
                    </div>
                </form>
            </div>
            <div className='w-1/2 h-screen md:flex hidden'>
                <div className='flex justify-center items-center'>
                    <Crayon className='w-[500px] h-[600px]'/>
                </div>
            </div>   
        </div>
        <Blurry isVisible={showBlurry} onClose={() => setShowBlurry(false)}>

        </Blurry>

        

        

    </Fragment>
    
    
  )
}