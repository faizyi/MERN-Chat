import { useParams } from 'react-router-dom';
import MessagesContainer from '../../message/messages.container';
import Sidebar from '../../sidebar/sidebar';
import { Box } from "@mui/material";
import { useEffect, useState } from 'react';
import WelcomeUser from '../../welcomeUser/welcomeUser';
export default function ChatHome() {
  const { friendId } = useParams();
  const [showSidebar, setShowSidebar] = useState(true);
  const handleClick = (userId)=>{
    setShowSidebar(false);
  }  
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{flexGrow: {xs: 1, sm: 0}, display: {xs:`${friendId ? 'none' : "flex"}`, sm:"flex"}}}>
        
      <Sidebar onUserClick={handleClick}/>
      </Box>
      <Box sx={{ flexGrow: 1, display: {xs:`${friendId ? 'flex' : "none"}`, sm:"flex"}, 
      flexDirection: "column",  
      }}>
      {friendId ? (
          <MessagesContainer />
        ) 
        : <WelcomeUser/>
      }
      </Box>
    </Box>
  );
}
