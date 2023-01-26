import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { imagesAnnounce } from '../../constants/constants';
export const TopSection = () => {
  let [slidesShow,setSlidesShow] = useState(3);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='p-10 pt-24 space-y-4'>
      <Typography variant="h5" className='font-semibold text-gray-900'>Full math revision course 2022</Typography>
      <div className='rounded-xl px-4 pb-10 pt-3 space-y-3 border bg-white border-gray-200 '>
        <Typography variant="h6" className='text-green-600'>1500 DA</Typography>
        <Slider {...settings} className="">
          {imagesAnnounce.map((item)=>{
            return(
              <img key={item.id} className='rounded-xl px-1'  src={item.img} alt="" />
            );

          })}
        </Slider>
      </div>
      
    </div>
  )
}