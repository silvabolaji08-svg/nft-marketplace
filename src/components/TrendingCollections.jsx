import cyberPunks from '../assets/public/featured/CyberPunks.png';
import dreamscape from '../assets/public/featured/Dreamscape.png';
import blossomGirls from '../assets/public/featured/Blossom Girls.png';
import neonCity from '../assets/public/featured/NeonCity.png';
import pixelPals from '../assets/public/featured/Pixel Pals.png';

const collections = [
  {
    name: 'CyberPunks',
    creator: 'ArtBlocks',
    floor: '2.45',
    volume: '12.6K',
    image: cyberPunks
  },
  {
    name: 'Dreamscape',
    creator: 'Dream Labs',
    floor: '1.89',
    volume: '9.8K',
    image: dreamscape
  },
  {
    name: 'Blossom Girls',
    creator: 'Blossom',
    floor: '1.25',
    volume: '7.3K',
    image: blossomGirls
  },
  {
    name: 'Neon City',
    creator: 'MetaWorld',
    floor: '0.95',
    volume: '5.7K',
    image: neonCity
  },
  {
    name: 'Pixel Pals',
    creator: 'Pixel Studio',
    floor: '0.75',
    volume: '4.3K',
    image: pixelPals
  }
];

export default function TrendingCollections() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Trending Collections</h2>
        <a href="#" className="view-all">View all</a>
      </div>

      <div className="collections-grid">
        {collections.map((c) => (
          <div key={c.name} className="collection-card">
            <div className="collection-image">
              <img src={c.image} alt={c.name} />
            </div>
            <div className="collection-info">
              <h3>{c.name} <span className="verified">✓</span></h3>
              <p className="collection-creator">by {c.creator}</p>
              <div className="collection-stats">
                <div>
                  <span className="stat-label">Floor</span>
                  <span className="stat-value">◆ {c.floor}</span>
                </div>
                <div>
                  <span className="stat-label">Volume</span>
                  <span className="stat-value">{c.volume} ETH</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}