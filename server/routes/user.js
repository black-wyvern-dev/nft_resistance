const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
var User = require('../models/user');

// get user asset
router.get("/asset", async (req, res) => {
  let {walletAddress} = req.params;
  let userAsset = await User.find();
  return res.status(200).send(userAsset);
});

// set user asset
router.post("/setAsset", async (req, res) => {
  let {item} = req.body.params;
  let userData = await User.find({wallet_address: item.wallet_address});
  let userAsset = null;

  if(userData.length > 0) {
    userAsset = await User.updateOne({ wallet_address: item.wallet_address }, item, {
      upsert: true,
      setDefaultsOnInsert: true,
    });
  } else {
    userAsset = await User.create(item);
  }
  
  return res.status(200).send(userAsset);
});


// // get search data
// router.get("/getSearchData", async (req, res) => {
//   let {name} = req.params;
//   let searchData = await User.find();
//   return res.status(200).send(searchData);
// });

module.exports = router;