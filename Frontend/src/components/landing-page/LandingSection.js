import { AddCircleRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import Calendar from '../../assets/Calandar.png'
import Cap from '../../assets/cap.png'
import Ellipse from '../../assets/Ellipse.png'
import File from '../../assets/file.png'
import Pen from '../../assets/pen.png'
import Teacher from '../../assets/photo.png'
import {SearchBar} from '../SearchBar'

export const LandingSection = ({variant, support,fct}) => { //variant loggedIn & support mobile

  const handleClick = event => {
    //PostOffer
    fct(true);
  }

  let plusButton
  if(variant === "loggedIn"){
    plusButton = <IconButton id='plus' className="right-10 bottom-10 w-10 h-10" style={{position:'fixed'}}><AddCircleRounded className='text-[#2594FA] hover:text-[#F5AC22] hover:rotate-90 transition-all bottom-10 right-10' sx={{ width: 60, height: 60}} onClick={handleClick} /></IconButton>
  }

  let plusButtonMobile
  if(variant === "loggedIn"){
    plusButtonMobile = <IconButton><AddCircleRounded sx={{color:'#2594FA', width: 55, height: 55}} onClick={handleClick} /></IconButton>
  }

  let landing
  if(support === 'mobile'){
    landing = <div className='cover' style={{display: 'flex', flexDirection: 'column', fontFamily: 'Open Sans', alignItems: 'center'}}>
        <div style={{fontSize: 30, fontWeight: 800, textAlign: 'center', color: '#101010', width: 358, marginBottom: 25, lineHeight: '38px'}}>
          Learning is Great With Our Courses.
        </div>
        <div style={{fontSize: 14, textAlign: 'center', color: '#282828', width: 370, marginBottom: 29, lineHeight: '29px'}}>
          Fhemni is a website that offers visitors a list of courses in any domain they seek, for any level, with the option to add, contact & learn!
        </div>
        <SearchBar variant='colored' support={support}/>
        <img alt='' src={Cap} style={{width: 196}} /> 
        <div style={{position:'relative', left: 180}}> 
          {plusButtonMobile}
        </div> 
    </div>
  }else{
    landing = <div className='px-12 py-4 md:flex flex-col'>
    <div className='flex md:flex-row md:justify-between md:items-start flex-col justify-center items-center'>
    <div className="flex flex-col pt-40 md:justify-start justify-center items-center md:items-start">
      <div className='md:text-5xl text-2xl md:text-left text-center'  style={{fontFamily: 'Open Sans', fontWeight: 800, color:'#101010'}}>
        Learning is Great With Our Courses.
      </div>
      <div className='md:text-left text-center md:text-md text-sm' style={{fontFamily: 'Open Sans', fontWeight: 500, color:'#101010',marginBottom:17,lineHeight:2}}>
        Fhemni is a website that offers visitors a list of courses in any domain they seek, for any level, with the option to add, contact & learn!
      </div>
      <SearchBar variant='colored'/>
    </div>
    <img src={Teacher} className="w-1/2 md:flex hidden" alt="" />
    </div>
    <img alt='' src={Ellipse} style={{position:'absolute', zIndex:-1, left:-15, top: 20,zIndex: -1, height: 130, width:130}}/>
    <img alt='' className='hidden md:flex' src={Pen} style={{position: 'absolute', zIndex: -1, left: 360}}/>
    <div className='w-full items-center justify-center flex'>
      <img alt='' className='z-1 static md:absolute md:z-[-1]' src={Cap} style={{ top: 380,left:10}}/>

    </div>
    <img alt='' className='hidden md:flex' src={Calendar} style={{position: 'absolute',zIndex: -1, top: 520, left: 470}}/>
    <img alt='' className='hidden md:flex' src={File} style={{position: 'absolute',zIndex: -1, top: 395, left: 595}}/>
    <div>
    {plusButton}

    </div>
    
    
  </div>
  }

  return (
    <div className=''>{landing}</div>
  )
}
