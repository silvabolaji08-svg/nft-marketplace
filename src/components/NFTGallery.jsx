export default function NFTGallery({ nfts, loading }) {
  if (loading) return <p>Loading your NFTs...</p>;
  if (nfts.length === 0) return <p>You don&apos;t own any NFTs yet.</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      {nfts.map((nft) => (
        <div key={nft.tokenId} style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden' }}>
          <img src={nft.image} alt={nft.name} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <div style={{ padding: '12px' }}>
            <strong>{nft.name}</strong>
            <p style={{ fontSize: '0.85rem', color: '#999' }}>{nft.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}