import { NavBarLoggedIn } from '../components/NavBarLoggedIn'
import {TopSection} from "../components/announcement-page/TopSection"
import { Host } from '../components/announcement-page/Host'
import { Details } from '../components/announcement-page/Details'
import { Footer } from '../components/Footer'
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
export const AnnouncementPage = () => {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  let [data,setData] = useState(false);
  let [id,setId] = useState(params.get("id"));
  const getDetails = () => {
    axios.get("http://127.0.0.1:8000/api/main/announcement/"+id+"/")
    .then((res)=>{
      const details = res.data
      setData(details);
    }
    
    )
    .catch(err => console.error(err))
  }
    useEffect(()=>{
      getDetails();
      
    },[])
    console.log(data)
  return (
    <div className='cover bg-right-top space-y-4'>
      <NavBarLoggedIn/>
      <TopSection data={data}/>
      <Details data={data}/>
      <Host hostName={data?data.user.username:""}/>
      <Footer/>
    </div>
  )
}
