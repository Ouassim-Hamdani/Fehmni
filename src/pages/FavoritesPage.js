import {Cards} from "../components/Cards"
import Typography from '@mui/material/Typography';
import { favAnnounces } from '../constants/constants';
export const FavoritesPage = () => {
  return (
    <div className="p-4 bg-gray-100">
        <Typography  variant="h5" className="font-semibold pb-5 text-gray-900 md:text-left text-center">My Favorites</Typography>
        <Cards list={favAnnounces}/>
    </div>
  )
}