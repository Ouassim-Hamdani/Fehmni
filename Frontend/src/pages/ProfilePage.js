import { EditProfile } from "../components/profile-page/EditProfile"
import { ProfileSection } from "../components/profile-page/ProfileSection"
import { MyAnnouncments } from "../components/profile-page/MyAnnouncments"
import { NavBarLess } from "../components/NavBarLess"
import { Footer } from "../components/Footer"
export const ProfilePage = () => {
  return (
    <div className="cover bg-right-top space-y-6 pt-20 ">
      <NavBarLess/>
      <ProfileSection/>
      <MyAnnouncments/>   
      <Footer/>

    </div>
  )
}

