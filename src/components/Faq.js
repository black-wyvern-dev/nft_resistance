import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#black !important'
    },
    title: {
        fontFamily: 'anita',
        fontWeight: 700,
        marginLeft: 30,
        // '&:after': {
        //     content: "' '",
        //     width: '30%',
        //     height: '4px',
        //     backgroundColor: '#fff',
        //     position: 'absolute',
        //     left: 0,
        //     bottom: '-4px',
        //     display: 'inline-block',
        // }
    },
    desc: {
        fontFamily: 'anita',
        color: 'white',
    },
    expand: {
        backgroundColor: '#00FFFE !important',
        clipPath: "polygon(98% 0, 100% 30%, 101% 60%, 100% 100%, 25% 100%, 0 100%, 0 0)",
        marginBottom: '20px !important',
    },
    accordion: {
        backgroundColor: 'black !important',
    },
    titleEffect: {
        
    }
});

export default function SimpleAccordion() {
    const classes = useStyles();

  return (
    <div>
      <Accordion className={classes.accordion}>
        <span className={classes.titleEffect}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.expand}
        >
          <Typography><span className={classes.title}>How do I purchase a TNR NFT</span></Typography>
        </AccordionSummary>
        </span>
        <AccordionDetails>
            <span className={classes.titleEffect}></span>
          <Typography>
          <span className={classes.desc}>
          Open Google Chrome or your wallet of choice and visit our website. 
          Use your preferred trusted wallet like MetaMask and click the mint function at the top of the 
          website. Be sure you have 0.07 ETH as well as a little extra for gas fees. After you mint your 
          Deez Nuts it can take a little time before they show up on your account at Opensea.io. 
          Here’s a great video on how to buy your first NFT: <a href="https://youtu.be/TxQID31fOTw" target="_blank">https://youtu.be/TxQID31fOTw</a>
          </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.expand}
        >
          <Typography><span className={classes.title}>Where does my NFT go after mint?</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <span className={classes.desc}>
          Your TNR  NFT will appear in the address, or connected wallet you used to purchase the NFT. 
          You can see your TNR collection on the website Opensea.io.
          </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className={classes.expand}
        >
          <Typography><span className={classes.title}>Tokenomics</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <span className={classes.desc}>
          We have reserved 100 NFTs to give away in competitions and for holder air drops. 
          Most of these will be given out after launch and will not occupy the early token ids.
          </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
