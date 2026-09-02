import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import useWallet from './hooks/useWallet.js';
import useMyNFTs from './hooks/useMyNFTs.js';
import useAuth from './hooks/useAuth.js';
import useGoogleAuth from './hooks/useGoogleAuth.js';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import StatsPage from './pages/StatsPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import AuthPage from './pages/AuthPage.jsx';

function App() {
  const { account, contract, connecting, error, connect } = useWallet();
  const { nfts, loading, refetch } = useMyNFTs(contract, account);
  const auth = useAuth({ account, contract });
  const googleAuth = useGoogleAuth();

  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('nft-theme') === 'light';
  });

  useEffect(() => {
    document.body.classList.toggle('light-theme', isLight);
    localStorage.setItem('nft-theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <div>
          <Topbar
            account={account}
            connecting={connecting}
            error={error}
            onConnect={connect}
            isLight={isLight}
            onToggleTheme={() => setIsLight((v) => !v)}
            auth={auth}
            googleAuth={googleAuth}
          />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreatePage contract={contract} account={account} onMinted={refetch} auth={auth} />} />
              <Route path="/explore" element={<ExplorePage nfts={nfts} loading={loading} />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/auth" element={<AuthPage googleAuth={googleAuth} wallet={{ account, connecting, error, connect }} />} />
            </Routes>
          </main>

          <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="mobile-nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 10 9-7 9 7" />
                  <path d="M5 9.5V21h14V9.5" />
                  <path d="M9 21v-7h6v7" />
                </svg>
              </span>
              <small>Home</small>
            </NavLink>

            <NavLink to="/explore" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="mobile-nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>
              </span>
              <small>Explore</small>
            </NavLink>

            <NavLink to="/create" className={({ isActive }) => `mobile-nav-create ${isActive ? 'active' : ''}`}>
              <span className="mobile-nav-create-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
              <small>Create</small>
            </NavLink>

            <NavLink to="/stats" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="mobile-nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19V10" />
                  <path d="M10 19V5" />
                  <path d="M16 19v-8" />
                  <path d="M22 19V8" />
                </svg>
              </span>
              <small>Stats</small>
            </NavLink>

            <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active' : '')}>
              <span className="mobile-nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="1" />
                  <path d="M12 8v4l3 2" />
                </svg>
              </span>
              <small>More</small>
            </NavLink>
          </nav>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;