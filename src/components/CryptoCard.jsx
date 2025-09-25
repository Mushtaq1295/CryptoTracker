import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const CryptoCard = ({ crypto, coinId }) => {
  if (!crypto) return null;

  const priceChange24h = crypto.usd_24h_change || 0;
  const isPositive = priceChange24h >= 0;
  const price = crypto.usd || 0;
  const marketCap = crypto.usd_market_cap || 0;
  const volume = crypto.usd_24h_vol || 0;

  // Format large numbers
  const formatNumber = (num) => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
  };

  // Get crypto name and symbol
  const getCryptoInfo = (id) => {
    switch (id) {
      case 'bitcoin':
        return { name: 'Bitcoin', symbol: 'BTC', logo: '₿' };
      case 'ethereum':
        return { name: 'Ethereum', symbol: 'ETH', logo: 'Ξ' };
      default:
        return { name: id, symbol: id.toUpperCase(), logo: '₿' };
    }
  };

  const { name, symbol, logo } = getCryptoInfo(coinId);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {logo}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <p className="text-slate-400 text-sm">{symbol}</p>
          </div>
        </div>
        <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1" />
          )}
          {Math.abs(priceChange24h).toFixed(2)}%
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <div className="flex items-center">
          <DollarSign className="h-5 w-5 text-slate-400 mr-1" />
          <span className="text-3xl font-bold text-white">
            {price.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </span>
        </div>
        <div className={`text-sm mt-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '+' : ''}${Math.abs(price * (priceChange24h / 100)).toFixed(2)} (24h)
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/50">
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Market Cap</p>
          <p className="text-white font-semibold">${formatNumber(marketCap)}</p>
        </div>
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">24h Volume</p>
          <p className="text-white font-semibold">${formatNumber(volume)}</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;