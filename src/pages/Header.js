import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { useWallet } from 'use-wallet';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';
import twitter from '../assets/Images/twitter.png';
import discord from '../assets/Images/discord.png';
import playBtn from '../assets/Images/PlayBtn.svg';
import topShape from '../assets/Images/topShape.svg';
import electronicLine from '../assets/Images/electronicLine.svg';
import leftShape from '../assets/Images/leftShape.svg';
import rightShape from '../assets/Images/rightShape.svg';
import { useMediaQuery } from 'react-responsive';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 8
};

const useStyles = makeStyles((theme) => ({
  appBarSolid: {
    backgroundColor: 'black',
    boxShadow: 'none',
    textAlign: 'center',
    position: 'initial',
    borderBottom: '1px dashed',
    borderBottomColor: '#00FFFE',
    marginBottom: 3,
    height: 120,
    backgroundImage: `url(${electronicLine})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 5% top 0px',
  },
  heightMobile: {
    backgroundColor: 'black',
    boxShadow: 'none',
    textAlign: 'center',
    position: 'initial',
    borderBottom: '1px dashed',
    borderBottomColor: '#00FFFE',
    marginBottom: 3,
    height: 250,
  },
  tabletHeight: {
    backgroundColor: 'black',
    boxShadow: 'none',
    textAlign: 'center',
    position: 'initial',
    borderBottom: '1px dashed',
    borderBottomColor: '#00FFFE',
    marginBottom: 3,
    height: 150,
  },
  linkGroup: {
    textAlign: 'center',
    display: 'content',
    verticalAlign: 'middle',
    marginTop: 70,
  },
  playlink: {
    fontSize: 18,
    margin: '12px 12px 0px 12px',
    textDecoration: 'blink',
    verticalAlign:'middle',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  link: {
    fontSize: 18,
    margin: 15,
    fontWeight: 'bold',
    textDecoration: 'blink',
    color: 'white',
    '&:hover': {
      color: 'yellow',
      transform: 'scale(1.25)'
    },
    // '&:hover': {
    //   textDecoration: 'underline',
    // },
    // textShadow: '5px 0px 0px #6E0000, 5px 5px 0px rgba(110,110,110,0.5), 10px 5px 0px rgba(110,0,0,0.5), 10px 5px 0px rgba(110,0,0,0.5)'
  },
  linkSmall: {
    fontSize: 10,
    margin: 15,
    fontWeight: 'bold',
    textDecoration: 'blink',
    color: 'white',
    '&:hover': {
      color: 'yellow'
    },
    // textShadow: '5px 0px 0px #6E0000, 5px 5px 0px rgba(110,110,110,0.5), 10px 5px 0px rgba(110,0,0,0.5), 10px 5px 0px rgba(110,0,0,0.5)'
  },
  iconLink: {
    display: 'flex',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    textDecoration: 'blink',
  },
  connect: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    // border: '1px solid #00FFFE',
    backgroundColor: 'yellow',
    // '&:hover': {
    //   backgroundColor: '#00FFFE',
    // },
    fontFamily: 'anita',
    borderRadius: 5,
    fontFamily: 'Roboto'
  },
  topShape: {
    backgroundImage: `url(${topShape})`,
    height: 85,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    fontFamily: 'anita'
  },
  logo: {
    width: 80
  },
  closeBtn: {
    float: 'right',
    cursor: 'pointer'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 600
  },
  walletBtn: {
    width: '100%',
    marginBottom: 20,
    // backgroundColor: '#00FFFE',
    backgroundColor: 'yellow',
    borderRadius: 10
  },
  header: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Roboto'
  },
  discord: {
    width: 30,
    marginTop: 5,
    marginRight: 10,
    '&:hover': {
      transform: 'scale(1.25)'
    }
  },
  alignDiscord: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  twitter: {
    width: 30,
    marginTop: 5,
    marginRight: 10,
    paddingRight: 15,
    '&:hover': {
      transform: 'scale(1.25)'
    }
  },
  alignTwitter: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
}));

export default function Header() {

  const classes = useStyles();
  const wallet = useWallet();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const connectWallet = () => {
    handleOpen();
  }

  const connectMetamask = () => { 
    wallet.connect();
    localStorage.setItem("walletStatus", "connected");
    handleClose();
  }

  const disconnectWallet = () => {
    wallet.reset();
    localStorage.setItem("walletStatus", "disconnected");
  }

  useEffect(() => {
    if(localStorage.getItem("walletStatus") === "connected" && wallet.account === null) {
      wallet.connect();
      localStorage.setItem("walletAddress", wallet.account);
    }
  });

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 800px)' });
  const isMediumTablet = useMediaQuery({ query: '(max-width: 1000px)' });

  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="center" >
        <Grid item md={3} sm={4} xs={12} container justifyContent={'center'} >
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              {/* <Link to="/" className={classes.iconLink}> */}
                <img src={logo} alt="logo" className={classes.logo}/>
              {/* </Link> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.header} item xs={12} md={6} sm={12}>
          {/* <Link className={!isMobile?classes.link:classes.linkSmall} to="/">HOME</Link> */}
          <Link className={!isMobile?classes.link:classes.linkSmall} to="/about">ABOUT</Link>
          <Link className={!isMobile?classes.link:classes.linkSmall} to="/">DEVLOG</Link>
          <Link className={!isMobile?classes.link:classes.linkSmall} to="/">GALLERY</Link>
          {wallet.account !== null ?
            <Link className={!isMobile?classes.link:classes.linkSmall} to="/">MY ASSETS</Link>
            : <Link className={!isMobile?classes.link:classes.linkSmall} to="/">MY ASSETS</Link>
          }
          <Link className={!isMobile?classes.link:classes.linkSmall} to="/">FAQ</Link>
        </Grid>
        <Grid item md={3} sm={!isMediumTablet?12:12} xs={12} container justifyContent={'center'} className={classes.loginBtn}>
          <Grid item xs={2} className={classes.alignTwitter}>
            <a href="https://discord.com/invite/P4uzx24aW3" target="_blank">
              <img src={discord} alt="discord" className={classes.discord}/>
            </a>
            <a href="https://twitter.com/TNR_game" target="_blannk">
              <img src={twitter} alt="twitter" className={classes.twitter}/>
            </a>
          </Grid>
          {localStorage.getItem('walletStatus') === 'connected' && wallet.account ? (
            <Grid item md={4} sm={4} xs={4} container justifyContent={'center'}>
              <Button md={4} sm={4} xs={4} variant="contained" className={classes.connect} onClick={disconnectWallet}>{wallet.account.slice(0, 4)+"..."+wallet.account.slice(-3)}</Button>
            </Grid>
          ) : (
            <Grid item xs={4} container justifyContent={'center'}>
              {/* <Button variant="contained" className={classes.connect} onClick={connectWallet}>Wallet Connect</Button> */}
            </Grid>
          )}
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className={classes.modalTitle}>
              Connect a wallet
            </span>
            <CloseIcon className={classes.closeBtn} onClick={handleClose}/>
          </Typography>          
          <Divider />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button variant="contained" className={classes.walletBtn} onClick={connectMetamask}>Metamask</Button>
            <Button variant="contained" className={classes.walletBtn} onClick={connectMetamask}>TrustWallet</Button>
            <Button variant="contained" className={classes.walletBtn} onClick={connectMetamask}>MathWallet</Button>
            <Button variant="contained" className={classes.walletBtn} onClick={connectMetamask}>TokenPocket</Button>
            <Button variant="contained" className={classes.walletBtn} onClick={connectMetamask}>WalletConnect</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}