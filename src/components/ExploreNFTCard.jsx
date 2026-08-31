import { PlayIcon, EthIcon } from './ExploreIcons.jsx';

export default function ExploreNFTCard({ nft }) {
  return (
    <div className="explore-card">
      <div className="explore-card-image">
        <div className="explore-card-art" style={{ background: nft.gradient }} />
        <button className="explore-card-heart">♡</button>
        {nft.video && <span className="explore-card-play"><PlayIcon /></span>}
      </div>
      <div className="explore-card-info">
        <div className="explore-card-name">{nft.name} <span className="verified">✓</span></div>
        <div className="explore-card-creator">@{nft.creator}</div>
        <div className="explore-card-footer">
          <span className="explore-card-price"><EthIcon /> {nft.price} ETH</span>
          <span className="explore-card-likes">♡ {nft.likes}</span>
        </div>
      </div>
    </div>
  );
}