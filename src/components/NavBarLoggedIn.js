import React, { useState } from 'react'
import { Avatar, Badge, Box } from '@mui/material'
import { ExpandMore,ExpandLess } from '@mui/icons-material'

import Logo from '../images/logo.svg'
import NotificationIcon from '../images/NotificationIcon.svg'

import Notification from './Notification'
import ProfilDetails from './ProfilDetails'

import '../App.css'
import '../styles/Navbar.css'  

export const NavBarLoggedIn = ({invisible,name,imageSource,nameNotification,session,support}) => {
  
  let home,announcements,aboutus

  home=<a href='/' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:500,color:'black',textDecoration:'none',flex:1}}>Home</a>
  announcements=<a href='#announcements' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:500,color:'black',textDecoration:'none',flex:1}}>Announcements</a>
  aboutus=<a href='#aboutus' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:500,color:'black',textDecoration:'none',flex:1}}>About us</a>
  
  if(window.location.pathname === '#announcements'){
    announcements=<a href='#announcements' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:800,color:'black',textUnderlineOffset:18,flex:1,textDecorationThickness:3}}>Announcements</a>
  }
  else if(window.location.pathname === '/aboutus'){
    aboutus=<a href='#aboutus' style={{fontFamily:'Open Sans',fontSize:14,fontWeight:800,color:'black',textUnderlineOffset:18,flex:1,textDecorationThickness:3}}>About us</a>
  }

  let userPicture
  if(imageSource === undefined){
    userPicture = <Avatar style={{width : 29 , height : 29, marginLeft : 35}}/>
  }else{
    userPicture = <Avatar style={{width : 29 , height : 29, marginLeft : 35}}><img alt='' src={imageSource} style={{width : 29 , height : 29, borderRadius: 14.5}}/></Avatar>
  }

  let userPictureMobile
  if(imageSource === undefined){
    userPictureMobile = <Avatar style={{width : 29 , height : 29}}/>
  }else{
    userPictureMobile = <Avatar style={{width : 29 , height : 29}}><img alt='' src={imageSource} style={{width : 29 , height : 29, borderRadius: 14.5}}/></Avatar>
  }

  const [isShownNotification, setIsShownNotification] = useState(false);
  const [isShownProfile, setIsShownProfile] = useState(false);

  const handleNotificationClick = event =>{
    setIsShownNotification(current => !current)
    setIsShownProfile(false)
  }

  const handleProfileClick = event =>{
    setIsShownProfile(current => !current)
    setIsShownNotification(false)
  }

  let notif
  if(nameNotification === undefined || session === undefined){
    
   notif=<div className='fixed top-16 md:right-[200px] right-10' style={{width: 250,display: 'flex',flexDirection:'column',alignItems: 'center', zIndex: 100, borderRadius:6,backgroundColor:'white', marginTop:15,paddingTop:15,paddingBottom:15}}>No notification.</div>
  }else{
    notif=<Notification nameNotification={nameNotification} session={session} support={support} />
  }

  let expand
  if(isShownProfile){
    expand=<ExpandLess/>
  }else{
    expand=<ExpandMore/>
  }

  let NavbarL
  NavbarL=<>_
      <header className='fixed w-full top-0 z-50 bg-violet-400 py-3 opacity-80'>
        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width : '65%'}}>
          <a href='/'><img style={{height:18}} src={Logo} alt='Logo'/></a>
          <Box className='md:flex hidden' sx={{ justifyContent:'space-between',width:400,minWidth:300}}>
            {home}
            {announcements}
            {aboutus}
          </Box>
        </div>
        <div className='md:w-auto w-1/3 justify-center' style={{display:'flex', flexDirection:'row', alignItems:'center'}}> 
          <button className="buttons" onClick={handleNotificationClick}>
              <Avatar className='' style={{backgroundColor : isShownNotification ? '#F0F0F2' : 'white', width : 40 , height : 40}}>
                <Badge sx={{"& .MuiBadge-badge": {backgroundColor: "#5AC98D"}}} variant='dot' overlap='circular' invisible={invisible}>
                  <img src={NotificationIcon} alt='notficationIcon' style={{width : 17.5, height : 18.5 }}/>
                </Badge>
              </Avatar>
            </button>
            <button onClick={handleProfileClick} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'transparent', borderColor: 'transparent', cursor: 'pointer',width: 240}}>
              {userPicture}
              <div className='hidden md:flex' style={{fontFamily: 'Open Sans', fontWeight: 600, fontSize: 13.5, marginRight: 2, marginLeft: 15, maxWidth: 150, whiteSpace: 'nowrap', overflow: 'hidden'}}>{name}</div>
              {expand}
            </button>
        </div>
      </header>
      {
        isShownNotification && notif
      }
      {
        isShownProfile && <ProfilDetails/>
      }
      </>
      return(
        <>{NavbarL}</>
      )
  }

  

