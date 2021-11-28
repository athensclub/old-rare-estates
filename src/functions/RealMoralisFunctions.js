import Moralis from "moralis";
import { MoralisId, MoralisServerUrl } from "../constants/api_key"

var MoralisFunctions = {
    initMoralis: function () {
        Moralis.initialize(MoralisId);
        Moralis.serverURL = MoralisServerUrl;
    },
    initUser: async function () {
        let user = await Moralis.User.current();
        return user;
    },
    disconnect: async function () {
        await Moralis.User.logOut();
    },
    connectWallet: async function () {
        Moralis.Web3.getSigningData = () => 'Connect your wallet to rare-estate'
        let user = await Moralis.Web3.authenticate();
        if (user) {
            console.log("sign in completes");
        } else console.log("sign in isn't complete");
        return user;
    },
    isConnect: async function () {
        let user = await MoralisFunctions.initUser();
        return user !== null;
    },
    uploadFile: async function (name, file) {
        if (!file || !name) throw ('null params')
        const ipfsObj = new Moralis.File(name, file);
        await ipfsObj.saveIPFS();
        return ipfsObj.ipfs();
    }
}

export { MoralisFunctions as default, Moralis };