const ethers = require("ethers");
const web3 = require("web3");
const provider = new ethers.providers.WebSocketProvider("wss://eth-rinkeby.alchemyapi.io/v2/U0tbOJ8Py8QYXULM28RDTGpHLBTJWQal");
const abi = require("./abi.json");
const contractAddress = "0x3c7ab3c8bbb59938dc38b6f0996267f677f9403a";
const nftContract = new ethers.Contract(contractAddress, abi, provider);

export default function getAssets (params, setAssetsData) {
    // walletAddress = "0xeac9472633FBDCDf0e47c4Ad6d6dE54d805d5358";

    let items = [];
    let searchItems = [];
    
    nftContract.getAmountMinted().then(async(res) => {
        const amountMinted = web3.utils.hexToNumber(res);

        for(let i = 0; i < amountMinted; i++) {
            try {
                await nftContract.tokenByIndex(i).then(async (index) => {
                    // tokenIDs.push(index);
                    await nftContract.tokenURI(index).then(async (result) => {
                        const response = await fetch(result);
                        const res = await response.json();

                        if(params.name !== null && params.name !== '' && res.name.includes(params.name)) {
                            searchItems.push(res);
                        } else {
                            items.push(res);
                        }
                    })
                })
            } catch (e) {

            }
        }
        
        if(params.name !== null && params.name !== '') {
            setAssetsData(searchItems);
        } else {
            setAssetsData(items);
        }
        
    });
}

// module.exports = {
//     getAssets
// }