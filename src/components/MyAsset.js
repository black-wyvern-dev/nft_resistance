import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useWallet } from 'use-wallet';
import avatar from '../assets/Images/avatar.png';
import { getUserAsset } from '../actions/userAction';
import { LinearProgress } from '@mui/material';
import CardContent from '@material-ui/core/CardContent';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles({
  root: {
    textAlign: '-webkit-center',
    margin: 20,
    // margin: '0 10%',
    paddingBottom: 100,
    color: 'white',
    maxWidth: 330,

  },
  avatarLine: {
    border: '1px solid #00FFFE',
    minHeight: 400,
    maxHeight: 750,
    position: 'relative',
    '&:before': {
      background: '#000',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '70px',
      height: '70px',
      top: '-27px',
      left: '-45px',
      borderBottom: '1px solid #00FFFE',
      // -webkit-transform: rotate(45deg),
      transform: 'rotate(-56deg)',
    }
  },
  myAvatar: {
    width: 250,
    margin: 10
  },
  img: {
    width: 235,
    marginTop: 10
  },
  largeImg: {
    width: 300,
    marginTop: 10
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
  bar: {
    marginTop: 5,
    height: '10px !important'
  },
  attr: {
    textAlign: 'left',
    border: '1px solid #00FFFE',
    borderLeftWidth: 17,
    borderRightWidth: 17,
    margin: 10,
    padding: '5px !important',
    justifyContent: 'center'
  },
  desc: {
    color: 'white',
    textAlign: 'justify',
    padding: 10,
    textIndent: 20
  },
  center: {
    margin: '0px 20px'
  },
  centerImg: {
    width: '100%'
  },
  title: {
    textShadow: '5px 0px 0px #6E0000, 5px 5px 0px rgba(110,110,110,0.5), 10px 5px 0px rgba(110,0,0,0.5), 10px 5px 0px rgba(110,0,0,0.5)',
    fontSize: 32,
  },
  avatar: {
    width: 80,
    float: 'left'
  },
  tabTile: {
    margin: 20
  },
  rankCard: {
    margin: 10
  },
  topRankCard: {
    width: '100%',
    margin: '10px 10px 10px -3px',
    left: '-10px'
  },
  topName: {
    position: 'absolute',
    margin: '1% 0px 0px 3%'
  },
  topScore: {
    position: 'absolute',
    margin: '2% 0px 0px 3.5%'
  },
  descTitle: {
    borderLeftWidth: '10px !important',
    border: '0px solid #00fffe',
    fontSize: 20,
    paddingLeft: 10,
    marginLeft: 13
  },
  textAlign: {
    textAlign: 'justify',
    marginLeft: 10
  },
  rightTopPolygon: {
    '&:before': {
      background: '#000',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '25px',
      height: '25px',
      top: '-13px',
      right: '-14px',
      borderBottom: '1px solid #00FFFE',
      // -webkit-transform: rotate(45deg),
      transform: 'rotate(48deg)',
    }
  },
  rightBottomPolygon: {
    '&:before': {
      background: '#000',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '25px',
      height: '25px',
      bottom: '-13px',
      right: '-14px',
      borderBottom: '1px solid #00FFFE',
      // -webkit-transform: rotate(45deg),
      transform: 'rotate(133deg)',
    }
  },
  leftBottomPolygon: {
    '&:before': {
      background: '#000',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '25px',
      height: '25px',
      bottom: '-13px',
      left: '-14px',
      borderBottom: '1px solid #00FFFE',
      // -webkit-transform: rotate(45deg),
      transform: 'rotate(227deg)',
    }
  }
});

export default function MyAsset ({myAssetData}) {

  const classes = useStyles();
  const [myAvatar] = useState(avatar);
  const [myAsset, setMyAsset] = useState(myAssetData);
  const wallet = useWallet();

  useEffect(() => {
    getUserAsset(wallet.account)
    .then(res => {
      setMyAsset(res.data[0]);
    });
  }, []);

  const isTablet = useMediaQuery({ query: '(mix-width: 1700px)' });

  let selectMyAsset = (myAssetData &&
    <div>
      <img src={myAssetData.image} alt="myAvatar" className={isTablet?classes.largeImg:classes.img}/>
      <CardContent className={classes.attr}>
        <Grid container>
          <Grid xs={5} item className={classes.strength}>Strength </Grid> 
          <Grid xs={7} item><LinearProgress variant="determinate" value={Number(myAssetData.attributes[11].value)*10} xs={9} className={classes.bar} /></Grid>
        </Grid>
        <Grid container>
          <Grid xs={5} item className={classes.intelligence}> Intelligence </Grid> 
          <Grid xs={7} item><LinearProgress variant="determinate" value={Number(myAssetData.attributes[13].value)*10} color="secondary" xs={9} className={classes.bar} /></Grid>
        </Grid>
        <Grid container>
          <Grid xs={5} item className={classes.speed}> Speed </Grid> 
          <Grid xs={7} item><LinearProgress variant="determinate" value={Number(myAssetData.attributes[12].value)*10} color="inherit" xs={9} className={classes.bar} /></Grid>
        </Grid>
      </CardContent>
      <CardContent className={classes.desc}>
        <Grid>
        {myAssetData.description}
        </Grid>
      </CardContent>
    </div>
  );

  return (    
    <div className={classes.root} >
      <Grid container>
        <Grid item>  
          <div className={classes.avatarLine}>
            <span className={classes.rightTopPolygon}>
              <span className={classes.rightBottomPolygon}>
                <span className={classes.leftBottomPolygon}>
                  {myAsset === null ? <img src={myAvatar} alt="myAvatar" className={classes.myAvatar} /> : selectMyAsset }
                </span>
              </span>
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}