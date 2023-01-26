import { Button } from '@mui/material'
import { Person,Favorite,Logout } from '@mui/icons-material'
import React from 'react'

const ProfilDetails = ({support}) => {

  let details
  if(support==='mobile'){
    details=<div style={{display:'flex',justifyContent:'flex-end',marginRight:35}}>
      <div style={{display:'flex',flexDirection:'column',gap:5,alignItems:'flex-start',paddingTop:4,paddingBottom:4,paddingLeft:15,width:80,marginTop:7,zIndex:100,borderRadius:8}}>
        <Button variant="text" href='/profile' startIcon={<Person/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans', fontSize: 11}}>Profile</Button>
        <Button variant="text" href='/favorites' startIcon={<Favorite/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans', fontSize: 11}}>My favorites</Button>
        <div style={{marginLeft:-40,height:1, width:150, backgroundColor: 'grey'}}></div>
        <Button variant="text" startIcon={<Logout/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans', fontSize: 11}}>Log out</Button>
      </div>
    </div>
  }else{
    details=<div className='bg-white z-[99999999] rounded-lg shadow-md top-20 right-12 w-40' style={{display:'flex',position:'fixed',justifyContent:'flex-end'}}>
      <div className='w-full' style={{display:'flex',flexDirection:'column',gap:5,alignItems:'flex-start',paddingTop:4,paddingBottom:4,marginTop:10,zIndex:100,borderRadius:8}}>
        <Button href='/profile' variant="text" className='w-full' startIcon={<Person/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans'}}>Profile</Button>
        <Button href='/favorites' variant="text" className='w-full' startIcon={<Favorite/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans'}}>My favorites</Button>
        <div style={{height:1, width:"100%", backgroundColor: 'grey'}}></div>
        <Button variant="text" className='w-full text-red-500' startIcon={<Logout/>} sx={{textTransform:'none',fontFamily:'Open Sans'}}>Log out</Button>
      </div>
    </div>
  }

  return (
    <>{details}</>
  )
}

export default ProfilDetails