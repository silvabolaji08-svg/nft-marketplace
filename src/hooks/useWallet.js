import { useState, useCallback } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../contracts/contractInfo.js';

export default function useWallet() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState(null);

  const connect = useCallback(async () => {
    setError(null);

    if (!window.ethereum) {
      setError('MetaMask is not installed.');
      return;
    }

    setConnecting(true);
    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();

      const nftContract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      setAccount(accounts[0]);
      setContract(nftContract);
    } catch (err) {
      console.error(err);
      setError('Failed to connect wallet.');
    } finally {
      setConnecting(false);
    }
  }, []);

  return { account, contract, connecting, error, connect };
}