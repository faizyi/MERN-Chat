import { Box} from '@mui/material';
import GetUsers from './getUsers';
import Loader from '../loader/loader';
export default function AllUsers({ onUserClick, filteredUsers }) {
  return (
    <Box
      sx={{
        overflow: "auto",
        height: "calc(100vh - 80px)", 
        '&::-webkit-scrollbar': {
          width: '10px', 
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#111b21',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#333', 
          borderRadius: '10px', 
          border: '2px solid transparent',
          backgroundClip: 'content-box', 
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555', 
        },
        
      }}
    >
      <GetUsers onUserClick={onUserClick} filteredUsers={filteredUsers}/>
      {/* <div className=''> <Loader/></div> */}
     
    </Box>
  );
}
