import StatCard from '../components/StatCard.jsx';
import VolumeChart from '../components/VolumeChart.jsx';
import CategoryDonut from '../components/CategoryDonut.jsx';
import TopCollections from '../components/TopCollections.jsx';
import TopSales from '../components/TopSales.jsx';
import UserActivity from '../components/UserActivity.jsx';
import { DiamondStatIcon, BagIcon, UsersStatIcon, CoinsIcon, CalendarIcon, ChevronDownSmall } from '../components/StatsIcons.jsx';

const spark = (seed, up = true) =>
  Array.from({ length: 8 }, (_, i) => ({ v: seed + (up ? i * 3 : -i * 2) + Math.sin(i) * 5 }));

export default function StatsPage() {
  return (
    <div>
      <div className="stats-header">
        <div>
          <h1>Marketplace Stats</h1>
          <p>Real-time overview of the NFT marketplace.</p>
        </div>
        <button className="stats-range-btn"><CalendarIcon /> 24h <ChevronDownSmall /></button>
      </div>

      <div className="stat-cards-row">
        <StatCard icon={<DiamondStatIcon />} iconBg="rgba(139,92,246,0.15)" label="Total Volume" value="2,450.78 ETH" change="12.45%" positive sparkData={spark(10)} sparkColor="#a78bfa" />
        <StatCard icon={<BagIcon />} iconBg="rgba(59,130,246,0.15)" label="Total Sales" value="8,742" change="8.21%" positive sparkData={spark(20)} sparkColor="#60a5fa" />
        <StatCard icon={<UsersStatIcon />} iconBg="rgba(34,197,94,0.15)" label="Total Users" value="152,890" change="6.12%" positive sparkData={spark(15)} sparkColor="#4ade80" />
        <StatCard icon={<CoinsIcon />} iconBg="rgba(249,115,22,0.15)" label="Floor Price (Avg.)" value="0.85 ETH" change="2.35%" positive={false} sparkData={spark(20, false)} sparkColor="#fb923c" />
      </div>

      <div className="stats-mid-row">
        <VolumeChart />
        <CategoryDonut />
      </div>

      <div className="stats-bottom-row">
        <TopCollections />
        <TopSales />
        <UserActivity />
      </div>
    </div>
  );
}