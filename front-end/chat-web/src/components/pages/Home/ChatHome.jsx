import { useParams } from 'react-router-dom';
import MessagesContainer from '../../message/messages.container';
import Sidebar from '../../sidebar/sidebar';
import { Box } from "@mui/material";
import { useState } from 'react';
export default function ChatHome() {
  const { friendId } = useParams();
  const [showSidebar, setShowSidebar] = useState(true);
  const handleClick = (userId)=>{
    setShowSidebar(false)
  }
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{flexGrow: {xs: 1, sm: 0}, display: {xs:`${showSidebar ? 'flex' : "none"}`, sm:"flex"}}}>
      <Sidebar onUserClick={handleClick}/>
      </Box>
      {friendId && (
        <Box sx={{ flexGrow: 1, display: {xs:`${showSidebar ? 'none' : "flex"}`, sm:"flex"}, 
        flexDirection: "column",  
        }}>
          <MessagesContainer />
        </Box>
      )}
    </Box>
  );
}
