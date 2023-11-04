
const { TalentLayerClient } = require('@talentLayer/client');

require('dotenv').config();

const client = new TalentLayerClient({
  chainId: 80001, 
  ipfsConfig: {
    clientId: process.env.INFURA_PROJECT_ID,
    clientSecret: process.env.INFURA_SECRET,
    baseUrl: process.env.INFURA_IPFS_BASE_URL,
  },
  platformId: parseInt(process.env.TALENT_LAYER_PLATFORM_ID),
//   signatureApiUrl: process.env.PUBLIC_SIGNATURE_API_URL,
});

