import React from 'react';
import { FiMessageSquare, FiEye } from 'react-icons/fi';

const TechSection = () => {
  const techPosts = [
    {
      title: 'Exploring the latest advancements in artificial intelligence',
      excerpt: 'Artificial intelligence continues to reshape industries through automation and deep learning models...',
      author: 'admin',
      date: 'Apr 19, 2026',
      comments: 2,
      views: 145,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop',
      isFeatured: true,
      link: '#'
    },
    {
      title: 'The future of web development with serverless architectures',
      excerpt: 'Serverless computing allows developers to build and run applications without managing servers...',
      author: 'dailynews',
      date: 'Apr 19, 2026',
      comments: 1,
      views: 92,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=600&fit=crop',
      isFeatured: false,
      link: '#'
    },
    {
      title: 'Cybersecurity best practices for modern web applications',
      excerpt: 'Securing user data and implementing robust authentication protocols is more critical than ever...',
      author: 'admin',
      date: 'Apr 18, 2026',
      comments: 4,
      views: 118,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=600&fit=crop',
      isFeatured: true,
      link: '#'
    }
  ];

  return (
    <div 
      className="w-full bg-[#f8f9fa] px-6 lg:px-12 py-6 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="pt-2">
          <div className="border-b border-gray-200 pb-3 mb-6 relative">
            <h2 className="text-xl font-bold text-zinc-900">Technology</h2>
            <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-[#0D7AD8]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techPosts.map((post, index) => (
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
                    <span className="absolute top-3 right-3 bg-black/60 text-amber-400 p-1.5 rounded-full text-xs shadow">⭐</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
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
        </div>
      </div>
    </div>
  );
};

export default TechSection;