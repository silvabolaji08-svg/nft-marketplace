import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';

export default function Topbar({ account, connecting, error, onConnect, isLight, onToggleTheme, auth, googleAuth }) {
  const shortAddress = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : null;
  const hasGoogle = googleAuth?.isGoogleSignedIn;
  const hasWallet = !!account;

  const handleSignOut = () => {
    if (hasGoogle) googleAuth.signOutGoogle();
    if (hasWallet && auth?.isSignedIn) auth.signOut();
  };

  return (
    <header className="topbar">
      <input className="topbar-search" placeholder="Search for NFTs, collections or creators" />
      <nav className="topbar-links">
        <Link to="/explore">Explore</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/create">Create</Link>
      </nav>
      <div className="topbar-actions">
        {!hasGoogle && !hasWallet && (
          <Link to="/auth" className="connect-btn">Sign In</Link>
        )}

        {hasGoogle && (
          <span className="account-chip">
            <span className="chip-dot" /> {googleAuth.googleUser.email}
          </span>
        )}

        {hasGoogle && !hasWallet && (
          <button className="connect-btn" onClick={onConnect} disabled={connecting}>
            {connecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        )}

        {!hasGoogle && hasWallet && (
          <Link to="/auth" className="btn-outline-small">Sign in with Google</Link>
        )}

        {hasWallet && !auth?.isSignedIn && (
          <button className="connect-btn" onClick={auth?.signIn} disabled={auth?.signingIn}>
            {auth?.signingIn ? 'Signing in...' : `Verify Wallet (${shortAddress})`}
          </button>
        )}

        {hasWallet && auth?.isSignedIn && (
          <span className="account-chip">
            <span className="chip-dot" /> {shortAddress}
          </span>
        )}

        {hasGoogle && hasWallet && auth?.isSignedIn && (
          <button className="account-btn">Account</button>
        )}

        {(hasGoogle || hasWallet) && (
          <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
        )}

        <ThemeToggle isLight={isLight} onToggle={onToggleTheme} />
      </div>
      {error && <p style={{ color: 'red', fontSize: '0.85rem' }}>{error}</p>}
      {auth?.authError && <p style={{ color: 'red', fontSize: '0.85rem' }}>{auth.authError}</p>}
    </header>
  );
}