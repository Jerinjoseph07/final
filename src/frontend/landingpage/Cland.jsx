import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './cland.css';
import {   CardHeader, CardContent, Typography,Card, AppBar, Toolbar, Button } from '@mui/material';
import { Buffer } from 'buffer';
import { Link } from 'react-router-dom';

const Cland = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/addworkview")
      .then(response => {
        setWorkers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleContact = (worker) => {
    console.log(`Contact ${worker.name}`);
    // Implement your logic for handling contact here
  };
  
  const renderWorkers = () => {
    
    return workers.map((worker) => (
      <Card
      
        className="cards"
        key={worker._id}
        variant="outlined"
        style={{
          margin: '10px',
          boxShadow: '20px 20px 30px rgba(0, 0, 0, 0.3)',
          width: '280px',
          height: '300px', // Adjust the height as needed
          borderRadius: '7%',
          display: 'flex',
          flexDirection: 'column', // Vertical layout
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <img
          src={`data:image/jpeg;base64,${Buffer.from(worker.image1.data).toString('base64')}`}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            width: '100px',
            height: '100px',
            marginTop: '10px',
          }}
          alt="Worker"
        />
        <div style={{ marginTop: '10px' }}>
          <CardHeader  title={worker.serivce} />
          <CardContent>
            <Typography variant="body1">Location: {worker.location}</Typography>
          </CardContent>
          <CardContent>
            <button className='contact' onClick={() => handleContact(worker)}>
              Contact
            </button>
          </CardContent>
        </div>
      </Card>
    ));
  };
  
  return (
    <>
    <div style={{ backgroundColor: '#3b566f', height: '100vh' ,}}>
    <div align="center">
      <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        worker and client
      </Typography>
      <div style={{ marginLeft: 'auto' }}>
         
          <Button component={Link} to="/nexttype" color="inherit">
            Back
          </Button>
          <Button component={Link} to="/addwork" color="inherit">
            Add work
          </Button>
          </div>
    </Toolbar>
  </AppBar>
  <br></br>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {renderWorkers()}
      </div>
      </div>
      </div>
    </>
  );
  

  
};
  
export default Cland;