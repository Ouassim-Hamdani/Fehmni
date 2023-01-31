import  { useState,useEffect } from 'react'
import { Footer } from '../components/Footer'
import { NavBarLess } from '../components/NavBarLess'
import { Typography } from '@mui/material'
import { Cards } from '../components/Cards'
import { searchAnnounces } from '../constants/constants'
import { SearchSection } from '../components/search-page/SearchSection'
import { FilterSection } from '../components/search-page/FilterSection'
import axios from 'axios'
export const SearchPage = () => {
  let [change,setChange] = useState(false)
  let [announces,setAnnounces] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const searchText = urlParams.get('search');
  const wilayaText = urlParams.get('wilaya');
  const categoryText = urlParams.get("category");
  console.log(categoryText)
const getAnns = () => {
  if (searchText) {
    axios.get("http://127.0.0.1:8000/api/main/announcement/search/?name="+searchText)
    .then((res)=>{
      const anns = res.data
      setAnnounces(anns);
    }
    
    )
    .catch(err => console.error(err))
  }
  
  else if (wilayaText) {
    axios.get("http://127.0.0.1:8000/api/main/announcement/search/?wilaya="+wilayaText)
  .then((res)=>{
    const anns = res.data
    setAnnounces(anns);
  }
  
  )
  .catch(err => console.error(err))
}
else if (categoryText) {
  axios.get("http://127.0.0.1:8000/api/main/announcement/search/?category="+categoryText)
  .then((res)=>{
    const anns = res.data
    setAnnounces(anns);
  }
  
  )
  .catch(err => console.error(err))
}
  }
  
  useEffect(()=>{
    getAnns();
    
  },[change])
  return (
    <div className="cover bg-right-top space-y-6 pt-20 bg-gray-100 w-full">
      <NavBarLess/>
      <SearchSection num={announces.length}/>
      <FilterSection fct={setChange}/>
      <div className='px-6'>
        <Typography  variant="h5" className="font-semibold pb-5 text-gray-900 md:text-left text-center">Most Recent Announcements</Typography>
        <Cards list={announces}/>
      </div>
      <Footer/>

    </div>
  )
}

