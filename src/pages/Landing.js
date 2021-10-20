import React from 'react';
import mainBackground from '../assets/Images/mainBackground.jpg';
import wallBackground from '../assets/Images/wallBackground.jpg';
import yellowBackground from '../assets/Images/yellowBackground.png';
import playImg from '../assets/Images/playImg.png';
import coin from '../assets/Images/coin.png';
import trade from '../assets/Images/trade.png';
import logo from '../assets/Images/logo.png';
import phone from '../assets/Images/phone.png';
import yesIWant from '../assets/Images/yesIWant.png';
import playEarn from '../assets/Images/playEarn.png';
import upIcon from '../assets/Images/upIcon.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const useStyles = makeStyles({
  root: {
    textAlign: '-webkit-center',
    fontFamily: 'KOMIKAXS',
    position: 'relative',
  },
  background: {
    width: '100%',
  },
  secondSection: {
    height: 770,
  },
  secondMediumSection: {
    height: 1185,
  },
  secondTitle: {
    color: '#f1ea39',
    fontSize: 70,
    textTransform: 'uppercase',
    marginTop: 70,
    textShadow: '0 0 60px rgb(255, 255, 0, 0.7)'
  },
  secondMediumTitle: {
    color: '#f1ea39',
    fontSize: 50,
    textTransform: 'uppercase',
    marginTop: 70,
    textShadow: '0 0 60px rgb(255, 255, 0, 0.7)'
  },
  secondSmallTitle: {
    color: '#f1ea39',
    fontSize: 15,
    textTransform: 'uppercase',
    marginTop: 70,
    textShadow: '0 0 60px rgb(255, 255, 0, 0.7)'
  },
  thirdSection: {
    position: 'relative',
    alignItems: 'center'
  },
  thirdTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: 70,
    marginTop: '5%',
    left: '10%',
    top: '3%',
    right: '10%',
    position: 'absolute',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)'
  },
  thirdTabletTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: 50,
    marginTop: '5%',
    left: '10%',
    top: '3%',
    right: '10%',
    position: 'absolute',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)'
  },
  thirdMediumTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: 30,
    marginTop: '5%',
    left: '10%',
    top: '3%',
    right: '10%',
    position: 'absolute',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)'
  },
  thirdSmallTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: 17,
    marginTop: '5%',
    left: '10%',
    top: '3%',
    right: '10%',
    position: 'absolute',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)'
  },
  thirdDesc: {
    fontSize: 27,
    color: 'white',
    position: 'absolute',
    bottom: 100,
    left: '15%',
    right: '15%',
    fontFamily: 'Arial'
  },
  thirdTabletDesc1201: {
    fontSize: 17,
    color: 'white',
    position: 'absolute',
    bottom: 100,
    left: '15%',
    right: '15%',
    fontFamily: 'Arial'
  },
  thirdTabletDesc: {
    fontSize: 17,
    color: 'white',
    position: 'absolute',
    bottom: 50,
    left: '15%',
    right: '15%',
    fontFamily: 'Arial'
  },
  thirdMediumDesc: {
    fontSize: 11,
    color: 'white',
    position: 'absolute',
    bottom: 38,
    left: '15%',
    right: '15%',
    fontFamily: 'Arial'
  },
  thirdMiddleDesc: {
    fontSize: 7,
    color: 'white',
    position: 'absolute',
    bottom: 35,
    left: '15%',
    right: '15%',
    fontFamily: 'Arial'
  },
  thirdSmallDesc: {
    fontSize: 7,
    color: 'white',
    position: 'absolute',
    bottom: 25,
    left: '15%',
    right: '15%',
    fontFamily: 'Arial'
  },
  fourthSection: {
    marginTop: '-25px',
    position: 'relative'
  },
  fourthTitle: {
    color: 'black',
    position: 'absolute',
    left: '10%',
    right: '10%',
    fontSize: 50,
    marginTop: '10%'
  },
  fourthTabletTitle: {
    color: 'black',
    position: 'absolute',
    left: '10%',
    right: '10%',
    fontSize: 30,
    marginTop: '10%'
  },
  fourthMediumTitle: {
    color: 'black',
    position: 'absolute',
    left: '10%',
    right: '10%',
    fontSize: 20,
    marginTop: '10%'
  },
  fourthSmallTitle: {
    color: 'black',
    position: 'absolute',
    left: '10%',
    right: '10%',
    fontSize: 13,
    marginTop: '10%'
  },
  fourthDesc: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    color: 'black',
    fontSize: 30,
    bottom: '45%'
  },
  fourthTabletDesc: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    color: 'black',
    fontSize: 18,
    bottom: '45%'
  },
  fourthMediumDesc: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    color: 'black',
    fontSize: 13,
    bottom: '45%'
  },
  fourthSmallDesc: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    color: 'black',
    fontSize: 8,
    bottom: '40%'
  },
  fifthSection: {
    height: 2000,
    position: 'relative'
  },
  fifthSectionMedium: {
    height: 1300,
    position: 'relative'
  },
  fifthSectionTablet: {
    height: 1500,
    position: 'relative'
  },
  footerSection: {
    backgroundColor: 'grey',
    height: 340,
    color: 'white'
  },
  label: {
    fontSize: 70,
    color: 'white'
  },
  labelMedium: {
    fontSize: 40,
    color: 'white'
  },
  logo: {
    width: 125,
    marginTop: 65
  },
  footerLabel: {
    marginTop: 30,
    fontSize: 35,
    fontFamily: 'Arial'
  },
  footerLabelMedium: {
    marginTop: 30,
    fontSize: 25,
    fontFamily: 'Arial'
  },
  footerLabelSmall: {
    marginTop: 30,
    fontSize: 18,
    fontFamily: 'Arial'
  },
  phoneTitle: {
    textTransform: 'uppercase',
    fontSize: 70,
    color: 'white',
    marginTop: 165,
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)'
  },
  phoneTitleTablet: {
    textTransform: 'uppercase',
    fontSize: 50,
    color: 'white',
    marginTop: 165,
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)'
  },
  phoneTitleMedium: {
    textTransform: 'uppercase',
    fontSize: 30,
    color: 'white',
    marginTop: 165,
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)'
  },
  phoneImg: {
    width: '50%'
  },
  gameplay: {
    textTransform: 'uppercase',
    fontSize: 110,
    color: '#f1ea39',
    position: 'absolute',
    left: '10%',
    right: '10%',
    marginTop: '20%',
    transform: 'rotate(-5deg)',
    textShadow: '0 0 50px black'
  },
  gameplayTablet: {
    textTransform: 'uppercase',
    fontSize: 70,
    color: '#f1ea39',
    position: 'absolute',
    left: '10%',
    right: '10%',
    marginTop: '20%',
    transform: 'rotate(-5deg)',
    textShadow: '0 0 50px black'
  },
  gameplayMedium: {
    textTransform: 'uppercase',
    fontSize: 40,
    color: '#f1ea39',
    position: 'absolute',
    left: '10%',
    right: '10%',
    marginTop: '20%',
    transform: 'rotate(-5deg)',
    textShadow: '0 0 50px black'
  },
  gameplaySmall: {
    textTransform: 'uppercase',
    fontSize: 25,
    color: '#f1ea39',
    position: 'absolute',
    left: '10%',
    right: '10%',
    marginTop: '20%',
    transform: 'rotate(-5deg)',
    textShadow: '0 0 50px black'
  },
  topSection: {
    position: 'relative'
  },
  title: {
    position: 'absolute',
    fontSize: 140,
    transform: 'rotate(-10deg)',
    color: 'white',
    left: '10%',
    right: '10%',
    marginTop: '10%',
    textShadow: '0 0 50px black'
  },
  tabletTitle: {
    position: 'absolute',
    fontSize: 100,
    transform: 'rotate(-10deg)',
    color: 'white',
    left: '10%',
    right: '10%',
    marginTop: '10%',
    textShadow: '0 0 50px black'
  },
  mediumTabletTitle: {
    position: 'absolute',
    fontSize: 50,
    transform: 'rotate(-10deg)',
    color: 'white',
    left: '10%',
    right: '10%',
    marginTop: '10%',
    textShadow: '0 0 50px black'
  },
  smallTabletTitle: {
    position: 'absolute',
    fontSize: 30,
    transform: 'rotate(-10deg)',
    color: 'white',
    left: '10%',
    right: '10%',
    marginTop: '10%',
    textShadow: '0 0 50px black'
  },
  prev: {
    backgroundColor: 'grey',
    color: 'white',
    height: 75,
    fontSize: 35,
    borderBottomLeftRadius: 150,
    borderTopLeftRadius: 150,
    borderBottomRightRadius: '50px',
    borderTopRightRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '&:before': {
      background: 'grey',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '30px',
      height: '30px',
      bottom: '-15px',
      transform: 'rotate(45deg)',
    }
  },
  cur: {
    backgroundColor: 'white',
    height: 75,
    fontSize: 35,
    borderBottomLeftRadius: '20px',
    borderTopLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    borderTopRightRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '&:before': {
      background: '#fff',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '30px',
      height: '30px',
      bottom: '-15px',
      transform: 'rotate(45deg)',
    }
  },
  next: {
    backgroundColor: '#f1ea39',
    height: 75,
    fontSize: 35,
    borderBottomRightRadius: 150,
    borderTopRightRadius: 150,
    borderBottomLeftRadius: '50px',
    borderTopLeftRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '&:before': {
      background: '#f1ea39',
      display: 'inline-block',
      position: 'absolute',
      content: "' '",
      width: '30px',
      height: '30px',
      bottom: '-15px',
      transform: 'rotate(45deg)',
    }
  },
  history: {
    marginTop: 140,
    fontFamily: 'Arial'
  },
  historyOfDevSmall: {
    marginTop: 140,
    padding: '0 10% 0 10%',
    fontFamily: 'Arial'
  },
  historyDesc: {
    color: 'white',
    fontSize: 32,
    textAlign: 'left',
    fontFamily: 'Arial',
    marginTop: 100,
    lineHeight: '65px'
  },
  historyDescTablet: {
    color: 'white',
    fontSize: 22,
    // paddingLeft: '15%',
    textAlign: 'left',
    fontFamily: 'Arial',
    marginTop: 50,
    lineHeight: '65px'
  },
  historyDescSmallTablet: {
    color: 'white',
    fontSize: 17,
    textAlign: 'left',
    fontFamily: 'Arial',
    marginTop: 50,
    lineHeight: '65px'
  },
  playEarn: {
    right: '40%',
    width: '20%',
    bottom: '0%',
    position: 'absolute',
    '&:hover': {
      transform: 'scale(1.25)'
    }
  },
  yesIWant: {
    // marginTop: '-20%',
    width: '20%',
    position: 'absolute',
    right: '40%',
    bottom: '13%',
    '&:hover': {
      transform: 'scale(1.25)'
    }
  },
  upIcon: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    width: '3.5%'
  },
  toTop: {
    cursor: 'pointer'
  },
  historyText: {
    paddingLeft: '3%'
  },
  historyTextMedium: {
    paddingLeft: '20%'
  },
  futureImg: {
    width: '70%'
  },
  futureImgMiddle: {
    width: '70%',
    height: '40%'
  },
  futureImgSmall: {
    
  },
});

