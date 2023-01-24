import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import { DehazeRounded } from '@mui/icons-material'

import Logo from '../images/logo.svg'
import '../App.css'
import '../styles/Navbar.css'

const Navbar = ({support}) => {

  let home,announcements,aboutus;
  home=<a href='/home' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:500,color:'black',textDecoration:'none',flex:1}}>Home</a>
  announcements=<a href='/announcements' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:500,color:'black',textDecoration:'none',flex:1}}>Announcements</a>
  aboutus=<a href='/aboutus' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:500,color:'black',textDecoration:'none',flex:1}}>About us</a>
  
  if(window.location.pathname === '/home' || window.location.pathname === '/'){
    home=<a href='/home' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:800,color:'black',textUnderlineOffset:18,flex:1,textDecorationThickness:3}}>Home</a>
  }
  else if(window.location.pathname === '/announcements'){
    announcements=<a href='/announcements' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:800,color:'black',textUnderlineOffset:18,flex:1,textDecorationThickness:3}}>Announcements</a>
  }
  else if(window.location.pathname === '/aboutus'){
    aboutus=<a href='/aboutus' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:800,color:'black',textUnderlineOffset:18,flex:1,textDecorationThickness:3}}>About us</a>
  }

  let nav
  if(support==='mobile'){
    nav=<header>
      <a href='/'><img style={{height:16 ,marginTop:4}} src={Logo} alt='Logo'/></a>
      <IconButton><DehazeRounded sx={{color:'black', width: 25}}/></IconButton>
    </header>
  }else{
    nav=<header>
      <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width : '65%'}}>
        <a href='/'><img style={{height:18,marginTop:4}} src={Logo} alt='Logo'/></a>
        <Box sx={{display: 'flex',justifyContent:'space-between',width:400,minWidth:300}}>
          {home}
          {announcements}
          {aboutus}
        </Box>
      </div>
      <div>
        <Button className='signInButton' sx={{color:'black', fontWeight:600, fontSize:14,textTransform:'none',marginRight:1,borderRadius:140,width:70}}>Sign In</Button>
        <Button variant='contained' sx={{backgroundColor:'#3199F9',color:'white', fontWeight:600, fontSize:14,textTransform:'none',width:103,borderRadius:168}}>Register</Button>
      </div>
    </header>
  }

  return(
  <>
    {nav}
  </>
  )
}

export default Navbar