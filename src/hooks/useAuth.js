import { useState, useCallback, useEffect } from 'react';
import { verifyMessage } from 'ethers';

const SESSION_KEY = 'nft-auth-session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export default function useAuth(wallet) {
  const [session, setSession] = useState(null);
  const [signingIn, setSigningIn] = useState(false);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(SESSION_KEY);
    if (!stored) return;

    const parsed = JSON.parse(stored);
    if (Date.now() > parsed.expiresAt) {
      localStorage.removeItem(SESSION_KEY);
      return;
    }
    setSession(parsed);
  }, []);

  const signIn = useCallback(async () => {
    if (!wallet.contract || !wallet.account) return;
    setAuthError(null);
    setSigningIn(true);

    try {
      const nonce = Math.floor(Math.random() * 1_000_000);
      const message = `Sign in to NFTMart\n\nAddress: ${wallet.account}\nNonce: ${nonce}\nIssued: ${new Date().toISOString()}`;

      const signer = await wallet.contract.runner;
      const signature = await signer.signMessage(message);

      const recovered = verifyMessage(message, signature);
      if (recovered.toLowerCase() !== wallet.account.toLowerCase()) {
        throw new Error('Signature verification failed.');
      }

      const newSession = {
        address: wallet.account,
        signedInAt: Date.now(),
        expiresAt: Date.now() + SESSION_DURATION,
      };

      localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
      setSession(newSession);
    } catch (err) {
      console.error(err);
      setAuthError('Sign-in was cancelled or failed.');
    } finally {
      setSigningIn(false);
    }
  }, [wallet.contract, wallet.account]);

  const signOut = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
  }, []);

  const isSignedIn = !!session && session.address?.toLowerCase() === wallet.account?.toLowerCase();

  return { isSignedIn, session, signingIn, authError, signIn, signOut };
}