import React from 'react';
import { 
  FaXTwitter, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaWhatsapp, 
  FaTiktok, 
  FaTelegram, 
  FaDiscord, 
  FaTwitch, 
  FaRss 
} from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { FiChevronUp } from 'react-icons/fi';

const Footer = () => {
  const trendingPosts = [
    {
      title: 'Our furry friends and faithful companions',
      author: 'dailynews',
      date: 'Apr 18, 2026',
      comments: 2,
      views: 170,
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&h=150&fit=crop',
      isFeatured: true
    },
    {
      title: 'Neon Waves Live Concert 2026',
      author: 'dailynews',
      date: 'Apr 19, 2026',
      comments: 5,
      views: 135,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=150&fit=crop',
      isFeatured: true
    },
    {
      title: 'The sea is a realm of constant change',
      author: 'admin',
      date: 'Apr 19, 2026',
      comments: 0,
      views: 109,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=150&fit=crop',
      isFeatured: true
    }
  ];

  const socialIcons = [
    <FaXTwitter key="x" />,
    <FaInstagram key="insta" />,
    <FaFacebookF key="fb" />,
    <FaYoutube key="yt" />,
    <FaWhatsapp key="wa" />,
    <FaTiktok key="tk" />,
    <FaTelegram key="tg" />,
    <FaDiscord key="dc" />,
    <FaTwitter key="tw" />,
    <FaTwitch key="twitch" />,
    <FaRss key="rss" />
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="w-full bg-[#111111] text-gray-300 select-none border-t border-zinc-800"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      {/* Main Footer Section (Full Width with padding) */}
      <div className="w-full py-16 px-6 lg:px-7 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand Info & Social Icons */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img 
              src="itinpakistan-logo.png" 
              alt="iTiN Pakistan Logo" 
              className="h-12 w-auto object-contain filter brightness-0 invert" 
            />
          </div>

          <p className="text-[13px] leading-relaxed text-gray-400 font-normal">
            Journalism has the power to inform, inspire, and spark meaningful conversations. Our team of experienced writers, journalists, and contributors is committed to delivering high-quality, compelling content for a diverse global audience.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {socialIcons.map((icon, index) => (
              <a 
                key={index} 
                href="#social" 
                className="w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#0D7AD8] hover:text-white text-gray-300 flex items-center justify-center transition-colors text-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Trending Posts */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-white text-[16px] font-bold tracking-wide">Trending Posts</h3>
          
          <div className="flex flex-col space-y-4">
            {trendingPosts.map((post, idx) => (
              <div key={idx} className="flex space-x-4 group cursor-pointer items-center">
                <div className="relative w-24 h-16 shrink-0 overflow-hidden rounded bg-zinc-800">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.isFeatured && (
                    <span className="absolute top-1 right-1 bg-black/60 text-amber-400 p-0.5 rounded-full text-[10px]">
                      ⭐
                    </span>
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <h4 className="text-[13px] font-bold text-white group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug mb-1">
                    {post.title}
                  </h4>
                  <div className="text-[11px] text-zinc-400 flex items-center space-x-2">
                    <span className="font-medium text-zinc-300">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>💬 {post.comments}</span>
                    <span>👁️ {post.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-white text-[16px] font-bold tracking-wide">Newsletter</h3>
          
          <p className="text-[13px] text-gray-400 leading-relaxed">
            Get the latest news and curated updates straight to your inbox. Sign up for our newsletter.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-[#1a1a1a] rounded-lg border border-zinc-800 overflow-hidden p-1">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent px-4 py-2 text-[13px] text-white focus:outline-none placeholder-zinc-500"
            />
            <button 
              type="submit" 
              className="bg-[#0D7AD8] hover:bg-[#0b65b2] text-white px-6 py-2 rounded-md text-[13px] font-bold transition-colors cursor-pointer shrink-0"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright Bar (Full Width with padding) */}
      <div className="border-t border-zinc-800/80 py-6 px-6 lg:px-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[13px] text-zinc-400">
          
          <p className="mb-4 md:mb-0">
            Copyright 2026 iTiN Pakistan - All Rights Reserved.
          </p>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#support" className="hover:text-white transition-colors">Support</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>

            <button 
              onClick={scrollToTop}
              className="w-9 h-9 rounded bg-[#1a1a1a] hover:bg-[#0D7AD8] hover:text-white text-zinc-400 flex items-center justify-center transition-colors cursor-pointer"
            >
              <FiChevronUp className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;