import { Typography } from '@mui/material'
import React from 'react'
import { myAnnounces } from '../../constants/constants'
import { Cards } from '../Cards'
export const MyAnnouncments = () => {
  return (
    <div className='px-6'>
        <Typography  variant="h5" className="font-semibold pb-5 text-gray-900 md:text-left text-center">My Announcements</Typography>
        <Cards list={myAnnounces}/>
    </div>
    
  )
}

