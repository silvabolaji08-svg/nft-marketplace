import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { day: 'May 12', volume: 950 },
  { day: 'May 13', volume: 1650 },
  { day: 'May 14', volume: 1200 },
  { day: 'May 15', volume: 2700 },
  { day: 'May 16', volume: 1450 },
  { day: 'May 17', volume: 2650 },
  { day: 'May 18', volume: 2450.78 },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip-value">{payload[0].value.toLocaleString()} ETH</div>
      <div className="chart-tooltip-label">{label}</div>
    </div>
  );
}

export default function VolumeChart() {
  const [range, setRange] = useState('Daily');

  return (
    <div className="panel volume-panel">
      <div className="panel-header">
        <h3>Volume Overview <span className="info-icon">ⓘ</span></h3>
        <div className="range-toggle">
          {['Daily', 'Weekly', 'Monthly'].map((r) => (
            <button key={r} className={range === r ? 'active' : ''} onClick={() => setRange(r)}>{r}</button>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="volumeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c5cfc" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#7c5cfc" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: '#9a9aab', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis
              tickFormatter={(v) => `${v / 1000}K ETH`}
              tick={{ fill: '#9a9aab', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={70}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="volume" stroke="#9b82ff" strokeWidth={2} fill="url(#volumeFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}