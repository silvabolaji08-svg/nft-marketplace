import { Link } from 'react-router-dom';
import LiveHeroImage from './LiveHeroImage.jsx';

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        

        <h1>
          Discover, Collect,
          <br />
          and Sell
          <br />
          Extraordinary <span className="accent">NFTs</span>
        </h1>

        <p>
          Explore unique digital assets from top creators
          around the world.
        </p>

        <div className="hero-actions">

          <Link to="/explore" className="btn-primary">
            Explore Now <span>→</span>
          </Link>

          <Link to="/create" className="btn-outline">
            Create NFT
          </Link>

        </div>

        

      </div>

      <div className="hero-image-wrap">
        <LiveHeroImage />
      </div>

    </section>
  );
}