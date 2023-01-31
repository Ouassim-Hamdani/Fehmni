import { SendRounded } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'

export const Host = ({support,imageSource, hostName}) => {

  let userPicture
  if(imageSource === undefined){
    userPicture = <Avatar style={{width : 40 , height : 40}}/>
  }else{
    userPicture = <Avatar style={{width : 40 , height :40}}><img alt='' src={imageSource} style={{width : 50 , height : 50, borderRadius: 25}}/></Avatar>
  }

  let userPictureMobile
  if(imageSource === undefined){
    userPictureMobile = <Avatar style={{width : 46 , height : 46}}/>
  }else{
    userPictureMobile = <Avatar style={{width : 46 , height : 46}}><img alt='' src={imageSource} style={{width : 46 , height : 46, borderRadius: 23}}/></Avatar>
  }

  let host
  if(support==='mobile'){
    host=<div style={{fontFamily: 'Open Sans', display:'flex', flexDirection: 'column', alignContent:'center', gap:8, paddingLeft: 30, paddingRight: 30}}>
    <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{fontWeight: 700, fontSize: 24, marginBottom: 8, textAlign:'start', paddingLeft: 5}}>Host</div>
      <Button variant='contained' endIcon={<SendRounded sx={{transform: 'rotate(-38.22deg)', width: 11, marginTop: -0.5}} />} sx={{backgroundColor: '#3199F9', color: 'white', width: 80, height: 28, borderRadius: 60, fontWeight: 600, fontSize: 11, textTransform:'none'}}>Enroll</Button>
    </div>
    <div style={{backgroundColor: 'white',borderRadius: 20, fontSize: 16, paddingLeft: 17, paddingTop: 9, paddingBottom: 9, paddingRight : 25, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div className='text-gray-800' style={{display : 'flex', fontSize: 16, fontWeight: 600, gap: 15, alignItems:'center', color: '#5B5B5B'}}>
        {userPictureMobile}
        {hostName}
      </div>
    </div>
  </div>
  }else{
    host=<div className='mx-12' style={{ fontFamily: 'Open Sans', display:'flex', flexDirection: 'column', alignContent:'center', gap:8}}>
      <div className='md:text-start text-center' style={{fontWeight: 600, fontSize: 26}}>Host</div>
      <div className='shadow-lg border border-gray-200' style={{backgroundColor: 'white', borderRadius: 10, fontSize: 16, paddingLeft: 17, paddingTop: 9, paddingBottom: 9, paddingRight : 25, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className='text-sm' style={{display : 'flex', fontWeight: 500, gap: 12, alignItems:'center', color: '#5B5B5B'}}>
          {userPicture}
          {hostName}
        </div>
        <Button variant='contained' endIcon={<SendRounded sx={{transform: 'rotate(-38.22deg)', width: 16, marginTop: -0.5}} />} className="w-28" sx={{backgroundColor: '#3199F9', color: 'white', width: 120, borderRadius: 60, fontWeight: 600, fontSize: 14, textTransform:'none'}}>Enroll</Button>
      </div>
    </div>
  }
  return (
    <>{host}</>
  )
}

