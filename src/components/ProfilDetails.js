import { Button } from '@mui/material'
import { Person,Favorite,Logout } from '@mui/icons-material'
import React from 'react'

const ProfilDetails = ({support}) => {

  let details
  if(support==='mobile'){
    details=<div style={{display:'flex',justifyContent:'flex-end',marginRight:35}}>
      <div style={{display:'flex',flexDirection:'column',gap:5,alignItems:'flex-start',paddingTop:4,paddingBottom:4,paddingLeft:15,width:80,marginTop:7,zIndex:100,borderRadius:8}}>
        <Button variant="text" startIcon={<Person/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans', fontSize: 11}}>Profile</Button>
        <Button variant="text" startIcon={<Favorite/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans', fontSize: 11}}>My favorites</Button>
        <div style={{marginLeft:-40,height:1, width:150, backgroundColor: 'grey'}}></div>
        <Button variant="text" startIcon={<Logout/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans', fontSize: 11}}>Log out</Button>
      </div>
    </div>
  }else{
    details=<div style={{display:'flex',justifyContent:'flex-end',marginRight:60}}>
      <div style={{display:'flex',flexDirection:'column',gap:5,alignItems:'flex-start',paddingTop:4,paddingBottom:4,paddingLeft:50,width:168,marginTop:10,zIndex:100,borderRadius:8}}>
        <Button variant="text" startIcon={<Person/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans'}}>Profile</Button>
        <Button variant="text" startIcon={<Favorite/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans'}}>My favorites</Button>
        <div style={{marginLeft:-40,height:1, width:200, backgroundColor: 'grey'}}></div>
        <Button variant="text" startIcon={<Logout/>} sx={{textTransform:'none', color:'black',fontFamily:'Open Sans'}}>Log out</Button>
      </div>
    </div>
  }

  return (
    <>{details}</>
  )
}

export default ProfilDetails