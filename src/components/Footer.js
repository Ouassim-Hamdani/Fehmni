import { Container } from '@mui/material'
import { Typography } from '@mui/material'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Footer = () => {
  return (
    <Container className='bg-[#A9A4DE] flex flex-col justify-center items-center w-full py-6 px-10 space-y-4' maxWidth={false}>
        <div id='aboutus' className='flex flex-row  justify-between border-b pb-4 '>
          <div className='md:flex hidden flex-col space-y-4 w-1/2 '>
            <Typography variant='h5' className='text-gray-900 font-semibold'>About us</Typography>
            <Typography variant="body1" className='text-gray-800'>We are a group of Estin students having to build this idea of a project,
for us just to develop our technical & mental skills under stress conditions.</Typography>
          </div>
          <div className='flex flex-col space-y-4 md:w-1/3'>
              <Typography variant="h5" className='text-gray-900 font-semibold md:text-left text-center'>Contact Us</Typography>
              <ul className='space-y-4 flex flex-col md:items-start items-center'>
                  <li className='flex flex-row space-x-2'>
                      <BusinessRoundedIcon className='fill-gray-800'/>
                      <Typography variant='body1' className='text-gray-800'>Estin</Typography>
                  </li>
                  <li className='flex flex-row space-x-2'>
                    <LocalPhoneRoundedIcon className='fill-gray-800'/>
                    <Typography variant='body1' className='text-gray-800'>+213 035 54 0548</Typography>
                  </li>
                  <li className='flex flex-row space-x-2'>
                  <EmailRoundedIcon className='fill-gray-800'/>
                  <Typography variant='body1' className='text-gray-800'>contact@estin.dz</Typography>
                  </li>
              </ul>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:justify-between md:space-y-0 space-y-4 text-center justify-center items-center w-full border-t-white'>
            <Typography variant="body1" className='text-gray-800 '>Copyright 2022, All rights reserved | This site is made by <span className='text-rose-600'>Swifties</span>.</Typography>
            <div className='flex flex-row space-x-20'>
              <a href="">
                  <FacebookIcon className='fill-gray-800  hover:fill-[#2594FA]'/>
              </a>
              <a href="">
                <InstagramIcon className='fill-gray-800 hover:fill-[#2594FA]'/>
              </a>
              <a href="">
              <LinkedInIcon className='fill-gray-800 hover:fill-[#2594FA]'/>
              </a>
            </div>
        </div>
    </Container>
  )
}

