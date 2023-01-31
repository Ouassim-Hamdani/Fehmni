import React, { useState } from 'react'
import { TextField, MenuItem } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useNavigate } from 'react-router-dom'

const categories = ['Primaire','College','Lycée']
const wilayas=['Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem',"M'Sila",'Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arreridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','El Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet',"M'Ghair",'El Meniaa']
const communes=[{wilaya:'Alger',commune:'Ouled Fayet'},{wilaya:'Béjaïa',commune:'Amizour'}]

export const FilterSection = ({fct}) => {
  const [timeFrom, setTimeFrom] = useState("")
  const [timeTo, setTimeTo] = useState("")
  const [category, setCategory] = useState("")
  const [wilaya, setWilaya] = useState("")
  const [commune, setCommune] = useState("")
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate();

  const timeFromUpdated = event => {
    setTimeFrom(event)
  }

  const timeToUpdated = event => {
    setTimeTo(event)
  }

  const categoryUpdated = event => {
    setCategory(event.target.value)
    navigate("/search?category="+event.target.value[0])
    fct(event.target.value)

  }

  const wilayaUpdated = event => {
    setWilaya(event.target.value)
    let ind = wilayas.indexOf(event.target.value)+1
    console.log()
    navigate("/search?wilaya="+ind)
    fct(event.target.value)

  }  

  const communeUpdated = event => {
    setCommune(event.target.value)
  }

  return (
    <div className='w-full px-4 md:flex-row flex-col md:justify-between justify-center items-center text-center md:text-left' style={{display: 'flex', fontFamily:'Open Sans', fontSize: 14, fontWeight: 500}}>
      <div className='md:items-start items-center' style={{display: 'flex',flexDirection: 'column',gap:4}}>
        <div className='md:flex hidden'>Time</div>
        <div className='md:flex-row flex-col' style={{display:'flex', alignItems:'center', gap:15}}>
          From
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className='w-36' label=" " variant='inline' onChange={timeFromUpdated} inputFormat='DD/MM/YYYY' InputProps={{disableUnderline: true}} value={timeFrom} renderInput={(params) => <TextField {...params} variant='standard' className='border border-gray-700' size='small' sx={{input:{color:'#2E2E2E',fontSize:12,fontFamily:'Open Sans',fontWeight:600},height: 50,  backgroundColor:'white',borderRadius: 7, paddingRight: 2, paddingLeft: 2}}/>}/>
          </LocalizationProvider>
          to
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className='w-36' label=" " variant='inline' onChange={timeFromUpdated} inputFormat='DD/MM/YYYY' InputProps={{disableUnderline: true}} value={timeFrom} renderInput={(params) => <TextField {...params} variant='standard' className='border border-gray-700' size='small' sx={{input:{color:'#2E2E2E',fontSize:12,fontFamily:'Open Sans',fontWeight:600},height: 50,  backgroundColor:'white',borderRadius: 7, paddingRight: 2, paddingLeft: 2}}/>}/>
          </LocalizationProvider>
        </div>
      </div>
      <div className='md:pt-0 pt-4 md:items-start items-center' style={{display: 'flex',flexDirection: 'column',gap:4}}>
        <div className='md:pl-3 pl-0 md:pb-0 pb-1' >Category</div>
        <div style={{display:'flex', alignItems:'center'}}>
          <TextField variant='standard' value={category} select onChange={categoryUpdated}  InputProps={{disableUnderline: true}} sx={{input:{color:'#2E2E2E',fontFamily:'Open Sans',fontWeight:600}, backgroundColor:'white',borderRadius: 35,height: 40, paddingTop:1 , paddingRight: 2, paddingLeft: 2, width: "200px"}}>
            {categories.map((elem) =>(<MenuItem key={elem} value={elem}>{elem}</MenuItem>))}
          </TextField>
        </div>
      </div>
      <div className='md:pt-0 pt-4 md:items-start items-center' style={{display: 'flex',flexDirection: 'column',gap:4}}>
        <div className='md:pl-3 pl-0 md:pb-0 pb-1'  >Wilaya</div>
        <div style={{display:'flex', alignItems:'center'}}>
          <TextField value={wilaya} onChange={wilayaUpdated} variant='standard' select InputProps={{disableUnderline: true}} sx={{input:{color:'#2E2E2E',fontSize:12,fontFamily:'Open Sans',fontWeight:600}, backgroundColor:'white',borderRadius: 35,height: 40, paddingTop:1 , paddingRight: 2, paddingLeft: 2, width: 200}}>
            {wilayas.map((elem,index) =>(<MenuItem key={index+1} id={index+1} value={elem}>{index+1} - {elem}</MenuItem>))}
          </TextField>
        </div>
      </div>
      <div className='md:pt-0 pt-4 md:items-start items-center' style={{display: 'flex',flexDirection: 'column',gap:4}}>
        <div className='md:pl-3 pl-0 md:pb-0 pb-1' >Commune</div>
        <div style={{display:'flex', alignItems:'center'}}>
          <TextField disabled={disabled} value={commune} onChange={communeUpdated} variant='standard' select InputProps={{disableUnderline: true}} sx={{input:{color:'#2E2E2E',fontSize:12,fontFamily:'Open Sans',fontWeight:600}, backgroundColor:'white',borderRadius: 35,height: 40, paddingTop:1 , paddingRight: 2, paddingLeft: 2, width: 200}}>
            {communes.map((elem) =>{
              if(elem.wilaya === wilaya){return <MenuItem key={elem} value={elem.commune}>{elem.commune}</MenuItem>}
            })}
          </TextField>
        </div>
      </div>
    </div>
  )
}

