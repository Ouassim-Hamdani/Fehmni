import React from 'react'
import {Cards} from "../Cards"
import Typography from '@mui/material/Typography';
import { recentAnnounces } from '../../constants/constants';
export const RecentAnnouncements = () => {
  return (
    <div className='m-4'>
        <Typography  variant="h5" className="font-semibold pb-5 text-gray-900 md:text-left text-center">Recent Announcements</Typography>
        <Cards list={recentAnnounces}/>
    </div>
    
  );
};