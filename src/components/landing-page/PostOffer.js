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


export const PostOffer = ({fct,open}) => {
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
  return (
    <div className='post'>

        <Dialog open={open} onClose={handleClose} className="relative post">
        <DialogTitle className='post'> Post An Offer</DialogTitle>
        <DialogContent>
          <Box className='space-y-4' component="form">
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          
          <TextField
            autoFocus
            multiline
            rows={5}
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
          <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
          <TextField
            margin="dense"
            id="name"
            label="Level"
            type="text"
            variant="standard"
            style={{width:"45%"}}
          />
          <TextField
            margin="dense"
            id="name"
            label="Module"
            type="text"
            variant="standard"
            style={{width:"45%"}}
          />
          </div>
          <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
          <TextField style={{width:"45%"}}
          id="standard-select-currency"
          margin='dense'
          select
          label="Select"
          variant="standard"
          size='medium'
        >
          
            <MenuItem value="Online">
              Online
            </MenuItem>
            <MenuItem value="Onsite">
              Onsite
            </MenuItem>
          
        </TextField>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="text"
            variant="standard"
            style={{width:"45%"}}
          />
          </div>
          <div style={{background: 'white', width: "100%",display:'flex',justifyContent:'space-between'}}>  
      <TextField className='flex justify-center'  margin='dense' label='Wilaya' variant='standard'  size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white'}}}  sx={{width:"20%",input:{color:'#2E2E2E',fontFamily:'Open Sans'}}}/>
      <TextField label='Commune' variant='standard'  margin='dense'  size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white', }}}  sx={{width:"25%",input:{color:'#2E2E2E',fontFamily:'Open Sans'}}}/>
      <TextField label='Address' variant='standard' margin='dense'  size='small' InputLabelProps={{style:{color:'#666666', backgroundColor:'white'}}}  sx={{width:"45%",input:{color:'#2E2E2E',fontFamily:'Open Sans'}}}/>
        </div>
          <label htmlFor="images">
            
            <input style={{display:"none"}} type="file" name="images" onChange={onSelectFile} ref={inputRef} multiple accept='image/png, image/jpeg'/>
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

          <Button onClick={handleClose} variant="contained" endIcon={<SendRoundedIcon/>}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

