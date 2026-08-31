import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;