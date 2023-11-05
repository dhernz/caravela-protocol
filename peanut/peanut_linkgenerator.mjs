import peanut from '@squirrel-labs/peanut-sdk';
import { ethers } from 'ethers';

const CHAINID = 5; // goerli
const RPC_URL = 'https://rpc.goerli.eth.gateway.fm';
const mnemonic = 'announce room limb pattern dry unit scale effort smooth jazz weasel alcohol';
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