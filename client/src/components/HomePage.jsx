import React, { useState } from 'react';
import { FiZap, FiChevronLeft, FiChevronRight, FiMessageSquare, FiEye, FiMusic } from 'react-icons/fi';

const Home = () => {
  // Hero slider slides data
  const heroSlides = [
    {
      id: 1,
      category: "Fashion",
      categoryBg: "bg-[#a855f7]",
      title: "A dark cinematic journey through sound",
      author: "dailynews",
      date: "Apr 19, 2026",
      comments: "0",
      views: "53",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop",
      link: "#post-1"
    },
    {
      id: 2,
      category: "Music",
      categoryBg: "bg-[#3b82f6]",
      title: "Exploring the deep rhythms of electronic beats",
      author: "admin",
      date: "Apr 20, 2026",
      comments: "3",
      views: "120",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=800&fit=crop",
      link: "#post-2"
    },
    {
      id: 3,
      category: "Culture",
      categoryBg: "bg-[#f59e0b]",
      title: "Modern art exhibitions shaping urban spaces",
      author: "dailynews",
      date: "Apr 21, 2026",
      comments: "5",
      views: "85",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=800&fit=crop",
      link: "#post-3"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const activeHero = heroSlides[currentSlide];

  return (
    <div 
      className="w-full bg-[#f8f9fa] min-h-screen px-6 lg:px-12 py-6 select-none space-y-6"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Breaking News Ticker Bar */}
        <div className="bg-white border border-gray-200/80 rounded-md px-4 py-3 flex items-center justify-between shadow-xs">
          <div className="flex items-center space-x-3 overflow-hidden">
            <a href="#breaking-news" className="bg-[#0D7AD8] text-white px-3 py-1.5 rounded text-[12px] font-bold flex items-center space-x-1.5 shrink-0 hover:bg-[#0b68b8] transition-colors">
              <FiZap className="w-3.5 h-3.5 fill-white" />
              <span>Breaking News</span>
            </a>
            <a href="#news-detail" className="text-[13px] font-semibold text-zinc-800 hover:text-[#0D7AD8] truncate transition-colors">
              In its purest form, running is a celebration of freedom
            </a>
          </div>

          <div className="flex items-center space-x-1 shrink-0 ml-4">
            <button className="w-7 h-7 rounded border border-gray-200 flex items-center justify-center text-zinc-500 hover:bg-gray-100 transition-colors cursor-pointer">
              <FiChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded border border-gray-200 flex items-center justify-center text-zinc-500 hover:bg-gray-100 transition-colors cursor-pointer">
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Large Featured Post (Slider Enabled with Links) */}
          <div className="lg:col-span-7 relative rounded-lg overflow-hidden group h-[480px] shadow-sm bg-zinc-900">
            <a href={activeHero.link} className="absolute inset-0 block z-0">
              <img 
                src={activeHero.image} 
                alt={activeHero.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
            </a>

            {/* Slider Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Center Floating Icon Badge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xs border border-white/20 text-white flex items-center justify-center shadow-lg">
                <FiMusic className="w-5 h-5" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start z-10 pointer-events-auto">
              <a href="#category-fashion" className={`${activeHero.categoryBg} text-white text-[11px] font-bold px-3 py-1 rounded mb-3 tracking-wide hover:opacity-90 transition-opacity`}>
                {activeHero.category}
              </a>
              <a href={activeHero.link} className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-3 hover:text-[#5ab3ff] transition-colors">
                {activeHero.title}
              </a>
              <div className="text-[12px] text-zinc-300 flex items-center space-x-2">
                <a href="#author" className="font-semibold text-white hover:underline">{activeHero.author}</a>
                <span>•</span>
                <span>{activeHero.date}</span>
                <span>•</span>
                <a href="#comments" className="flex items-center space-x-1 hover:text-white transition-colors"><FiMessageSquare className="w-3.5 h-3.5" /> <span>{activeHero.comments}</span></a>
                <span>•</span>
                <span className="flex items-center space-x-1"><FiEye className="w-3.5 h-3.5" /> <span>{activeHero.views}</span></span>
              </div>
            </div>
          </div>

          {/* Right Smaller Stacked Posts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Right Card */}
            <div className="relative rounded-lg overflow-hidden group h-[228px] shadow-sm bg-zinc-900">
              <a href="#travel-post" className="absolute inset-0 block z-0">
                <img 
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=400&fit=crop" 
                  alt="Our furry friends and faithful companions" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              </a>
              
              <div className="absolute top-3 right-3 z-10 pointer-events-none">
                <span className="bg-black/50 backdrop-blur-xs text-amber-400 w-7 h-7 flex items-center justify-center rounded-full text-xs shadow border border-white/10">👑</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start z-10 pointer-events-auto">
                <a href="#category-travel" className="bg-[#0D7AD8] text-white text-[11px] font-bold px-2.5 py-0.5 rounded mb-2 tracking-wide hover:opacity-90">
                  Travel
                </a>
                <a href="#travel-post" className="text-white text-[16px] font-bold leading-snug mb-2 hover:text-[#5ab3ff] transition-colors">
                  Our furry friends and faithful companions
                </a>
                <div className="text-[11px] text-zinc-300 flex items-center space-x-2.5">
                  <a href="#author" className="font-semibold text-white hover:underline">dailynews</a>
                  <span>•</span>
                  <span>Apr 18, 2026</span>
                  <span>•</span>
                  <a href="#comments" className="flex items-center space-x-1 hover:text-white"><FiMessageSquare className="w-3 h-3" /> <span>2</span></a>
                  <span>•</span>
                  <span className="flex items-center space-x-1"><FiEye className="w-3 h-3" /> <span>171</span></span>
                </div>
              </div>
            </div>

            {/* Bottom Two Split Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[228px]">
              
              {/* Bottom Left Card */}
              <div className="relative rounded-lg overflow-hidden group h-full shadow-sm bg-zinc-900">
                <a href="#fashion-style" className="absolute inset-0 block z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop" 
                    alt="A timeless expression of individuality and style" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                </a>
                
                <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                  <span className="bg-black/50 backdrop-blur-xs text-amber-400 w-6 h-6 flex items-center justify-center rounded-full text-[10px] shadow border border-white/10">👑</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start z-10 pointer-events-auto">
                  <a href="#category-fashion" className="bg-[#a855f7] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-1.5 tracking-wide hover:opacity-90">
                    Fashion
                  </a>
                  <a href="#fashion-style" className="text-white text-[13px] font-bold leading-snug mb-1.5 line-clamp-2 hover:text-[#5ab3ff] transition-colors">
                    A timeless expression of individuality and style
                  </a>
                  <div className="text-[10px] text-zinc-300 flex items-center space-x-1.5">
                    <a href="#author" className="font-semibold text-white hover:underline">dailynews</a>
                    <span>•</span>
                    <span>Apr 18, 2026</span>
                    <span>•</span>
                    <a href="#comments" className="flex items-center space-x-0.5 hover:text-white"><FiMessageSquare className="w-2.5 h-2.5" /> <span>0</span></a>
                    <span>•</span>
                    <span className="flex items-center space-x-0.5"><FiEye className="w-2.5 h-2.5" /> <span>50</span></span>
                  </div>
                </div>
              </div>

              {/* Bottom Right Card */}
              <div className="relative rounded-lg overflow-hidden group h-full shadow-sm bg-zinc-900">
                <a href="#wildlife-ecosystem" className="absolute inset-0 block z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop" 
                    alt="Wildlife flourishes in the ecosystem of the river" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                </a>

                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start z-10 pointer-events-auto">
                  <a href="#category-travel" className="bg-[#0D7AD8] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-1.5 tracking-wide hover:opacity-90">
                    Travel
                  </a>
                  <a href="#wildlife-ecosystem" className="text-white text-[13px] font-bold leading-snug mb-1.5 line-clamp-2 hover:text-[#5ab3ff] transition-colors">
                    Wildlife flourishes in the ecosystem of the river
                  </a>
                  <div className="text-[10px] text-zinc-300 flex items-center space-x-1.5">
                    <a href="#author" className="font-semibold text-white hover:underline">admin</a>
                    <span>•</span>
                    <span>Apr 18, 2026</span>
                    <span>•</span>
                    <a href="#comments" className="flex items-center space-x-0.5 hover:text-white"><FiMessageSquare className="w-2.5 h-2.5" /> <span>0</span></a>
                    <span>•</span>
                    <span className="flex items-center space-x-0.5"><FiEye className="w-2.5 h-2.5" /> <span>52</span></span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;