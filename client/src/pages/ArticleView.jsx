import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiCalendar, FiShare2, FiBookmark, FiArrowLeft, FiTag, FiCheck, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ArticleView = () => {
  const [copied, setCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const article = {
    title: 'How seed-stage startups are securing venture capital in 2026',
    excerpt: 'A deep dive into shifting investor sentiment, essential metrics for pre-seed rounds, and strategies for closing early-stage funding efficiently.',
    category: 'Funding',
    author: 'Hamza Ali',
    date: 'Apr 19, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop',
  };

  const sidebarPosts = [
    {
      title: "Top 10 Emerging AI Startups to Watch in the Second Half of 2026",
      category: "INNOVATION",
      link: "/post/s1",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&h=150&fit=crop"
    },
    {
      title: "Why Angel Investors Are Focusing More on Sustainable Revenue Models",
      category: "FUNDING",
      link: "/post/s2",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=150&h=150&fit=crop"
    },
    {
      title: "Founder Burnout: Practical Steps to Maintain Mental Well-being",
      category: "FOUNDERS",
      link: "/post/s3",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-white text-zinc-900 pb-20 select-none relative"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      {/* Back Button & Actions Sticky Bar */}
      <div className="border-b border-gray-200 py-4 px-4 md:px-12 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to={-1} 
            className="inline-flex items-center space-x-2 text-xs font-bold text-zinc-600 hover:text-[#0D7AD8] transition-colors cursor-pointer"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to startup feed</span>
          </Link>
          
          <div className="flex items-center space-x-3 relative">
            <div className="relative">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 text-zinc-600 hover:text-[#0D7AD8] bg-gray-100 rounded-full transition-colors cursor-pointer" 
                title="Share Article"
              >
                <FiShare2 className="w-4 h-4" />
              </button>

              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 text-xs">
                  <button 
                    onClick={handleCopyLink}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2 text-zinc-700 font-medium cursor-pointer"
                  >
                    {copied ? <FiCheck className="text-green-600 w-3.5 h-3.5" /> : <FiShare2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Link Copied!' : 'Copy Article Link'}</span>
                  </button>
                  <a href="#twitter" className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2 text-zinc-700 font-medium">
                    <FiTwitter className="w-3.5 h-3.5 text-blue-400" />
                    <span>Share on Twitter</span>
                  </a>
                  <a href="#linkedin" className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2 text-zinc-700 font-medium">
                    <FiLinkedin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Share on LinkedIn</span>
                  </a>
                </div>
              )}
            </div>

            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isSaved ? 'bg-blue-50 text-[#0D7AD8]' : 'text-zinc-600 hover:text-[#0D7AD8] bg-gray-100'
              }`} 
              title="Save Article"
            >
              <FiBookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Container with Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Article Content (8 Columns) */}
        <article className="lg:col-span-8">
          
          {/* Category & Title */}
          <div className="mb-6">
            <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-[#0D7AD8] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 border border-blue-100">
              <FiTag className="w-3.5 h-3.5" />
              <span>{article.category}</span>
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
              {article.title}
            </h1>
          </div>

          {/* Author & Meta Info Bar */}
          <div className="flex flex-wrap items-center justify-between py-4 border-y border-gray-200 mb-8 text-xs text-zinc-500">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#0D7AD8] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                {article.author.charAt(0)}
              </div>
              <div>
                <span className="font-bold text-zinc-900 block">{article.author}</span>
                <span className="text-zinc-400">Startup Ecosystem Contributor</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-3 sm:mt-0">
              <span className="flex items-center space-x-1.5">
                <FiCalendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <FiClock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-sm bg-gray-100 aspect-[16/9]">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-zinc max-w-none text-zinc-700 text-base md:text-lg leading-relaxed space-y-6">
            <p className="font-semibold text-xl text-zinc-900 leading-snug">
              {article.excerpt}
            </p>
            <p>
              As venture capital markets continue to evolve in 2026, seed-stage founders are navigating a landscape defined by stricter due diligence, higher emphasis on clear monetization paths, and lean operational milestones before the first institutional check is signed.
            </p>
            <h2 className="text-2xl font-bold text-zinc-900 pt-4">
              Shifting Investor Sentiment in Pre-Seed Rounds
            </h2>
            <p>
              Investors are increasingly prioritizing capital efficiency over unbridled customer acquisition growth. Startups that demonstrate predictable unit economics and low burn rates are commanding faster term sheets compared to pre-revenue concepts.
            </p>
            <blockquote className="border-l-4 border-zinc-300 pl-4 italic text-zinc-800 font-medium my-6">
              "The modern pre-seed ecosystem rewards founders who treat capital like fuel for verified engines rather than an experiment playground."
            </blockquote>
            <h2 className="text-2xl font-bold text-zinc-900 pt-4">
              Key Metrics That Move the Needle
            </h2>
            <p>
              Founders must present robust cohort retention metrics, transparent customer acquisition costs (CAC), and realistic lifetime value (LTV) projections. Engaging early with angel syndicates and strategic micro-VCs often paves the smoother path toward larger institutional rounds.
            </p>
          </div>

          {/* Author Bio Box */}
          <div className="my-12 p-6 bg-gray-50 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
            <div className="w-16 h-16 rounded-full bg-[#0D7AD8] text-white font-black text-xl flex items-center justify-center shrink-0 shadow-sm">
              {article.author.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 text-base mb-1">About {article.author}</h4>
              <p className="text-xs md:text-sm text-zinc-600 leading-relaxed mb-3">
                Venture analyst and startup mentor tracking early-stage fundraising trends, emerging technologies, and business model innovations across global markets.
              </p>
              <div className="flex items-center space-x-3 text-xs font-bold text-[#0D7AD8]">
                <a href="#profile" className="hover:underline">View all posts by {article.author} &rarr;</a>
              </div>
            </div>
          </div>

          {/* Tags Footer */}
          <div className="flex flex-wrap items-center gap-2 my-10 pt-6 border-t border-gray-200">
            <span className="text-xs font-bold text-zinc-400 uppercase mr-2">Tags:</span>
            {['Venture Capital', 'Seed Funding', 'Startups', 'SaaS Growth'].map((tag, i) => (
              <span key={i} className="bg-gray-100 hover:bg-gray-200 text-zinc-700 text-xs font-semibold px-3 py-1 rounded transition-colors cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>

        </article>

        {/* Right Side: Sidebar (4 Columns) */}
        <div className="lg:col-span-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-xs sticky top-24">
            <h3 className="text-base font-black text-zinc-900 uppercase tracking-wider mb-6 pb-3 border-b-2 border-zinc-900">
              Latest Startup Articles
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

export default ArticleView;