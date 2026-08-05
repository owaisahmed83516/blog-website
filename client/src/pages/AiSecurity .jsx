import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiAlertTriangle, FiUser, FiClock, FiArrowRight } from 'react-icons/fi';

const AiSecurity = () => {
  const [activeTab, setActiveTab] = useState('All');

  const subCategories = ['All', 'Threats', 'Defenses', 'Compliance', 'Governance', 'Auditing'];

  const allSecurityPosts = [
    {
      id: 1,
      title: 'Securing next-generation neural networks against adversarial perturbation',
      excerpt: 'An in-depth analysis of emerging input-manipulation techniques and how robust training pipelines protect mission-critical AI models.',
      category: 'Threats',
      author: 'Admin',
      date: 'Apr 19, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      isFeatured: true,
      link: '/post/1'
    },
    {
      id: 2,
      title: 'Understanding adversarial machine learning in enterprise environments',
      excerpt: 'How malicious actors attempt to poison training datasets and practical enterprise strategies to safeguard core predictive assets.',
      category: 'Defenses',
      author: 'Dailynews',
      date: 'Apr 18, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      isFeatured: false,
      link: '/post/2'
    },
    {
      id: 3,
      title: 'Global AI compliance frameworks and regulatory standards for 2026',
      excerpt: 'Navigating international data privacy laws, algorithmic auditing requirements, and risk management guidelines for corporate tech deployment.',
      category: 'Compliance',
      author: 'Security Team',
      date: 'Apr 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      isFeatured: false,
      link: '/post/3'
    }
  ];

  const sidebarPosts = [
    {
      title: "Critical Vulnerabilities Discovered in Enterprise LLM APIs",
      category: "THREATS",
      link: "/post/s1",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150&h=150&fit=crop"
    },
    {
      title: "EU AI Act Enforcement Begins: What Corporations Need to Know",
      category: "COMPLIANCE",
      link: "/post/s2",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=150&h=150&fit=crop"
    },
    {
      title: "Zero-Trust Architecture for Cloud-Native AI Workloads",
      category: "DEFENSES",
      link: "/post/s3",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=150&h=150&fit=crop"
    }
  ];

  const filteredPosts = activeTab === 'All' 
    ? allSecurityPosts 
    : allSecurityPosts.filter(post => post.category === activeTab);

  return (
    <div 
      className="min-h-screen bg-white text-zinc-900 pb-20 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      {/* Category Header Title & Filter Section (Video Style) */}
      <div className="border-b border-gray-200 py-8 px-4 md:px-12 mb-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-[#0D7AD8] font-bold text-xs uppercase tracking-widest mb-2">
            <FiShield className="w-4 h-4" />
            <span>Cyber Intelligence & Defense</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight mb-6 border-l-4 border-[#0D7AD8] pl-4">
            AI Security & Governance
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
                No security reports found under this filter right now.
              </div>
            )}
          </div>

          {/* Pagination Component */}
          <div className="flex items-center space-x-2 mt-12 pt-6 border-t border-gray-200">
            <button className="w-8 h-8 flex items-center justify-center bg-[#0D7AD8] text-white font-bold rounded text-xs cursor-pointer">1</button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 text-zinc-700 hover:bg-gray-200 font-bold rounded text-xs cursor-pointer">2</button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 text-zinc-700 hover:bg-gray-200 font-bold rounded text-xs cursor-pointer">3</button>
            <span className="text-zinc-400 px-2 text-sm">...</span>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 text-zinc-700 hover:bg-gray-200 font-bold rounded text-xs cursor-pointer">10</button>
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

export default AiSecurity;