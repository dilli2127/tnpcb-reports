import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

function Copyright(props) {
 
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://tnpcb.gov.in/">
        Tamil Nadu Pollution Control Board
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate  = useNavigate();
  const handleSubmit = (event) => {
    if(event.target.email.value === "tnpcb@gmail.com" && event.target.password.value === "Tnpcb@123" )
    {
    navigate('over-all-dashboard');
    notification.success({
      message: 'Login successfully',
      description: 'Welcome Admin.',
    });
    }
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(data:image/jpeg;base64,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)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '600px 600px',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          > <img
          key="header-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ROKU0F-Twh6BftfuY9dPd_3_Z2KJYtQPlPqvo97R5boQpubSNcNgyTPOOBQnYocdkEE&usqp=CAU"
          alt="TNPCB Logo"
          style={{ height: "150px" }}
        />
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5" sx={{ mt: 5}}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}