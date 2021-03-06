import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

function Feature(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      borderRadius: 10,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      margin: 100,
      [theme.breakpoints.down('sm')]: {
        margin: 25,
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: 100,
      order: props.reverseContent ? 2 : 1,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        paddingLeft: 0,
        order: 2,
      },
    },
    image: {
      order: props.reverseContent ? 1 : 2,
      [theme.breakpoints.down('sm')]: {
        order: 1,
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
      color: 'hsl(208, 11%, 55%)',
      fontFamily: 'Open Sans',
      fontWeight: 400,
      width: '75%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.content}>
          <h1 className={classes.title}>{props.title}</h1>
          <p className={classes.text}>{props.text}</p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.image}>
          <img src={props.image} alt='illustration' width='100%' />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Feature;
