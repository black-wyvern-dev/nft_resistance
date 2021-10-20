import React from 'react';
import mainBackground from '../assets/Images/About/About_Header.png';
import wallBackground from '../assets/Images/About/About_Back2.png';
import shineBackground from '../assets/Images/About/About_Back.png';
import cityBackground from '../assets/Images/About/About_Back3.png';
import runnerBackground from '../assets/Images/About/About_Back4.png';
import twitter from '../assets/Images/About/twitter.png';
import twitter1 from '../assets/Images/About/twitter.svg';
import playImg from '../assets/Images/About/Vec1.png';
import coin from '../assets/Images/About/Vec2.png';
import trade from '../assets/Images/About/Vec3.png';
import mImag1 from '../assets/Images/About/About_m1.png';
import mImag2 from '../assets/Images/About/About_m2.png';
import mImag3 from '../assets/Images/About/About_m3.png';
import mImag4 from '../assets/Images/About/About_m4.png';
import factImg1 from '../assets/Images/About/About_f1.png';
import factImg2 from '../assets/Images/About/About_f2.png';
import factImg3 from '../assets/Images/About/About_f3.png';
import userArt from '../assets/Images/About/Ilus1.png';
import logo from '../assets/Images/logo.png';
import phone from '../assets/Images/phone.png';
import yesIWant from '../assets/Images/yesIWant.png';
import playEarn from '../assets/Images/About/joinDiscord.png';
import upIcon from '../assets/Images/upIcon.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Typography from '@mui/material/Typography';

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
        <img src={mainBackground} alt="mainBackground" className={classes.background}/>
      </Grid>
      <Grid className={isMiddleTablet?classes.secondMediumSection:classes.secondSection} container>
        <Grid item xs={12} container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10} container>
            <Grid item xs={!isMiddleTablet?4:12}>
              <img src={playImg} alt="playImg" className={!isMiddleTablet ? classes.futureImgMiddle : classes.futureImgSmall}/>
              <div className={!isTablet1201?classes.label:classes.labelMedium}>
              Just. Don’t. Blink…
              </div>
              <Grid className={!isMiddleTablet ? classes.secondDesc : classes.secondSmallDesc}>
              Players develop and improve their individual skillset collecting equipment as they race across fully destructible maps from A-Z, always looking to reduce their time and make more gains.
              </Grid>
            </Grid>
            <Grid item xs={!isMiddleTablet?4:12}>
              <img src={trade} alt="trade" className={!isMiddleTablet ? classes.futureImgMiddle : classes.futureImgSmall}/>
              <div className={!isTablet1201?classes.label:classes.labelMedium}>
              Play-to-earn
              </div>
              <Grid className={!isMiddleTablet ? classes.secondDesc : classes.secondSmallDesc}>
              Models and equipment are representative of NFTs, guaranteeing unique bonuses, increased skills and abilities, and exhilarating in-game experiences for each individual player
              </Grid>
            </Grid>
            <Grid item xs={!isMiddleTablet?4:12}>
              <img src={coin} alt="coin" className={!isMiddleTablet ? classes.futureImgMiddle : classes.futureImgSmall}/>
              <div className={!isTablet1201?classes.label:classes.labelMedium}>
              Invest
              </div>
              <Grid className={!isMiddleTablet ? classes.secondDesc : classes.secondSmallDesc}>
              Invest in endless replay value as characters and equipment can be traded between players for an ever evolving full-on action experience, each and every time
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid item xs={12} className={!isTablet?classes.summaryDesc:!isMediumTablet?classes.summaryDescTablet:!isMiddleTablet?classes.summaryDescMedium:classes.summaryDescMedium}>
        "The opportunities are limited only by your own determination, dedication and desire.”
        </Grid>
      </Grid>
      <Grid container className={classes.thirdSection}>
        <img src={shineBackground} alt="shineBackground" className={classes.thirdBack}/>
        <Grid className={!isTablet?classes.thirdTitle:!isMediumTablet?classes.thirdTabletTitle:!isMiddleTablet?classes.thirdMediumTitle:classes.thirdSmallTitle} item xs={12}>
        Who are the new resistance?
        </Grid>
        <Carousel />
        <Grid className={classes.thirdDesc}>
          Driven by revolution, the New Resistance are 10,000 uniquely individual vigilantes. Distinguished by their relative strength, emotional intelligence and dynamic fluidity, they strive to overhaul the system from within. Inhabiting Krupt City, and free running across the city’s skyline, they fight the very embodiment of societal structure as enforced by the Crypto-Correctional Command AKA Triple C.
        </Grid>
      </Grid>
      <Grid container className={classes.thirdSection}>
        <Grid className={!isTablet?classes.thirdTitle:!isMediumTablet?classes.thirdTabletTitle:!isMiddleTablet?classes.thirdMediumTitle:classes.thirdSmallTitle} style={{top: '0%', marginTop: '2%'}} item xs={12}>
        The new Resistance FACTIONS
        </Grid>
        <img src={wallBackground} alt="wallBackground" className={classes.thirdBack} style={{height: '1000px'}}/>
        <Grid item xs={12} style={{zIndex: 1}} container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10} container>
            <Grid item xs={!isMiddleTablet?4:12}>
              <img src={factImg1} alt="factImg1" className={!isMiddleTablet?classes.femaleImgMiddle:classes.femaleImgSmall}/>
              <Grid className={!isTablet?classes.thirdNewDesc:classes.secondSmallDesc}>
              DE-CODERS – DCS
              <br /> <br />
              Only direct action can facilitate true change for there is no revolution without havoc and chaos. Strong, fearless, determined and dressed for action, the DCS do not play the long-game, they want immediate results.
              <br /> <br />
              Act now, deal with the consequences later.
              </Grid>
            </Grid>
            <Grid item xs={!isMiddleTablet?4:12}>
              <img src={factImg2} alt="factImg2" className={!isMiddleTablet?classes.femaleImgMiddle:classes.femaleImgSmall}/>
              <Grid className={!isTablet?classes.thirdNewDesc:classes.secondSmallDesc}>
              CIPHERS – CPH
              <br /> <br />
              Emotionally intelligent and cerebrally erudite, CPH think of cause and consequence, and of pre-emptive strikes. A little more erudite and sophisticated in appearance, they understand the virtues of direct action, but only as one form of attack. Dynamically fluid in thought, they are always processing and calculating, putting their own archaic emotions aside.
              <br /> <br />
              Planning is key. Success is everything.
              </Grid>
            </Grid>
            <Grid item xs={!isMiddleTablet?4:12}>
              <img src={factImg3} alt="factImg3" className={!isMiddleTablet?classes.femaleImgMiddle:classes.femaleImgSmall}/>
              <Grid className={!isTablet?classes.thirdNewDesc:classes.thirdNewSmallDesc}>
              REVOLUTIONARIES - RVT
              <br /> <br />
              Only the few know of their alias... and no one knows their true identities.
              <br /> <br />
              Anonymity is everything.
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>

      <Grid container style={{overflowX: 'hidden', marginTop: '10vw', position: 'relative'}}>
        <Grid item xs={1} md={1} sm={1}></Grid>
        <Grid item xs={11} md ={5} sm={5}>
          <div className={!isTablet?classes.fourthTitle:!isMediumTablet?classes.fourthTabletTitle:!isMiddleTablet?classes.fourthMediumTitle:classes.fourthSmallTitle}>
            REFERRAL PROGRAM To win <span style={{color: '#f1ea39'}}>RARE</span> TNR NFTS!
          </div>
          <div className={!isTablet?classes.fourthDesc:!isMediumTablet?classes.fourthTabletDesc:!isMiddleTablet?classes.fourthMediumDesc:classes.fourthSmallDesc}>
           Join our Discord invite competition for a chance to in a rare TNR NFT!
         </div>
         <Link to="/NFTwaitinglist">
           <img src={playEarn} alt="playEarn" className={classes.discord_btn}/>
         </ Link>
        </Grid>
        <Grid item xs={12} md={5} sm={5}>
          <img src={userArt} alt="userArt" className={!isTablet?classes.fourthImg:classes.fourthImgDesc} />
        </Grid>
        <Grid item xs={1} md={1} sm={1}></Grid>
      </Grid>

      <Grid container className={classes.cityBackground} style={{backgroundImage: `url(${cityBackground})`}}>
        <Grid item xs={1} md={1} sm={1}></Grid>
        <Grid xs={11} sm={8} md={8} style={{marginBottom: '50px'}}>
          <div className={!isTablet?classes.fifthTitle:!isMediumTablet?classes.fifthTabletTitle:!isMiddleTablet?classes.fifthMediumTitle:classes.fifthSmallTitle}>
            The story
          </div>
          <div className={!isTablet?classes.fifthDesc:!isTablet1201?classes.fifthTabletDesc1201:!isMediumTablet?classes.fifthTabletDesc:!isMiddleTablet?classes.fifthMediumDesc:!isSmallTablet?classes.fifthMiddleDesc:classes.fifthSmallDesc}>
            <p>
            The New Resistance communicate via the Quasi-Net. Free-running leaked smart contracts, reports and messages to splinter-cells across the City, this information is shared to expose the CCC’s corruption to the masses. The only reward they attain is recognition within their own tightknit community. Their motivation is not monetary, it is momentum.
            </p>
            <p>Their true enemy is ignorance, their combatants are the heavily armed Triple C. Whether De-Coders, or Cyphers, their methods may differ, but their mission is certain – Resistance and Revolution.</p>
            <p>The New Resistance was born of necessity; from a desire for revolution; and to free a society from the tyrannies of governmental restraint.</p>
            <p>Already ahead of the curve, the New Resistance had invested where others feared – cryptocurrency. Now, using their huge amassed wealth, these renegades are facing down their “masters” for the good of all.</p>
            <p>The corrupt government and institutions have outlawed blockchain /cryptocurrency, ending any hope of individual financial freedom for the masses. They control and monitor the internet through Minds-Eye, leaving nowhere safe online.</p>
          </div>
        </Grid>
      </Grid>

      <Grid container className={[classes.sixthSection, classes.sixthSection_new]}>
        <Grid item xs={12}>
          <div className={!isTablet?classes.sixthTitle:!isMediumTablet?classes.sixthTabletTitle:!isMiddleTablet?classes.sixthMediumTitle:classes.sixthSmallTitle}>
            GET OUR LIMITED NFTs ON LAUNCH DAY
          </div>
          <div className={!isTablet?classes.sixthDesc:!isMediumTablet?classes.sixthTabletDesc:!isMiddleTablet?classes.sixthMediumDesc:classes.sixthSmallDesc}>
            Join 32,000+ Renegades waiting for our limited edition nft Drop
          </div>
          <Link to="/NFTwaitinglist">
            <img src={yesIWant} alt="yesIWant" className={classes.yesIWant}/>
          </Link>
        </Grid>
      </Grid>

      <Grid container className={classes.cityBackground} style={{backgroundImage: `url(${runnerBackground})`}}>
        <Grid item xs={1} md={1} sm={1}></Grid>
        <Grid xs={11} sm={8} md={8} style={{marginBottom: '50px'}}>
          <div className={!isTablet?classes.fifthTitle:!isMediumTablet?classes.fifthTabletTitle:!isMiddleTablet?classes.fifthMediumTitle:classes.fifthSmallTitle}>
            KRUPT CITY
          </div>
          <div className={!isTablet?classes.fifthDesc:!isTablet1201?classes.fifthTabletDesc1201:!isMediumTablet?classes.fifthTabletDesc:!isMiddleTablet?classes.fifthMediumDesc:!isSmallTablet?classes.fifthMiddleDesc:classes.fifthSmallDesc}>
            <p>A neon-lit, yet still strangely dark, overburdening expanse of tall, faceless corporate buildings and factories, Krupt City spreads outwards from its epicentre – CCC HQ, with its tentacle like roads and railways grasping tightly at the urban desolate sprawl it encompasses.</p>
            <p>Pocketed across this graveyard of existence are the oasis like New Resistance bolt-holes, their meeting places and hideaways, gloriously flamboyant, decoratively ornate and extravagant, yet camouflaged to be invisible to all but those who know.</p>
            <p>Krupt City residents know only work and obedience. Their existence is a daily purgatory 9-5, chained to their master’s leash. Conformity and control are obligatory. Freedom has all but dissipated, and Minds-Eye is truly all seeing.</p>
            <p>There remains only a last hope for change, The New Resistance.</p>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} md={1} sm={1}></Grid>
        <Grid xs={10} sm={10} md={10} style={{marginBottom: '50px'}}>
          <div className={!isTablet?classes.sevenTitle:!isMediumTablet?classes.sevenTabletTitle:!isMiddleTablet?classes.sevenMediumTitle:classes.sevenSmallTitle}>
            WHO ARE THE TEAM?
          </div>
          <Grid item xs={10} container spacing={4}>
            <Grid item xs={!isMiddleTablet?3:12}>
              <Card>
                <CardMedia component="img" image={mImag1} alt="mImag1" />
                <CardContent style={{backgroundColor: '#2A2A2A'}}>
                  <Typography gutterBottom variant="h5" component="div" style={{color: 'yellow', marginTop: '20px'}}>
                    <i>DR.GASSED</i>
                  </Typography>
                  <Typography variant="body2" style={{color: 'white', height: '40px'}}>
                    CEO/CTO - Founder, Business and Project Management
                  </Typography>
                  <img src={twitter} alt="twitter" style={{marginTop: '20px'}} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={!isMiddleTablet?3:12}>
              <Card>
                <CardMedia component="img" image={mImag2} alt="mImag2" />
                <CardContent style={{backgroundColor: '#2A2A2A'}}>
                  <Typography gutterBottom variant="h5" component="div" style={{color: 'yellow', marginTop: '20px'}}>
                    <i>CAPTAIN GASSED</i>
                  </Typography>
                  <Typography variant="body2" style={{color: 'white', height: '40px'}}>
                      CMO - Head of Marketing and PR
                  </Typography>
                  <img src={twitter} alt="twitter" style={{marginTop: '20px'}} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={!isMiddleTablet?3:12}>
              <Card>
                <CardMedia component="img" image={mImag3} alt="mImag3" />
                <CardContent style={{backgroundColor: '#2A2A2A'}}>
                  <Typography gutterBottom variant="h5" component="div" style={{color: 'yellow', marginTop: '20px'}}>
                    <i>PROF. GASSED</i>
                  </Typography>
                  <Typography variant="body2" style={{color: 'white', height: '40px'}}>
                    CDO - Head Artist and Creator of The New Resistance
                  </Typography>
                  <img src={twitter} alt="twitter" style={{marginTop: '20px'}} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={!isMiddleTablet?3:12}>
              <Card>
                <CardMedia component="img" image={mImag4} alt="mImag4" />
                <CardContent style={{backgroundColor: '#2A2A2A'}}>
                  <Typography gutterBottom variant="h5" component="div" style={{color: 'yellow', marginTop: '20px'}}>
                    <i>queen GASSED</i>
                  </Typography>
                  <Typography variant="body2" style={{color: 'white', height: '40px'}}>
                    Community Management
                  </Typography>
                  <img src={twitter1} alt="twitter1" style={{marginTop: '20px'}} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={1} sm={1} md={1}></Grid>
      </Grid>

      <Grid className={classes.footerSection}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid item xs={8}>
            <img src={logo} alt="logo" className={classes.logo}/>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <div onClick={toTop} className={classes.toTop}>
        <img src={upIcon} alt="upIcon" className={classes.upIcon}/>
      </div>
    </div>
  )
}

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
    marginTop: '5vw',
  },
  secondMediumSection: {
    marginTop: '5vw',
  },
  secondDesc: {
    fontSize: '1.5rem',
    paddingTop: '0.6rem',
    maxWidth: 450,
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
  },
  secondSmallDesc: {
    fontSize: '1.5rem',
    paddingTop: '0.6rem',
    maxWidth: 450,
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
  },
  thirdSection: {
    position: 'relative',
    alignItems: 'center',
    marginTop: '5vw',
  },
  thirdTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '4rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
  },
  thirdBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  thirdTabletTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '3rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
  },
  thirdMediumTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '2rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
  },
  thirdSmallTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '1.5rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
  },
  thirdDesc: {
    fontSize: '1.5rem',
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
    width: '80%',
    margin: 'auto',
    marginTop: '42vw',
    zIndex: 1
  },
  thirdNewDesc: {
    fontSize: '1.5rem',
    paddingTop: '0.6rem',
    maxWidth: 610,
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
  },
  thirdNewSmallDesc: {
    fontSize: '1.5rem',
    paddingTop: '0.6rem',
    maxWidth: 610,
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
  },
  fourthSection: {
    marginTop: '5vw',
    position: 'relative',
    minHeight: '30vw',
  },
  fourthSection_new: {
    marginTop: 0,
  },
  fourthTitle: {
    textTransform: 'uppercase',
    fontSize: '3rem',
    color: 'white',
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)',
    textAlign: 'left'
  },
  fourthTabletTitle: {
    textTransform: 'uppercase',
    fontSize: '2rem',
    color: 'white',
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)',
    textAlign: 'left'
  },
  fourthMediumTitle: {
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    color: 'white',
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)',
    textAlign: 'left'
  },
  fourthSmallTitle: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    color: 'white',
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)',
    textAlign: 'left'
  },
  fourthDesc: {
    color: 'white',
    fontSize: '1.5rem',
    bottom: '45%',
    textAlign: 'left',
    fontFamily: 'Arial',
    marginTop: '20px'
  },
  fourthTabletDesc: {
    color: 'white',
    fontSize: 18,
    bottom: '45%',
    textAlign: 'left',
    fontFamily: 'Arial',
    marginTop: '20px'
  },
  fourthMediumDesc: {
    color: 'white',
    fontSize: 13,
    bottom: '45%',
    textAlign: 'left',
    fontFamily: 'Arial',
    marginTop: '20px'
  },
  fourthSmallDesc: {
    color: 'white',
    fontSize: 8,
    bottom: '40%',
    textAlign: 'left',
    fontFamily: 'Arial',
    marginTop: '20px'
  },
  discord_btn: {
    right: '40%',
    marginTop: '20px',
    marginLeft: '-25px',
    bottom: '0%',
    float: 'left',
    '&:hover': {
      transform: 'scale(1.25)'
    }
  },
  fourthImg: {
    bottom: 0,
    right: 0,
    height: 'auto',
    width: '100%'
  },
  fourthImgDesc: {
    bottom: 0,
    right: 0,
    height: 'auto',
    width: '100%'
  },
  fifthSection: {
    position: 'relative',
    alignItems: 'center',
    marginTop: '5vw',
  },
  sevenTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '4rem',
    marginTop: '5vw',
    marginBottom: '40px',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
    textAlign: 'center'
  },
  sevenTabletTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '3rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
    textAlign: 'center',
    marginBottom: '30px',
  },
  sevenMediumTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '2rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
    textAlign: 'center',
    marginBottom: '20px',
  },
  sevenSmallTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '1.5rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
    textAlign: 'center'
  },
  fifthTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '4rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
    textAlign: 'left'
  },
  fifthBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  fifthTabletTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '3rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
    textAlign: 'left'
  },
  fifthMediumTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '2rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
    textAlign: 'left'
  },
  fifthSmallTitle: {
    textTransform: 'uppercase',
    color: '#f1ea39',
    fontSize: '1.5rem',
    marginTop: '5vw',
    textShadow: '0 0 60px rgb(255, 255, 0, 0.8)',
    zIndex: 1,
    textAlign: 'left'
  },
  // cityBackground: {
  //   backgroundImage: url('../assets/Images/About/About_Back3.png'),
  // },
  fifthDesc: {
    fontSize: '1.5rem',
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
    margin: 'auto',
    zIndex: 1,
    textAlign: 'left'
  },
  fifthTabletDesc1201: {
    fontSize: '1.5rem',
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
    margin: 'auto',
    zIndex: 1,
    textAlign: 'left',
  },
  fifthSmallDesc: {
    fontSize: '1.5rem',
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
    margin: 'auto',
    zIndex: 1,
    textAlign: 'left',
  },
  fifthNewDesc: {
    fontSize: '1.5rem',
    paddingTop: '0.6rem',
    maxWidth: 610,
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
  },
  fifthNewSmallDesc: {
    fontSize: '1.5rem',
    paddingTop: '0.6rem',
    maxWidth: 610,
    color: 'white',
    fontFamily: 'Arial',
    lineHeight: '30px',
  },
  sixthSection: {
    backgroundColor: 'yellow',
    padding: '50px 0'
  },
  sixthTitle: {
    fontSize: '4rem'
  },
  sixthDesc: {
    marginTop: '20px'
  },
  footerSection: {
    backgroundColor: '#1D1D20',
    height: 340,
    color: 'white'
  },
  label: {
    fontSize: 32,
    color: 'white'
  },
  labelMedium: {
    fontSize: 32,
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
  summaryDesc: {
    textTransform: 'uppercase',
    fontSize: '3rem',
    color: 'white',
    marginTop: '5vw',
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)',
    padding: '0 10vw'
  },
  summaryDescTablet: {
    textTransform: 'uppercase',
    fontSize: '2rem',
    color: 'white',
    marginTop: '5vw',
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)',
    padding: '0 10vw'
  },
  summaryDescMedium: {
    textTransform: 'uppercase',
    fontSize: '2rem',
    color: 'white',
    marginTop: '5vw',
    textShadow: '0 0 40px rgb(255, 255, 255, 0.8)',
    padding: '0 10vw'
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
    marginTop: '50px',
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
    width: '15vw',
    height: '15vw',
    maxWidth: 250,
    maxHeight: 250,
  },
  futureImgSmall: {
    width: '45vw',
    height: '45vw',
    maxWidth: 250,
    maxHeight: 250,
    marginTop: '15vw',
  },
  femaleImgMiddle: {
    width: '20vw',
    height: '20vw',
    maxWidth: 380,
    maxHeight: 380,
  },
  femaleImgSmall: {
    width: '60vw',
    height: '60vw',
    maxWidth: 380,
    maxHeight: 380,
    marginTop: '15vw',
  },
});
