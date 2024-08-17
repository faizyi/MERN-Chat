import { Button, TextField, Box, Container, Typography, Grid } from '@mui/material';
import signupHook from '../../customHooks/authHooks/signup.hook';
import { Link } from 'react-router-dom';
export default function SignupForm() {
  const {handleSignup} = signupHook();
  return (
    <div className="flex items-center justify-center min-h-screen">
       <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
            inputProps={{style: {textTransform: 'capitalize'}}}
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center" >
            <Grid item>
              <Link to="/login" >
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </div>
  );
}
