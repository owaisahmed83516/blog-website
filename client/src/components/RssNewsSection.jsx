import React from 'react';
import { FiMessageSquare, FiEye } from 'react-icons/fi';

const RssNewsSection = () => {
  const rssPosts = [
    {
      title: 'AI Slop Is Making the Internet Fake-Happy',
      excerpt: 'A new study examines the impact of the rise of AI-generated websites on the i...',
      author: 'admin',
      date: 'Apr 17, 2026',
      comments: 1,
      views: 26,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
      category: 'Wired',
      link: 'https://www.wired.com'
    },
    {
      title: 'Flight Path Data Shows How Mosquitoes Target Humans',
      excerpt: 'Scientists have quantified what draws mosquitoes to people—which could help m...',
      author: 'admin',
      date: 'Apr 17, 2026',
      comments: 0,
      views: 34,
      image: 'https://media.wired.com/photos/69d96f59b8bdc021bdac9cf7/master/pass/Why-Mosquitos-Target-Humans-Science-1139949311.jpg',
      category: 'UN News',
      link: 'https://news.un.org'
    },
    {
      title: 'You Should Be More Freaked Out by Shingles',
      excerpt: 'The viral infection leaves millions with chronic pain, increased stroke risk,...',
      author: 'admin',
      date: 'Apr 17, 2026',
      comments: 0,
      views: 11,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&h=400&fit=crop',
      category: 'Fox News',
      link: 'https://www.foxnews.com'
    }
  ];

  const listPostsCol1 = [
    { title: 'Marine Animals in the Strait of Hormuz Don\'t Get a Ceasefire...', author: 'admin', date: 'Apr 17, 2026', comments: 0, views: 4, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&h=150&fit=crop', link: '#' },
    { title: 'World News in Brief: Guterres calls for fair swtich to...', author: 'admin', date: 'Apr 17, 2026', comments: 0, views: 1, image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=200&h=150&fit=crop', link: '#' },
    { title: 'Toyota joins hydrogen truck alliance push', author: 'admin', date: 'Apr 17, 2026', comments: 0, views: 6, image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=200&h=150&fit=crop', link: '#' }
  ];

  const listPostsCol2 = [
    { title: 'From shelter to strength: How disaster refuges protect...', author: 'admin', date: 'Apr 17, 2026', comments: 0, views: 5, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=200&h=150&fit=crop', link: '#' },
    { title: 'Big Tech Won\'t Let You Leave. Here\'s a Way Out', author: 'admin', date: 'Apr 17, 2026', comments: 0, views: 2, image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=200&h=150&fit=crop', link: '#' },
    { title: 'Identity theft losses surge 70% for older Americans', author: 'admin', date: 'Apr 17, 2026', comments: 0, views: 1, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=150&fit=crop', link: '#' }
  ];

  const listPostsCol3 = [
    { title: 'UN chief urges renewed push to complete decolonization...', author: 'admin', date: 'Apr 17, 2026', comments: 0, views: 4, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=150&fit=crop', link: '#' },
    { title: 'To Keep Gen Z, Companies Need to Level Up', author: 'admin', date: 'Apr 17, 2026', comments: 0, views: 0, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=150&fit=crop', link: '#' },
    { title: 'Smart travel safety tips before your next trip', author: 'admin', date: 'Apr 17, 2026', comments: 0, views: 0, image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=200&h=150&fit=crop', link: '#' }
  ];

  return (
    <div 
      className="w-full bg-[#f8f9fa] px-6 lg:px-12 py-6 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* RSS News Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-3 relative">
          <h2 className="text-xl font-bold text-zinc-900 mb-2 sm:mb-0">RSS News</h2>
          
          <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-[#0D7AD8]"></div>

          <div className="flex items-center space-x-6 text-[13px] font-semibold">
            <span className="text-[#0D7AD8] cursor-pointer">All</span>
            <span className="text-zinc-500 hover:text-[#0D7AD8] cursor-pointer transition-colors">Wired</span>
            <span className="text-zinc-500 hover:text-[#0D7AD8] cursor-pointer transition-colors">UN News</span>
            <span className="text-zinc-500 hover:text-[#0D7AD8] cursor-pointer transition-colors">Fox News</span>
          </div>
        </div>

        {/* 3-Column RSS Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rssPosts.map((post, index) => (
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

        {/* 3-Column List Posts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            {listPostsCol1.map((post, index) => (
              <div 
                key={index} 
                onClick={() => window.open(post.link, '_blank')}
                className="flex items-center space-x-4 group cursor-pointer bg-white p-3 rounded-lg border border-gray-100 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative w-28 h-20 shrink-0 rounded overflow-hidden bg-zinc-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h4 className="text-[13px] font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug mb-1.5">
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

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            {listPostsCol2.map((post, index) => (
              <div 
                key={index} 
                onClick={() => window.open(post.link, '_blank')}
                className="flex items-center space-x-4 group cursor-pointer bg-white p-3 rounded-lg border border-gray-100 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative w-28 h-20 shrink-0 rounded overflow-hidden bg-zinc-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h4 className="text-[13px] font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug mb-1.5">
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

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            {listPostsCol3.map((post, index) => (
              <div 
                key={index} 
                onClick={() => window.open(post.link, '_blank')}
                className="flex items-center space-x-4 group cursor-pointer bg-white p-3 rounded-lg border border-gray-100 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative w-28 h-20 shrink-0 rounded overflow-hidden bg-zinc-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h4 className="text-[13px] font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug mb-1.5">
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

      </div>
    </div>
  );
};

export default RssNewsSection;