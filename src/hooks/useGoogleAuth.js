import { useState, useEffect, useCallback } from 'react';
import { signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../firebase.js';

export default function useGoogleAuth() {
  const [googleUser, setGoogleUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const [googleError, setGoogleError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setGoogleUser(user);
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setGoogleError(null);
    setSigningIn(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/popup-closed-by-user') {
        setGoogleError('Sign-in was cancelled.');
      } else if (err.code === 'auth/popup-blocked') {
        setGoogleError('Popup was blocked by your browser. Please allow popups and try again.');
      } else if (err.code === 'auth/network-request-failed') {
        setGoogleError('Network error. Please check your connection and try again.');
      } else {
        setGoogleError('Something went wrong signing in with Google. Please try again.');
      }
    } finally {
      setSigningIn(false);
    }
  }, []);

  const signOutGoogle = useCallback(async () => {
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return {
    googleUser,
    isGoogleSignedIn: !!googleUser,
    authLoading,
    signingIn,
    googleError,
    signInWithGoogle,
    signOutGoogle,
  };
}