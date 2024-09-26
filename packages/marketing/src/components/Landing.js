import React from 'react';
import {
  Button,Card,CardActions,CardContent,CardMedia,Grid2 as Grid,
  Typography,Container,Link as MaterialLink} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// import LandingHome from './LandingHome';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const HeroContent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}));


const HeroButtons = styled('div')(({theme})=>({
  marginTop: theme.spacing(4),
}))

const CardGrid = styled(Container)(({theme})=>({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}))

const StyledCard = styled(Card)(({theme})=>({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

const StyledCardMedia = styled(CardMedia)(({theme})=>({
  paddingTop: '56.25%', // 16:9
}))

const StyledCardContent = styled(CardContent)(({theme})=>({
  flexGrow: 1,
}))

const Footer = styled('footer')(({theme})=>({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6),
}))

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Landing() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <HeroContent>
          {/* <LandingHome></LandingHome> */}
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Home Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <HeroButtons>
              <Grid container spacing={2} justifyContent="center">
                <Grid item="true">
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid item="true">
                  <Link to="/pricing">
                    <Button variant="outlined" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </HeroButtons>
          </Container>
        </HeroContent>
    
        <CardGrid maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item="true" key={card} size={{xs:12,sm:6,md:4}}>
                <StyledCard>
                  <StyledCardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content!
                    </Typography>
                  </StyledCardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </CardGrid>
      </main>
      {/* Footer */}
      <Footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Footer>
      {/* End footer */}
    </React.Fragment>
  );
}
