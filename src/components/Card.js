import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import { LinearProgress } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import card from '../assets/Images/card.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 265,
    width: 265,
    backgroundColor: 'black',
    margin: 10,
    '&:hover': {
      boxShadow: '0px 0px 15px 5px Gold'
    },
    // border: '1px solid #00FFFE',
    padding: 5,
    backgroundImage: `url(${card})`,
    height: 342,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  img: {
    width: '200px',
    height: '200px',
    margin: '15px 10px 0px 10px'
  },
  desc: {
    color: 'white',
    textAlign: 'left',
    padding: '5px 10px !important'
  },
  bar: {
    marginTop: 5,
    height: '10px !important'
  },
  strength: {
    color: '#00FFFE',
    fontSize: 14
  },
  intelligence: {
    color: '#9c27b0',
    fontSize: 14
  },
  speed: {
    color: '#ffffff',
    fontSize: 14
  },
  attr: {
    marginTop: 5
  }
}));

export default function RecipeReviewCard({item}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src={item.image} alt="img" className={classes.img} />
      <CardContent className={classes.desc}>
        <Grid container className={classes.attr}>
          <Grid xs={5} item>Name</Grid> 
          {item.name}
        </Grid>
        <Grid container className={classes.attr}>
          <Grid xs={5} item className={classes.strength}>Strength </Grid> 
          <Grid xs={7} item><LinearProgress variant="determinate" value={Number(item.attributes[11].value)*10} xs={9} className={classes.bar} /></Grid>
        </Grid>
        <Grid container className={classes.attr}>
          <Grid xs={5} item className={classes.intelligence}> Intelligence </Grid> 
          <Grid xs={7} item><LinearProgress variant="determinate" value={Number(item.attributes[13].value)*10} color="secondary" xs={9} className={classes.bar} /></Grid>
        </Grid>
        <Grid container className={classes.attr}>
          <Grid xs={5} item className={classes.speed}> Speed </Grid> 
          <Grid xs={7} item><LinearProgress variant="determinate" value={Number(item.attributes[12].value)*10} color="inherit" xs={9} className={classes.bar} /></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}