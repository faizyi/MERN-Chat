import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
export default function Profile() {
  const sender = JSON.parse(localStorage.getItem("userData")) || null;
  return (
    <Box
      sx={{
        p: 1.5,
        borderBottom: '1px solid #333',
        backgroundColor: '#2A2F32',
        display: "flex",
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Avatar 
        alt="You" 
        src="https://example.com/avatar.jpg" 
        sx={{ width: 56, height: 56 }}
      />
      <Box>
        <Typography  component="div"
        sx={{
            fontWeight: 'bold',
            textTransform: 'capitalize',
            color: '#E9EDEF', 
        }}
        >
          {sender ? sender.fullName : ""}
        </Typography>
        <Typography variant="body2" color="text.secondary"
        sx={{
             color: '#8696A0'
        }}
        > 
          {sender ? sender.email : ""}
        </Typography>
      </Box>
    </Box>
  );
}
