import React from 'react';
import { Box, Button, Avatar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import UploadPic from './uploadPic';
import { useSelector } from 'react-redux';
export default function ProfileSidebar({ handleBackClick }) {
  const isImage = useSelector(state => state.profile.image)
  const sender = JSON.parse(localStorage.getItem("userData")) || null;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    Cookies.remove("jwt");
    navigate('/login'); 
  };

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#111414',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between',
      }}
    >
        <Typography 
        sx={{
              p: 2, fontSize: '1.25rem', fontWeight: 'bold',
              borderBottom: '1px solid #333', color: '#E9EDEF'
            }}
            >Profile</Typography>
        <Box 
        sx={{display: "flex", justifyContent: "center"}}
        >
      <Box>
        <Box sx={{ position: 'relative', }}>
        <Avatar 
          // alt="You" 
          src={isImage ? isImage : sender && sender.image ? `data:image/png;base64${sender.image}` : ""} 
          sx={{ width: 200, height: 200, marginBottom: 2, backgroundColor: "grey" }}
        />
        <UploadPic/>
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textTransform: 'capitalize',
            color: '#E9EDEF',
            display: "flex",
            justifyContent: "center"
          }}
        >
          {sender ? sender.fullName : ""}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ 
            color: '#8696A0', 
            marginBottom: 4,
            display: "flex",
            justifyContent: "center"
         }}
        >
          {sender ? sender.email : ""}
        </Typography>
      </Box>

      </Box>

      <Box>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handleLogout}
          sx={{ width: '100%', mb: 2 }}
        >
          Log Out
        </Button>
        <Button 
          variant="outlined" 
          onClick={handleBackClick}
          sx={{ width: '100%' }}
        >
          Back to Chat
        </Button>
      </Box>
    </Box>
  );
}
