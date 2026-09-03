import { useState, useCallback } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { MetaMaskSDK } from '@metamask/sdk';

import {
  CONTRACT_ADDRESS,
  CONTRACT_ABI
} from '../contracts/contractInfo.js';

const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: 'NFT Marketplace',
    url: window.location.origin,
  },
});

export default function useWallet() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState(null);

  const connect = useCallback(async () => {
    setError(null);
    setConnecting(true);

    try {
      // This is the important part for mobile MetaMask
      const accounts = await MMSDK.connect();

      if (!accounts || accounts.length === 0) {
        throw new Error('No wallet account found.');
      }

      const ethereum = MMSDK.getProvider();

      if (!ethereum) {
        throw new Error('MetaMask provider unavailable.');
      }

      const provider = new BrowserProvider(ethereum);

      // Sepolia
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: '0xaa36a7',
          },
        ],
      });

      const signer = await provider.getSigner();

      const nftContract = new Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      setAccount(accounts[0]);
      setContract(nftContract);

    } catch (err) {
      console.error('Wallet connection error:', err);

      if (err.code === 4001) {
        setError('You rejected the wallet connection.');
      } else {
        setError(err.message || 'Failed to connect wallet.');
      }
    } finally {
      setConnecting(false);
    }
  }, []);

  return {
    account,
    contract,
    connecting,
    error,
    connect,
  };
}