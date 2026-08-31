import {
  BasicsIcon, BlockchainIcon, ShieldIcon, TagIcon, TrendUpIcon,
  CreateIcon, GuideIcon, CommunityIcon, SupportIcon, ArrowRight,
  HelpCenterIcon, ContactIcon, ForumIcon, FlagIcon, MailIcon2,
} from '../components/ResourceIcons.jsx';
import ResourceCard from '../components/ResourceCard.jsx';

const popularTopics = [
  { icon: <BasicsIcon />, name: 'NFT Basics', count: 12 },
  { icon: <BlockchainIcon />, name: 'Blockchain', count: 8 },
  { icon: <ShieldIcon />, name: 'Web3 Security', count: 6 },
  { icon: <TagIcon />, name: 'Marketplace Tips', count: 10 },
  { icon: <TrendUpIcon />, name: 'Creator Growth', count: 7 },
];

const featuredArticles = [
  { badge: 'NFT Basics', badgeColor: '#60a5fa', gradient: 'linear-gradient(135deg,#1e293b,#0f172a)', title: 'What Are NFTs?', desc: 'A beginner-friendly guide to non-fungible tokens.', date: 'May 18, 2024', readTime: '6 min read', icon: '◆' },
  { badge: 'Blockchain', badgeColor: '#4ade80', gradient: 'linear-gradient(135deg,#1e2a1e,#0f1a12)', title: 'How Blockchain Powers NFTs', desc: 'Understanding the technology behind NFTs.', date: 'May 14, 2024', readTime: '8 min read', icon: '⛓' },
  { badge: 'Gaming', badgeColor: '#f472b6', gradient: 'linear-gradient(135deg,#2a1e2a,#170f1a)', title: 'NFTs in Gaming', desc: 'How play-to-earn is changing the future.', date: 'May 14, 2024', readTime: '7 min read', icon: '🎮' },
  { badge: 'Collections', badgeColor: '#fbbf24', gradient: 'linear-gradient(135deg,#2a241e,#1a150f)', title: 'Grow Your NFT Collection', desc: 'Tips for creators to build value and community.', date: 'May 13, 2024', readTime: '6 min read', icon: '👑' },
];

const trendingGuides = [
  { gradient: 'radial-gradient(circle,#3b2a1e,#0f0f12)', title: 'NFT Creation Tips', desc: 'Step-by-step guide to minting your first NFT.', icon: '💡' },
  { gradient: 'radial-gradient(circle,#1e2a3b,#0f0f12)', title: 'Web3 for Beginners', desc: 'Start your journey into the decentralized web.', icon: '🚀' },
  { gradient: 'radial-gradient(circle,#2a1e3b,#0f0f12)', title: 'NFT Security', desc: 'Keep your assets safe in the Web3 world.', icon: '🛡' },
  { gradient: 'radial-gradient(circle,#3b2a1e,#0f0f12)', title: 'Understanding Gas Fees', desc: 'Everything you need to know about blockchain fees.', icon: '🪙' },
];

const topics = ['All Topics', 'Getting Started', 'NFT Creation', 'Buying & Selling', 'Wallets & Security', 'Blockchain', 'Web3', 'Marketplace', 'Community'];

const latestResources = [
  { tag: 'Security', tagColor: '#f87171', title: 'How to Spot NFT Scams', desc: 'Protect yourself and your assets from common scams in the NFT space.', date: 'May 20, 2024', readTime: '5 min read', icon: '🔺' },
  { tag: 'Marketplace', tagColor: '#60a5fa', title: 'How NFT Marketplaces Work', desc: 'A deep dive into how NFT marketplaces operate.', date: 'May 19, 2024', readTime: '7 min read', icon: '🔗' },
  { tag: 'Web3', tagColor: '#4ade80', title: 'The Future of NFTs in Web3', desc: 'Exploring the next wave of NFT innovation and adoption.', date: 'May 18, 2024', readTime: '6 min read', icon: '◆' },
  { tag: 'Gallery', tagColor: '#c084fc', title: 'Best Wallets for NFTs', desc: 'Top crypto wallets to store and showcase your NFTs securely.', date: 'May 17, 2024', readTime: '5 min read', icon: '👛' },
];

const helpLinks = [
  { icon: <HelpCenterIcon />, title: 'Help Center', desc: 'Find answers to common questions' },
  { icon: <ContactIcon />, title: 'Contact Support', desc: "Get in touch with our team" },
  { icon: <ForumIcon />, title: 'Community Forum', desc: 'Join the discussion with the community' },
  { icon: <FlagIcon />, title: 'Report an Issue', desc: 'Report bugs or security concerns' },
];

