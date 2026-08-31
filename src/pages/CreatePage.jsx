import MintForm from '../components/MintForm.jsx';

export default function CreatePage({ contract, account, onMinted, auth }) {
  if (!account) {
    return (
      <div className="auth-gate">
        <h2>Connect your wallet to create an NFT</h2>
        <p>You need to connect a wallet before you can mint.</p>
      </div>
    );
  }

  if (!auth.isSignedIn) {
    return (
      <div className="auth-gate">
        <h2>Sign in to create an NFT</h2>
        <p>Your wallet is connected, but you need to sign in to verify ownership before minting.</p>
        <button className="btn-primary" onClick={auth.signIn} disabled={auth.signingIn}>
          {auth.signingIn ? 'Signing in...' : 'Sign In'}
        </button>
        {auth.authError && <p className="form-error">{auth.authError}</p>}
      </div>
    );
  }

  return <MintForm contract={contract} account={account} onMinted={onMinted} auth={auth} />;
}