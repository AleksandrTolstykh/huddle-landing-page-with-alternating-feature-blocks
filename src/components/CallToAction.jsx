import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    color: 'hsl(192, 100%, 9%)',
    fontFamily: 'Poppins',
    fontWeight: 600,
    textAlign: 'center',
    position: 'relative',
    marginLeft: 300,
    marginRight: 300,
    top: 100,
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 25,
      marginRight: 25,
    },
  },
}));

function CallToAction(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h1>Ready To Build Your Community?</h1>
      <CustomButton
        content='Get Started For Free'
        background='hsl(322, 100%, 66%)'
        color='white'
        opacity='50%'
      />
    </Box>
  );
}

export default CallToAction;
