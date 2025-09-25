import React from 'react';
import { Shield, Zap, Globe, TrendingUp, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Real-time Data",
      description: "Live cryptocurrency prices with automatic updates every minute."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-400" />,
      title: "Global Coverage",
      description: "Track major cryptocurrencies and get worldwide market insights."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-400" />,
      title: "Market Trends",
      description: "Stay informed with trending cryptocurrencies and market movements."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Community Focused",
      description: "Built for crypto enthusiasts by crypto enthusiasts."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-400" />,
      title: "Reliable Sources",
      description: "Data sourced from trusted APIs like CoinGecko and CryptoPanic."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-400" />,
      title: "Always Updated",
      description: "Fresh news and price updates to keep you ahead of the market."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Frontend Developer",
      description: "Passionate about creating beautiful and functional user interfaces."
    },
    {
      name: "Sarah Johnson",
      role: "Backend Developer", 
      description: "Expert in API integration and data management systems."
    },
    {
      name: "Mike Rodriguez",
      role: "UI/UX Designer",
      description: "Focused on creating intuitive and engaging user experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">CryptoTracker</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive platform for tracking cryptocurrency prices, market trends, and staying updated 
            with the latest news in the digital asset space.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Our Mission</h2>
          <p className="text-slate-300 text-lg text-center leading-relaxed">
            To democratize access to cryptocurrency market data and news, empowering users to make 
            informed decisions in the rapidly evolving world of digital assets. We believe that 
            everyone deserves access to reliable, real-time crypto information.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose CryptoTracker?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Built With Modern Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• React.js with Hooks</li>
                <li>• TailwindCSS for styling</li>
                <li>• React Router for navigation</li>
                <li>• Lucide React for icons</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">APIs & Data</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• CoinGecko API for price data</li>
                <li>• CryptoPanic for news feeds</li>
                <li>• Axios for HTTP requests</li>
                <li>• Real-time data updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-6 text-center hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-slate-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-300 mb-6">
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:contact@cryptotracker.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;