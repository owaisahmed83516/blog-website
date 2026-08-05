import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const About = () => {
  const sidebarPosts = [
    { title: 'Initiatives for Environmental...', date: 'Dec 18, 2017', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=100&h=80&fit=crop' },
    { title: 'The Hypocrisy of the Philip...', date: 'Dec 18, 2017', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=80&fit=crop' },
    { title: 'In Egypt, Both Sexual Haras...', date: 'Dec 15, 2017', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&h=80&fit=crop' },
    { title: 'Found in Translation: Local ...', date: 'Dec 15, 2017', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=80&fit=crop' },
    { title: 'After Authorities Evict Beiji...', date: 'Dec 15, 2017', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=100&h=80&fit=crop' }
  ];

  const popularPosts = [
    { title: 'UNESCO Protects Balkan Grandma March Day Custom As Cultural Heritage', date: 'March 01, 2018', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=80&fit=crop' },
    { title: 'The Fall Of Chinese Internet Giant LeEco: Lessons Learned', date: 'March 01, 2018', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=80&fit=crop' }
  ];

  return (
    <div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: About Us Content */}
        <div className="lg:col-span-8 space-y-4">
          <h1 className="text-2xl font-bold text-[#0D7AD8] mb-4">About us</h1>
          
          <p className="text-sm text-[#333333] leading-relaxed">
            We are a leading digital media company dedicated to delivering exceptional content to our readers worldwide. With a team of talented writers, editors, and content creators, we cover the stories that matter most to you.
          </p>

          <p className="text-sm text-[#333333] leading-relaxed">
            Our platform features in-depth analysis, breaking news, expert opinions, and engaging multimedia content. We pride ourselves on our commitment to accuracy, fairness, and transparency in our reporting.
          </p>

          <p className="text-sm text-[#333333] leading-relaxed">
            What sets us apart is our focus on quality over quantity. Every article is carefully researched, fact-checked, and edited to ensure we deliver the most reliable information to our audience. We believe that informed readers make better decisions, and we strive to be your trusted source of information.
          </p>

          <p className="text-sm text-[#333333] leading-relaxed">
            Join us on our journey as we continue to grow and evolve. We are always looking for ways to improve and better serve our community. Your feedback and support are what drive us to be better every day.
          </p>
        </div>

        {/* Right Column: Exact Matching Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Sidebar Posts */}
          <div className="space-y-3">
            {sidebarPosts.map((post, idx) => (
              <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                <img src={post.image} alt={post.title} className="w-[85px] h-[60px] object-cover rounded-sm flex-shrink-0" />
                <div>
                  <h4 className="text-[13px] font-bold text-[#333333] group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h4>
                  <div className="text-[11px] text-[#999999] flex items-center space-x-1 mt-1">
                    <FiCalendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Advertisement Banner Box */}
          <div className="relative rounded-sm overflow-hidden bg-zinc-900 h-[250px] flex flex-col items-center justify-center p-6 text-center shadow-sm group cursor-pointer">
            <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="relative z-10 space-y-3">
              <div className="border-2 border-white px-4 py-1 inline-block">
                <h3 className="text-white font-extrabold tracking-widest text-lg">HOT MAG</h3>
              </div>
              <p className="text-[11px] text-zinc-300 tracking-wider">
                fashion / sport / design / travel / games<br />tech / blog and much more
              </p>
              <div className="pt-2">
                <span className="bg-white text-zinc-900 font-bold text-xs px-4 py-1.5 rounded-xs tracking-wider hover:bg-[#0D7AD8] hover:text-white transition-colors">
                  BUY NOW
                </span>
              </div>
            </div>
            <span className="absolute bottom-2 right-2 text-[10px] text-zinc-400 z-10">300 x 250 ads</span>
          </div>

          {/* Popular Posts Section */}
          <div className="pt-2">
            <div className="relative border-b-2 border-[#0D7AD8] pb-0 mb-4">
              <span className="bg-[#0D7AD8] text-white px-3 py-1.5 font-bold text-[11px] uppercase tracking-wider inline-block">
                POPULAR POSTS
              </span>
            </div>
            
            <div className="space-y-3">
              {popularPosts.map((post, idx) => (
                <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                  <img src={post.image} alt={post.title} className="w-[85px] h-[60px] object-cover rounded-sm flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-bold text-[#333333] group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <div className="text-[11px] text-[#999999] flex items-center space-x-1 mt-1">
                      <FiCalendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;