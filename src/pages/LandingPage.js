import React, { useState } from 'react'
import { NavBarLoggedIn } from '../components/NavBarLoggedIn';
import  { LandingSection } from '../components/landing-page/LandingSection';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { RecentAnnouncements } from '../components/landing-page/RecentAnnouncements';
import { PostOffer } from '../components/landing-page/PostOffer';
export const LandingPage = () => {
  let [navState,setNavState] = useState("use");
  let [open,setOpen] = useState(false);
  return (
    <div className='cover  bg-right-top'>
      {navState==="user"?<NavBarLoggedIn invisible={true} name="Taylor Swift" />:<Navbar/>}
      <div className='space-y-8'>
      <LandingSection  variant={"loggedIn"} fct={setOpen}/>
      <RecentAnnouncements/>      
      <Footer/>
      </div>
      <PostOffer fct={setOpen} open={open}/>
    </div>
    
  )
}
