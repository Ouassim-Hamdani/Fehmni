import { Avatar, ButtonGroup, Dialog, DialogTitle, Button, TextField, DialogContent, IconButton } from '@mui/material'
import { EditRounded, SaveRounded } from '@mui/icons-material'
import React, { useRef, useState } from 'react'

const EditProfile = ({support,imageSource, firstName, lastName, mail, wilaya, commune, address}) => {
  const [image, setImage] = useState("");
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name
      var parts = filename.split(".")
      const fileType = parts[parts.length - 1]
      setImage(files[0])
      //Change new picture
      imageSource = files[0]
    }
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const openFileBrowser = () => {
    inputFile.current.click()
  }

  let profilePicture
  if(imageSource !== undefined){
    profilePicture = <img alt='' src={imageSource} style={{width: 70, height: 70, borderRadius: 35}}/>
  }

  const [firstNameText, setFirstNameText] = useState(firstName)
  const [lastNameText, setLastNameText] = useState(lastName)
  const [mailText, setMailText] = useState(mail)
  const [wilayaText, setWilayaText] = useState(wilaya)
  const [communeText, setCommuneText] = useState(commune)
  const [addressText, setAddressText] = useState(address)

  const handleFirstNameChange = event => {
    setFirstNameText(event.target.value)
  }

  const handleLastNameChange = event => {
    setLastNameText(event.target.value)
  }

  const handleMailChange = event => {
    setMailText(event.target.value)
  }

  const handleWilayaChange = event => {
    setWilayaText(event.target.value)
  }

  const handleCommuneChange = event => {
    setCommuneText(event.target.value)
  }

  const handleAddressChange = event => {
    setAddressText(event.target.value)
  }

  const saveModif = () => {
    //Save button
  }

  let Edit
  if(support==='mobile'){
    Edit=<div style={{backgroundColor: 'white', width: 370, borderRadius: 20, display:'flex', flexDirection: 'column', alignItems:'center', fontFamily: 'Open Sans', gap: 12}}>
    <input accept='.png,.jpg' ref={inputFile} onChange={handleFileUpload} type='file' style={{display: 'none'}}/>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{fontSize: 20, fontWeight: 700}}>
        Edit Profile
      </div>
      <div style={{width: 72, height: 72, cursor:'pointer', marginBottom: 5}} onClick={handleClickOpen}>
        <Avatar style={{width: 70, height: 70, marginTop: 28}}>
          {profilePicture}
        </Avatar>
        <IconButton sx={{position:'relative', top: -20, left: 27, height: 15 }}><EditRounded sx={{height: 15}} /></IconButton>
      </div>
    </div>
    <div style={{height: 20}}/>
    <TextField label='Firstname' variant='outlined' size='small' value={firstNameText} onChange={handleFirstNameChange} sx={{width:250,input:{fontSize:13,fontFamily:'Open Sans'}, '& fieldset': {borderRadius: 70}}}/>
    <TextField label='Lastname' variant='outlined' size='small' value={lastNameText} onChange={handleLastNameChange} sx={{width:250,input:{fontSize:13,fontFamily:'Open Sans'},'& fieldset': {borderRadius: 70}}}/>
    <TextField label='Mail' variant='outlined' size='small' value={mailText} onChange={handleMailChange} sx={{width:250,input:{fontSize:13,fontFamily:'Open Sans'},'& fieldset': {borderRadius: 70}}}/>
    <div style={{background: 'white', height: 35.7, border:'1px solid #C4C4C4', width: 240,borderRadius:70,paddingLeft:5,display:'flex',gap:2,justifyContent:'center', marginBottom: 20}}>  
      <TextField label='Wilaya' variant='standard' value={wilayaText} onChange={handleWilayaChange} size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white', fontSize: '1rem', marginTop: -7}}} InputProps={{disableUnderline: true}} sx={{width:45,input:{color:'#2E2E2E',fontSize:13,fontFamily:'Open Sans', marginTop: -0.8}}}/>
      <div style={{width:1, height:20,marginTop:10, marginRight:15, background:'#C4C4C4'}}/>
      <TextField label='Commune' variant='standard' value={communeText} onChange={handleCommuneChange} size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white', fontSize: '1rem', marginTop: -7}}} InputProps={{disableUnderline: true}} sx={{width:50,input:{color:'#2E2E2E',fontSize:13,fontFamily:'Open Sans', marginTop: -0.8}}}/>
      <div style={{width:1, height:20,marginTop:10, marginRight:15, background:'#C4C4C4'}}/>
      <TextField label='Description' variant='standard' value={addressText} onChange={handleAddressChange} size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white', fontSize: '1rem', marginTop: -7}}} InputProps={{disableUnderline: true}} sx={{width:100,input:{color:'#2E2E2E',fontSize:13,fontFamily:'Open Sans', marginTop: -0.8}}}/>
    </div>
    <Button onClick={saveModif} endIcon={<SaveRounded/>} variant='contained' sx={{backgroundColor: '#3199F9', color: 'white', borderRadius: 5, textTransform: 'none', marginBottom: 5, width: 100}}>Save</Button>
  </div>
  }else{
    Edit=<div style={{backgroundColor: 'white', width: 530, borderRadius: 20, display:'flex', flexDirection: 'column', alignItems:'center', fontFamily: 'Open Sans', gap: 25}}>
    <input accept='.png,.jpg' ref={inputFile} onChange={handleFileUpload} type='file' style={{display: 'none'}}/>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
      <div style={{fontSize: 30, fontWeight: 700}}>
        Edit Profile
      </div>
      <div style={{width: 72, height: 72, cursor:'pointer', marginBottom: 5}} onClick={handleClickOpen}>
        <Avatar style={{width: 70, height: 70}}>
          {profilePicture}
        </Avatar>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">Pick new profile picture</DialogTitle>
          <DialogContent id="alert-dialog-description">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <Button onClick={openFileBrowser} variant='contained' sx={{backgroundColor: '#3199F9', color: 'white', borderRadius: 5, textTransform: 'none', marginBottom: 5}}>Open File Browser</Button>
              <ButtonGroup size='small'>
              <Button onClick={handleClose} sx={{textTransform: 'none', borderRadius: 5}} >Cancel</Button>
              <Button onClick={handleClose} variant='contained'  sx={{backgroundColor: '#3199F9', color: 'white', textTransform: 'none', borderRadius: 5}}>Save</Button>
            </ButtonGroup>
            </div>
          </DialogContent>
        </Dialog>
        <EditRounded sx={{position:'relative', top: -15, left: 27, height: 15 }}/>
      </div>
    </div>
    <div style={{display:'flex', width: 450, justifyContent:'space-between'}}>
      <TextField label='Firstname' variant='outlined' size='small' value={firstNameText} onChange={handleFirstNameChange} sx={{width:200,input:{fontSize:13,fontFamily:'Open Sans'}, '& fieldset': {borderRadius: 7}}}/>
      <TextField label='Lastname' variant='outlined' size='small' value={lastNameText} onChange={handleLastNameChange} sx={{width:200,input:{fontSize:13,fontFamily:'Open Sans'},'& fieldset': {borderRadius: 7}}}/>
    </div>
    <TextField label='Mail' variant='outlined' size='small' value={mailText} onChange={handleMailChange} sx={{width:450,input:{fontSize:13,fontFamily:'Open Sans'},'& fieldset': {borderRadius: 7}}}/>
    <div style={{background: 'white', height: 35.7, border:'1px solid #C4C4C4', width: 450,borderRadius:65,paddingLeft:5,display:'flex',gap:2,justifyContent:'center'}}>  
      <TextField label='Wilaya' variant='standard' value={wilayaText} onChange={handleWilayaChange} size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white', fontSize: '1rem', marginTop: -7}}} InputProps={{disableUnderline: true}} sx={{width:90,input:{color:'#2E2E2E',fontSize:13,fontFamily:'Open Sans', marginTop: -0.8}}}/>
      <div style={{width:1, height:20,marginTop:10, marginRight:15, background:'#C4C4C4'}}/>
      <TextField label='Commune' variant='standard' value={communeText} onChange={handleCommuneChange} size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white', fontSize: '1rem', marginTop: -7}}} InputProps={{disableUnderline: true}} sx={{width:100,input:{color:'#2E2E2E',fontSize:13,fontFamily:'Open Sans', marginTop: -0.8}}}/>
      <div style={{width:1, height:20,marginTop:10, marginRight:15, background:'#C4C4C4'}}/>
      <TextField label='Description' variant='standard' value={addressText} onChange={handleAddressChange} size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white', fontSize: '1rem', marginTop: -7}}} InputProps={{disableUnderline: true}} sx={{width:160,input:{color:'#2E2E2E',fontSize:13,fontFamily:'Open Sans', marginTop: -0.8}}}/>
    </div>
    <Button onClick={saveModif} endIcon={<SaveRounded/>} variant='contained' sx={{backgroundColor: '#3199F9', color: 'white', borderRadius: 5, textTransform: 'none', marginBottom: 5, width: 100}}>Save</Button>
  </div>
  }

  return (
    <>{Edit}</>
  )
}

export default EditProfile