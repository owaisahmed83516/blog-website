import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiUser, FiArrowRight, FiTag } from 'react-icons/fi';

const TechNews = () => {
  const [activeTab, setActiveTab] = useState('All');

  const subCategories = ['All', 'Hardware', 'Software', 'AI & Cloud', 'Mobile'];

  const allNewsPosts = [
    {
      id: 1,
      title: 'Breakthroughs in quantum processing units redefine cryptography standards',
      excerpt: 'Researchers unveil a new architectural breakthrough in QPUs that significantly reduces error rates and accelerates secure data encryption processes.',
      category: 'Hardware',
      author: 'Ahmad Khan',
      date: 'Apr 19, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      link: '/post/10'
    },
    {
      id: 2,
      title: 'The evolution of autonomous code generation in modern software engineering',
      excerpt: 'How next-generation developer tooling is moving past simple autocomplete toward self-testing, end-to-end software feature deployment.',
      category: 'Software',
      author: 'Sara Ahmed',
      date: 'Apr 18, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      link: '/post/11'
    },
    {
      id: 3,
      title: 'Next-gen neural chips promise ultra-low power consumption for edge AI',
      excerpt: 'New silicon designs enable complex machine learning inference directly on IoT devices without relying heavily on cloud infrastructure.',
      category: 'AI & Cloud',
      author: 'Zain Ul Abideen',
      date: 'Apr 17, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      link: '/post/12'
    },
    {
      id: 4,
      title: 'Foldable displays and solid-state batteries lead smartphone innovation trends',
      excerpt: 'A comprehensive look at upcoming hardware manufacturing shifts aimed at improving daily durability and battery lifespan.',
      category: 'Mobile',
      author: 'Ayesha Malik',
      date: 'Apr 16, 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop',
      link: '/post/13'
    }
  ];

  const sidebarPosts = [
    {
      title: "Global Semiconductor Supply Chains Shift Toward Regional Hubs",
      category: "HARDWARE",
      link: "/post/s1",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop"
    },
    {
      title: "Open-Source LLMs Catch Up to Proprietary Tech in 2026 Benchmarks",
      category: "AI & CLOUD",
      link: "/post/s2",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=150&h=150&fit=crop"
    },
    {
      title: "Next-Gen Operating Systems Focus Entirely on Privacy Controls",
      category: "SOFTWARE",
      link: "/post/s3",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&h=150&fit=crop"
    }
  ];

  const filteredPosts = activeTab === 'All' 
    ? allNewsPosts 
    : allNewsPosts.filter(post => post.category === activeTab);

  return (
    <div 
      className="min-h-screen bg-white text-zinc-900 pb-20 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      {/* Category Header Title & Filter Section */}
      <div className="border-b border-gray-200 py-8 px-4 md:px-12 mb-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-[#0D7AD8] font-bold text-xs uppercase tracking-widest mb-2">
            <FiTag className="w-4 h-4" />
            <span>Global Coverage</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight mb-6 border-l-4 border-[#0D7AD8] pl-4">
            Tech News & Insights
          </h1>

          {/* Sub-Category Filter Bar */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {subCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-1.5 rounded text-xs md:text-sm font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === cat
                    ? 'bg-[#0D7AD8] text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Main Articles Grid (8 Columns) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div 
                  key={post.id}
                  className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 justify-between"
                >
                  <div>
                    <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-3 mb-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-zinc-500 text-xs line-clamp-2 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 border-t border-gray-100 pt-3">
                      <span className="font-semibold text-zinc-700">{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 py-16 text-center text-zinc-400 text-sm bg-gray-50 rounded-lg border border-gray-200">
                No breaking news articles available in this category right now.
              </div>
            )}
          </div>

          {/* Pagination Component */}
          <div className="flex items-center space-x-2 mt-12 pt-6 border-t border-gray-200">
            <button className="w-8 h-8 flex items-center justify-center bg-[#0D7AD8] text-white font-bold rounded text-xs cursor-pointer">1</button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 text-zinc-700 hover:bg-gray-200 font-bold rounded text-xs cursor-pointer">2</button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 text-zinc-700 hover:bg-gray-200 font-bold rounded text-xs cursor-pointer">3</button>
            <span className="text-zinc-400 px-2 text-sm">...</span>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 text-zinc-700 hover:bg-gray-200 font-bold rounded text-xs cursor-pointer">15</button>
          </div>
        </div>

        {/* Right Side: Latest Articles Sidebar (4 Columns) */}
        <div className="lg:col-span-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-xs sticky top-6">
            <h3 className="text-base font-black text-zinc-900 uppercase tracking-wider mb-6 pb-3 border-b-2 border-zinc-900">
              Latest Articles
            </h3>

            <div className="space-y-6">
              {sidebarPosts.map((item, idx) => (
                <Link 
                  key={idx}
                  to={item.link}
                  className="group flex space-x-4 items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-20 h-16 object-cover rounded shrink-0 bg-gray-100 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#0D7AD8] uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechNews;