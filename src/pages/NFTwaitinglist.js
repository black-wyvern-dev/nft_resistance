import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { useMediaQuery } from 'react-responsive';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
// import Box from '@mui/material/Box';
// import FormHelperText from '@mui/material/FormHelperText';

const useStyles = makeStyles({
  root: {
    textAlign: '-webkit-center',
    marginTop: 20,
    margin: '0 5%',
    paddingBottom: 100,
    color: 'white'
  },
  title: {
    fontFamily: 'KOMIKAXS',
    fontSize: 40,
    textTransform: 'uppercase',
    color: '#F0E939'
  },
  desc: {

  },
  button: {
    backgroundColor: '#F0E939',
    fontFamily: 'KOMIKAXS',
    fontSize: 25,
    textTransform: 'uppercase',
    color: 'black',
    borderRadius: 10,
    marginTop: 20,
    padding: '10px 20px',
    maxWidth: 300,
    '&:hover': {
      transform: 'scale(1.25)'
    }
  },
  textfield: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 300
  },
  gridFrame: {
    marginTop: 20,
    width: 300
  },
  container: {
    justifyContent: 'center'
  }
});

// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};

//   const helperText = React.useMemo(() => {
//     if (focused) {
//       return 'This field is being focused';
//     }

//     return 'Helper text';
//   }, [focused]);

//   return <FormHelperText>{helperText}</FormHelperText>;
//   // return <FormHelperText></FormHelperText>;
// }

export default function NftLaunch () {
  
  const classes = useStyles();

  useEffect(() => {
   
  });

  return (    
    <div className={classes.root} >
      <Grid container className={classes.container}>
        <Grid className={classes.title} item xs={12}>
          GET ON THE NEW RESISTANCE NFT WAITING LIST
        </Grid>
        <Grid className={classes.desc} item xs={12}>
          Our limited edition NFT series drops very soon. Spaces are super limited. Apply now to get early access. 
        </Grid>
        <Grid item xs={12} className={classes.gridFrame}>
          <FormControl className={classes.textfield}>
            <OutlinedInput placeholder="First Name" />
            {/* <MyFormHelperText /> */}
          </FormControl>
          {/* <TextField label="First Name" className={classes.textfield}/> */}
        </Grid>
        <Grid item xs={12} className={classes.gridFrame}>
          <FormControl className={classes.textfield}>
            <OutlinedInput placeholder="Your Email" />
          </FormControl>
          {/* <TextField id="outlined-basic" label="Your Email" variant="outlined" className={classes.textfield}/> */}
        </Grid>
        <Grid item xs={12} className={classes.gridFrame}>
          <FormControl className={classes.textfield}>
            <OutlinedInput placeholder="ETH Wallet Address" />
          </FormControl>
          {/* <TextField id="outlined-basic" label="ETH Wallet Address" variant="outlined" className={classes.textfield}/> */}
        </Grid>
        <Grid className={classes.button} item xs={12}>
          yes! let me in
        </Grid>
      </Grid>
    </div>
  )
}