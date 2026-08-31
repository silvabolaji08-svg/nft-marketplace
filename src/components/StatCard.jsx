import { LineChart, Line, ResponsiveContainer } from 'recharts';

export default function StatCard({ icon, iconBg, label, value, change, positive, sparkData, sparkColor }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span className="stat-card-icon" style={{ background: iconBg }}>{icon}</span>
        <div>
          <div className="stat-card-label">{label}</div>
        </div>
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-bottom">
        <span className={`stat-card-change ${positive ? 'positive' : 'negative'}`}>
          {positive ? '▲' : '▼'} {change} vs yesterday
        </span>
        <div className="stat-card-spark">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparkData}>
              <Line type="monotone" dataKey="v" stroke={sparkColor} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}