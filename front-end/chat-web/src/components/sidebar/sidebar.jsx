import { Box, Typography } from '@mui/material';
import Profile from '../profile/profile';
import UserSidebar from './UserSidebar';
import { useState } from 'react';
import ProfileSidebar from '../profile/profileSidebar';
export default function Sidebar({ onUserClick }) {
  const [isProfileView, setIsProfileView] = useState(false);
  const handleProfileClick = () => {
    setIsProfileView(true);
  };
  const handleBackClick = () => {
    setIsProfileView(false);
  };
  return (
    <Box
      sx={{
        backgroundColor: '#111414',
        width: { xs: '100%', sm: '340px', md: '400px', lg: '400px' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isProfileView ? (<ProfileSidebar handleBackClick={handleBackClick} />) :
        (
          <>
            <Typography sx={{
              p: 2, fontSize: '1.25rem', fontWeight: 'bold',
              borderBottom: '1px solid #333', color: '#E9EDEF'
            }}>
              All Login Users
            </Typography>
            <UserSidebar onUserClick={onUserClick} />
            <Profile handleProfileClick={handleProfileClick} />
          </>
        )
      }
    </Box>
  );
}
