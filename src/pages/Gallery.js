import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import getAssets from '../mint/List';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import { useWallet } from 'use-wallet';
import MuiAlert from '@mui/material/Alert';
import SearchBtn from '../assets/Images/SearchBtn.svg';
import SearchBox from '../assets/Images/SearchBox.svg';
import Input from '@mui/material/Input';
import { useMediaQuery } from 'react-responsive';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles({
  root: {
    textAlign: '-webkit-center',
    marginTop: 20,
    margin: '0 5%',
    paddingBottom: 100,
  },
  spinner: {
    justifyContent: 'center',
    paddingTop: 10,
  },
  title: {
    textShadow: '5px 0px 0px #6E0000, 5px 5px 0px rgba(110,110,110,0.5), 10px 5px 0px rgba(110,0,0,0.5), 10px 5px 0px rgba(110,0,0,0.5)',
    fontSize: 32,
    color: 'white',
    // float: 'left'
  },
  searchBtn: {
    // float: 'right',
    cursor: 'pointer',
  },
  searchBox: {
    color: 'white !important',
    // float: 'right',
    backgroundImage: `url(${SearchBox})`,
    // height: 40,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // width: '25%',
    paddingLeft: 10,
  },
  inputBox: {
    marginTop: 5,
    marginLeft: '-20',
    padding: 0,
    color: 'white !important',
    width: 270
  },
});

export default function MyAssets () {
  const classes = useStyles();
  const [assetsData, setAssetsData] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const wallet = useWallet();

  const assetsDataFn = (data) => {
    setAssetsData(data);
    setSpinner(false);
  }

  useEffect(() => {
    // getUserAsset(wallet.account)
    // .then(res => {
    //   setMyAsset(res.data[0]);
    // });
    let params = {};
    params.wallet_account = null;
    params.name = null;

    getAssets(params, assetsDataFn);

    let inputName = document.getElementById('name');

    inputName.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        onSearch();
      }
    });
  }, []);

  const onSearch = () => {
    // getSearchData().then(res => {
    //   console.log(res);
    // })

    setSpinner(true);
    let params = {};
    params.name = document.getElementById('name').value;

    getAssets(params, assetsDataFn);
  }

  const isCellPhone = useMediaQuery({ query: '(max-width: 700px)' });

  return (    
    <div className={classes.root} >
      <Grid container>
        <Grid xs={12} sm={2} md={2} item className={classes.title}>Gallery</Grid>
        <Grid sm={2} md={4} item></Grid>
        <Grid xs={12} sm={6} md={4} lg={4} item>
          <div className={classes.searchBox} style={isCellPhone?{}:{float: 'right'}}>
            <Input className={classes.inputBox} placeholder="Name" id="name" style={{fontFamily: 'Rajdhani'}}/>
          </div>
        </Grid>
        <Grid xs={12} sm={2} md={2} item onClick={() => onSearch()} >
          <img src={SearchBtn} alt="searchBtn" className={classes.searchBtn} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid container item className={classes.spinner}>
        { spinner ? <Spinner /> : assetsData && assetsData.map((item, key) => 
            <Card sm={3} xs={3} md={3} item={item} key={key} />
            ) }
        </Grid>
      </Grid>
    </div>
  )
}