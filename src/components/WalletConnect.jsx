export default function WalletConnect({ account, connecting, error, onConnect }) {
  const shortAddress = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : null;

  return (
    <div>
      {account ? (
        <button disabled>{shortAddress}</button>
      ) : (
        <button onClick={onConnect} disabled={connecting}>
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}