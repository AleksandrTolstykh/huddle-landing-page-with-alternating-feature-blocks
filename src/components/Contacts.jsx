import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CustomButton from './CustomButton';
import { CustomFaceBookIcon, CustomTwitterIcon, CustomInstagramIcon } from './Icons'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(192, 100%, 9%)',
    color: 'white',
    paddingTop: 150,
    paddingBottom: 50,
    paddingLeft: 100,
    paddingRight: 100,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
  label: {
    marginLeft: 40,
    position: 'relative',
    bottom: 45,
  },
  icons: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  copyright: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

function Contacts() {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={12}>
        <img src='images/logo-white.svg' alt='logo' />
      </Grid>
      <Grid item xs={12} md={3}>
        <LocationOnIcon />
        <p className={classes.label}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <PhoneInTalkIcon />
        <p className={classes.label}>+1-543-123-4567</p>
        <MailOutlineIcon />
        <p className={classes.label}>example@huddle.com</p>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box>
          <CustomButton
            content='About Us'
            background='hsl(192, 100%, 9%)'
            color='white'
            decoration='underline'
            fontFamily='Open Sans'
            fontWeight='400'
          />
        </Box>
        <Box>
          <CustomButton
            content='What We Do'
            background='hsl(192, 100%, 9%)'
            color='white'
            decoration='underline'
            fontFamily='Open Sans'
            fontWeight='400'
          />
        </Box>
        <Box>
          <CustomButton
            content='FAQ'
            background='hsl(192, 100%, 9%)'
            color='white'
            decoration='underline'
            fontFamily='Open Sans'
            fontWeight='400'
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box>
          <CustomButton
            content='Career'
            background='hsl(192, 100%, 9%)'
            color='white'
            decoration='underline'
            fontFamily='Open Sans'
            fontWeight='400'
          />
        </Box>
        <Box>
          <CustomButton
            content='Blog'
            background='hsl(192, 100%, 9%)'
            color='white'
            decoration='underline'
            fontFamily='Open Sans'
            fontWeight='400'
          />
        </Box>
        <Box>
          <CustomButton
            content='Contact Us'
            background='hsl(192, 100%, 9%)'
            color='white'
            decoration='underline'
            fontFamily='Open Sans'
            fontWeight='400'
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={3} className={classes.icons}>
        <CustomFaceBookIcon />
        <CustomTwitterIcon />
        <CustomInstagramIcon />
      </Grid>
      <Grid item xs={12} className={classes.copyright}>
        &copy; Copyright 2018 Huddle. All rights reserved.
      </Grid>
    </Grid>
  );
}

export default Contacts;
