import { NavBarLoggedIn } from '../components/NavBarLoggedIn'
import {TopSection} from "../components/announcement-page/TopSection"
import { Host } from '../components/announcement-page/Host'
import { Details } from '../components/announcement-page/Details'
import { Footer } from '../components/Footer'
export const AnnouncementPage = () => {
  return (
    <div className='cover bg-right-top space-y-4'>
      <NavBarLoggedIn/>
      <TopSection/>
      <Details/>
      <Host hostName="Taylor Swift"/>
      <Footer/>
    </div>
  )
}
