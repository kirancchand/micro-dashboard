import React from "react";
import { LinearProgress,createTheme, ThemeProvider } from '@mui/material';
import { makeStyles,createStyles } from '@mui/styles';
const useStyles=makeStyles((theme)=>{
    return createStyles({
        bar:{
            width:'100','& > * + *':{
                marginTop:theme.spacing(2)
            }
        }
    })
});

export default()=>{
    // const classes = useStyles();
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
        <div sx={{
            width:'100','& > * + *':{
                marginTop:theme.spacing(2)
            } 
        }}>
            <LinearProgress/>
        </div>
        </ThemeProvider>
    );
};