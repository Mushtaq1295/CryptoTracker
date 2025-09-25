import React from 'react';
import { ExternalLink, Clock, Globe } from 'lucide-react';
import { formatNewsDate } from '../services/newsApi';

const NewsList = ({ news, loading, error }) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2 mb-4"></div>
            <div className="h-3 bg-slate-700 rounded w-full mb-2"></div>
            <div className="h-3 bg-slate-700 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 text-center">
        <p className="text-red-400 font-medium mb-2">Failed to load news</p>
        <p className="text-slate-400 text-sm">{error}</p>
      </div>
    );
  }

  if (!news || news.length === 0) {
    return (
      <div className="bg-slate-800/50 rounded-lg p-6 text-center">
        <p className="text-slate-400">No news available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {news.map((article, index) => (
        <article
          key={article.id || index}
          className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
        >
          {/* Article Header */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-white leading-tight pr-4">
              {article.title}
            </h3>
            <a
              href={article.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Article Summary */}
          {article.summary && (
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              {article.summary}
            </p>
          )}

          {/* Article Meta */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Globe className="h-3 w-3 mr-1" />
                <span>{article.domain || 'cryptonews.com'}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>{formatNewsDate(article.published_at)}</span>
              </div>
            </div>
            {article.kind && (
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                {article.kind}
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsList;