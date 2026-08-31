import { useRef } from 'react';
import nftImage from '../assets/nft-hero.png'

export default function LiveHeroImage() {
  const wrapRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    wrapRef.current.style.setProperty('--parallax-x', `${x * 20}px`);
    wrapRef.current.style.setProperty('--parallax-y', `${y * 20}px`);
  };

  const handleMouseLeave = () => {
    wrapRef.current.style.setProperty('--parallax-x', '0px');
    wrapRef.current.style.setProperty('--parallax-y', '0px');
  };

  return (
    <div
  ref={wrapRef}
  className="hero-image-wrap live-hero"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <div className="hero-glow-pulse" />
  <div className="hero-parallax-layer">
    <img src={nftImage} alt="Featured NFT artwork" className="hero-kenburns" />
  </div>
  <span className="hero-particle p1">✦</span>
  <span className="hero-particle p2">✦</span>
  <span className="hero-particle p3">✦</span>
</div>
  );
}