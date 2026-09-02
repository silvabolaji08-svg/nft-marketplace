import { PlayIcon, EthIcon } from './ExploreIcons.jsx';

export default function ExploreNFTCard({ nft }) {
  return (
    <article className="explore-card">
      <div className="explore-card-image">
        <div
          className="explore-card-art"
          style={{ background: nft.gradient }}
          aria-label={`${nft.name} artwork`}
        />
        <button className="explore-card-heart" aria-label={`Like ${nft.name}`}>
          ♡
        </button>
        {nft.video && (
          <span className="explore-card-play" aria-label="Video NFT">
            <PlayIcon />
          </span>
        )}
      </div>

      <div className="explore-card-info">
        <div className="explore-card-title-row">
          <div className="explore-card-name" title={nft.name}>
            {nft.name}
            <span className="verified" aria-label="Verified">✓</span>
          </div>
          <span className="explore-card-edition">1/1</span>
        </div>

        <div className="explore-card-creator" title={`@${nft.creator}`}>
          @{nft.creator}
        </div>

        <div className="explore-card-footer">
          <div className="explore-card-price-wrap">
            <span className="explore-card-label">Price</span>
            <span className="explore-card-price">
              <EthIcon /> {nft.price} ETH
            </span>
          </div>

          <span className="explore-card-likes" aria-label={`${nft.likes} likes`}>
            ♡ {nft.likes}
          </span>
        </div>

      </div>
    </article>
  );
}
