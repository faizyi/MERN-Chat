import { Box, Typography, Container, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
export default function WelcomeUser({ onUserClick }) {
  return (
    <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
    //   bgcolor: '#f5f5f5',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#ffffff',
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <ChatIcon sx={{ fontSize: 80, color: '#4caf50' }} />
    </Box>
    <Typography variant="h3" sx={{ mt: 3, fontWeight: 'bold' }}>
      Welcome to ChatApp! 🎉
    </Typography>
    <Typography variant="h6" sx={{ mt: 2, color: '#555' }}>
      Select a user from the sidebar to start chatting. 💬
    </Typography>
    {/* <IconButton 
    // onClick={() => onUserClick()}  
    variant="h6" sx={{ mt: 0, color: '#555' }}>
        sidebar
    </IconButton> */}
    <Typography variant="body2" sx={{ mt: 2, color: '#999' }}>
      Happy chatting! 😊
    </Typography>
  </Container>
  )
}
