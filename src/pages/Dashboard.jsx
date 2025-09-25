import React, { useState, useEffect } from 'react';
import { RefreshCw, AlertCircle, TrendingUp } from 'lucide-react';
import CryptoCard from '../components/CryptoCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { getCryptoPrices, getTrendingCryptos } from '../services/cryptoApi';

const Dashboard = () => {
  const [cryptoData, setCryptoData] = useState({});
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchCryptoData = async () => {
    try {
      setError(null);
      const [prices, trending] = await Promise.all([
        getCryptoPrices(),
        getTrendingCryptos().catch(() => []) // Don't fail if trending fails
      ]);
      
      setCryptoData(prices);
      setTrendingData(trending);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    fetchCryptoData();
  };

  useEffect(() => {
    fetchCryptoData();

    // Set up auto-refresh every minute
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading && !lastUpdated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-4" />
          <p className="text-slate-400">Loading cryptocurrency data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Cryptocurrency Dashboard
            </h1>
            <p className="text-slate-400">
              Real-time prices and market data for your favorite cryptocurrencies
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {lastUpdated && (
              <p className="text-sm text-slate-400">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            )}
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg transition-colors"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 flex items-center">
            <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
            <div>
              <p className="text-red-400 font-medium">Failed to load data</p>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Main Crypto Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CryptoCard crypto={cryptoData.bitcoin} coinId="bitcoin" />
          <CryptoCard crypto={cryptoData.ethereum} coinId="ethereum" />
        </div>

        {/* Trending Section */}
        {trendingData.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-orange-400 mr-3" />
              <h2 className="text-xl font-semibold text-white">Trending Now</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {trendingData.map((coin) => (
                <div
                  key={coin.item.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-4 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src={coin.item.thumb}
                        alt={coin.item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23374151"/><text x="16" y="20" text-anchor="middle" fill="white" font-size="12">?</text></svg>';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm">{coin.item.name}</h3>
                      <p className="text-slate-400 text-xs">{coin.item.symbol}</p>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Rank #{coin.item.market_cap_rank}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Market Summary */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Market Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-slate-400 text-sm">Total Market Cap</p>
              <p className="text-2xl font-bold text-white">
                ${((cryptoData.bitcoin?.usd_market_cap || 0) + (cryptoData.ethereum?.usd_market_cap || 0)).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">24h Volume</p>
              <p className="text-2xl font-bold text-white">
                ${((cryptoData.bitcoin?.usd_24h_vol || 0) + (cryptoData.ethereum?.usd_24h_vol || 0)).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Markets</p>
              <p className="text-2xl font-bold text-green-400">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;