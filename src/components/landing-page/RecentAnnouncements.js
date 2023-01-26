import React from 'react'
import {Cards} from "../Cards"
import Typography from '@mui/material/Typography';
import { recentAnnounces } from '../../constants/constants';
export const RecentAnnouncements = () => {
  return (
    <div className='flex flex-col px-4 ' id='announcements'>
        <Typography  variant="h5" className="font-semibold pb-5 text-gray-900 md:text-left text-center">Recent Announcements</Typography>
        <Cards list={recentAnnounces}/>
    </div>
    
  );
};