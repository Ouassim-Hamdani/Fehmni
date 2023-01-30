import React, { useState } from 'react'
import { NavBarLoggedIn } from '../components/NavBarLoggedIn';
import  { LandingSection } from '../components/landing-page/LandingSection';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { RecentAnnouncements } from '../components/landing-page/RecentAnnouncements';
import { PostOffer } from '../components/landing-page/PostOffer';
import { Alert, Snackbar } from '@mui/material';
export const LandingPage = () => {
  let [open,setOpen] = useState(false);
  let [notif,setNotif] = useState(["","",false])
  const handleClose = () => {
    setNotif(["","",false]);
  }
  return (
    <div className='cover  bg-right-top'>
      {localStorage.getItem("userId")!=="null"?<NavBarLoggedIn invisible={true} name="Taylor Swift" />:<Navbar/>}
      <div className='space-y-8'>
      <LandingSection  variant={"loggedIn"} fct={setOpen}/>
      <RecentAnnouncements/>      
      <Footer/>
      </div>
      <PostOffer fct={setOpen} fct2={setNotif} open={open}/>
      <Snackbar open={notif[2]} autoHideDuration={6000} onClose={handleClose}>
         <Alert  severity={notif[0]} sx={{ width: '100%' }}>
            {notif[1]}
        </Alert>
    </Snackbar>
    </div>
    
  )
}
