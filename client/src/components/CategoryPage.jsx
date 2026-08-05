import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = ({ categoryName, description, posts = [] }) => {
  return (
    <div 
      className="min-h-screen bg-white py-12 px-4 md:px-8 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto mb-12 border-b border-zinc-200 pb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-3">
          {categoryName}
        </h1>
        <p className="text-zinc-500 text-sm md:text-base max-w-2xl">
          {description || `Explore the latest updates, articles, and insights regarding ${categoryName}.`}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Link 
              key={index} 
              to={post.link}
              className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-sm line-clamp-2 mb-4">
                    {post.description || "Discover more details about this story and stay ahead with comprehensive tech reporting."}
                  </p>
                </div>
                <div className="text-xs text-zinc-400 flex items-center space-x-2 border-t border-zinc-100 pt-4">
                  <span className="font-semibold text-zinc-700">{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-3 text-center py-20 text-zinc-400 text-base">
            No articles found in {categoryName} right now. Check back soon!
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;