const sales = [
  { rank: 1, name: 'The Eternal Dreamer', creator: 'DreamWeaver', price: '45.50 ETH', time: '2h ago', color: '#f472b6' },
  { rank: 2, name: 'Cosmic Ascension', creator: 'Starborn', price: '32.00 ETH', time: '4h ago', color: '#8b5cf6' },
  { rank: 3, name: 'Neon Mirage', creator: 'VisualAlchemy', price: '28.75 ETH', time: '6h ago', color: '#06b6d4' },
  { rank: 4, name: 'Quantum Echo', creator: 'Synthwave', price: '24.30 ETH', time: '9h ago', color: '#a855f7' },
  { rank: 5, name: 'Celestial Bloom', creator: 'AuroraArt', price: '22.10 ETH', time: '11h ago', color: '#f59e0b' },
];

export default function TopSales() {
  return (
    <div className="panel list-panel">
      <div className="panel-header">
        <h3>Top Sales <span className="info-icon">ⓘ</span></h3>
        <a href="#" className="view-all">View all</a>
      </div>
      <div className="ranked-list">
        {sales.map((s) => (
          <div key={s.rank} className="ranked-row">
            <span className="rank-number">{s.rank}</span>
            <span className="rank-avatar" style={{ background: s.color }} />
            <div className="rank-info">
              <div className="rank-name">{s.name}</div>
              <div className="rank-sub">@{s.creator}</div>
            </div>
            <div className="rank-value">
              <div className="rank-amount">{s.price}</div>
              <div className="rank-change muted">{s.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}