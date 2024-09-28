import React,{useState} from 'react';
import {
  AppBar,Button,Toolbar,Grid2 as Grid,createTheme,ThemeProvider,
  Typography,Link as MaterialLink} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as RouterLink } from 'react-router-dom';
import { GlobalStore } from 'redux-micro-frontend';
import { SelectMenuFunc,logout } from '../../re-redux/global.actions';
import { styled } from '@mui/material/styles';
const StyledAppBar=styled(AppBar)(({theme})=>({
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const StyledToolbar=styled(Toolbar)(({theme})=>({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}))


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Header() {
  // const classes = useStyles();
  const globalStore = GlobalStore.Get(false);
  const theme = createTheme();
  const [authData,setAuthData]=useState(null)
  globalStore.SubscribeToGlobalState("AuthStore", getAuthData)
  function getAuthData(globalState){
    setAuthData(globalState.AuthStore)
  }


  console.log("AuthData",authData);
  const onClick = (path) => {
    // if (isSignedIn && onSignOut) {
    //   onSignOut();
    // }
   
    globalStore.DispatchAction("MenuStore",SelectMenuFunc(path));

    if(path=="/"){
      globalStore.DispatchAction("AuthStore",logout());
    }
  };

  console.log(authData!==undefined&&authData!==null&&authData.isSignedIn ? 'Logout' : 'Login')

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <StyledAppBar
        position="static"
        color="default"
        elevation={0}
      >
        <StyledToolbar >
          <Typography
            variant="h6"
            color="inherit"
            noWrap
          >
            My App
          </Typography>
          {/* <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            My App
          </Typography> */}
          <Button
            color="primary"
            variant="outlined"
            sx={{
              margin: theme.spacing(1, 1.5),
            }}
            // className={classes.link}
            // component={RouterLink}
            // to={authData!==null&&authData.isSignedIn ? '/' : '/auth/signin'}
            onClick={()=>onClick(authData!==null&&authData.isSignedIn ? '/' : '/auth')}
            // onClick={onClick}
          >
            {authData!==undefined&&authData!==null&&authData.isSignedIn ? 'Logout' : 'Login'}
          </Button>
            {/* <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            // component={RouterLink}
            // to={isSignedIn ? '/' : '/auth/signin'}
            onClick={()=>onClick("/auth/signin")}
          >
            {authData!==null&&authData.isSignedIn ? 'Logout' : 'Login'}
          </Button> */}
         
        </StyledToolbar>
      </StyledAppBar>
      </ThemeProvider>
    </React.Fragment>
  );
}
