import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiChevronDown, 
  FiSearch, 
  FiMenu, 
  FiX 
} from 'react-icons/fi';

const Navbar = ({ onSubscribeClick, onLoginClick, onSignUpClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  
  // Search functionality states
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Menu Data with categories and posts
  const menuData = {
    'AI Security': {
      path: '/category/ai-security',
      subCategories: ['All', 'Threats', 'Defenses', 'Compliance'],
      posts: {
        'All': [
          { title: 'Securing next-generation neural networks...', author: 'admin', date: 'Apr 19, 2026', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop', isFeatured: true, link: '/post/1' },
          { title: 'Understanding adversarial machine learning', author: 'dailynews', date: 'Apr 18, 2026', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop', isFeatured: true, link: '/post/2' }
        ],
        'Threats': [
          { title: 'Securing next-generation neural networks...', author: 'admin', date: 'Apr 19, 2026', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop', isFeatured: true, link: '/post/1' }
        ],
        'Defenses': [
          { title: 'Understanding adversarial machine learning', author: 'dailynews', date: 'Apr 18, 2026', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop', isFeatured: true, link: '/post/2' }
        ],
        'Compliance': []
      }
    },
    'Start-Up': {
      path: '/category/start-up',
      subCategories: ['All', 'Funding', 'Growth', 'Strategy'],
      posts: {
        'All': [
          { title: 'How early-stage tech startups secure seed funding', author: 'dailynews', date: 'Apr 19, 2026', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop', isFeatured: false, link: '/post/8' }
        ],
        'Funding': [{ title: 'How early-stage tech startups secure seed funding', author: 'dailynews', date: 'Apr 19, 2026', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop', isFeatured: false, link: '/post/8' }],
        'Growth': [],
        'Strategy': []
      }
    },
    'Tech News': {
      path: '/category/tech-news',
      subCategories: ['All', 'Hardware', 'Software', 'AI'],
      posts: {
        'All': [{ title: 'Breakthroughs in quantum processing units', author: 'dailynews', date: 'Apr 19, 2026', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop', isFeatured: true, link: '/post/10' }],
        'Hardware': [{ title: 'Breakthroughs in quantum processing units', author: 'dailynews', date: 'Apr 19, 2026', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop', isFeatured: true, link: '/post/10' }],
        'Software': [],
        'AI': []
      }
    },
    'Interview': {
      path: '/category/interview',
      subCategories: ['All', 'Founders', 'Engineers', 'Researchers'],
      posts: {
        'All': [{ title: 'Exclusive chat with leading AI architects', author: 'dailynews', date: 'Apr 19, 2026', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop', isFeatured: true, link: '/post/15' }],
        'Founders': [],
        'Engineers': [],
        'Researchers': []
      }
    },
    'More': {
      path: '/category/more',
      subCategories: ['All', 'Resources', 'Podcasts', 'Community'],
      posts: {
        'All': [{ title: 'Explore additional tech guides and community resources', author: 'dailynews', date: 'Apr 19, 2026', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop', isFeatured: false, link: '/post/20' }],
        'Resources': [],
        'Podcasts': [],
        'Community': []
      }
    }
  };

  const categories = ['AI Security', 'Start-Up', 'Tech News', 'Article', 'Interview', 'Upcoming Tech Event', 'Tech Leadership', 'More'];

  const getCurrentSubCategory = (category) => {
    return activeSubCategory[category] || 'All';
  };

  const handleSubCategoryHover = (category, sub) => {
    setActiveSubCategory(prev => ({ ...prev, [category]: sub }));
  };

  const allPosts = Object.values(menuData).flatMap(cat => 
    Object.values(cat.posts || {}).flat()
  );

  const filteredSearchResults = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header 
      className="w-full select-none relative bg-white shadow-md" 
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      {/* Top Utility Bar */}
      <div className="bg-[#111111] text-gray-300 px-4 md:px-6 py-2 text-[11px] sm:text-[12px] md:text-[13px] font-[600] flex justify-between items-center">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/Book" className="hidden sm:inline-block hover:text-white transition-colors">Book</Link>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
          <div className="flex items-center space-x-1.5">
            <button 
              onClick={onLoginClick}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none text-inherit font-inherit p-0"
            >
              Log In
            </button>
            <span>/</span>
            <button 
              onClick={onSignUpClick}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-none text-inherit font-inherit p-0"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white text-zinc-900 px-4 md:px-8 py-2 flex items-center justify-between border-b border-gray-100 relative">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer py-1">
          <img 
            src="app.png" 
            alt="iTiN Pakistan Logo" 
            className="h-10 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center space-x-5 text-[13px] font-[600]">
          <Link to="/" className="hover:text-[#0D7AD8] transition-colors">HOME</Link>
          
          {categories.map((item) => {
            const hasDropdown = menuData[item] !== undefined;
            const itemPath = hasDropdown ? menuData[item].path : `/category/${item.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <div 
                key={item} 
                className="relative py-2 cursor-pointer"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
              >
                <Link 
                  to={itemPath}
                  className={`flex items-center space-x-1 uppercase transition-colors ${activeDropdown === item ? 'text-[#0D7AD8]' : 'hover:text-[#0D7AD8]'}`}
                >
                  <span>{item}</span>
                  {hasDropdown && <FiChevronDown className="w-3.5 h-3.5 mt-0.5" />}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-5">
          <button 
            onClick={() => setSearchOpen(true)}
            className="p-2 cursor-pointer hover:text-[#0D7AD8] transition-colors focus:outline-none"
          >
            <FiSearch className="w-5 h-5 text-zinc-900" />
          </button>
          
          <button 
            onClick={onSubscribeClick}
            className="hidden sm:block bg-[#111111] text-white px-3.5 md:px-5 py-2 rounded-lg text-[11px] md:text-[13px] font-[700] tracking-wide hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            SUBSCRIBE
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 text-zinc-900 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Functional Search Overlay Modal */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl p-4 sm:p-6 z-50">
          <div className="max-w-3xl mx-auto flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div className="flex items-center space-x-3 w-full">
                <FiSearch className="w-5 h-5 text-zinc-400" />
                <input 
                  type="text"
                  placeholder="Type to search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-sm sm:text-base outline-none text-zinc-900 bg-transparent placeholder-zinc-400 font-medium"
                />
              </div>
              <button 
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="p-1 text-zinc-500 hover:text-zinc-900 cursor-pointer focus:outline-none"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Search Results List */}
            {searchQuery.trim() !== '' && (
              <div className="max-h-60 overflow-y-auto space-y-2">
                {filteredSearchResults.length > 0 ? (
                  filteredSearchResults.map((post, idx) => (
                    <Link 
                      key={idx}
                      to={post.link}
                      onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                    >
                      <img src={post.image} alt={post.title} className="w-12 h-10 object-cover rounded" />
                      <div>
                        <h5 className="text-[13px] font-bold text-zinc-900 line-clamp-1">{post.title}</h5>
                        <span className="text-[11px] text-zinc-400">{post.author} • {post.date}</span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-4 text-zinc-400 text-sm">
                    No articles found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Mega Menu Dropdown */}
      {activeDropdown && menuData[activeDropdown] && (
        <div 
          className="hidden xl:flex absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-8 px-12 z-50"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="w-64 border-r border-gray-100 pr-8 space-y-3">
            {menuData[activeDropdown].subCategories.map((sub) => {
              const isSelected = getCurrentSubCategory(activeDropdown) === sub;
              return (
                <div 
                  key={sub} 
                  onMouseEnter={() => handleSubCategoryHover(activeDropdown, sub)}
                  className={`text-[14px] cursor-pointer py-1.5 transition-colors ${isSelected ? 'text-[#0D7AD8] font-bold' : 'text-zinc-700 font-semibold hover:text-[#0D7AD8]'}`}
                >
                  {sub}
                </div>
              );
            })}
          </div>

          <div className="flex-1 pl-10 grid grid-cols-4 gap-6">
            {menuData[activeDropdown].posts[getCurrentSubCategory(activeDropdown)]?.length > 0 ? (
              menuData[activeDropdown].posts[getCurrentSubCategory(activeDropdown)].map((post, index) => (
                <Link 
                  key={index} 
                  to={post.link}
                  onClick={() => setActiveDropdown(null)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-md mb-3 aspect-[16/10] bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.isFeatured && (
                      <span className="absolute top-2 right-2 bg-zinc-900/70 text-amber-400 p-1 rounded-full text-xs">
                        ⭐
                      </span>
                    )}
                  </div>
                  <h4 className="text-[13px] font-bold text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <div className="text-[11px] text-zinc-400 flex items-center space-x-2">
                    <span className="font-medium text-zinc-600">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-4 flex items-center justify-center text-zinc-400 text-sm py-10">
                No posts found for this category.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl max-h-[80vh] overflow-y-auto px-6 py-4 flex flex-col space-y-4 z-50">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-bold text-zinc-900 hover:text-[#0D7AD8] py-1 border-b border-gray-100">
            HOME
          </Link>

          {categories.map((item) => {
            const hasDropdown = menuData[item] !== undefined;
            const itemPath = hasDropdown ? menuData[item].path : `/category/${item.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <div key={item} className="border-b border-gray-100 pb-2">
                <div className="flex justify-between items-center py-1">
                  <Link 
                    to={itemPath}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[14px] font-bold uppercase text-zinc-900 hover:text-[#0D7AD8] flex-1"
                  >
                    {item}
                  </Link>
                  {hasDropdown && (
                    <FiChevronDown 
                      onClick={() => setMobileSubmenu(mobileSubmenu === item ? null : item)}
                      className={`w-4 h-4 cursor-pointer transition-transform ${mobileSubmenu === item ? 'rotate-180 text-[#0D7AD8]' : ''}`} 
                    />
                  )}
                </div>

                {mobileSubmenu === item && menuData[item] && (
                  <div className="pl-4 pt-2 space-y-2 flex flex-col">
                    {menuData[item].subCategories.map((sub) => (
                      <Link 
                        key={sub} 
                        to={`${menuData[item].path}/${sub.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[13px] text-zinc-600 hover:text-[#0D7AD8] py-0.5 cursor-pointer"
                      >
                        - {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Extra links for mobile menu */}
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
            <button 
              onClick={() => { setMobileMenuOpen(false); onLoginClick && onLoginClick(); }}
              className="text-left text-[14px] font-bold text-zinc-900 hover:text-[#0D7AD8] py-1 cursor-pointer bg-transparent border-none"
            >
              Log In
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onSignUpClick && onSignUpClick(); }}
              className="text-left text-[14px] font-bold text-zinc-900 hover:text-[#0D7AD8] py-1 cursor-pointer bg-transparent border-none"
            >
              Sign Up
            </button>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-semibold text-zinc-600 hover:text-[#0D7AD8] py-1">
              Contact Us
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-[14px] font-semibold text-zinc-600 hover:text-[#0D7AD8] py-1">
              About Us
            </Link>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onSubscribeClick && onSubscribeClick(); }}
              className="w-full bg-[#111111] text-white py-2.5 rounded-lg text-[13px] font-[700] tracking-wide hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;