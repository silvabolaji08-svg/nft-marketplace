import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { NewUsersIcon, ActiveUsersIcon, ListingsIcon, SalesIcon } from './StatsIcons.jsx';

const spark = (seed) => Array.from({ length: 8 }, (_, i) => ({ v: seed + Math.sin(i + seed) * 8 + i * 2 }));

const activity = [
  { icon: <NewUsersIcon />, color: '#a78bfa', bg: 'rgba(139,92,246,0.15)', label: 'New Users', value: '+2,874', change: '7.6%', data: spark(10) },
  { icon: <ActiveUsersIcon />, color: '#60a5fa', bg: 'rgba(59,130,246,0.15)', label: 'Active Users', value: '+18,392', change: '9.8%', data: spark(20) },
  { icon: <ListingsIcon />, color: '#4ade80', bg: 'rgba(34,197,94,0.15)', label: 'New Listings', value: '+6,721', change: '5.3%', data: spark(15) },
  { icon: <SalesIcon />, color: '#fb923c', bg: 'rgba(249,115,22,0.15)', label: 'Sales', value: '+8,742', change: '8.2%', data: spark(25) },
];

export default function UserActivity() {
  return (
    <div className="panel list-panel">
      <div className="panel-header">
        <h3>User Activity <span className="info-icon">ⓘ</span></h3>
        <a href="#" className="view-all">View all</a>
      </div>
      <div className="activity-list">
        {activity.map((a) => (
          <div key={a.label} className="activity-row">
            <span className="activity-icon" style={{ background: a.bg, color: a.color }}>{a.icon}</span>
            <div className="activity-info">
              <div className="activity-label">{a.label}</div>
              <div className="activity-value">{a.value}</div>
              <div className="activity-change positive">▲ {a.change}</div>
            </div>
            <div className="activity-spark">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={a.data}>
                  <Line type="monotone" dataKey="v" stroke={a.color} strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}