import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import { DehazeRounded } from '@mui/icons-material'

import Logo from '../images/logo.svg'
import '../App.css'
import '../styles/Navbar.css'

export const Navbar = ({support}) => {

  let home,announcements,aboutus;
  home=<a href='/' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:500,color:'black',textDecoration:'none',flex:1}}>Home</a>
  announcements=<a href='/announcements' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:500,color:'black',textDecoration:'none',flex:1}}>Announcements</a>
  aboutus=<a href='/aboutus' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:500,color:'black',textDecoration:'none',flex:1}}>About us</a>
  
  if ( window.location.pathname === '/'){
    home=<a href='/' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:800,color:'black',textUnderlineOffset:18,flex:1,textDecorationThickness:3}}>Home</a>
  }
  else if(window.location.pathname === '#announcements'){
    announcements=<a href='#announcements' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:800,color:'black',textUnderlineOffset:18,flex:1,textDecorationThickness:3}}>Announcements</a>
  }
  else if(window.location.pathname === '#aboutus'){
    aboutus=<a href='#aboutus' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:800,color:'black',textUnderlineOffset:18,flex:1,textDecorationThickness:3}}>About us</a>
  }

  let nav
  
    nav=<header className='w-full fixed bg-violet-400 top-0 py-3 px-6 opacity-80 flex flex-rowjustify-between'>
      <div className='md:w-[65%] w-1/3' style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
        <a href='/'><img style={{height:18,marginTop:4}} src={Logo} alt='Logo'/></a>
        <Box className="md:flex hidden" sx={{justifyContent:'space-between',width:400,minWidth:300}}>
          {home}
          {announcements}
          {aboutus}
        </Box>
      </div>
      <div className='flex flex-row justify-end'>
        <Button href='/login' className='signInButton' sx={{color:'black', fontWeight:600, fontSize:14,textTransform:'none',marginRight:1,borderRadius:140,width:70}}>Sign In</Button>
        <Button href="/register" variant='contained' sx={{backgroundColor:'#3199F9',color:'white', fontWeight:600, fontSize:14,textTransform:'none',width:103,borderRadius:168}}>Register</Button>
      </div>
    </header>
  

  return(
  <>
    {nav}
  </>
  )
}

