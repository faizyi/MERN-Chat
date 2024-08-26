import { useParams } from 'react-router-dom';
import MessagesContainer from '../../message/messages.container';
import Sidebar from '../../sidebar/sidebar';
import { Box } from "@mui/material";
import { useEffect, useState } from 'react';
import WelcomeUser from '../../welcomeUser/welcomeUser';
export default function ChatHome() {
  const { friendId } = useParams();
  // const [friendId, setFriendId] = useState(id || localStorage.getItem('selectedFriendId'));
  const [showSidebar, setShowSidebar] = useState(true);
  // useEffect(() => {
  //   if (friendId) {
  //     setShowSidebar(false); 
  //     localStorage.setItem('selectedFriendId', friendId); // Save the selected friendId
  //   } else {
  //     setShowSidebar(true); // Show the sidebar when no friend is selected
  //     localStorage.removeItem('selectedFriendId'); // Remove the friendId when no friend is selected
  //   }
  // }, [friendId]);
  const handleClick = (userId)=>{
    setShowSidebar(false);
  }  
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{flexGrow: {xs: 1, sm: 0}, display: {xs:`${showSidebar ? 'flex' : "none"}`, sm:"flex"}}}>
      <Sidebar onUserClick={handleClick}/>
      </Box>
      <Box sx={{ flexGrow: 1, display: {xs:`${showSidebar ? 'none' : "flex"}`, sm:"flex"}, 
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
