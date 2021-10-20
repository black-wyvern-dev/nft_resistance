import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { useWallet } from 'use-wallet';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png';
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
    margin: 12,
    textDecoration: 'blink',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline',
    },
    textShadow: '5px 0px 0px #6E0000, 5px 5px 0px rgba(110,110,110,0.5), 10px 5px 0px rgba(110,0,0,0.5), 10px 5px 0px rgba(110,0,0,0.5)'
  },
  iconLink: {
    display: 'flex',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    textDecoration: 'blink',
    marginTop: 40,
  },
  connect: {
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    color: theme.palette.common.white,
    border: '1px solid #00FFFE',
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: '#00FFFE',
    },
    fontFamily: 'anita'
  },
  topShape: {
    backgroundImage: `url(${topShape})`,
    height: 85,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    fontFamily: 'anita'
  },
  loginBtn: {
    marginTop: 60,    
  },
  leftShape: {
    backgroundImage: `url(${leftShape})`,
    height: 85,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left 25% top 0px',
  },
  rightShape: {
    backgroundImage: `url(${rightShape})`,
    height: 85,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 25% top 0px',
  },
  logo: {
    width: 60
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
    backgroundColor: '#00FFFE',
    borderRadius: 10
  }
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

  return (
    <AppBar position="fixed" className={isMobile?classes.heightMobile:isTablet?classes.tabletHeight:classes.appBarSolid}>
      <div className={classes.leftShape}>
        <div className={classes.rightShape}>
          <Toolbar className={classes.topShape}>
            <Grid container direction="row" alignItems="center" justifyContent="center" >
              <Grid item md={2} sm={2} xs={12} container justifyContent={'center'} >
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item>
                    <Link to="/" className={classes.iconLink}>
                      <img src={logo} alt="logo" className={classes.logo}/>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={8} sm={8} xs={12} container justifyContent={'center'} >
                <div className={classes.linkGroup}>
                  <Grid xs={12} item container>
                    <Grid xs={isTablet?12:4} item style={{marginTop: 5}}>
                      <a className={classes.link} href="https://thenewresistance.io" target="_blank">About</a>
                      <Link className={classes.link} to="/gallery">Gallery</Link>
                    </Grid>
                    <Grid xs={isTablet?12:4} item>
                      <Link className={classes.playlink} to="/"><img src={playBtn} alt="playBtn" /></Link>
                    </Grid>
                    <Grid xs={isTablet?12:4} item style={{marginTop: 5}}>
                      <Link className={classes.link} to="/rank">Rank</Link>
                      {wallet.account !== null ?
                        <Link className={classes.link} to="/myassets">MyAssets</Link>
                        : <Link className={classes.link} to="" style={{color: '#000'}}>MyAssets</Link>
                      }
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item md={2} sm={2} xs={12} container justifyContent={'center'} className={classes.loginBtn}>
                {localStorage.getItem('walletStatus') === 'connected' && wallet.account ? (
                  <Grid item md={12} sm={12} xs={12} container justifyContent={'center'}>
                    <Button md={12} sm={12} xs={12} variant="contained" className={classes.connect} onClick={disconnectWallet}>{wallet.account.slice(0, 4)+"..."+wallet.account.slice(-3)}</Button>
                  </Grid>
                ) : (
                  <Grid item container justifyContent={'center'}>
                    <Button variant="contained" className={classes.connect} onClick={connectWallet}>Connect</Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </div>
      </div>
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
    </AppBar>
  );
}