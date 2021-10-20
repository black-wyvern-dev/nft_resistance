import React, { useEffect, useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import getAssets from '../mint/List';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import { useWallet } from 'use-wallet';
import avatar from '../assets/Images/avatar.png';
import { getUserAsset, setUserAsset } from '../actions/userAction';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MyAsset from '../components/MyAsset';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles({
  root: {
    textAlign: '-webkit-center',
    marginTop: 20,
    margin: '0 5%',
    paddingBottom: 100,
    paddingTop: 40
  },
  spinner: {
    justifyContent: 'center',
  },
  // avatarLine: {
  //   border: '1px solid #00FFFE',
  //   minHeight: 400,
  //   maxHeight: 700,
  //   maxWidth: 270
  // },
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
    padding: '5px !important'
  },
  desc: {
    color: 'white',
    textAlign: 'justify'
  },
});

export default function MyAssets () {
  const classes = useStyles();
  const [assetsData, setAssetsData] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const [myAvatar, setMyAvatar] = useState(avatar);
  const [myAsset, setMyAsset] = useState(null);
  const wallet = useWallet();
  const [successNotification, setSuccessNotification] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const [message, setMessage] = useState();
  const [messageStatus, setMessageStatus] = useState();

  const { vertical, horizontal, open } = successNotification;

  const handleClose = () => {
    setSuccessNotification({ ...successNotification, open: false });
  };

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

  const setUsing = useCallback((item) => {
    if(wallet.account !== null) {
      setMyAvatar(item.image);
      setMyAsset(item);

      let setItem = {};
      setItem.name = item.name;
      setItem.image = item.image;
      setItem.desc = item.description;
      setItem.wallet_address = item.wallet_address;
      setItem.gender = item.attributes[0].value;
      setItem.faction = item.attributes[1].value;
      setItem.skin = item.attributes[2].value;
      setItem.eye = item.attributes[3].value;
      setItem.mouth = item.attributes[4].value;
      setItem.nose = item.attributes[5].value;
      setItem.scar = item.attributes[6].value;
      setItem.top = item.attributes[7].value;
      setItem.hair = item.attributes[8].value;
      setItem.beard = item.attributes[9].value;
      setItem.accesory = item.attributes[10].value;
      setItem.strength = item.attributes[11].value;
      setItem.speed = item.attributes[12].value;
      setItem.intelligence = item.attributes[13].value;
      setItem.rarity = item.attributes[14].value;

      item.wallet_address = wallet.account;
      setUserAsset(setItem).then(res => {
        if(res.status === 200) {
          setSuccessNotification({open: true, vertical: 'top', horizontal: 'right'});
          setMessage("The user picture setting was successful.");
          setMessageStatus("success");

          setTimeout(() => {
            setSuccessNotification({open: false, vertical: 'top', horizontal: 'right'});
          }, 5000)
        } else {
          setMessage("The user picture setting was failure.");
          setMessageStatus("error");
        }
      });
    } else {
      setSuccessNotification({open: true, vertical: 'top', horizontal: 'right'});
      setMessage("You have to connect your wallet.");
      setMessageStatus("error");
      setTimeout(() => {
        setSuccessNotification({open: false, vertical: 'top', horizontal: 'right'});
      }, 5000)
    }    
  });

  return (    
    <div className={classes.root} >
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Success"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={messageStatus} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <Grid container>
        <Grid xs={12} sm={6} md={3} item>
          {myAsset === null ? <img src={myAvatar} alt="myAvatar" className={classes.myAvatar} /> : <MyAsset myAssetData={myAsset} /> }
        </Grid>
        <Grid container xs={12} sm={6} md={9} item className={classes.spinner}>
          { spinner ? <Spinner /> : assetsData && assetsData.map((item, key) => 
            <div onClick={() => setUsing(item)} key={key} >
              <Card sm={4} xs={4} md={4} item={item} />
            </div>
            ) }
        </Grid>
      </Grid>
    </div>
  )
}