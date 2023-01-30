import React, { useState } from 'react'
import {Cards} from "../Cards"
import Typography from '@mui/material/Typography';
import { recentAnnounces } from '../../constants/constants';
import axios from "axios"
import { useEffect } from 'react';

export const RecentAnnouncements = () => {
let [announces,setAnnounces] = useState([]);

const getAnns = () => {
  axios.get("http://127.0.0.1:8000/api/main/announcement/")
  .then((res)=>{
    const anns = res.data
    setAnnounces(anns.reverse());
  }
  
  )
  .catch(err => console.error(err))
}
  useEffect(()=>{
    getAnns();
    
  },[])
  console.log(announces)
  return (
    <div className='flex flex-col px-4 ' id='announcements'>
        <Typography  variant="h5" className="font-semibold pb-5 text-gray-900 md:text-left text-center">Recent Announcements</Typography>
        <Cards list={announces}/>
    </div>
    
  );
};