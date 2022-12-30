
import Avatar from "@mui/material/Avatar"
import { Typography,Button } from "@mui/material"

export const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Avatar src={require("../../assets/avatar.png")} className="w-36 h-36 mb-3" />
        <Typography variant="h5" className="font-semibold text-gray-800">Taylor Swift</Typography>
        <div className="flex flex-row justify-between items-center space-x-4 space-y-1">
          <Typography variant="body1" className="text-gray-700">Bejaia</Typography>
          <Button variant="contained" className="text-gray-700 bg-white hover:bg-gray-100 rounded-full text-sm">Edit Profile</Button>
        </div>
    </div>
  )
}
