import React from 'react'
import {ReactComponent as Reset} from '../assets/Reset.svg';
import {ReactComponent as Inbox} from '../assets/Inbox.svg';

export default function Blurry({ isVisible, onClose}) {
    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper2') onClose();
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-none flex
         justify-center items-center' id='wrapper2' onClick={handleClose}>
            <div className='w-[450px]'>
                <div className='bg-white p-4 rounded-2xl'>
                <div className='flex justify-end'>
                    <button className='text-[#D63C3C] font-extrabold text-lg' onClick={() => onClose()}>
                        X
                    </button>
                </div>
                    <div className='flex justify-center'>
                        <p className='text-xl font-bold tracking-wider pt-2'>Check Your Inbox</p>
                    </div>
                    <div className='flex justify-center pt-3'>
                        <Inbox className='w-[70px]'/>
                    </div>
                    <div className='flex justify-center'>
                        <p className='pb-5'>An email has been sent to you.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
