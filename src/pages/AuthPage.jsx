import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AuthPage({ googleAuth, wallet }) {
  const navigate = useNavigate();
  const { isGoogleSignedIn, googleUser, signingIn, googleError, signInWithGoogle } = googleAuth;
  const { account, connecting, error, connect } = wallet;

  useEffect(() => {
    if (isGoogleSignedIn || account) {
      const timer = setTimeout(() => navigate('/'), 900);
      return () => clearTimeout(timer);
    }
  }, [isGoogleSignedIn, account, navigate]);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="sidebar-logo auth-logo">
          <span className="sidebar-logo-icon">◆</span>
          NFTMart
        </Link>

        <h1>Welcome to NFTMart</h1>
        <p>Create an account or sign in to continue</p>

        {(isGoogleSignedIn || account) ? (
          <div className="auth-success">
            {isGoogleSignedIn && <p>✓ Signed in as {googleUser.email}</p>}
            {account && <p>✓ Wallet connected {account.slice(0, 6)}...{account.slice(-4)}</p>}
            <p className="auth-redirect-note">Redirecting you to NFTMart...</p>
          </div>
        ) : (
          <>
            <button className="auth-google-btn" onClick={signInWithGoogle} disabled={signingIn}>
              <span className="google-g">G</span> {signingIn ? 'Signing in...' : 'Continue with Google'}
            </button>
            {googleError && <p className="form-error">{googleError}</p>}

            <div className="auth-divider"><span>OR</span></div>

            <button className="btn-outline auth-wallet-btn" onClick={connect} disabled={connecting}>
              {connecting ? 'Connecting...' : 'Connect Wallet'}
            </button>
            {error && <p className="form-error">{error}</p>}
          </>
        )}

        <p className="auth-terms">
          By continuing, you agree to the Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}