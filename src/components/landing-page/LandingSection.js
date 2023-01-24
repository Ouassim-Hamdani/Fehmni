import { AddCircleRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import Calendar from '../../images/Calandar.svg'
import Cap from '../../images/cap.svg'
import Ellipse from '../../images/Ellipse.svg'
import File from '../../images/file.svg'
import Pen from '../../images/pen.svg'
import Teacher from '../../images/teacher.svg'
import SearchBar from '../SearchBar'

const LandingSection = ({variant, support}) => { //variant loggedIn & support mobile

  const handleClick = event => {
    //PostOffer
  }

  let plusButton
  if(variant === "loggedIn"){
    plusButton = <IconButton style={{position:'absolute', top: 500, left: 1190}}><AddCircleRounded sx={{color:'#F5AC22', width: 60, height: 60}} onClick={handleClick} /></IconButton>
  }

  let plusButtonMobile
  if(variant === "loggedIn"){
    plusButtonMobile = <IconButton><AddCircleRounded sx={{color:'#2594FA', width: 55, height: 55}} onClick={handleClick} /></IconButton>
  }

  let landing
  if(support === 'mobile'){
    landing = <div style={{display: 'flex', flexDirection: 'column', fontFamily: 'Open Sans', alignItems: 'center'}}>
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
    landing = <div>
    <img alt='' src={Ellipse} style={{position:'absolute', zIndex:-1, left:-15, top: 20, height: 130, width:130}}/>
    <img alt='' src={Pen} style={{position: 'absolute', zIndex: -1, left: 360}}/>
    <div style={{display: 'flex', flexDirection:'column',width:540, zIndex: 40,gap:30,position:'absolute',left:90, top:91}}>
      <div style={{fontFamily: 'Open Sans', fontWeight: 800, fontSize: 44, color:'#101010',textAlign:'left'}}>
        Learning is Great With Our Courses.
      </div>
      <div style={{fontFamily: 'Open Sans', fontWeight: 500, fontSize: 14, color:'#101010',textAlign:'left',marginBottom:17,lineHeight:2, width: 500}}>
        Fhemni is a website that offers visitors a list of courses in any domain they seek, for any level, with the option to add, contact & learn!
      </div>
      <SearchBar variant='colored'/>
    </div>
    <img alt='' src={Cap} style={{position: 'absolute', top: 380, left: 10}}/>
    <img alt='' src={Calendar} style={{position: 'absolute', top: 520, left: 470}}/>
    <img alt='' src={File} style={{position: 'absolute', top: 395, left: 595}}/>
    <img alt='' src={Teacher} style={{position: 'absolute', left: 800}}/>
    {plusButton}
  </div>
  }

  return (
    <>{landing}</>
  )
}

export default LandingSection