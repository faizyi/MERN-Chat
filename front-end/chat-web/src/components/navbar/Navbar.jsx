import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar sx={{
        position: "fixed",
        top: 0,
        left: { sm: '340px' },
        right: 0,
        backgroundColor: "#171c1c",
        display: "flex",
        zIndex: 1000,
        width: { xs: '100%', sm: 'auto' },
      }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Chat Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
