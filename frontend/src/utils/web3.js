import Web3 from "web3";
import HDWalletProvider from "@truffle/hdwallet-provider";

const mnemonic =
  "unhappy shrug elite plate portion travel place actual pioneer stove opera try";
// process.env.MNEMONIC
let web3;

if (window.web3) {
  window.web3 = new Web3(window.web3.currentProvider);
  window.ethereum.enable();
  web3 = window.web3;
} else {
  const provider = new HDWalletProvider(
    mnemonic,
    "https://matic-mumbai.chainstacklabs.com/"
  );
  web3 = new Web3(provider);
}

export default web3;
