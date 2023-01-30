import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, MenuItem } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import { useRef } from 'react';
import { useState } from 'react';
import { wilayas } from '../../constants/constants';
import axios from 'axios';
export const PostOffer = ({fct,open,fct2}) => {
  const inputRef = useRef(null)
  const handleEvent = () => {
    inputRef.current.click()
  }
  const handleClickOpen = () => {
    fct(true);
  };

  const handleClose = () => {
    fct(false);
  };
  const [selectedImages,setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imageArray = selectedFilesArray.map((file)=>{
      return URL.createObjectURL(file);
    });
    let imgs = imageArray.concat(selectedImages)
    setSelectedImages(imgs);
  }
  let [dataInput,setDataInput] = useState({});
  
  const addAnnounce = (data) => {
    let cat,stat,id;
    if(localStorage.getItem("userId")==="null") {
      //not logged in no post
    }
    else{
      switch (data["level"]) {
        case "lycee":
          cat = "L";
          break;
        case "primaire":
          cat = "P";
          break;
        case "college":
          cat = "C"
          break;
      }
      switch (data["status"]) {
        case "Online":
          stat = "O";
          break;
        case "Onsite":
          stat = "P";
          break;
      }
      let wil = Object.keys(wilayas).find(key => wilayas[key].toLowerCase() === data["wilayas"].toLowerCase());
      if (!wil) {
        wil=16;
      }
      let toSend = {
        name: data["title"],
        module: data["module"],
        description:data["desc"],
        category: cat,
        modalite:stat,
        price:parseInt(data["price"]),
        wilaya:parseInt(wil),
        commune:data["commune"],
        appartment_address : data["address"],
        idd:parseInt(localStorage.getItem("userId")),
     }
     console.log(toSend);
      axios.post('http://127.0.0.1:8000/api/create-announcement',toSend )
         .then((response) => {
            handleClose();
            setDataInput({});
            fct2(["success","Announce has been successfully posted",true])
         })
         .catch((error)=>{

          fct2(["error","Connection Error Or check the type of numerical inputs!",true]);

         }
         );
    }
    
 };
 
  const handleInput = event => {
    let tempInput = dataInput
    if (event.target.id) {
      if (event.target.value===""){
          delete tempInput[event.target.ID]
      }
      else {
        tempInput[event.target.id]=event.target.value
      }
    } 
    else {
      if (event.target.value==="primaire" || event.target.value==="lycee" || event.target.value==="college") {
        tempInput["level"]=event.target.value
      }
      else {
        tempInput["status"]=event.target.value

      }
    }
    setDataInput(tempInput)
  }
  const handleSubmit = () => {
    console.log("a")
    if (Object.keys(dataInput).length==9) {
      addAnnounce(dataInput)
    }
    else {
      fct2(["error","Please fill out the required inputs",true]);
    }
  }
  return (
    <div className='post'>
      
        <Dialog open={open} onClose={handleClose} className="relative post">
        <DialogTitle className='post'> Post An Offer</DialogTitle>
        <DialogContent>
          <Box onSubmit={handleSubmit} className='space-y-4' component="form">
            <TextField
            onChange={handleInput}
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            required
            variant="standard"
          />
          
          <TextField 
          onChange={handleInput}
          required
            autoFocus
            multiline
            rows={5}
            margin="dense"
            id="desc"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
          <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
          <TextField
          onChange={handleInput}
           required style={{width:"45%"}}
          id="level"
          margin='dense'
          select
          label="Select"
          variant="standard"
          size='medium'
        >
          
            <MenuItem value="primaire" id="primaire">
              Primaire
            </MenuItem>
            <MenuItem value="lycee" id="lycee">
              Lycée
            </MenuItem>
            <MenuItem value="college" id="college">
              College
            </MenuItem>
          
        </TextField>
          <TextField
          onChange={handleInput}
          required
            margin="dense"
            id="module"
            label="Module"
            type="text"
            variant="standard"
            style={{width:"45%"}}
          />
          </div>
          <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
          <TextField onChange={handleInput} style={{width:"45%"}}
          id="status"
          margin='dense'
          select
          label="Select"
          variant="standard"
          size='medium'
        >
          
            <MenuItem value="Online" id="online">
              Online
            </MenuItem>
            <MenuItem value="Onsite" id="onsite">
              Onsite
            </MenuItem>
          
        </TextField>
            
          <TextField onChange={handleInput}
            required
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="text"
            variant="standard"
            style={{width:"45%"}}
          />
          </div>
          <div style={{background: 'white', width: "100%",display:'flex',justifyContent:'space-between'}}> 
       
      <TextField onChange={handleInput} required id="wilayas" label='Wilaya' variant='standard'  margin='dense'  size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white', }}}  sx={{width:"25%",input:{color:'#2E2E2E',fontFamily:'Open Sans'}}}/>
      <TextField onChange={handleInput} required id="commune" label='Commune' variant='standard'  margin='dense'  size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white', }}}  sx={{width:"25%",input:{color:'#2E2E2E',fontFamily:'Open Sans'}}}/>
      <TextField onChange={handleInput} required id="address" label='Address' variant='standard' margin='dense'  size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white'}}}  sx={{width:"45%",input:{color:'#2E2E2E',fontFamily:'Open Sans'}}}/>
        </div>
          <label htmlFor="images">
            
            <input id="img-input" style={{display:"none"}} type="file" name="images" onChange={onSelectFile} ref={inputRef} multiple accept='image/png, image/jpeg'/>
          </label>
          <div className='images'>
          <div className='divimg' onClick={handleEvent}>
              <AddPhotoAlternateRoundedIcon className='img' sx={{ fontSize: 40, color:'white' }}/>
            </div>
            {selectedImages && 
            selectedImages.map((image,index)=>{
              return (
                <div className='image' key={image}>
                  <img src={image} alt="" />
                </div>
              );
            })
            }
          </div>
          </Box>
          
        </DialogContent>
        <DialogActions>

          <Button onClick={handleSubmit}  id="btn-submit" type="submit" variant="contained" endIcon={<SendRoundedIcon/>}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

