import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import usersHook from '../../customHooks/chatHooks/users.hook';

export default function AllUsers({ onUserClick }) {
  const { users, handleUserClick } = usersHook();

  const handleClick = (userId) => {
    handleUserClick(userId);
    onUserClick(userId);
  };

  return (
    <Box
      sx={{
        overflow: "auto",
        height: "calc(100vh - 80px)", // Adjust height based on your layout
        '&::-webkit-scrollbar': {
          width: '10px', // Width of the scrollbar
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#111b21', // Track color
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#333', // Thumb color
          borderRadius: '10px', // Rounded corners for the thumb
          border: '2px solid transparent', // Adds space around the thumb
          backgroundClip: 'content-box', // Ensures the border doesn't overlap the thumb color
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555', // Darker thumb color on hover
        },
        
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        {users.length > 0 ? (
          users.map((user) => (
            <ListItem
              key={user._id}
              sx={{
                p: 1.5,
                borderBottom: '1px solid #333',
                '&:hover': {
                  backgroundColor: '#2A2F32',
                },
              }}
              onClick={() => handleClick(user._id)}
            >
              <ListItemText
                primary={user.fullName}
                secondary={user.email}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    color: '#E9EDEF',
                  },
                }}
                secondaryTypographyProps={{
                  sx: { color: '#8696A0' },
                }}
              />
            </ListItem>
          ))
        ) : (
          <Typography sx={{ p: 4, textAlign: 'center', color: 'gray' }}>
            No users found
          </Typography>
        )}
      </List>
    </Box>
  );
}
