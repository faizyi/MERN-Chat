import { Box, Typography } from '@mui/material';
import SearchUser from './SearchUser';
import AllUsers from './allUsers';

export default function Sidebar({ onUserClick }) {
  return (
    <Box
      sx={{
        // height: "100vh",
        backgroundColor: '#111414',
        width: { xs: '100%', sm: '340px', md: '340px', lg: '340px' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography sx={{ p: 2, fontSize: '1.25rem', fontWeight: 'bold', borderBottom: '1px solid #333', color: '#E9EDEF' }}>
        All Users
      </Typography>
      <SearchUser />
      <AllUsers onUserClick={onUserClick} />
    </Box>
  );
}
