import {Cards} from "../components/Cards"
import Typography from '@mui/material/Typography';
import { favAnnounces } from '../constants/constants';
import { NavBarLess } from "../components/NavBarLess";
export const FavoritesPage = () => {
  return (
    <div className=" cover bg-right-top pt-32 cover bg-gray-100">
        <NavBarLess/>
        <div className="px-6">
        <Typography  variant="h5" className="px-4 font-semibold pb-5 text-gray-900 md:text-left text-center">My Favorites</Typography>
        <Cards list={favAnnounces}/>
        </div>
        
    </div>
  )
}