export default function Store () {
  const classes = useStyles();

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const isTablet = useMediaQuery({ query: '(max-width: 1400px)' });
  const isTablet1441 = useMediaQuery({ query: '(max-width: 1441px)' });
  const isTablet1201 = useMediaQuery({ query: '(max-width: 1201px)' });
  const isMediumTablet = useMediaQuery({ query: '(max-width: 900px)' });
  const isMiddleTablet = useMediaQuery({ query: '(max-width: 600px)' });
  const isSmallTablet = useMediaQuery({ query: '(max-width: 400px)' });

  let historyOfDevStandard = (
    <>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Grid container className={classes.history}>
          <Grid item xs={isMediumTablet?12:4} className={classes.prev}>
            2021
          </Grid>
          <Grid item xs={isMediumTablet?12:4} className={classes.cur}>
            2022
          </Grid>
          <Grid item xs={isMediumTablet?12:4} className={classes.next}>
            2022 Q2
          </Grid>
        </Grid>
        <Grid container className={!isTablet1441?classes.historyDesc:!isTablet1201?classes.historyDescTablet:classes.historyDescSmallTablet}>
          <Grid item xs={isMediumTablet?12:4} className={!isMediumTablet?classes.historyText:classes.historyTextMedium}>
            ★  NFT series launch<br/>
            ★  Open game beta<br/>
            ★  Official merchandise 
          </Grid>
          <Grid item xs={isMediumTablet?12:4} className={!isMediumTablet?classes.historyText:classes.historyTextMedium}>
            ★  TNR game release<br/>
            ★  Global gaming contest<br/>
            ★  Free NFT series
          </Grid>
          <Grid item xs={isMediumTablet?12:4} className={!isMediumTablet?classes.historyText:classes.historyTextMedium}>
            ★  Gamer marketplace<br/>
            ★  TNR token presale<br/>
            ★  PVP racing (betting)
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </>
  );

  let historyOfDevSmall = (
    <>
      <Grid container className={classes.historyOfDevSmall}>
        <Grid item xs={12} className={classes.prev}>
          2021
        </Grid>
        <Grid container className={!isTablet1441?classes.historyDesc:!isMiddleTablet?classes.historyDescTablet:classes.historyDescSmallTablet}>
          <Grid item xs={12} className={!isMiddleTablet?classes.historyText:classes.historyTextMedium}>
            ★  NFT series launch<br/>
            ★  Open game beta<br/>
            ★  Official merchandise 
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.cur}>
          2022
        </Grid>
        <Grid container className={!isTablet1441?classes.historyDesc:!isMiddleTablet?classes.historyDescTablet:classes.historyDescSmallTablet}>
          <Grid item xs={12} className={!isMiddleTablet?classes.historyText:classes.historyTextMedium}>
            ★  TNR game release<br/>
            ★  Global gaming contest<br/>
            ★  Free NFT series
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.next}>
          2022 Q2
        </Grid>
        <Grid container className={!isTablet1441?classes.historyDesc:!isMiddleTablet?classes.historyDescTablet:classes.historyDescSmallTablet}>
          <Grid item xs={12} className={!isMiddleTablet?classes.historyText:classes.historyTextMedium}>
            ★  Gamer marketplace<br/>
            ★  TNR token presale<br/>
            ★  PVP racing (betting)
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  return (
    <div className={classes.root}>
      <Grid className={classes.topSection}>
        <Grid className={!isTablet?classes.title:!isMediumTablet?classes.tabletTitle:!isSmallTablet?classes.mediumTabletTitle:classes.smallTabletTitle}>
          We Need You!
        </Grid>
        <img src={mainBackground} alt="mainBackground" className={classes.background}/>
        <Link to="/NFTwaitinglist">
          <img src={playEarn} alt="playEarn" className={classes.playEarn}/>
        </Link>
      </Grid>
      <Grid className={isMiddleTablet?classes.secondMediumSection:classes.secondSection} container>
        <Grid className={!isTablet?classes.secondTitle:!isMediumTablet?classes.secondMediumTitle:!isSmallTablet?classes.secondMediumTitle:classes.secondSmallTitle} item xs={12}>
          the future is gamified
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} container>
            <Grid item xs={!isMiddleTablet?4:12}>
              <img src={playImg} alt="playImg" className={!isTablet?classes.none:!isTablet1201?classes.none:!isMiddleTablet?classes.futureImgMiddle:classes.futureImgSmall}/>
              <div className={!isTablet1201?classes.label:classes.labelMedium}>
                PLAY
              </div>
            </Grid>
            <Grid item xs={!isMiddleTablet?4:12}>
              <img src={trade} alt="trade" className={!isTablet?classes.none:!isTablet1201?classes.none:!isMiddleTablet?classes.futureImgMiddle:classes.futureImgSmall}/>
              <div className={!isTablet1201?classes.label:classes.labelMedium}>
                TRADE
              </div>
            </Grid>
            <Grid item xs={!isMiddleTablet?4:12}>
              <img src={coin} alt="coin" className={!isTablet?classes.none:!isTablet1201?classes.none:!isMiddleTablet?classes.futureImgMiddle:classes.futureImgSmall}/>
              <div className={!isTablet1201?classes.label:classes.labelMedium}>
                EARN
              </div>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.thirdSection}>
        <Grid className={!isTablet?classes.thirdTitle:!isMediumTablet?classes.thirdTabletTitle:!isMiddleTablet?classes.thirdMediumTitle:classes.thirdSmallTitle} item xs={12}>
          Meet the new resistance
        </Grid>
        <img src={wallBackground} alt="wallBackground" className={classes.background}/>
        <Carousel className={classes.carousel} />
        <Grid className={!isTablet?classes.thirdDesc:!isTablet1201?classes.thirdTabletDesc1201:!isMediumTablet?classes.thirdTabletDesc:!isMiddleTablet?classes.thirdMediumDesc:!isSmallTablet?classes.thirdMiddleDesc:classes.thirdSmallDesc}>
          Driven by revolution, the New Resistance are 10,000 uniquely individual vigilantes. Distinguished by their relative strength, emotional intelligence and dynamic fluidity, they strive to overhaul the system from within. Inhabiting Krupt City, and free running across the city’s skyline, they fight the very embodiment of societal structure as enforced by the Crypto-Correctional Command AKA Triple C.
        </Grid>
      </Grid>
      <Grid className={classes.fourthSection}>
        <Grid item xs={12} className={!isTablet?classes.fourthTitle:!isMediumTablet?classes.fourthTabletTitle:!isMiddleTablet?classes.fourthMediumTitle:classes.fourthSmallTitle}>
          GET THE NEW RESISTANCE NFT ON LAUNCH DAY
        </Grid>
        <Grid item xs={12} className={!isTablet?classes.fourthDesc:!isMediumTablet?classes.fourthTabletDesc:!isMiddleTablet?classes.fourthMediumDesc:classes.fourthSmallDesc}>
          Join over 8,000 renegades on our waiting list.<br/>
          Grab your limited edition NFT at mint price.
        </Grid>
        <img src={yellowBackground} alt="yellowBackground" className={classes.background}/>
        <Link to="/NFTwaitinglist">
          <img src={yesIWant} alt="yesIWant" className={classes.yesIWant}/>
        </Link>
      </Grid>
      <Grid className={!isTablet1441?classes.fifthSection:!isTablet1201?classes.fifthSectionTablet:!isMediumTablet?classes.fifthSectionMedium:classes.fifthSection}>
        <Grid className={!isTablet?classes.gameplay:!isMediumTablet?classes.gameplayTablet:!isMiddleTablet?classes.gameplayMedium:classes.gameplaySmall}>
          renegade gameplay
        </Grid>
        <img src={phone} alt="phone" className={classes.phoneImg}/>
        <Grid item xs={12} className={!isTablet?classes.phoneTitle:!isMediumTablet?classes.phoneTitleTablet:!isMiddleTablet?classes.phoneTitleMedium:classes.phoneTitleMedium}>
          run with the resistance
        </Grid>
        {!isMediumTablet?historyOfDevStandard:historyOfDevSmall}
      </Grid>
      <Grid className={classes.footerSection}>
        <img src={logo} alt="logo" className={classes.logo}/>
        <Grid item xs={12} className={!isMediumTablet?classes.footerLabel:!isSmallTablet?classes.footerLabelMedium:classes.footerLabelSmall}>
          2021© The New Resistance 
        </Grid>
      </Grid>
      <div onClick={toTop} className={classes.toTop}>
        <img src={upIcon} alt="upIcon" className={classes.upIcon}/>
      </div>
    </div>
  )
}