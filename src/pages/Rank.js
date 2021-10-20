import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import getAssets from '../mint/List';
import { makeStyles } from '@material-ui/core/styles';
import { useWallet } from 'use-wallet';
import avatar from '../assets/Images/avatar.png';
import { getUserAsset } from '../actions/userAction';
import { LinearProgress } from '@mui/material';
import centerImg from '../assets/Images/centerImg.svg';
import centerPath from '../assets/Images/centerPath.svg';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import topRankCard from '../assets/Images/topRankCard.svg';
import Avatar from '../assets/Images/avatar.png';
import MyAsset from '../components/MyAsset';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles({
  root: {
    textAlign: '-webkit-center',
    marginTop: 20,
    margin: '0 5%',
    paddingBottom: 100,
    color: 'white'
  },
  avatarLine: {
    border: '1px solid #00FFFE',
    minHeight: 400,
    maxHeight: 750,
    marginTop: 20,
    maxWidth: 270,
    position: 'relative',
    '&:before': {
      background: '#000',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '25px',
      height: '25px',
      top: '-12px',
      left: '-15px',
      borderBottom: '1px solid #00FFFE',
      // -webkit-transform: rotate(45deg),
      transform: 'rotate(-51deg)',
    }
  },
  myAvatar: {
    width: 250,
    margin: 10
  },
  img: {
    width: 250,
    marginTop: 10
  },
  strength: {
    color: '#00FFFE',
  },
  intelligence: {
    color: '#9c27b0',
  },
  speed: {
    color: '#ffffff',
  },
  bar: {
    marginTop: 5,
  },
  attr: {
    textAlign: 'left',
    border: '1px solid #00FFFE',
    borderLeftWidth: 17,
    borderRightWidth: 17,
    margin: 10,
    padding: '5px !important'
  },
  desc: {
    color: 'white',
    textAlign: 'justify'
  },
  centerPath: {
    backgroundImage: `url(${centerPath})`,
    height: 200,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    maxWidth: 600
  },
  center: {
    margin: '0px 20px'
  },
  centerImg: {
    width: '-webkit-fill-available'
  },
  title: {
    textShadow: '5px 0px 0px #6E0000, 5px 5px 0px rgba(110,110,110,0.5), 10px 5px 0px rgba(110,0,0,0.5), 10px 5px 0px rgba(110,0,0,0.5)',
    fontSize: 32,
  },
  avatar: {
    width: 80,
    float: 'left'
  },
  centerMyAvatar: {
    float: 'left'
  },
  tabTile: {
    margin: 20
  },
  rankCard: {
    margin: 10,
    position: 'relative'
  },
  topRankCard: {
    width: '100%',
    margin: '10px 10px 10px -3px',
    left: '-10px'
  },
  topName: {
    position: 'absolute',
    margin: '6% 0px 0px 22%'
  },
  topScore: {
    position: 'absolute',
    margin: '13% 0px 0px 26%'
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
  },
  myAssetDataTitle: {
     margin: '35px 0px 0px 35px'
  },
  myAssetDataTitleMin: {
    margin: '45px 0px 0px 10px'
  },
  scoreTitle: {
    marginTop: 35,
    position: 'absolute'
  },
  scoreValue: {
    marginTop: 60,
    position: 'absolute'
  },
  attrMyAsset: {
    textAlign: 'left'
  },
  myAssetAttr: {
    marginLeft: 35,
    marginTop: '-35px'
  },
  myAssetAttrMiniPhone: {
    marginLeft: 15,
    marginTop: '-15px'
  },
  rightTopPolygon: {
    '&:before': {
      background: '#000',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '25px',
      height: '25px',
      top: '-12px',
      right: '-14px',
      borderBottom: '1px solid #00FFFE',
      // -webkit-transform: rotate(45deg),
      transform: 'rotate(49deg)',
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

export default function MyAssets () {
  const classes = useStyles();
  const [assetsData, setAssetsData] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const [myAvatar] = useState(avatar);
  const [myAsset, setMyAsset] = useState(null);
  const wallet = useWallet();

  const assetsDataFn = (data) => {
    setAssetsData(data);
    setSpinner(false);
  }

  useEffect(() => {

    getUserAsset(wallet.account)
    .then(res => {
      let tempData = res.data[0];
      let asset = {attributes: [{},{},{},{},{},{},{},{},{},{},{},{value: 0},{value: 0},{value: 0}]};

      asset.image = tempData.image;
      asset.name = tempData.name;
      asset.description = tempData.desc;
      asset.attributes[11].value = tempData.strength;
      asset.attributes[12].value = tempData.speed;
      asset.attributes[13].value = tempData.intelligence;

      setMyAsset(asset);
    });

    let params = {};
    params.wallet_account = wallet.account;
    params.name = null;

    getAssets(params, assetsDataFn);
  }, [])

  const isTablet = useMediaQuery({ query: '(max-width: 1300px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' });
  const isMiniPhone = useMediaQuery({ query: '(max-width: 550px)' });
  const isMin = useMediaQuery({ query: '(max-width: 300px)' });

  let topAsset = (
    <Grid container justifyContent="center">
    { spinner ? <Spinner /> : assetsData && assetsData.map((item, key) => 
      key < 2 ?
      <Grid item className={classes.textAlign} key={key}>
        {key !== 1 ? <span className={classes.descTitle}> My Best Hand</span> : <span className={classes.descTitle}>NFT's Total 24</span>}
        <Card item={item} key={key}/></Grid> : ''
      ) }
    </Grid>
  );

  return (    
    <div className={classes.root} >
      <Grid container >
        { !isTablet && <Grid xs={12} sm={12} md={isTablet?isMobile?12:3:3} item>  
          <span className={classes.title}>Leaderboard</span>
          {myAsset === null ? <img src={myAvatar} alt="myAvatar" className={classes.myAvatar} /> : <MyAsset myAssetData={myAsset}/> }
        </Grid>}
        <Grid xs={12} sm={12} md={isTablet?isMobile?12:9:6} item>
          <Grid item xs={12}>
            <img src={centerImg} alt="center Image" className={classes.centerImg}/>
          </Grid>
          {!isMin && <Grid item xs={12} className={classes.centerPath} container>
            <Grid xs={8} container item style={isMiniPhone?{marginBottom: 60}:{}}>
              <Grid className={isMiniPhone?classes.myAssetDataTitleMin:classes.myAssetDataTitle} style={isMiniPhone?{fontSize:15}:{fontSize:20}}>The best in the last 24h</Grid>
              <Grid container item xs={10} className={isMiniPhone?classes.myAssetAttrMini:classes.myAssetAttr}>
                <Grid xs={4} item>
                  <img src={avatar} alt="avatar" className={classes.centerMyAvatar} style={isMiniPhone?{width:50}:{width:80}}/>
                </Grid>
                <Grid xs={8} item>
                  <Grid container justifyContent="center">
                    name.wex
                  </Grid>
                  <Grid container className={classes.attrMyAsset}>
                    <Grid xs={5} item className={classes.strength} style={isMiniPhone?{fontSize:12}:{fontSize:14}}>Strength </Grid> 
                    <Grid xs={7} item><LinearProgress variant="determinate" value={40} xs={9} className={classes.bar} style={isMiniPhone?{height:5}:{height:10}}/></Grid>
                  </Grid>
                  <Grid container className={classes.attrMyAsset}>
                    <Grid xs={5} item className={classes.intelligence} style={isMiniPhone?{fontSize:12}:{fontSize:14}}> Intelligence </Grid> 
                    <Grid xs={7} item><LinearProgress variant="determinate" value={30} color="secondary" xs={9} className={classes.bar} style={isMiniPhone?{height:5}:{height:10}} /></Grid>
                  </Grid>
                  <Grid container className={classes.attrMyAsset}>
                    <Grid xs={5} item className={classes.speed} style={isMiniPhone?{fontSize:12}:{fontSize:14}}> Speed </Grid> 
                    <Grid xs={7} item><LinearProgress variant="determinate" value={70} color="inherit" xs={9} className={classes.bar} style={isMiniPhone?{height:5}:{height:10}} /></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} style={{position: 'relative'}}>
              <div className={classes.scoreTitle} style={isMiniPhone?{fontSize:15, marginTop: 45}:{fontSize:20}}>Score</div>
              <div className={classes.scoreValue} style={isMiniPhone?{fontSize:30, marginTop: 80}:{fontSize:60}}>9345</div>
            </Grid>
          </Grid>}
          <Grid item xs={12} sm={12} md={12}>
            {topAsset}
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={isMobile?12:3} item style={{paddingLeft: 20}}>
          <span className={classes.title}>Top Ranking</span>
            <div className={classes.avatarLine}>
              <span className={classes.rightTopPolygon}>
                <span className={classes.rightBottomPolygon}>
                  <span className={classes.leftBottomPolygon}>
                    <div style={{marginTop: '20px'}}>
                      <span className={classes.tabTile}>Last 7</span>
                      <span className={classes.tabTile}>Last Month</span>
                    </div>
                    <div style={{marginTop: '20px'}}>
                      <span className={classes.tabTile}>Rank</span>
                      <span className={classes.tabTile}>Winzard</span>
                      <span className={classes.tabTile}>Fidelity</span>
                    </div>
                    <Grid container className={classes.rankCard}>
                      <Grid xs={3} md={3} item style={{zIndex: 10}}>
                        <img src={Avatar} alt="avartar" className={classes.avatar}/>
                      </Grid>
                      <Grid xs={8} md={8} container item>
                        <img src={topRankCard} alt="topRankCard" className={classes.topRankCard}/> 
                        <Grid xs={12} item className={classes.topName}>name.alex</Grid>
                        <Grid xs={12} item className={classes.topScore}>776345</Grid>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.rankCard}>
                      <Grid xs={3} md={3} item style={{zIndex: 10}}>
                        <img src={Avatar} alt="avartar" className={classes.avatar}/>
                      </Grid>
                      <Grid xs={8} md={8} container item>
                        <img src={topRankCard} alt="topRankCard" className={classes.topRankCard}/> 
                        <Grid xs={12} item className={classes.topName}>name.alex</Grid>
                        <Grid xs={12} item className={classes.topScore}>776345</Grid>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.rankCard}>
                      <Grid xs={3} md={3} item style={{zIndex: 10}}>
                        <img src={Avatar} alt="avartar" className={classes.avatar}/>
                      </Grid>
                      <Grid xs={8} md={8} container item>
                        <img src={topRankCard} alt="topRankCard" className={classes.topRankCard}/> 
                        <Grid xs={12} item className={classes.topName}>name.alex</Grid>
                        <Grid xs={12} item className={classes.topScore}>776345</Grid>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.rankCard}>
                      <Grid xs={3} md={3} item style={{zIndex: 10}}>
                        <img src={Avatar} alt="avartar" className={classes.avatar}/>
                      </Grid>
                      <Grid xs={8} md={8} container item>
                        <img src={topRankCard} alt="topRankCard" className={classes.topRankCard}/> 
                        <Grid xs={12} item className={classes.topName}>name.alex</Grid>
                        <Grid xs={12} item className={classes.topScore}>776345</Grid>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.rankCard}>
                      <Grid xs={3} md={3} item style={{zIndex: 10}}>
                        <img src={Avatar} alt="avartar" className={classes.avatar}/>
                      </Grid>
                      <Grid xs={8} md={8} container item>
                        <img src={topRankCard} alt="topRankCard" className={classes.topRankCard}/> 
                        <Grid xs={12} item className={classes.topName}>name.alex</Grid>
                        <Grid xs={12} item className={classes.topScore}>776345</Grid>
                      </Grid>
                    </Grid>
                    <Grid container className={classes.rankCard}>
                      <Grid xs={3} md={3} item style={{zIndex: 10}}>
                        <img src={Avatar} alt="avartar" className={classes.avatar}/>
                      </Grid>
                      <Grid xs={8} md={8} container item>
                        <img src={topRankCard} alt="topRankCard" className={classes.topRankCard}/> 
                        <Grid xs={12} item className={classes.topName}>name.alex</Grid>
                        <Grid xs={12} item className={classes.topScore}>776345</Grid>
                      </Grid>
                    </Grid>
                  </span>
                </span>
              </span>
            </div>
          </Grid>
        </Grid>
    </div>
  )
}