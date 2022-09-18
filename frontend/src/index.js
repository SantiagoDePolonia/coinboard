import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CoinBoardApp from './components/CoinBoardApp';
import reportWebVitals from './reportWebVitals';

import { chain, configureChains, createClient } from '@wagmi/core'
import { publicProvider } from '@wagmi/core/providers/public'
import { Web3ModalEthereum } from '@web3modal/ethereum'
import { Web3ModalProvider } from '@web3modal/react'
import { PROJECT_ID } from "./consts/walletconnect";

// Configure chains and providers (rpc's)
const { chains, provider } = configureChains([chain.mainnet], [publicProvider()])

// Create wagmi client
const wagmiClient = createClient({
  autoConnect: true,
  connectors: Web3ModalEthereum.defaultConnectors({ chains, appName: 'CoinBoard' }),
  provider
})

// Configure web3modal
const modalConfig = {
  projectId: PROJECT_ID,
  theme: 'dark',
  accentColor: 'orange'
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Web3ModalProvider config={modalConfig} ethereumClient={wagmiClient}>
      <CoinBoardApp />
    </Web3ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
