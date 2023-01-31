import { Search } from '@mui/icons-material'
import { TextField, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({support,variant}) => { //variant can be colored

  const [subject, setSubject] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
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
    let search = wilaya+" "+description+" "+subject;
    navigate("/search?search="+search.trim())
    window.location.reload(false);

  };

  let searchBar
  if(variant === 'colored'){

    searchBar=<div className='md:w-96 w-80 flex justify-center' style={{background: 'linear-gradient(270deg, #3799F3 0%, #5785CA 100%)',borderRadius:65,paddingBottom:10,paddingLeft:5,display:'flex',gap:2,justifyContent:'center'}}>  
        <TextField id='subject' label='Subject' variant='standard' value={subject} onChange={handleSubjectChange} size='small' InputLabelProps={{style:{color:'white'}}} InputProps={{disableUnderline: true}} className="w-24 ml-4 md:text-xs text-[10px]" sx={{input:{color:'white',fontFamily:'Open Sans',fontWeight:600}}}/>
        <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'white'}}/>
        <TextField id='wilaya' label='Wilaya' variant='standard' value={wilaya} onChange={handleWilayaChange} size='small' InputLabelProps={{style:{color:'white'}}} InputProps={{disableUnderline: true}} className="w-24 md:text-xs text-[10px]" sx={{input:{color:'white',fontFamily:'Open Sans',fontWeight:600}}}/>
        <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'white'}}/>
        <TextField id='description' label='Description' variant='standard' value={description} onChange={handleDescriptionChange} size='small' InputLabelProps={{style:{color:'white'}}} className="w-36 md:text-xs text-[10px]" InputProps={{disableUnderline: true}} sx={{width:220,input:{color:'white',fontSize:12,fontFamily:'Open Sans',fontWeight:600}}}/>
        <IconButton onClick={handleSearchClick} sx={{marginTop:1}}><Search sx={{color:'white'}}/></IconButton>
      </div>
    }
  else{
    
      searchBar=<div className='md:w-96 w-80 flex justify-center' style={{background: 'white',borderRadius:65,paddingBottom:10,paddingLeft:5,display:'flex',gap:2,justifyContent:'center'}}>  
        <TextField id='subject' label='Subject' variant='standard' value={subject} onChange={handleSubjectChange} size='small' InputLabelProps={{style:{color:'#2E2E2E'}}} InputProps={{disableUnderline: true}} className="w-24 ml-4 md:text-xs text-[10px]" sx={{input:{color:'#2E2E2E',fontFamily:'Open Sans',fontWeight:600}}}/>
        <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'#2E2E2E'}}/>
        <TextField id='wilaya' label='Wilaya' variant='standard' value={wilaya} onChange={handleWilayaChange} size='small' InputLabelProps={{style:{color:'#2E2E2E'}}} InputProps={{disableUnderline: true}} className="w-24 md:text-xs text-[10px]" sx={{input:{color:'#2E2E2E',fontFamily:'Open Sans',fontWeight:600}}}/>
        <div style={{width:1, height:20,marginTop:18, marginRight:15, background:'#2E2E2E'}}/>
        <TextField id='description' label='Description' variant='standard' value={description} onChange={handleDescriptionChange} size='small' InputLabelProps={{style:{color:'#2E2E2E'}}} className="w-36 md:text-xs text-[10px]" InputProps={{disableUnderline: true}} sx={{width:220,input:{color:'#2E2E2E',fontSize:12,fontFamily:'Open Sans',fontWeight:600}}}/>
        <IconButton onClick={handleSearchClick} sx={{marginTop:1}}><Search sx={{color:'#2E2E2E'}}/></IconButton>
      </div>
    
  }

  return (
    <>{searchBar}</>
  )
}
