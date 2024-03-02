import { AppBar, Box, Button, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WorkerReg = () => {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    job: '',
    experience: '',
    location: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const saveData = () => {
    const formData = new FormData();
    formData.append('name', inputs.name);
    formData.append('phone', inputs.phone);
    formData.append('job', inputs.job);
    formData.append('experience', inputs.experience);
    formData.append('location', inputs.location);
    formData.append('image1', selectedImage);

    fetch('http://localhost:3005/new', {
      method: 'post',
      body: formData,
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
    <div style={{ backgroundColor: '#3b566f', height: '100vh' ,}}>
    <div align="center">
      <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        worker and client
      </Typography>
      <div style={{ marginLeft: 'auto' }}>
          {/* Use Link for navigation */}
          <Button component={Link} to='/type' color="inherit">
            Back
          </Button>
          </div>
    </Toolbar>
  </AppBar>
  <br></br>
      <form >
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' ,backgroundColor: '#f0f0f0',borderRadius: '7%',boxShadow: '20px 20px 30px rgba(0, 0, 0, 0.3)',
      alignItems: 'center',
      padding: '5px', }}>
          <br />
          <Typography variant="h6">
        Worker Registration
      </Typography><br />
          <input type="file" onChange={handleImage} />
          
         
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Profile"
              style={{ borderRadius: '50%', marginTop: '10px', width: '100px', height: '100px' }}
            />
          )}
          <br />
          <TextField
            label="Full Name"
            name="name"
            variant="outlined"
            value={inputs.name}
            onChange={inputHandler}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Phone number"
            name="phone"
            variant="outlined"
            value={inputs.phone}
            onChange={inputHandler}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Applying for Position"
            name="job"
            variant="outlined"
            value={inputs.job}
            onChange={inputHandler}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Experience"
            name="experience"
            variant="outlined"
            value={inputs.experience}
            onChange={inputHandler}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Location"
            name="location"
            variant="outlined"
            value={inputs.location}
            onChange={inputHandler}
          />
          <br />
          

          <br />
          <Button component={Link} to="/cland"
           color="primary"
            onClick={saveData}
               variant="contained"
          
          fullWidth
          style={{ marginTop: 16 }}>
            SAVE
          </Button>
          
        </Box>
      </form>
    </div>
    </div>
  );
};

export default WorkerReg;
