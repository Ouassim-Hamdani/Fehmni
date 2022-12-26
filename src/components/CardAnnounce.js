import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar"
import { Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import moduleIcon from "../assets/module.svg"
import zoomIcon from "../assets/zoom.svg"
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { cardInfo }  from '../constants/constants';
import { useState } from 'react';
//      <span className='hidden torender bg-[#3799F3] text-white fill-white '></span> 
//      <span className='hidden torender bg-[#4132DA] text-white fill-white '></span> 
export const CardAnnounce = () => {
  let [savedState,setSavedState] = useState(cardInfo.isSaved);
  let colorLevel,colorText;
  if (cardInfo.level[2]==="P") {
    colorLevel="#FEA602";
    colorText="gray-800";
  }
  else if (cardInfo.level[2]==="M") {
      colorLevel="#4132DA";
      colorText="white";
  }
  else {
    colorLevel="#3799F3";
    colorText="white";
  };

  function handleClick() {
    if (savedState) {
      cardInfo.isSaved = false;
      setSavedState(false)
    }
    else {
      cardInfo.isSaved = true;
      setSavedState(true)
  };
  console.log(savedState)
  }
  return (
    
    <Card className='rounded-xl p-4' sx={{ maxWidth: 345 }}>

      <CardMedia
        className='rounded-xl'
        component="img"
        alt="Thumbnail image"
        height="140"
        src={require("../assets/"+cardInfo.image)}
      />
      <CardContent className='space-y-4 p-0 pt-2'>
        <Typography gutterBottom variant="h6" className=' font-medium text-gray-800' component="div">
          {cardInfo.title}
        </Typography>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center space-x-2'>
          <Avatar src={require("../assets/"+cardInfo.user.avatar)} className="w-8 h-8"></Avatar>
          <Typography variant="body1">{cardInfo.user.name}</Typography>
          </div>
          <div className='level'>
      
            <Chip label={cardInfo.level} size='small' className={`bg-[${colorLevel}] text-${colorText} text-sm`} icon={<SchoolOutlinedIcon className={`w-5 h-5 fill-${colorText}`} />}/>
          </div>
        </div>
        <Typography className='text-green-700 font-semibold' variant="h5">{cardInfo.price} DA</Typography>
        
      </CardContent>
      <CardActions className='flex flex-row items-center justify-between p-0'>
        <div className='flex flex-row items-center space-x-4'>
            <div className='module items-center flex flex-row space-x-2'>
              <img src={moduleIcon} alt="" />
              <span className='text-[#444444]'>{cardInfo.module}</span>
            </div>
            <div className='location items-center flex flex-row'>
              {cardInfo.status==="onsite"?<LocationOnIcon className='fill-[#444444]'></LocationOnIcon>:<img className='pr-2' src={zoomIcon} alt="" />}
              
              <span className='text-[#444444]'>{cardInfo.status==="onsite"?cardInfo.location:"Online"}</span>
            </div>
        </div>
        <IconButton>
            {savedState?<TurnedInIcon onClick={handleClick} className="bookmark w-7 h-7 fill-gray-800"></TurnedInIcon>:<TurnedInNotIcon onClick={handleClick} className="bookmark w-7 h-7 fill-gray-800"></TurnedInNotIcon>}
            
        </IconButton>
      </CardActions>
    </Card>
  );
}