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
import { Grid2 as Grid} from '@mui/material';

import { useSelector,useDispatch } from 'react-redux';
import { login,SelectMenuFunc } from '../../re-redux/actions';
import { GlobalStore } from 'redux-micro-frontend';
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

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ onSignIn }) {
  const dispatch=useDispatch()
  const globalStore = GlobalStore.Get(false);
  
  // const classes = useStyles();
  const theme = createTheme();
  const handleSubmit=(e)=>{
    e.preventDefault()
    let authData={
      isSignedIn:true,
      userName:"ABCD",
      profileName:"AB CD"
    }
    dispatch(login(authData))
    globalStore.DispatchAction("MenuStore",SelectMenuFunc('/dashboard/home'));
    console.log(globalStore.GetGlobalState().MenuStore)

  }
  // const handleClick=()=>{
  //   globalStore.DispatchAction("MenuStore",SelectMenuFunc('/auth/signup'));
  // }
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
          onSubmit={(e) => handleSubmit(e)}
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
            // onClick={onSignIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item="true">
              {/* <span onClick={()=>handleClick("/auth/signup")}>{"Don't have an account? Sign Up"}</span> */}
              <Link to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </ThemeProvider>
  );
}



