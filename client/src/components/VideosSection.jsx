import React from 'react';
import { FiPlay, FiMessageSquare, FiEye } from 'react-icons/fi';

const VideosSection = () => {
  const mainVideo = {
    title: "Midnight ride through the dark city",
    category: "VIDEOS",
    author: "admin",
    date: "Apr 19, 2026",
    views: "91",
    comments: "0",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=1000&fit=crop",
    isFeatured: true,
  };

  const middleVideo = {
    title: "Silent rain over the city at night",
    category: "VIDEOS",
    author: "admin",
    date: "Apr 19, 2026",
    views: "37",
    comments: "0",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=1000&fit=crop",
  };

  const rightVideos = [
    {
      title: "Crafting visual perfection in a modern workspace",
      category: "VIDEOS",
      author: "dailynews",
      date: "Apr 19, 2026",
      views: "40",
      comments: "0",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    },
    {
      title: "Bunny Easter and Falling Mimosa Flowers",
      category: "VIDEOS",
      author: "admin",
      date: "Apr 18, 2026",
      views: "34",
      comments: "0",
      image: "https://media.istockphoto.com/id/1427542492/photo/red-and-blue-foldable-canvas-chairs-empty-and-closed-striped-parasols-end-of-summer-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kcn8WRqnhESEfX4qNV5H011ew1BufwU2vBcAUtMp8jM=",
    }
  ];

  return (
    <section className="w-full bg-[#111111] text-white py-10 px-4 md:px-12 font-sans select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-5 border-b border-zinc-800 pb-3 relative">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">Videos</h2>
          <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#0D7AD8]"></div>
          <a href="#view-all" className="text-xs md:text-sm font-semibold text-zinc-400 hover:text-white transition-colors flex items-center space-x-1">
            <span>View All</span>
            <span>→</span>
          </a>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          
          {/* 1. Left Large Card */}
          <div className="relative group rounded-2xl overflow-hidden bg-zinc-900 aspect-[3/4] flex flex-col justify-end p-5 cursor-pointer shadow-lg">
            <div className="absolute inset-0">
              <img 
                src={mainVideo.image} 
                alt={mainVideo.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
            </div>

            {/* Crown / Featured Badge */}
            {mainVideo.isFeatured && (
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-amber-400 border border-white/10 z-10 text-xs">
                👑
              </div>
            )}

            {/* Play Button Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#0D7AD8] transition-all duration-300 shadow-xl">
                <FiPlay className="w-5 h-5 ml-0.5 fill-current" />
              </div>
            </div>

            {/* Content Details */}
            <div className="relative z-10 flex flex-col space-y-1.5">
              <span className="text-[10px] font-bold tracking-wider text-[#0D7AD8] uppercase">
                {mainVideo.category}
              </span>
              <h3 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-[#0D7AD8] transition-colors line-clamp-2">
                {mainVideo.title}
              </h3>
              <div className="flex items-center space-x-2 text-[11px] text-zinc-400 pt-0.5">
                <span className="font-medium text-zinc-300">{mainVideo.author}</span>
                <span>•</span>
                <span>{mainVideo.date}</span>
                <div className="flex items-center space-x-2 ml-auto">
                  <span className="flex items-center space-x-1"><FiMessageSquare className="w-3 h-3" /><span>{mainVideo.comments}</span></span>
                  <span className="flex items-center space-x-1"><FiEye className="w-3 h-3" /><span>{mainVideo.views}</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Middle Card */}
          <div className="relative group rounded-2xl overflow-hidden bg-zinc-900 aspect-[3/4] flex flex-col justify-end p-5 cursor-pointer shadow-lg">
            <div className="absolute inset-0">
              <img 
                src={middleVideo.image} 
                alt={middleVideo.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#0D7AD8] transition-all duration-300 shadow-xl">
                <FiPlay className="w-5 h-5 ml-0.5 fill-current" />
              </div>
            </div>

            {/* Content Details */}
            <div className="relative z-10 flex flex-col space-y-1.5">
              <span className="text-[10px] font-bold tracking-wider text-[#0D7AD8] uppercase">
                {middleVideo.category}
              </span>
              <h3 className="text-base md:text-lg font-bold text-white leading-snug group-hover:text-[#0D7AD8] transition-colors line-clamp-2">
                {middleVideo.title}
              </h3>
              <div className="flex items-center space-x-2 text-[11px] text-zinc-400 pt-0.5">
                <span className="font-medium text-zinc-300">{middleVideo.author}</span>
                <span>•</span>
                <span>{middleVideo.date}</span>
                <div className="flex items-center space-x-2 ml-auto">
                  <span className="flex items-center space-x-1"><FiMessageSquare className="w-3 h-3" /><span>{middleVideo.comments}</span></span>
                  <span className="flex items-center space-x-1"><FiEye className="w-3 h-3" /><span>{middleVideo.views}</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Right Column (Two Stacked Cards matching height) */}
          <div className="flex flex-col justify-between h-full space-y-4 lg:space-y-0">
            {rightVideos.map((video, index) => (
              <div 
                key={index}
                className="relative group rounded-2xl overflow-hidden bg-zinc-900 flex flex-col justify-end p-4 cursor-pointer shadow-lg h-[calc(50%-10px)] min-h-[190px]"
              >
                <div className="absolute inset-0">
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#0D7AD8] transition-all duration-300 shadow-xl">
                    <FiPlay className="w-4 h-4 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="relative z-10 flex flex-col space-y-1">
                  <span className="text-[9px] font-bold tracking-wider text-[#0D7AD8] uppercase">
                    {video.category}
                  </span>
                  <h4 className="text-xs md:text-sm font-bold text-white leading-tight group-hover:text-[#0D7AD8] transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <div className="flex items-center space-x-2 text-[10px] text-zinc-400 pt-0.5">
                    <span className="font-medium text-zinc-300">{video.author}</span>
                    <span>•</span>
                    <span>{video.date}</span>
                    <div className="flex items-center space-x-2 ml-auto">
                      <span className="flex items-center space-x-1"><FiMessageSquare className="w-2.5 h-2.5" /><span>{video.comments}</span></span>
                      <span className="flex items-center space-x-1"><FiEye className="w-2.5 h-2.5" /><span>{video.views}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideosSection;