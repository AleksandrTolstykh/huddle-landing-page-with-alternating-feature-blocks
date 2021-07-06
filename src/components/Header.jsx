import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(193, 100%, 96%)',
    backgroundImage: 'url(images/bg-hero-desktop.svg)',
    padding: 50,
    [theme.breakpoints.down('md')]: {
      backgroundImage: 'url(images/bg-hero-mobile.svg)',
    },
  },
  tryButton: {
    textAlign: 'right',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  title: {
    color: 'hsl(192, 100%, 9%)',
    fontFamily: 'Poppins',
    fontWeight: 600,
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  text: {
    color: 'hsl(192, 100%, 9%)',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    width: '75%',
    marginBottom: 50,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <img src='images/logo.svg' alt='logo' />
        </Grid>
        <Grid item xs={6} className={classes.tryButton}>
          <CustomButton
            content='Try It Free'
            background='white'
            color='hsl(192, 100%, 9%)'
            opacity='50%'
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.content}>
          <h1 className={classes.title}>Build The Community Your Fans Will Love</h1>
          <p className={classes.text}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
          <Box>
            <CustomButton
              content='Get Started For Free'
              background='hsl(322, 100%, 66%)'
              color='white'
              opacity='50%'
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src='images/illustration-mockups.svg' alt='logo' width='100%' />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
