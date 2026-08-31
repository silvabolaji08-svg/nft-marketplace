import CyberBot from '../assets/public/featured/CyberBot.png';
import ape from '../assets/public/featured/ape.png';
import Nature from '../assets/public/featured/Nature.png';
import Dreamhut from '../assets/public/featured/Dreamhut.png';
import CyberWorld from '../assets/public/featured/CyberWorld.png';

const featured = [
  { name: 'Cyber Punks', image: CyberBot },
  { name: 'Golden Ape', image: ape },
  { name: 'Nature', image: Nature },
  { name: 'HUT', image: Dreamhut },
  { name: 'City', image: CyberWorld },
];

export default function FeaturedNFTs() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Featured NFTs</h2>

        <div className="section-filters">
          <select>
            <option>All Categories</option>
          </select>

          <select>
            <option>Sort by: Latest</option>
          </select>
        </div>
      </div>

      <div className="featured-grid">
        {featured.map((n) => (
          <div key={n.name} className="featured-card">
            <img src={n.image} alt={n.name} />

            <button className="favorite-btn">
              ♡
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}