export default function ResourcesPage() {
  return (
    <div>
      <div className="resources-header">
        <h1>Resources</h1>
        <p>Learn, create, and stay ahead in the NFT world.</p>
      </div>

      <div className="resources-layout">
        <div>
          {/* Hero banner */}
          <div className="resources-hero">
            <div className="resources-hero-text">
              <h2>The Ultimate NFT Guide</h2>
              <p>Everything you need to know about NFTs, blockchain, and the Web3 universe.</p>
              <button className="btn-primary">Read the Guide</button>
            </div>
            <div className="resources-hero-art" />
          </div>

          {/* Featured Articles */}
          <div className="section-header">
            <h2>Featured Articles</h2>
            <a href="#" className="view-all">View all {'\u2192'}</a>
          </div>
          <div className="resources-grid-4">
            {featuredArticles.map((a) => <ResourceCard key={a.title} {...a} />)}
          </div>

          {/* Trending Guides */}
          <div className="section-header">
            <h2>Trending Guides</h2>
            <a href="#" className="view-all">View all {'\u2192'}</a>
          </div>
          <div className="trending-guides-row">
            <div className="resources-grid-4">
              {trendingGuides.map((g) => (
                <div key={g.title} className="guide-card">
                  <div className="guide-card-art" style={{ background: g.gradient }}>
                    <span className="guide-card-icon">{g.icon}</span>
                  </div>
                  <h4>{g.title}</h4>
                  <p>{g.desc}</p>
                  <a href="#" className="guide-readmore">Read more {'\u2192'}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Topic filter pills */}
          <div className="topic-pills">
            {topics.map((t, i) => (
              <button key={t} className={i === 0 ? 'active' : ''}>{t}</button>
            ))}
          </div>

          {/* Two-column bottom section */}
          <div className="resources-bottom-grid">
            <div>
              <div className="section-header">
                <h2>Latest Resources</h2>
                <a href="#" className="view-all">View all {'\u2192'}</a>
              </div>
              <div className="resource-list">
                {latestResources.map((r) => (
                  <div key={r.title} className="resource-list-item">
                    <span className="resource-list-icon">{r.icon}</span>
                    <div className="resource-list-info">
                      <h4>{r.title}</h4>
                      <p>{r.desc}</p>
                      <div className="resource-list-meta">
                        <span className="resource-list-tag" style={{ color: r.tagColor }}>{r.tag}</span>
                        <span>{r.date}</span>
                        <span>{r.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="section-header">
                <h2>Help &amp; Community</h2>
              </div>
              <div className="help-list">
                {helpLinks.map((h) => (
                  <a key={h.title} href="#" className="help-list-item">
                    <span className="help-list-icon">{h.icon}</span>
                    <div className="help-list-info">
                      <h4>{h.title}</h4>
                      <p>{h.desc}</p>
                    </div>
                    <ArrowRight />
                  </a>
                ))}
              </div>

              <div className="newsletter-box">
                <div className="newsletter-icon"><MailIcon2 /></div>
                <h4>Stay Updated</h4>
                <p>Subscribe to the latest guides, tips, and NFT news in your inbox.</p>
                <div className="newsletter-form">
                  <input placeholder="Your email address" />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <aside>
          <div className="panel resources-side-panel">
            <div className="panel-header">
              <h3>Popular Topics</h3>
              <a href="#" className="view-all">View all</a>
            </div>
            <div className="topic-list">
              {popularTopics.map((t) => (
                <div key={t.name} className="topic-list-item">
                  <span className="topic-list-icon">{t.icon}</span>
                  <span className="topic-list-name">{t.name}</span>
                  <span className="topic-list-count">{t.count} articles</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel resources-side-panel">
            <div className="panel-header">
              <h3>Quick Links</h3>
            </div>
            <div className="quicklink-list">
              <a href="#" className="quicklink-item"><CreateIcon /> Create NFT <ArrowRight /></a>
              <a href="#" className="quicklink-item"><GuideIcon /> Marketplace Guide <ArrowRight /></a>
              <a href="#" className="quicklink-item"><CommunityIcon /> Community <ArrowRight /></a>
              <a href="#" className="quicklink-item"><SupportIcon /> Support <ArrowRight /></a>
            </div>
          </div>

          <div className="build-collect-promo">
            <h4>Build. Collect. Earn.</h4>
            <p>The future is Web3. Be part of it.</p>
            <button className="btn-primary">Explore NFTMart</button>
            <span className="promo-rocket">🚀</span>
          </div>
        </aside>
      </div>
    </div>
  );
}