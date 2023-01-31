import { Button } from '@mui/material'
import React from 'react'

const Notification = ({nameNotification,session,support}) => {

  let Notif
  if (support==='mobile'){
    Notif=<div style={{width: 150, zIndex: 100, borderRadius:6, marginTop:5, marginRight: 35, marginLeft: 'auto', backgroundColor: 'white'}}>
      <div style={{display: 'flex',flexDirection:'column',alignItems: 'center'}}>
        <div style={{width: 130,marginTop:15,fontFamily: 'Open Sans', fontSize: 12, fontWeight: 500, color: 'black',lineHeight:1.5}}>
          "{nameNotification}" wants to join "{session}".
        </div>
        <div style={{marginTop: 10,marginBottom:15,display: 'flex', flexDirection: 'row', gap: 10}}>
          <Button variant="contained" color="success" sx={{textTransform:'none',height:20,width:50,borderRadius:1, fontSize: 11}}>Accept</Button>
          <Button variant="outlined" color="error"sx={{textTransform:'none', color: 'black',height:20,width:50,borderRadius:1, fontSize: 11}}>Refuse</Button>
        </div>
      </div>
    </div>
  }else{
    Notif=<div style={{width: 250,display: 'flex',flexDirection:'column',alignItems: 'center', zIndex: 100, borderRadius:6, marginTop:10, marginLeft: 900}}>
      <div className='fixed' style={{width: 165,marginTop:15,fontFamily: 'Open Sans', fontSize: 13, fontWeight: 500, color: 'black',lineHeight:1.5}}>
        "{nameNotification}" wants to join "{session}".
      </div>
      <div style={{marginTop: 30,marginBottom:15,display: 'flex', flexDirection: 'row', gap: 40}}>
        <Button variant="contained" color="success" sx={{textTransform:'none',height:28,width:87,borderRadius:1,paddingTop:1}}>Accept</Button>
        <Button variant="outlined" color="error"sx={{textTransform:'none', color: 'black',height:28,width:87,borderRadius:1,paddingTop:1}}>Refuse</Button>
      </div>
    </div>
  }

  return (
    <>{Notif}</>
  )
}

export default Notification