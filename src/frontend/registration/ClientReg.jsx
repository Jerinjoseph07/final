import { AppBar, Box, Button,TextField, Toolbar, Typography } from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const ClientReg = () => {

        var [inputs,setInputs]=useState({
          "name":'',
          "phone":'',
          "location":'',
        });
        var [selectedimage,setSelectedimage] = useState(null);
const handleimage =(event)=>{
const file = event.target.files[0];
setSelectedimage(file)
inputs.image1=file;
}

      
  const inputHandler =(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
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
 
    formdata.append('location',inputs.location);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/cnew',
    {method:'post',body:formdata,})
    .then((response)=>response.json())
    .then((data)=>{
    alert("record saved")
    })
    .catch((err)=>{
    console.log("error")
    })
    }
    
  return (
    <div style={{ backgroundColor: '#3b566f', height: '100vh' }}>
    <div align='center'>
      <br></br>
      <AppBar position="static" sx={{ backgroundColor: '#1196F6' }}>
    <Toolbar>
      <Typography variant="h6">
        worker and client
      </Typography>
      <div style={{ marginLeft: 'auto' }}>
          {/* Use Link for navigation */}
          <Button component={Link} to="/type" color="inherit">
            Back
          </Button>

          
        </div>
    </Toolbar>
  </AppBar>
  <br></br>
      <form >
      
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' ,backgroundColor: '#f0f0f0',borderRadius: '7%',boxShadow: '20px 20px 30px rgba(0, 0, 0, 0.3)',
      alignItems: 'center',
      padding: '10px', }}>
          <br />
          <Typography variant="h6">
        Client Registration
      </Typography><br />
          <input type="file" onChange={handleimage} />
          
          {/* Display the selected image */}
          {selectedimage && (
            <img 
              src={URL.createObjectURL(selectedimage)}
              alt="Profile"
              style={{ borderRadius: '50%',marginTop: '10px', width: '100px', height: '100px' }}
            />
          )}
          <br />
    <TextField     
label=" Full Name" 
name="name"
 variant="outlined" 
 value={inputs.name}
  onChange={inputHandler} /> <br />
<TextField
id="outlined-basic"
label="Phone number" 
name="phone" 
variant="outlined" 
value={inputs.phone} 
onChange={inputHandler} /><br />
<TextField 
id="outlined-basic"
label="location"
name="location"
variant="outlined"
value={inputs.location}
 onChange={inputHandler}/><br />
 <Button component={Link} to="/wland"
           color="primary"
            onClick={savedata}
               variant="contained"
          
          fullWidth
          style={{ marginTop: 16 }}>
            SAVE
          </Button>
          
  
  
  
  </Box>
  </form>
    </div>
    </div>
      )
}

export default ClientReg