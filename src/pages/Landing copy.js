import React from 'react';
import backgroundImage from '../assets/Images/background.svg';
import avatar1 from '../assets/Images/avatar1.png';
import avatar2 from '../assets/Images/avatar2.png';
import avatar3 from '../assets/Images/avatar3.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Faq from '../components/Faq';

const useStyles = makeStyles({
  root: {
    textAlign: '-webkit-center',
  },
  background: {
    width: '100%'
  },
  text: {
    color: 'white',
    fontSize: 16,
    margin: '40px 80px',
    textAlign: 'left',
    textAlign: 'justify'
  },
  avatar: {
    margin: 20,
    color: 'white',
    marginTop: 60,
    textAlign: 'center'
  },
  borderLine: {
    border: '1px solid #00FFFE',
    borderLeft: '20px solid #00FFFE',
    position: 'relative',
  },
  desc: {
    margin: '0 10%'
  },
  bottom: {
    paddingBottom: 40
  },
  img: {
    width: 200
  },
  rightTopPolygon: {
    '&:before': {
      background: '#000',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '50px',
      height: '50px',
      top: '-24px',
      right: '-28px',
      borderBottom: '1px solid #00FFFE',
      // -webkit-transform: rotate(45deg),
      transform: 'rotate(49deg)',
    }
  },
  title: {
    textTransform: 'uppercase',
    paddingBottom: '10px',
    borderBottom: '1px solid #fff',
    position: 'relative',
    fontSize: '30px',
    display: 'inline-block',
    fontFamily: 'anita',
    marginBottom: 40,
  },
  titleBorder: {
    '&:after': {
      content: "' '",
      width: '30%',
      height: '4px',
      backgroundColor: '#fff',
      position: 'absolute',
      left: 0,
      bottom: '-4px',
      display: 'inline-block',
    }
  }
});

export default function Store () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={backgroundImage} alt="background" className={classes.background}/>
      <div className={classes.desc}>
        <Grid xs={12} item container className={classes.borderLine}>
          <span className={classes.rightTopPolygon}>
            <div className={classes.text} xs={9}>
              <Grid className={classes.title}>
                <span className={classes.titleBorder}>
                  <strong>//</strong> Who are the new resistance?
                </span>
              </Grid>
              <Grid>
              The New Resistance (NR) is a collective of 10,000 digital vigilantes driven by revolution 
              Distinguished by their relative strengths, these combattants look to survive within the oppressive 
              system they abhor m Free running across the Krupt City’s skyline, they fight the very embodiment of 
            societal structure as enforced by the Crypto-Correctional Command AKA Triple C.
              </Grid>
              <Grid container item xs={12} style={{justifyContent: 'center'}}>
                <Grid className={classes.avatar}>
                  <img src={avatar1} alt="avatar" className={classes.img} />
                  <Grid item>10,000 CHARATERS</Grid>
                </Grid>
                <Grid className={classes.avatar}>
                  <img src={avatar2} alt="avatar" className={classes.img} />
                  <Grid item>RANDOMLY GETNERATED</Grid>
                </Grid>
                <Grid className={classes.avatar}>
                  <img src={avatar3} alt="avatar" className={classes.img} />
                  <Grid item>HAND DRAWN</Grid>
                </Grid>
              </Grid>
            </div>
          </span>
        </Grid>
        <div className={classes.bottom}></div>
      </div>
      <div className={classes.desc}>
        <Grid xs={12} item container className={classes.borderLine}>
          <span className={classes.rightTopPolygon}>
            <div className={classes.text} xs={9}>
              <Grid className={classes.title}>
                <span className={classes.titleBorder}>
                  <strong>//</strong> FAQ
                </span>
              </Grid>
              <Faq />
            </div>
          </span>
        </Grid>
        <div className={classes.bottom}></div>
      </div>
    </div>
  )
}