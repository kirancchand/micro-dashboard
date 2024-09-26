import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Grid2 } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn({ onSignIn }) {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
                <Avatar sx={{
                    margin: theme.spacing(1),
                    backgroundColor: theme.palette.secondary.main,
                   }}
                >
             <LockOutlinedIcon />
            </Avatar>
        <Typography component="h1" variant="h5">
         Please Sign In
        </Typography>
        <form
          onSubmit={(e) => e.preventDefault()}
          sx={{
            width: '100%',
            marginTop: theme.spacing(1),
          }}
          noValidate
        >
          <TextField
            variant="outlined"
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
            variant="outlined"
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
            color="primary"
            sx={{
              margin: theme.spacing(3, 0, 2),
            }}
            onClick={onSignIn}
          >
            Sign In
          </Button>
          <Grid2 container>
            <Grid2 item="true">
              <Link to="/authenticator/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid2>
          </Grid2>
        </form>
      </Box>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </ThemeProvider>

  );
}
