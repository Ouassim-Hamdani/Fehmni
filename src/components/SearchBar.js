import { Search } from '@mui/icons-material'
import { TextField, IconButton } from '@mui/material'
import React, { useState } from 'react'

export const SearchBar = ({support,variant}) => { //variant can be colored

  const [subject, setSubject] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [description, setDescription] = useState("");

  const handleSubjectChange = event => {
    setSubject(event.target.value);
  };

  const handleWilayaChange = event => {
    setWilaya(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleSearchClick = event => {
    //Vérifier si la page actuelle est landingPage et rediriger vers searchPage
    //Effectuer la recherche
  };

  let searchBar
  if(variant === 'colored'){
    if(support === 'mobile'){
      searchBar=<div style={{background: 'linear-gradient(270deg, #3799F3 0%, #5785CA 100%)', width: 370,borderRadius:75,paddingBottom:8,paddingLeft:5,display:'flex',gap:2,justifyContent:'center'}}>  
      <TextField id='subject' label='Subject' variant='standard' value={subject} onChange={handleSubjectChange} size='small' InputLabelProps={{style:{color:'white'}}} InputProps={{disableUnderline: true}} sx={{width:70,input:{color:'white',fontSize:10,fontFamily:'Open Sans',fontWeight:600}}}/>
      <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'white'}}/>
      <TextField id='wilaya' label='Wilaya' variant='standard' value={wilaya} onChange={handleWilayaChange} size='small' InputLabelProps={{style:{color:'white'}}} InputProps={{disableUnderline: true}} sx={{width:80,input:{color:'white',fontSize:10,fontFamily:'Open Sans',fontWeight:600}}}/>
      <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'white'}}/>
      <TextField id='description' label='Description' variant='standard' value={description} onChange={handleDescriptionChange} size='small' InputLabelProps={{style:{color:'white'}}} InputProps={{disableUnderline: true}} sx={{width:100,input:{color:'white',fontSize:10,fontFamily:'Open Sans',fontWeight:600}}}/>
      <IconButton className='flex-col' sx={{marginTop:1}}><Search sx={{color:'white'}}/></IconButton>
    </div>
    }else{
    searchBar=<div style={{background: 'linear-gradient(270deg, #3799F3 0%, #5785CA 100%)', width: 530,borderRadius:65,paddingBottom:10,paddingLeft:5,display:'flex',gap:2,justifyContent:'center'}}>  
        <TextField id='subject' label='Subject' variant='standard' value={subject} onChange={handleSubjectChange} size='small' InputLabelProps={{style:{color:'white'}}} InputProps={{disableUnderline: true}} sx={{width:90,input:{color:'white',fontSize:12,fontFamily:'Open Sans',fontWeight:600}}}/>
        <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'white'}}/>
        <TextField id='wilaya' label='Wilaya' variant='standard' value={wilaya} onChange={handleWilayaChange} size='small' InputLabelProps={{style:{color:'white'}}} InputProps={{disableUnderline: true}} sx={{width:100,input:{color:'white',fontSize:12,fontFamily:'Open Sans',fontWeight:600}}}/>
        <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'white'}}/>
        <TextField id='description' label='Description' variant='standard' value={description} onChange={handleDescriptionChange} size='small' InputLabelProps={{style:{color:'white'}}} InputProps={{disableUnderline: true}} sx={{width:220,input:{color:'white',fontSize:12,fontFamily:'Open Sans',fontWeight:600}}}/>
        <IconButton sx={{marginTop:1}}><Search sx={{color:'white'}}/></IconButton>
      </div>
    }
  }else{
    if(support==='mobile'){
      searchBar=<div style={{background: 'white',border:'1px solid #3C96ED', width: 370,borderRadius:75,paddingBottom:8,paddingLeft:5,display:'flex',gap:2,justifyContent:'center'}}>  
      <TextField id='subject' label='Subject' variant='standard' value={subject} onChange={handleSubjectChange} size='small' InputLabelProps={{style:{color:'#2E2E2E'}}} InputProps={{disableUnderline: true}} sx={{width:70,input:{color:'#2E2E2E',fontSize:10,fontFamily:'Open Sans',fontWeight:600}}}/>
      <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'#2E2E2E'}}/>
      <TextField id='wilaya' label='Wilaya' variant='standard' value={wilaya} onChange={handleWilayaChange} size='small' InputLabelProps={{style:{color:'#2E2E2E'}}} InputProps={{disableUnderline: true}} sx={{width:80,input:{color:'#2E2E2E',fontSize:10,fontFamily:'Open Sans',fontWeight:600}}}/>
      <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'#2E2E2E'}}/>
      <TextField id='description' label='Description' variant='standard' value={description} onChange={handleDescriptionChange} size='small' InputLabelProps={{style:{color:'#2E2E2E'}}} InputProps={{disableUnderline: true}} sx={{width:100,input:{color:'#2E2E2E',fontSize:10,fontFamily:'Open Sans',fontWeight:600}}}/>
      <IconButton sx={{marginTop:1}} onClick={handleSearchClick}><Search sx={{color:'#2E2E2E'}}/></IconButton>
    </div>
    }else{
    searchBar=<div style={{background: 'white',border:'1px solid #3C96ED', width: 530,borderRadius:65,paddingBottom:10,paddingLeft:5,display:'flex',gap:2,justifyContent:'center'}}>  
      <TextField id='subject' label='Subject' variant='standard' value={subject} onChange={handleSubjectChange} size='small' InputLabelProps={{style:{color:'#2E2E2E'}}} InputProps={{disableUnderline: true}} sx={{width:90,input:{color:'#2E2E2E',fontSize:12,fontFamily:'Open Sans',fontWeight:600}}}/>
      <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'#2E2E2E'}}/>
      <TextField id='wilaya' label='Wilaya' variant='standard' value={wilaya} onChange={handleWilayaChange} size='small' InputLabelProps={{style:{color:'#2E2E2E'}}} InputProps={{disableUnderline: true}} sx={{width:100,input:{color:'#2E2E2E',fontSize:12,fontFamily:'Open Sans',fontWeight:600}}}/>
      <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'#2E2E2E'}}/>
      <TextField id='description' label='Description' variant='standard' value={description} onChange={handleDescriptionChange} size='small' InputLabelProps={{style:{color:'#2E2E2E'}}} InputProps={{disableUnderline: true}} sx={{width:220,input:{color:'#2E2E2E',fontSize:12,fontFamily:'Open Sans',fontWeight:600}}}/>
      <IconButton sx={{marginTop:1}} onClick={handleSearchClick}><Search sx={{color:'#2E2E2E'}}/></IconButton>
    </div>
    }
  }

  return (
    <>{searchBar}</>
  )
}
