import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from '@web3-react/core'

const WalletConnect = new WalletConnectConnector({
 rpcUrl: `https://mainnet.infura.io/v3/d16ffb50267642719e1d148a453976e9`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

function App() {
  
  const {activate} = useWeb3React();
  return  (
      <button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
  );

}

export default App;