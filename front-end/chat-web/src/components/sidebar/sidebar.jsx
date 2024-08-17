import { Box, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import usersHook from '../../customHooks/chatHooks/users.hook';
import SearchUser from '../searchUser/SearchUser';

export default function Sidebar({onUserClick}) {
  const { users, handleUserClick } = usersHook();
  const handleClick = (userId) => {
    handleUserClick(userId);
    onUserClick(userId);
  };
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: "100vh",
        backgroundColor: '#111b21',
        width: { xs: '100%', sm: '340px', md: '340px', lg: '340px' },
      }}
    >
      <Typography className="p-4 text-lg font-bold border-b border-gray-700">
        All Users
      </Typography>
      {/* <Divider className="border-gray-700" /> */}
      <SearchUser/>
      <List sx={{ flexGrow: 1, overflowY: "auto" }}>
        {users.length > 0 ? (
          users.map((user) => (
            <ListItem
              key={user._id}
              className="p-4 border-b border-gray-800 hover:bg-gray-800"
              onClick={() => handleClick(user._id)}
            >
              <ListItemText
                primary={user.fullName}
                secondary={user.email}
                primaryTypographyProps={{ sx: { fontWeight: 'bold', textTransform: 'capitalize', color: '#E9EDEF' } }}
                secondaryTypographyProps={{ sx: { color: '#8696A0' } }}
              />
            </ListItem>
          ))
        ) : (
          <Typography className="p-4 text-lg text-center text-gray-500">
            No users found
          </Typography>
        )}
      </List>
    </Box>
  );
}
