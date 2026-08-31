import ExploreFilters from '../components/ExploreFilters.jsx';
import ExploreNFTCard from '../components/ExploreNFTCard.jsx';
import { ChevronDown, GridIcon, ListIcon } from '../components/ExploreIcons.jsx';

const demoNFTs = [
  { name: 'Cosmic Explorer', creator: 'Starborn', price: '2.45', likes: 234, gradient: 'radial-gradient(circle, #a78bfa, #1e1b4b)' },
  { name: 'Neon Dreamer', creator: 'Oxion', price: '1.80', likes: 189, gradient: 'linear-gradient(135deg, #ec4899, #06b6d4)' },
  { name: 'Floating Sanctuary', creator: 'DreamScapes', price: '3.20', likes: 312, gradient: 'linear-gradient(135deg, #60a5fa, #fbbf24)', video: true },
  { name: 'Cyber Hound', creator: 'MetaPaws', price: '0.95', likes: 156, gradient: 'linear-gradient(135deg, #78350f, #1c1917)' },
  { name: 'Ethereal Waves', creator: 'Zypher', price: '1.25', likes: 98, gradient: 'conic-gradient(from 0deg, #f97316, #a855f7, #06b6d4)' },
  { name: 'Portal to Ascend', creator: 'InfinityLabs', price: '2.75', likes: 276, gradient: 'radial-gradient(circle, #06b6d4, #0c0a1f)', video: true },
  { name: 'Shattered Reality', creator: 'VisualAlchemy', price: '1.10', likes: 72, gradient: 'linear-gradient(135deg, #57534e, #1c1917)' },
  { name: 'Liquid Memories', creator: 'Synthia', price: '0.85', likes: 64, gradient: 'radial-gradient(circle, #c4b5fd, #312e81)' },
];

export default function ExplorePage() {
  return (
    <div>
      <div className="explore-header">
        <h1>Explore</h1>
        <p>Discover, collect, and sell extraordinary NFTs from the world&apos;s top creators.</p>
      </div>

      <div className="explore-toolbar">
        <div className="explore-search">
          <input placeholder="Search by name or creator" />
        </div>
        <button className="explore-dropdown">All Collections <ChevronDown /></button>
        <button className="explore-dropdown">All Chains <ChevronDown /></button>
        <button className="explore-dropdown">All Prices <ChevronDown /></button>
        <button className="explore-dropdown">Sort by: Recent <ChevronDown /></button>
        <div className="explore-view-toggle">
          <button className="active"><GridIcon /></button>
          <button><ListIcon /></button>
        </div>
      </div>

      <div className="explore-layout">
        <ExploreFilters />

        <div>
          <div className="explore-grid">
            {demoNFTs.map((nft) => (
              <ExploreNFTCard key={nft.name} nft={nft} />
            ))}
          </div>

          <div className="explore-pagination">
            <span>Showing 1 – 20 of 3,245 results</span>
            <div className="pagination-controls">
              <button>‹</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <span>...</span>
              <button>163</button>
              <button>›</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}