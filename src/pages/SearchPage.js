import React from 'react'
import { Footer } from '../components/Footer'
import { NavBarLess } from '../components/NavBarLess'
import { Typography } from '@mui/material'
import { Cards } from '../components/Cards'
import { searchAnnounces } from '../constants/constants'
import { SearchSection } from '../components/search-page/SearchSection'
import { FilterSection } from '../components/search-page/FilterSection'
export const SearchPage = () => {
  return (
    <div className="cover bg-right-top space-y-6 pt-20 bg-gray-100 w-full">
      <NavBarLess/>
      <SearchSection/>
      <FilterSection/>
      <div className='px-6'>
        <Typography  variant="h5" className="font-semibold pb-5 text-gray-900 md:text-left text-center">Most Recent Announcements</Typography>
        <Cards list={searchAnnounces}/>
      </div>
      <Footer/>

    </div>
  )
}

