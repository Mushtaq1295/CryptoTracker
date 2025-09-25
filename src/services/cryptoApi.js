import axios from 'axios';

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

// Get current prices for BTC and ETH
export const getCryptoPrices = async () => {
  try {
    const response = await axios.get(
      `${COINGECKO_BASE_URL}/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw new Error('Failed to fetch cryptocurrency prices');
  }
};

// Get trending cryptocurrencies
export const getTrendingCryptos = async () => {
  try {
    const response = await axios.get(`${COINGECKO_BASE_URL}/search/trending`);
    return response.data.coins.slice(0, 5); // Get top 5 trending
  } catch (error) {
    console.error('Error fetching trending cryptos:', error);
    throw new Error('Failed to fetch trending cryptocurrencies');
  }
};

// Get market data for additional cryptocurrencies
export const getMarketData = async (limit = 10) => {
  try {
    const response = await axios.get(
      `${COINGECKO_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw new Error('Failed to fetch market data');
  }
};