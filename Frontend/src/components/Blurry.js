import React from 'react'
import {ReactComponent as Reset} from '../assets/Reset.svg';
import { useState } from 'react';
import Blurry2  from './Blurry2';


export default function Blurry({ isVisible, onClose}) {
    const [showBlurry2, setShowBlurry2] = useState(false)
    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
         justify-center items-center' id='wrapper' onClick={handleClose}>
            <div className='w-[450px]'>
                <div className='bg-white p-4 rounded-2xl'>
                <div className='flex justify-end'>
                    <button className='text-[#D63C3C] font-extrabold text-lg' onClick={() => onClose()}>
                        X
                    </button>
                </div>    
                <p className='text-xl font-bold flex justify-center items-center tracking-wider'>Forget Your Password?</p>
                <form>
                    <div className='pt-8 flex justify-center items-center'>
                        <input type='text' placeholder='Email' className='w-[320px] p-1 pl-5 rounded-2xl border' />
                    </div>
                    <div className='flex justify-center items-center pt-6' onClick={() => setShowBlurry2(true)}>
                        <p className='pb-7' >
                            <Reset className=''/>
                        </p>
                    </div>
                    
                </form>
                </div>
            </div>
            <Blurry2 isVisible={showBlurry2} onClose={() => setShowBlurry2(false)}>

            </Blurry2>
        </div>
  )
}
