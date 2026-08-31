import { EthIcon, PolygonIcon, SolanaIcon, BNBIcon } from './ExploreIcons.jsx';

export default function ExploreFilters() {
  return (
    <aside className="explore-filter-panel">
      <div className="filter-header">
        <h3>Filter</h3>
        <button className="filter-clear">Clear all</button>
      </div>

      <div className="filter-group">
        <label className="filter-label">Price range</label>
        <div className="filter-price-row">
          <input placeholder="Min" />
          <span>to</span>
          <input placeholder="Max" />
          <select><option>ETH</option></select>
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Sale type</label>
        <label className="filter-radio"><input type="radio" name="sale" defaultChecked /> Buy Now</label>
        <label className="filter-radio"><input type="radio" name="sale" /> On Auction</label>
        <label className="filter-radio"><input type="radio" name="sale" /> New Listings</label>
      </div>

      <div className="filter-group">
        <label className="filter-label">Chains</label>
        <label className="filter-check"><input type="checkbox" defaultChecked /> <EthIcon /> Ethereum</label>
        <label className="filter-check"><input type="checkbox" /> <PolygonIcon /> Polygon</label>
        <label className="filter-check"><input type="checkbox" /> <SolanaIcon /> Solana</label>
        <label className="filter-check"><input type="checkbox" /> <BNBIcon /> BNB Chain</label>
        <button className="filter-showmore">Show more</button>
      </div>

      <div className="filter-group">
        <div className="filter-header">
          <label className="filter-label">Collection</label>
        </div>
        <input className="filter-collection-search" placeholder="Search collection" />
      </div>
    </aside>
  );
}