import axios from 'axios';

// Mock news data as fallback
const mockNewsData = [
  {
    id: 1,
    title: "Bitcoin Reaches New All-Time High Amid Institutional Adoption",
    summary: "Major financial institutions continue to embrace Bitcoin as a store of value, driving unprecedented demand.",
    published_at: "2025-01-27T10:30:00Z",
    domain: "cryptonews.com",
    slug: "bitcoin-reaches-new-ath",
    url: "#",
    kind: "news"
  },
  {
    id: 2,
    title: "Ethereum 2.0 Staking Rewards Show Strong Growth",
    summary: "Ethereum's proof-of-stake mechanism continues to attract validators with competitive rewards.",
    published_at: "2025-01-27T08:15:00Z",
    domain: "ethernews.io",
    slug: "ethereum-staking-growth",
    url: "#",
    kind: "news"
  },
  {
    id: 3,
    title: "Regulatory Clarity Boosts Cryptocurrency Market Confidence",
    summary: "New regulatory framework provides clear guidelines for cryptocurrency operations and trading.",
    published_at: "2025-01-27T06:45:00Z",
    domain: "blockchaintoday.com",
    slug: "regulatory-clarity-crypto",
    url: "#",
    kind: "news"
  },
  {
    id: 4,
    title: "DeFi Protocols See Record Trading Volume",
    summary: "Decentralized finance platforms experience surge in activity as yield farming opportunities expand.",
    published_at: "2025-01-26T18:20:00Z",
    domain: "defiwatch.net",
    slug: "defi-record-volume",
    url: "#",
    kind: "news"
  },
  {
    id: 5,
    title: "Central Bank Digital Currencies Gain Momentum Globally",
    summary: "Multiple countries accelerate CBDC development programs amid growing digital payment adoption.",
    published_at: "2025-01-26T14:10:00Z",
    domain: "cbdcnews.org",
    slug: "cbdc-global-momentum",
    url: "#",
    kind: "news"
  }
];

// CryptoPanic API (free tier available)
const CRYPTOPANIC_BASE_URL = 'https://cryptopanic.com/api/v1/posts/';

export const getCryptoNews = async () => {
  try {
    // Try to fetch from CryptoPanic API (you'll need to get a free API key)
    // For demo purposes, we'll use mock data
    // Uncomment and add your API key when ready
    /*
    const response = await axios.get(
      `${CRYPTOPANIC_BASE_URL}?auth_token=YOUR_API_KEY&public=true&kind=news&filter=rising`
    );
    return response.data.results;
    */
    
    // Return mock data for demo
    return mockNewsData;
  } catch (error) {
    console.error('Error fetching crypto news:', error);
    // Return mock data as fallback
    return mockNewsData;
  }
};

// Format date for display
export const formatNewsDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffHours < 1) {
    return 'Just now';
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else if (diffDays < 7) {
    return `${diffDays}d ago`;
  } else {
    return date.toLocaleDateString();
  }
};