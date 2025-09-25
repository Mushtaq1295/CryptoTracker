import React, { useState, useEffect } from 'react';
import { RefreshCw, Newspaper } from 'lucide-react';
import NewsList from '../components/NewsList';
import { getCryptoNews } from '../services/newsApi';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchNews = async () => {
    try {
      setError(null);
      setLoading(true);
      const newsData = await getCryptoNews();
      setNews(newsData);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchNews();
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Newspaper className="h-8 w-8 text-blue-400 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-white">Crypto News</h1>
              <p className="text-slate-400">Stay updated with the latest cryptocurrency news and trends</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
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

        {/* News Feed */}
        <div className="bg-slate-800/20 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
          <NewsList news={news} loading={loading} error={error} />
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 p-4">
          <p className="text-slate-400 text-sm text-center">
            <strong className="text-slate-300">Disclaimer:</strong> News content is for informational purposes only. 
            Always do your own research before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;