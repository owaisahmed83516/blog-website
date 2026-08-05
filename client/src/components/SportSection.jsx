import React, { useState, useEffect } from 'react';
import { FiMessageSquare, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SportSection = () => {
  const posts = [
    {
      title: 'The rowing experience is a test of physical endurance...',
      author: 'dailynews',
      date: 'Apr 17, 2026',
      comments: 0,
      views: 21,
      image: 'https://plus.unsplash.com/premium_photo-1684820878202-52781d8e0ea9?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#'
    },
    {
      title: 'Riding a bike is a delightful and invigorating experience...',
      author: 'dailynews',
      date: 'Apr 19, 2026',
      comments: 5,
      views: 55,
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isFeatured: true,
      link: '#'
    },
    {
      title: 'The arrival of winter heralds a shift in the landscape',
      author: 'admin',
      date: 'Apr 19, 2026',
      comments: 0,
      views: 31,
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#'
    },
    {
      title: 'Riding a bike is a sensory experience',
      author: 'admin',
      date: 'Apr 19, 2026',
      comments: 0,
      views: 33,
      image: 'https://varient.codingest.com/uploads/images/202604/image_450x280_e87eaf7fb6f0a58c4d0477f923e7c392.webp',
      link: '#'
    },
    {
      title: 'Exploring mountain trails at high altitudes',
      author: 'dailynews',
      date: 'Apr 20, 2026',
      comments: 3,
      views: 48,
      image: 'https://varient.codingest.com/uploads/images/202604/image_450x280_540845fee446b54e18c28e681d491b04.webp',
      link: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCardsCount = 4;

  // Automatic slide effect every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= posts.length - visibleCardsCount ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [posts.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? posts.length - visibleCardsCount : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= posts.length - visibleCardsCount ? 0 : prevIndex + 1));
  };

  return (
    <div 
      className="w-full bg-white px-4 md:px-8 lg:px-12 py-6 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 relative">
          <h2 className="text-[22px] font-bold text-zinc-900 tracking-tight">Sport</h2>
          
          <div className="absolute bottom-0 left-0 w-16 h-[2px] bg-[#0D7AD8]"></div>

          <div className="flex items-center space-x-1 shrink-0">
            <button 
              onClick={handlePrev}
              className="w-7 h-7 rounded border border-gray-200 bg-white flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-gray-50 transition-colors cursor-pointer shadow-xs"
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext}
              className="w-7 h-7 rounded border border-gray-200 bg-white flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-gray-50 transition-colors cursor-pointer shadow-xs"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden relative w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCardsCount)}%)`,
              width: `${(posts.length * 100) / visibleCardsCount}%` 
            }}
          >
            {posts.map((post, index) => (
              <div 
                key={index} 
                onClick={() => window.open(post.link, '_blank')}
                className="group cursor-pointer flex flex-col bg-transparent px-3"
                style={{ width: `${100 / posts.length}%` }}
              >
                {/* Image Container with Exact Aspect Ratio & Styling */}
                <div className="relative overflow-hidden aspect-[16/10] bg-zinc-100 rounded-md shadow-xs mb-3 w-full">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0D7AD8] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded shadow-xs">
                    Sport
                  </span>
                  {post.isFeatured && (
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-amber-400 w-6 h-6 flex items-center justify-center rounded-full text-[10px] shadow border border-white/10">👑</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Content Section Outside Image */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[15px] font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug mb-2">
                      {post.title}
                    </h3>

                    <div className="text-[11px] text-zinc-400 flex items-center space-x-1.5 flex-wrap">
                      <span className="font-semibold text-zinc-700">{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-0.5"><FiMessageSquare className="w-2.5 h-2.5" /> <span>{post.comments}</span></span>
                      <span>•</span>
                      <span className="flex items-center space-x-0.5"><FiEye className="w-2.5 h-2.5" /> <span>{post.views}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SportSection;