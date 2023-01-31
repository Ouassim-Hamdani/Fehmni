import {SearchBar} from "../SearchBar"
import { Typography } from "@mui/material"
export const SearchSection = ({num}) => {
  const urlParams = new URLSearchParams(window.location.search);
  const searchText = urlParams.get('search');
  return (
    <div className="flex flex-col space-y-3 p-4 items-center justify-center">
      <SearchBar variant="white"/>
      <Typography variant="h5" className="font-bold">{searchText}</Typography>      
      <Typography variant="body1" className="text-gray-800 md:text-left text-center">{num} {searchText} simmilar results</Typography>
    </div>
  )
}

