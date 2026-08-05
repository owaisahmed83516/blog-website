import React from 'react';
import { FiMessageSquare, FiEye } from 'react-icons/fi';

const LifestyleSec = () => {
  const lifestylePosts = [
    {
      title: 'The sea is a realm of constant change',
      author: 'admin',
      date: 'Apr 19, 2026',
      comments: 0,
      views: 112,
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isFeatured: true,
      link: '#'
    },
    {
      title: 'Quantum computing revolutionizing information processing...',
      author: 'dailynews',
      date: 'Apr 19, 2026',
      comments: 0,
      views: 77,
      image: 'https://plus.unsplash.com/premium_photo-1675676699371-a38f6ab75fa0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isFeatured: false,
      link: '#'
    },
    {
      title: 'Future Creators Festival 2026',
      author: 'admin',
      date: 'Apr 19, 2026',
      comments: 1,
      views: 50,
      image: 'https://plus.unsplash.com/premium_photo-1673108872456-f5cd1dbff3d3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isFeatured: false,
      link: '#'
    },
    {
      title: 'Creamy spinach and mushroom quiche',
      author: 'dailynews',
      date: 'Apr 18, 2026',
      comments: 0,
      views: 44,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=600&fit=crop',
      isFeatured: true,
      link: '#'
    }
  ];

  return (
    <div 
      className="w-full bg-[#ffffff] px-6 lg:px-12 py-6 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-3 relative">
          <h2 className="text-xl font-bold text-zinc-900 mb-2 md:mb-0">Life Style</h2>
          
          <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-[#0D7AD8]"></div>

          <div className="flex items-center space-x-6 text-[13px] font-semibold">
            <span className="text-[#0D7AD8] cursor-pointer">All</span>
            <span className="text-zinc-500 hover:text-[#0D7AD8] cursor-pointer transition-colors">Photography</span>
            <span className="text-zinc-500 hover:text-[#0D7AD8] cursor-pointer transition-colors">Design</span>
            <span className="text-zinc-500 hover:text-[#0D7AD8] cursor-pointer transition-colors">Recipes</span>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifestylePosts.map((post, index) => (
            <div 
              key={index} 
              onClick={() => window.open(post.link, '_blank')}
              className="group cursor-pointer flex flex-col relative rounded-lg overflow-hidden aspect-[3/4] shadow-xs hover:shadow-md transition-shadow bg-zinc-900"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              </div>

              {/* Featured Badge */}
              {post.isFeatured && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-black/55 backdrop-blur-xs text-amber-400 w-7 h-7 flex items-center justify-center rounded-full text-xs shadow border border-white/15">👑</span>
                </div>
              )}

              {/* Content Positioned at Bottom */}
              <div className="relative mt-auto p-5 flex flex-col justify-end z-10">
                <h3 className="text-[16px] font-bold text-white group-hover:text-[#0D7AD8] transition-colors line-clamp-3 leading-snug mb-3">
                  {post.title}
                </h3>

                <div className="text-[11px] text-zinc-300 flex items-center space-x-1.5 flex-wrap">
                  <span className="font-semibold text-white">{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1"><FiMessageSquare className="w-3 h-3" /> <span>{post.comments}</span></span>
                  <span>•</span>
                  <span className="flex items-center space-x-1"><FiEye className="w-3 h-3" /> <span>{post.views}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LifestyleSec;