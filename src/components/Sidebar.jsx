import { NavLink } from 'react-router-dom';
import {
  HomeIcon, ExploreIcon, CollectionsIcon, ActivityIcon, RankingsIcon, DropsIcon, FavoritesIcon,
  ArtIcon, MusicIcon, PhotographyIcon, GamingIcon, MetaverseIcon, PFPsIcon, SportsIcon, UtilityIcon,
} from './SidebarIcons.jsx';

const navItems = [
  { to: '/', end: true, icon: <HomeIcon />, label: 'Home' },
  { to: '/explore', icon: <ExploreIcon />, label: 'Explore' },
  { to: '/create', icon: <CollectionsIcon />, label: 'Create' },
  { to: '#', icon: <CollectionsIcon />, label: 'Collections' },
  { to: '#', icon: <ActivityIcon />, label: 'Activity' },
  { to: '#', icon: <RankingsIcon />, label: 'Rankings' },
  { to: '#', icon: <DropsIcon />, label: 'Drops' },
  { to: '#', icon: <FavoritesIcon />, label: 'Favorites' },
];

const categories = [
  { icon: <ArtIcon />, label: 'Art' },
  { icon: <MusicIcon />, label: 'Music' },
  { icon: <PhotographyIcon />, label: 'Photography' },
  { icon: <GamingIcon />, label: 'Gaming' },
  { icon: <MetaverseIcon />, label: 'Metaverse' },
  { icon: <PFPsIcon />, label: 'PFPs' },
  { icon: <SportsIcon />, label: 'Sports' },
  { icon: <UtilityIcon />, label: 'Utility' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-icon">◆</span>
        NFTMart
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) =>
          item.to === '#' ? (
            <a key={item.label} href="#">{item.icon}{item.label}</a>
          ) : (
            <NavLink key={item.label} to={item.to} end={item.end} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.icon}{item.label}
            </NavLink>
          )
        )}
      </nav>

      <div>
        <div className="sidebar-section-label">
          <span>Categories</span>
          <a href="#">View all</a>
        </div>
        <div className="sidebar-categories">
          {categories.map((c) => (
            <a key={c.label} href="#">{c.icon}{c.label}</a>
          ))}
        </div>
      </div>

      <div className="sidebar-promo">
        <h4>Create and sell your NFTs</h4>
        <p>Start your NFT journey in a few clicks</p>
        <NavLink to="/create"><button>Create Now →</button></NavLink>
      </div>
    </aside>
  );
}