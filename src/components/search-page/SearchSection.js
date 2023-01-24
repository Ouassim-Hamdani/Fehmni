import {SearchBar} from "../SearchBar"
import { Typography } from "@mui/material"
export const SearchSection = () => {
  return (
    <div className="flex flex-col space-y-3 p-4 items-center justify-center">
      <SearchBar variant="white"/>
      <Typography variant="h5" className="font-bold">Taylor Swift eras tour</Typography>      
      <Typography variant="body1" className="text-gray-800">+10,000 Taylor Swift eras tour simmilar results</Typography>
    </div>
  )
}

