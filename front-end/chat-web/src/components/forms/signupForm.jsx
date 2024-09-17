import { Button, TextField, Box, Container, Typography, Grid, Avatar,  } from '@mui/material';
import { Link } from 'react-router-dom';
import { Person, Email, Lock, ChatBubble } from '@mui/icons-material';
import signupHook from '../../customHooks/authHooks/signup.hook.jsx';
import Loader from '../loader/loader.jsx';
export default function SignupForm() {
  const { handleSignup, errors, isLoading } = signupHook();
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      {isLoading ? <Loader/> :
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'green' }}>
            <ChatBubble />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSignup} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              name="fullName"
              label="Full Name"
              autoComplete="name"
              sx={{textTransform: "capitalize", color: "red"}}
              InputProps={{
                startAdornment: <Person sx={{ color: 'action.active', mr: 1 }} />,
              }}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              InputProps={{
                startAdornment: <Email sx={{ color: 'action.active', mr: 1 }} />,
              }}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              InputProps={{
                startAdornment: <Lock sx={{ color: 'action.active', mr: 1 }} />,
              }}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <Button
              type="submit"
              fullWidth
              // variant="outlined"
              sx={{ mt: 3, mb: 2, borderRadius: 2, backgroundColor: "black", color: "white",
                "&:hover" :{backgroundColor: "#171c1c"}
               }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      }
    </div>
  );
}
