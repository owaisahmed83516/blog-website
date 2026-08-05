import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTag, FiClock, FiCalendar, FiArrowRight, FiMic } from 'react-icons/fi';

const TechInterviews = () => {
  const [filter, setFilter] = useState('ALL');

  const interviews = [
    {
      id: 'int-1',
      title: 'Scaling from Zero to 1M Users: Lessons with Sarah Jenkins',
      category: 'STARTUPS',
      interviewee: 'Sarah Jenkins',
      role: 'CEO & Co-Founder, CloudScale AI',
      date: 'Jul 28, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=450&fit=crop',
      link: '/interviews/sarah-jenkins-cloudscale',
      excerpt: 'A candid conversation on early-stage architectural bottlenecks, hiring the first 10 engineers, and navigating enterprise sales cycles.'
    },
    {
      id: 'int-2',
      title: 'The Future of Distributed Engineering Teams with David Garza',
      category: 'ENGINEERING',
      interviewee: 'David Garza',
      role: 'VP of Engineering, GlobalTech Systems',
      date: 'Jul 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=450&fit=crop',
      link: '/interviews/david-garza-distributed',
      excerpt: 'How asynchronous workflows, robust documentation, and developer tooling are replacing traditional office setups in high-growth companies.'
    },
    {
      id: 'int-3',
      title: 'Securing Series A in a Tight Venture Market: Insights from Alex Mercer',
      category: 'FUNDING',
      interviewee: 'Alex Mercer',
      role: 'General Partner, Horizon Venture Capital',
      date: 'Jun 30, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=450&fit=crop',
      link: '/interviews/alex-mercer-series-a',
      excerpt: 'What institutional investors actually look for beneath the pitch deck—focusing on net revenue retention and efficient capital allocation.'
    }
  ];

  const categories = ['ALL', 'STARTUPS', 'ENGINEERING', 'FUNDING'];

  const filteredInterviews = filter === 'ALL' 
    ? interviews 
    : interviews.filter(item => item.category === filter);

  return (
    <div 
      className="min-h-screen bg-white text-zinc-900 py-12 px-4 md:px-12 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gray-200">
          <div>
            <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-[#0D7AD8] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-3 border border-blue-100">
              <FiMic className="w-3.5 h-3.5" />
              <span>Interviews</span>
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight">
              Tech Leadership Interviews
            </h1>
            <p className="text-zinc-600 text-sm md:text-base mt-2 max-w-2xl">
              Deep-dive conversations with founders, CTOs, and venture investors sharing first-hand experiences, strategies, and lessons from the trenches.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  filter === cat 
                    ? 'bg-[#0D7AD8] text-white shadow-sm' 
                    : 'bg-gray-100 text-zinc-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interviews Grid / Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInterviews.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#0D7AD8] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Interviewee Meta */}
                  <div className="flex items-center space-x-2 mb-3 text-xs text-zinc-500">
                    <span className="font-bold text-zinc-900">{item.interviewee}</span>
                    <span>•</span>
                    <span className="truncate text-zinc-400">{item.role}</span>
                  </div>

                  <h3 className="text-lg font-black text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-zinc-600 line-clamp-3 leading-relaxed mb-6">
                    {item.excerpt}
                  </p>

                  {/* Date and Read Time */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-zinc-400">
                    <span className="flex items-center space-x-1">
                      <FiCalendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FiClock className="w-3.5 h-3.5" />
                      <span>{item.readTime}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Read Interview Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <Link 
                  to={item.link}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gray-50 hover:bg-[#0D7AD8] text-zinc-800 hover:text-white font-bold text-xs py-3 px-4 rounded-lg transition-colors border border-gray-200 hover:border-[#0D7AD8] cursor-pointer"
                >
                  <span>Read Full Interview</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechInterviews;