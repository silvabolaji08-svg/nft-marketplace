const collections = [
  { rank: 1, name: 'Bored Ape Yacht Club', floor: '20.4 ETH', volume: '598.40 ETH', change: '15.3%', color: '#d97706' },
  { rank: 2, name: 'Azuki', floor: '1.19 ETH', volume: '362.18 ETH', change: '10.7%', color: '#ef4444' },
  { rank: 3, name: 'Pudgy Penguins', floor: '0.85 ETH', volume: '248.53 ETH', change: '8.9%', color: '#38bdf8' },
  { rank: 4, name: 'Mutant Ape Yacht Club', floor: '3.25 ETH', volume: '186.64 ETH', change: '6.2%', color: '#facc15' },
  { rank: 5, name: 'Doodles', floor: '0.74 ETH', volume: '132.08 ETH', change: '4.8%', color: '#f472b6' },
];

export default function TopCollections() {
  return (
    <div className="panel list-panel">
      <div className="panel-header">
        <h3>Top Collections <span className="info-icon">ⓘ</span></h3>
        <a href="#" className="view-all">View all</a>
      </div>
      <div className="ranked-list">
        {collections.map((c) => (
          <div key={c.rank} className="ranked-row">
            <span className="rank-number">{c.rank}</span>
            <span className="rank-avatar" style={{ background: c.color }} />
            <div className="rank-info">
              <div className="rank-name">{c.name} <span className="verified">✓</span></div>
              <div className="rank-sub">Floor: {c.floor}</div>
            </div>
            <div className="rank-value">
              <div className="rank-amount">{c.volume}</div>
              <div className="rank-change positive">▲ {c.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}