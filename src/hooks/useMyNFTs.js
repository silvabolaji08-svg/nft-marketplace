import { useState, useEffect, useCallback } from 'react';

const IPFS_GATEWAY = 'https://gateway.pinata.cloud/ipfs/';

const resolveIpfs = (uri) => (uri?.startsWith('ipfs://') ? uri.replace('ipfs://', IPFS_GATEWAY) : uri);

export default function useMyNFTs(contract, account) {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNFTs = useCallback(async () => {
    if (!contract || !account) return;
    setLoading(true);

    try {
      const filter = contract.filters.Transfer(null, account);
      const events = await contract.queryFilter(filter);

      const tokenIds = [...new Set(events.map((e) => e.args.tokenId.toString()))];

      const owned = [];
      for (const tokenId of tokenIds) {
        try {
          const currentOwner = await contract.ownerOf(tokenId);
          if (currentOwner.toLowerCase() !== account.toLowerCase()) continue;

          const tokenURI = await contract.tokenURI(tokenId);
          const metadataRes = await fetch(resolveIpfs(tokenURI));
          const metadata = await metadataRes.json();

          owned.push({
            tokenId,
            name: metadata.name,
            description: metadata.description,
            image: resolveIpfs(metadata.image),
          });
        } catch (err) {
          console.error(`Failed to load token ${tokenId}:`, err);
        }
      }

      setNfts(owned);
    } catch (err) {
      console.error('Failed to fetch NFTs:', err);
    } finally {
      setLoading(false);
    }
  }, [contract, account]);

  useEffect(() => {
    fetchNFTs();
  }, [fetchNFTs]);

  return { nfts, loading, refetch: fetchNFTs };
}