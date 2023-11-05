import peanut from '@squirrel-labs/peanut-sdk';
import { ethers } from 'ethers';

const CHAINID = 5; // goerli
const RPC_URL = 'https://rpc.goerli.eth.gateway.fm';
//const mnemonic = 'beach sort cloth lake art stock gesture oblige old nephew mean laptop finger scorpion phone';
const mnemonic = 'wife margin impact rabbit wink gold vast shrimp city kit anxiety hundred';
let walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);
const wallet = new ethers.Wallet(walletMnemonic.privateKey, new ethers.providers.JsonRpcProvider(RPC_URL));

// create link
const { link, txHash } = await peanut.createLink({
	structSigner: {
		signer: wallet,
	},
	linkDetails: {
		chainId: CHAINID,
		tokenAmount: 0.0001,
		tokenType: 0, // 0 is for native tokens
		// Values for tokenType are defined in SDK documentation:
		// https://docs.peanut.to/integrations/building-with-the-sdk/sdk-reference/common-types#epeanutlinktype
	},
});

console.log('New link: ' + link);