import React from 'react'
import {CardAnnounce} from "./CardAnnounce"
import { Grid } from '@mui/material';
export const Cards = ({list}) => {
  return (
    <Grid container spacing={4} justifyContent={{xs:"center",sm:"center",md:"left" ,xl:"left"}}>
      {list.map((cardItem) => {
        return (
          <Grid item key={cardItem.id}>
            <CardAnnounce cardList={cardItem}/>
        </Grid>
        );
      })}
      
    
  </Grid>
  )
}