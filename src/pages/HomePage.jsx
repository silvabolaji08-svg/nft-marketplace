import Hero from '../components/Hero.jsx';
import TrendingCollections from '../components/TrendingCollections.jsx';
import FeaturedNFTs from '../components/FeaturedNFTs.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrendingCollections />
      <FeaturedNFTs />
    </>
  );
}