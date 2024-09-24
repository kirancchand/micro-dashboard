import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

// import { FlatNav } from './NavItems';
// import MetisMenu from 'react-metismenu';
import Sidebar from './Sidebar';
// import LandingHome from './LandingHome';

export default function Menu({onSelect}) {
  const onSelectFunc=(val)=>{
    onSelect(val)
    console.log("Menu",val)
  }
  return (
    <React.Fragment>
      <main>
        <Sidebar 
        onSelect={onSelectFunc}
        />
      </main>
    </React.Fragment>
  );
}
