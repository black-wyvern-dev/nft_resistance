import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from '../pages/Header';
import Landing from '../pages/Landing';
import About from '../pages/About';
import MyAssets from '../pages/MyAssets';
import Rank from '../pages/Rank';
import Gallery from '../pages/Gallery';
import NFTwaitinglist from '../pages/NFTwaitinglist';
import { UseWalletProvider } from 'use-wallet'

function Layout() {
  return (
    <React.Fragment>
      <UseWalletProvider
          chainId={56}
          connectors={{
            walletconnect: { rpcUrl: "https://rinkeby.etherscan.io" },
          }}
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/myAssets" exact component={MyAssets} />
            <Route path="/rank" exact component={Rank} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/NFTwaitinglist" exact component={NFTwaitinglist} />
          </Switch>
        </BrowserRouter>
      </UseWalletProvider>
    </React.Fragment>
  )
}

export default Layout;
