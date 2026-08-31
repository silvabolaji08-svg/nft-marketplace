import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const categories = [
  { name: 'Art', value: 48.2, color: '#8b5cf6' },
  { name: 'Gaming', value: 18.7, color: '#3b82f6' },
  { name: 'PFPs', value: 12.4, color: '#22c55e' },
  { name: 'Metaverse', value: 9.6, color: '#f59e0b' },
  { name: 'Music', value: 7.1, color: '#ec4899' },
  { name: 'Others', value: 4.0, color: '#6b7280' },
];

export default function CategoryDonut() {
  return (
    <div className="panel categories-panel">
      <div className="panel-header">
        <h3>Top Categories by Volume</h3>
      </div>

      <div className="donut-row">
        <div className="donut-chart-wrap">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={categories} dataKey="value" innerRadius={62} outerRadius={95} paddingAngle={2} stroke="none">
                {categories.map((c) => (
                  <Cell key={c.name} fill={c.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-center">
            <div className="donut-center-value">2,450.78</div>
            <div className="donut-center-label">ETH Total</div>
          </div>
        </div>

        <div className="category-legend">
          {categories.map((c) => (
            <div key={c.name} className="category-legend-row">
              <span className="legend-dot" style={{ background: c.color }} />
              <span className="legend-name">{c.name}</span>
              <span className="legend-value">{c.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}