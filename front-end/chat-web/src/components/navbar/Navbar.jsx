import { AppBar, Toolbar, Typography, Avatar, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const isImage = useSelector(state => state.profile.image)
  const navigate = useNavigate();
  const receiverData = JSON.parse(localStorage.getItem('receiverData')) || null;
  const handleBack = ()=>{
    localStorage.removeItem("selectedFriendId")
    navigate("/chat-home")
  }
  return (
    <AppBar sx={{
      position: "fixed",
      top: 0,
      left: { sm: '340px', md: "400px", lg: "400px" },
      backgroundColor: "#171c1c",
    }}>
    <Box sx={{display: "flex"}}>
        <IconButton
        onClick={handleBack}
         sx={{ color: "white", display: {xs: "auto", sm: "none"} }}>
          <ArrowBackIcon />
        </IconButton>
        <Toolbar sx={{ gap: "10px" }}>
          <Avatar src={receiverData ? receiverData.image : ""} 
          sx={{ width: 40, height: 40 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "20px", fontWeight: "bold" }}>
            {receiverData ? receiverData.fullName : ""}
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
