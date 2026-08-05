import React from 'react';
import { FiMessageSquare, FiEye, FiTwitter, FiFacebook, FiSend, FiNavigation, FiShare2, FiYoutube, FiVideo, FiMessageCircle, FiTv } from 'react-icons/fi';

const TravelSection = () => {
  const mainPosts = [
    {
      title: 'The beach, a captivating and idyllic destination',
      excerpt: 'Whether you seek relaxation, adventure, or a combination of both, the beach c...',
      author: 'dailynews',
      date: 'Apr 19, 2026',
      comments: 2,
      views: 71,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Neon Waves Live Concert 2026',
      excerpt: 'A high-energy live music experience bringing together world-class artists, im...',
      author: 'dailynews',
      date: 'Apr 19, 2026',
      comments: 5,
      views: 138,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      isFeatured: true,
      link: '#'
    },
    {
      title: 'The air carries the invigorating scent of moss',
      excerpt: 'The whispering of leaves creates a melodic rhythm, while the delightful choru...',
      author: 'admin',
      date: 'Apr 18, 2026',
      comments: 0,
      views: 20,
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Towers of modern civilization',
      excerpt: 'The heights of city buildings offer breathtaking panoramas, providing panoram...',
      author: 'dailynews',
      date: 'Apr 18, 2026',
      comments: 0,
      views: 33,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Wildlife flourishes in the ecosystem of the river',
      excerpt: 'Birds soar gracefully overhead, their wings casting fleeting shadows on the w...',
      author: 'admin',
      date: 'Apr 18, 2026',
      comments: 0,
      views: 52,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      title: 'Our furry friends and faithful companions',
      excerpt: 'Dogs, our four-legged companions, hold a special place in our hearts and homes...',
      author: 'dailynews',
      date: 'Apr 18, 2026',
      comments: 2,
      views: 171,
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=600&fit=crop',
      isFeatured: true,
      link: '#'
    }
  ];

  const popularPosts = [
    {
      title: 'Our furry friends and faithful companions',
      author: 'dailynews',
      date: 'Apr 18, 2026',
      comments: 2,
      views: 171,
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&h=200&fit=crop',
      isFeatured: true,
      link: '#'
    },
    {
      title: 'The beauty and significance of sunrise',
      author: 'admin',
      date: 'Apr 17, 2026',
      comments: 2,
      views: 124,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=crop',
      isFeatured: false,
      link: '#'
    },
    {
      title: 'Neon Waves Live Concert 2026',
      author: 'dailynews',
      date: 'Apr 19, 2026',
      comments: 5,
      views: 138,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=200&fit=crop',
      isFeatured: true,
      link: '#'
    },
    {
      title: 'The sea is a realm of constant change',
      author: 'admin',
      date: 'Apr 19, 2026',
      comments: 0,
      views: 112,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop',
      isFeatured: true,
      link: '#'
    }
  ];

  return (
    <div 
      className="w-full bg-[#f8f9fa] min-h-screen px-6 lg:px-12 py-2 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-3 relative">
          <h2 className="text-xl font-bold text-zinc-900 mb-2 md:mb-0">Travel</h2>
          
          <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#0D7AD8]"></div>

          <div className="flex items-center space-x-6 text-[13px] font-semibold">
            <span className="text-[#0D7AD8] cursor-pointer">All</span>
            <span className="text-zinc-500 hover:text-[#0D7AD8] cursor-pointer transition-colors">Nature</span>
            <span className="text-zinc-500 hover:text-[#0D7AD8] cursor-pointer transition-colors">Places</span>
          </div>
        </div>

        {/* Main Layout Grid (2 Columns: Main content left, Popular posts right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: 2 Grid Columns for Main Posts */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 content-start">
            {mainPosts.map((post, index) => (
              <div 
                key={index} 
                onClick={() => window.open(post.link, '_blank')}
                className="group cursor-pointer flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {post.isFeatured && (
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-amber-400 p-1.5 rounded-full text-xs shadow border border-white/10">👑</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-[16px] font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug mb-2">
                      {post.title}
                    </h3>

                    <div className="text-[11px] text-zinc-400 flex items-center space-x-2 mb-3">
                      <span className="font-semibold text-zinc-700">{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1"><FiMessageSquare className="w-3 h-3" /> <span>{post.comments}</span></span>
                      <span>•</span>
                      <span className="flex items-center space-x-1"><FiEye className="w-3 h-3" /> <span>{post.views}</span></span>
                    </div>

                    <p className="text-[13px] text-zinc-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Sidebar */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Popular Posts Box */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-xs p-6 flex flex-col space-y-5">
              <div className="border-b border-gray-200 pb-3 relative">
                <h3 className="text-lg font-bold text-zinc-900">Popular Posts</h3>
                <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-[#0D7AD8]"></div>
              </div>

              <div className="flex flex-col space-y-4">
                {popularPosts.map((post, index) => (
                  <div 
                    key={index} 
                    onClick={() => window.open(post.link, '_blank')}
                    className="group cursor-pointer flex items-center space-x-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                  >
                    <div className="relative w-20 h-16 rounded-md overflow-hidden shrink-0 bg-zinc-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {post.isFeatured && (
                        <span className="absolute top-1 right-1 bg-black/60 text-amber-400 w-4 h-4 flex items-center justify-center rounded-full text-[9px] shadow">👑</span>
                      )}
                    </div>

                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <h4 className="text-[13px] font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug mb-1">
                        {post.title}
                      </h4>
                      <div className="text-[10px] text-zinc-400 flex items-center space-x-1.5 truncate">
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
                ))}
              </div>
            </div>

            {/* Follow Us Widget */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-xs p-6 flex flex-col space-y-4">
              <h3 className="text-lg font-bold text-zinc-900">Follow Us</h3>
              
              <div className="grid grid-cols-2 gap-2.5">
                <a href="#twitter" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors">
                  <FiTwitter className="w-4 h-4 shrink-0" />
                  <span className="truncate">X (Twitter)</span>
                </a>
                <a href="#instagram" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-xs font-medium transition-opacity hover:opacity-90">
                  <FiShare2 className="w-4 h-4 shrink-0" />
                  <span className="truncate">Instagram</span>
                </a>
                <a href="#facebook" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs font-medium transition-colors">
                  <FiFacebook className="w-4 h-4 shrink-0" />
                  <span className="truncate">Facebook</span>
                </a>
                <a href="#youtube" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-[#ff0000] hover:bg-[#e60000] text-white text-xs font-medium transition-colors">
                  <FiYoutube className="w-4 h-4 shrink-0" />
                  <span className="truncate">YouTube</span>
                </a>
                <a href="#whatsapp" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-medium transition-colors">
                  <FiMessageCircle className="w-4 h-4 shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </a>
                <a href="#tiktok" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors">
                  <FiVideo className="w-4 h-4 shrink-0" />
                  <span className="truncate">TikTok</span>
                </a>
                <a href="#telegram" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-[#229ed9] hover:bg-[#1f8fc6] text-white text-xs font-medium transition-colors">
                  <FiSend className="w-4 h-4 shrink-0" />
                  <span className="truncate">Telegram</span>
                </a>
                <a href="#discord" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-[#5865f2] hover:bg-[#4752c4] text-white text-xs font-medium transition-colors">
                  <FiTv className="w-4 h-4 shrink-0" />
                  <span className="truncate">Discord</span>
                </a>
                <a href="#bluesky" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-[#0085ff] hover:bg-[#0070d6] text-white text-xs font-medium transition-colors col-span-2">
                  <FiNavigation className="w-4 h-4 shrink-0" />
                  <span className="truncate">Bluesky</span>
                </a>
                <a href="#twitch" className="flex items-center space-x-2 px-3.5 py-2.5 rounded bg-[#9146ff] hover:bg-[#7d37e0] text-white text-xs font-medium transition-colors col-span-2">
                  <FiTv className="w-4 h-4 shrink-0" />
                  <span className="truncate">Twitch</span>
                </a>
              </div>
            </div>

            {/* Varient Promo Card */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-lg p-6 text-white relative overflow-hidden shadow-xs border border-indigo-950">
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                <FiTv className="w-40 h-40" />
              </div>
              <div className="relative z-10 space-y-3">
                <h4 className="text-xl font-extrabold tracking-tight">VARIENT</h4>
                <p className="text-sm font-medium text-indigo-200">
                  Best News & Magazine Script
                </p>
                <div className="pt-2">
                  <a 
                    href="#buy" 
                    className="inline-block bg-[#0D7AD8] hover:bg-[#0b68b8] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors shadow"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TravelSection;