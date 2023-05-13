"use client"
// pages/ContactMe.js
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Navbar from '../components/Navbar';

const ContactMe = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `mailto:zixin.deng@mail.concordia.ca?subject=Contact from Portfolio&body=${message}`;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ m: 3 }}>
        <Typography variant="h4" component="div">
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 1, bgcolor: '#ffffff' }}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
}

export default ContactMe;
