import { AppBar, Box, Button,TextField, Toolbar, Typography,} from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Addwork = () => {

        var [inputs,setInputs]=useState({
          serivce:'',
          description:'',
          name:'',
          phone:'',
          location:'',
          
         
        });
        var [selectedimage,setSelectedimage] = useState(null);
const handleimage =(event)=>{
const file = event.target.files[0];
setSelectedimage(file)
inputs.image1=file;
}

      
  const inputHandler =(event) =>{
    const {name,value}=event.target
    setInputs((prevInputs)=>({...prevInputs,[name]:value}))
    
  }
  // const addHandler=() =>{
  //   axios.post("http://localhost:3005/new",inputs)
  //   .then((Response)=>{
  //     alert("record saved")
  //   })
  //     .catch(err=>console.log(err))
  //   }

  const savedata =()=>{
    const formdata = new FormData();
    formdata.append('name',inputs.name);
    formdata.append('phone',inputs.phone);
    formdata.append('serivce',inputs.serivce);
    formdata.append('description',inputs.description);
   
    formdata.append('location',inputs.location);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/addwork',{
    method: 'post',
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Record saved');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };

    
  return (
    <div style={{ backgroundColor: '#3b566f', height: '200vh' }}>
    <div align='center'>
      <br></br>
      <AppBar position="static" sx={{ backgroundColor: '#1196F6' }}>
    <Toolbar>
      <Typography variant="h6">
        worker and client
      </Typography>
      <div style={{ marginLeft: 'auto' }}>
          {/* Use Link for navigation */}
          <Button component={Link} to="/cland" color="inherit">
            Back
          </Button>

          
        </div>
    </Toolbar>
  </AppBar>
  <br></br>
      <form >
      
        <Box sx={{ display: 'flex', flexDirection: 'column',backgroundColor: '#f0f0f0',borderRadius: '7%',boxShadow: '20px 20px 30px rgba(0, 0, 0, 0.3)',
      alignItems: 'center',
      padding: '10px', 
      width:'300px'}}>
          <br />
          <Typography variant="h6">
        Add work
      </Typography><br />
    
      <br></br>
      <label>add pic</label>
  <input type="file" onChange={handleimage}></input> 
  {selectedimage && (
            <img
              src={URL.createObjectURL(selectedimage)}
              alt="Profile"
              style={{ borderRadius: '50%', marginTop: '10px', width: '100px', height: '100px' }}
            />
          )}
          <br />
 <br ></br><br></br>
    <TextField     
label=" serivce" 
name="serivce"
 variant="outlined" 
 value={inputs.serivce}
  onChange={inputHandler} /> <br />

<TextField 
id="outlined-multiline-static"
label="description"
name="description"
variant="outlined"
multiline
          rows={4}
          defaultValue="description"
value={inputs.description}
 onChange={inputHandler}/><br />


 personal information
 <br></br>
 <TextField
              label='Full Name'
              name='name'
              variant='outlined'
              value={inputs.name}
              onChange={inputHandler}
            />
            <br />
            <TextField
              id='outlined-basic'
              label='Phone number'
              name='phone'
              variant='outlined'
              value={inputs.phone}
              onChange={inputHandler}
            />
            <br />
            <TextField 
id="outlined-basic"
label="location"
name="location"
variant="outlined"
value={inputs.location}
 onChange={inputHandler}/><br />


  
  
  <Button variant="contained" onClick={savedata}>OK</Button>
  </Box>
  </form>
    </div>
    </div>
  )
}
  

export default Addwork