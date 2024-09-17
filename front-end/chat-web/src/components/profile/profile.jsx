import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
export default function Profile({handleProfileClick}) {
  const isImage = useSelector(state => state.profile.image)
  const sender = JSON.parse(localStorage.getItem("userData")) || null;
  return (
    
    <Box
    onClick={handleProfileClick}
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
        // alt="You" 
        src={isImage ? isImage : sender && sender.image ? `data:image/png;base64${sender.image}` : ""}  
        sx={{ width: 56, height: 56,}}
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
