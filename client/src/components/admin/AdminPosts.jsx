import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiHome, 
  FiLayout, 
  FiMenu, 
  FiFileText, 
  FiPlusSquare, 
  FiUploadCloud, 
  FiLayers, 
  FiRss, 
  FiGrid, 
  FiTag, 
  FiCpu, 
  FiChevronDown, 
  FiChevronUp,
  FiExternalLink, 
  FiSun, 
  FiMoon,
  FiMonitor,
  FiGlobe,
  FiUser,
  FiSettings,
  FiLock,
  FiLogOut,
  FiFilter,
  FiPlus,
  FiChevronRight,
  FiChevronLeft,
  FiCheckSquare,
  FiImage,
  FiSend,
  FiAward,
  FiDollarSign,
  FiSquare,
  FiUsers,
  FiUserCheck,
  FiShield,
  FiTool,
  FiPieChart,
  FiHardDrive,
  FiZap,
  FiDatabase,
  FiCheckCircle,
  FiMessageSquare,
  FiBarChart,
  FiSearch,
  FiMail,
  FiSliders,
  FiAward as FiBadgeIcon
} from 'react-icons/fi';

export default function AdminPosts() {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [theme, setTheme] = useState('light');

  // Sidebar Dropdown States
  const [showPostsDropdown, setShowPostsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showSecurityDropdown, setShowSecurityDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  // Row Select Dropdowns State
  const [openSelectRow, setOpenSelectRow] = useState(null);

  // New Search and Filter States added here
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Theme change handling
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const handleLogout = () => {
    navigate('/');
  };

  // Mock Data for Posts Table matching the screenshot
  const postsData = [
    { id: 131, title: 'Riding a bike is a delightful and invigorating experience', category: 'Sport • English', author: 'dailynews', format: 'Article', views: 58, date: '2026-04-19 14:19', edited: '3 months ago', badges: ['Premium', 'Slider'] },
    { id: 130, title: 'Midnight ride through the dark city', category: 'Videos • English', author: 'dailynews', format: 'Video', views: 99, date: '2026-04-19 14:05', edited: '3 months ago', badges: ['Featured'] },
    { id: 129, title: 'The beach, a captivating and idyllic destination', category: 'Nature • English', author: 'dailynews', format: 'Gallery', views: 76, date: '2026-04-19 13:58', edited: '', badges: [] },
    { id: 128, title: 'The arrival of winter heralds a shift in the landscape', category: 'Sport • English', author: 'dailynews', format: 'Article', views: 33, date: '2026-04-19 13:49', edited: '', badges: ['Featured'] },
    { id: 127, title: 'The evolution of dress fashion over time', category: 'Clothes • English', author: 'dailynews', format: 'Table of Contents', views: 75, date: '2026-04-19 13:39', edited: '', badges: ['Breaking News'] },
    { id: 126, title: 'Silent rain over the city at night', category: 'Videos • English', author: 'dailynews', format: 'Video', views: 42, date: '2026-04-19 13:32', edited: '3 months ago', badges: [] },
    { id: 125, title: 'Neon Waves Live Concert 2026', category: 'Travel • English', author: 'dailynews', format: 'Event', views: 149, date: '2026-04-19 13:21', edited: '3 months ago', badges: ['Premium', 'Slider', 'Breaking News'] },
    { id: 124, title: 'Riding a bike is a sensory experience', category: 'Sport • English', author: 'dailynews', format: 'Article', views: 37, date: '2026-04-19 13:14', edited: '', badges: ['Breaking News'] },
    { id: 123, title: 'In its purest form, running is a celebration of freedom', category: 'Sport • English', author: 'dailynews', format: 'Article', views: 20, date: '2026-04-19 13:12', edited: '', badges: [] },
    { id: 122, title: 'Crafting visual perfection in a modern workspace', category: 'Videos • English', author: 'dailynews', format: 'Video', views: 42, date: '2026-04-19 13:05', edited: '', badges: [] },
    { id: 121, title: 'Which country do you want to visit the most?', category: 'Quizzes • English', author: 'dailynews', format: 'Poll', views: 94, date: '2026-04-19 08:16', edited: '3 months ago', badges: ['Premium', 'Featured', 'Breaking News'] },
    { id: 120, title: 'What is your favorite movie?', category: 'Quizzes • English', author: 'dailynews', format: 'Poll', views: 48, date: '2026-04-19 08:15', edited: '', badges: ['Breaking News'] },
    { id: 119, title: 'Are you logical or emotional?', category: 'Quizzes • English', author: 'dailynews', format: 'Personality Quiz', views: 60, date: '2026-04-19 08:07', edited: '3 months ago', badges: ['Featured', 'Breaking News'] },
    { id: 118, title: 'How well do you know the famous places in the world?', category: 'Quizzes • English', author: 'dailynews', format: 'Trivia Quiz', views: 36, date: '2026-04-19 07:59', edited: '', badges: ['Breaking News'] },
    { id: 117, title: 'A dark cinematic journey through sound', category: 'Fashion • English', author: 'dailynews', format: 'Audio', views: 60, date: '2026-04-19 07:06', edited: '', badges: ['Slider'] },
    { id: 116, title: 'The sea is a realm of constant change', category: 'Photography • English', author: 'dailynews', format: 'Article', views: 137, date: '2026-04-19 07:01', edited: '3 months ago', badges: ['Premium', 'Featured'] },
    { id: 115, title: 'Quantum computing revolutionizing information processing', category: 'Life Style • English', author: 'dailynews', format: 'Table of Contents', views: 91, date: '2026-04-19 06:57', edited: '', badges: ['Breaking News'] },
    { id: 114, title: 'Future Creators Festival 2026', category: 'Life Style • English', author: 'dailynews', format: 'Event', views: 57, date: '2026-04-19 05:59', edited: '3 months ago', badges: [] },
    { id: 113, title: 'Creamy spinach and mushroom quiche', category: 'Recipes • English', author: 'dailynews', format: 'Recipe', views: 48, date: '2026-04-18 22:27', edited: '', badges: ['Premium', 'Featured'] },
    { id: 112, title: 'Sitting across from a dear friend', category: 'Photography • English', author: 'dailynews', format: 'Article', views: 47, date: '2026-04-18 22:16', edited: '3 months ago', badges: ['Premium', 'Slider'] }
  ];

  // Filter logic implemented for Search query & Format/Category selectors
  const filteredPosts = postsData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.id.toString().includes(searchQuery);
    
    const matchesFormat = selectedFormat === 'All' || post.format === selectedFormat;
    const matchesCategory = selectedCategory === 'All' || post.category.includes(selectedCategory);

    return matchesSearch && matchesFormat && matchesCategory;
  });

  return (
    <div className="flex h-screen bg-[#f4f6f9] dark:bg-[#121212] overflow-hidden text-zinc-800 dark:text-zinc-100 transition-colors duration-200" style={{ fontFamily: '"Open Sans", system-ui, -apple-system, sans-serif' }}>
      
      {/* Custom Scrollbar Styles */}
      <style>{`
        aside::-webkit-scrollbar, div::-webkit-scrollbar {
          width: 5px;
        }
        aside::-webkit-scrollbar-track, div::-webkit-scrollbar-track {
          background: transparent;
        }
        aside::-webkit-scrollbar-thumb, div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        aside::-webkit-scrollbar-thumb:hover, div::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Sidebar */}
      <aside className="w-64 bg-[#111111] text-zinc-400 flex flex-col h-screen select-none overflow-y-auto shrink-0 border-r border-zinc-800">
        <div className="p-5 flex items-center space-x-2 border-b border-zinc-800 sticky top-0 bg-[#111111] z-10">
          <div className="w-8 h-8 rounded bg-[#10b981] flex items-center justify-center text-white font-black text-lg">
            V
          </div>
          <span className="text-white text-xl font-bold tracking-wide">Varient</span>
        </div>

        <div className="flex-1 px-4 py-6 space-y-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Dashboard</p>
            <nav className="space-y-1">
              <Link to="/admin" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiHome className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link to="/admin/themes" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiLayout className="w-4 h-4" />
                <span>Themes</span>
              </Link>
              <Link to="/admin/navigation" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiMenu className="w-4 h-4" />
                <span>Navigation</span>
              </Link>
              <Link to="/admin/pages" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiFileText className="w-4 h-4" />
                <span>Pages</span>
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Content Management</p>
            <nav className="space-y-1">
              <Link to="/admin/new-post" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiPlusSquare className="w-4 h-4" />
                <span>Add Post</span>
              </Link>
              <Link to="/admin/bulk-post-upload" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiUploadCloud className="w-4 h-4" />
                <span>Bulk Post Upload</span>
              </Link>

              {/* Posts Dropdown Menu */}
              <div>
                <div 
                  onClick={() => setShowPostsDropdown(!showPostsDropdown)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <FiLayers className="w-4 h-4" />
                    <span>Posts</span>
                  </div>
                  {showPostsDropdown ? <FiChevronUp className="w-3.5 h-3.5" /> : <FiChevronDown className="w-3.5 h-3.5" />}
                </div>

                {showPostsDropdown && (
                  <div className="pl-9 pr-2 py-1 space-y-1">
                    <Link to="/admin/posts" className="block px-3 py-2 rounded-lg bg-[#0D7AD8] text-white text-xs font-semibold transition-colors">
                      • Posts
                    </Link>
                    <Link to="/admin/pending-posts" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Pending Posts
                    </Link>
                    <Link to="/admin/scheduled-posts" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Scheduled Posts
                    </Link>
                    <Link to="/admin/events" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Events
                    </Link>
                    <Link to="/admin/drafts" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Drafts
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/admin/polls" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiCheckSquare className="w-4 h-4" />
                <span>Polls</span>
              </Link>

              <a href="/admin/rss" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiRss className="w-4 h-4" />
                <span>RSS Feeds</span>
              </a>
              <a href="#categories" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiGrid className="w-4 h-4" />
                <span>Categories</span>
              </a>
              <a href="/admin/tags" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiTag className="w-4 h-4" />
                <span>Tags</span>
              </a>
              <a href="admin/widgets" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiCpu className="w-4 h-4" />
                <span>Widgets</span>
              </a>
            </nav>
          </div>

          {/* Media Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Media</p>
            <nav className="space-y-1">
              <Link to="/admin/media" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiImage className="w-4 h-4" />
                <span>Media</span>
              </Link>

              {/* Gallery Dropdown */}
              <div>
                <div 
                  onClick={() => setShowGalleryDropdown(!showGalleryDropdown)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <FiLayers className="w-4 h-4" />
                    <span>Gallery</span>
                  </div>
                  {showGalleryDropdown ? <FiChevronUp className="w-3.5 h-3.5" /> : <FiChevronDown className="w-3.5 h-3.5" />}
                </div>

                {showGalleryDropdown && (
                  <div className="pl-9 pr-2 py-1 space-y-1">
                    <Link to="/admin/gallery/images" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Images
                    </Link>
                    <Link to="/admin/gallery/albums" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Albums
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Community Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Community</p>
            <nav className="space-y-1">
              <Link to="/admin/contact-messages" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiMail className="w-4 h-4" />
                <span>Contact Messages</span>
              </Link>
              <Link to="/admin/comments" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiMessageSquare className="w-4 h-4" />
                <span>Comments</span>
              </Link>
              <Link to="/admin/newsletter" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiSend className="w-4 h-4" />
                <span>Newsletter</span>
              </Link>
            </nav>
          </div>

          {/* Monetization Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Monetization</p>
            <nav className="space-y-1">
              <Link to="/admin/premium-membership" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiAward className="w-4 h-4" />
                <span>Premium Membership</span>
              </Link>
              <Link to="/admin/reward-system" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiDollarSign className="w-4 h-4" />
                <span>Reward System</span>
              </Link>
              <Link to="/admin/ad-spaces" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiSquare className="w-4 h-4" />
                <span>Ad Spaces</span>
              </Link>
              <Link to="/admin/my-earnings" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiDollarSign className="w-4 h-4" />
                <span>My Earnings</span>
              </Link>
            </nav>
          </div>

          {/* Users & Permissions Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Users & Permissions</p>
            <nav className="space-y-1">
              <Link to="/admin/users" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiUsers className="w-4 h-4" />
                <span>Users</span>
              </Link>
              <Link to="/admin/premium-users" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiUserCheck className="w-4 h-4" />
                <span>Premium Users</span>
              </Link>
              <Link to="/admin/author-applications" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiCheckCircle className="w-4 h-4" />
                <span>Author Applications</span>
              </Link>
              <Link to="/admin/roles-permissions" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiShield className="w-4 h-4" />
                <span>Roles & Permissions</span>
              </Link>
              <Link to="/admin/badges" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiBadgeIcon className="w-4 h-4" />
                <span>Badges</span>
              </Link>
            </nav>
          </div>

          {/* System Tools Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">System Tools</p>
            <nav className="space-y-1">
              <Link to="/admin/seo-tools" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiTool className="w-4 h-4" />
                <span>SEO Tools</span>
              </Link>
              <Link to="/admin/google-news" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiGlobe className="w-4 h-4" />
                <span>Google News</span>
              </Link>
              <Link to="/admin/storage" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiHardDrive className="w-4 h-4" />
                <span>Storage</span>
              </Link>
              <Link to="/admin/cache-system" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiZap className="w-4 h-4" />
                <span>Cache System</span>
              </Link>
            </nav>
          </div>

          {/* Settings Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Settings</p>
            <nav className="space-y-1">
              
              {/* Security Dropdown */}
              <div>
                <div 
                  onClick={() => setShowSecurityDropdown(!showSecurityDropdown)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <FiShield className="w-4 h-4" />
                    <span>Security</span>
                  </div>
                  {showSecurityDropdown ? <FiChevronUp className="w-3.5 h-3.5" /> : <FiChevronDown className="w-3.5 h-3.5" />}
                </div>

                {showSecurityDropdown && (
                  <div className="pl-9 pr-2 py-1 space-y-1">
                    <Link to="/admin/security/general" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • General Security
                    </Link>
                    <Link to="/admin/security/activity-logs" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Activity Logs
                    </Link>
                  </div>
                )}
              </div>

              {/* Settings Dropdown */}
              <div>
                <div 
                  onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <FiSliders className="w-4 h-4" />
                    <span>Settings</span>
                  </div>
                  {showSettingsDropdown ? <FiChevronUp className="w-3.5 h-3.5" /> : <FiChevronDown className="w-3.5 h-3.5" />}
                </div>

                {showSettingsDropdown && (
                  <div className="pl-9 pr-2 py-1 space-y-1">
                    <Link to="/admin/settings/general" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • General Settings
                    </Link>
                    <Link to="/admin/settings/email" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Email Settings
                    </Link>
                    <Link to="/admin/settings/social" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Social Logins
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/admin/database-backup" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiDatabase className="w-4 h-4" />
                <span>Database Backup</span>
              </Link>
            </nav>
          </div>

        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <header className="h-16 bg-white dark:bg-[#1e1e1e] border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 shadow-xs z-10 relative transition-colors duration-200">
          <button className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 cursor-pointer focus:outline-none">
            <FiMenu className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-4">
            <Link to="/" title="View Site" className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors">
              <FiExternalLink className="w-5 h-5" />
            </Link>

            {/* Theme Toggle */}
            <div className="relative" onMouseEnter={() => setShowThemeMenu(true)} onMouseLeave={() => setShowThemeMenu(false)}>
              <button className="p-2 text-[#0D7AD8] bg-blue-50 dark:bg-zinc-800 hover:bg-blue-100 rounded-lg cursor-pointer transition-colors flex items-center justify-center">
                <FiSun className="w-5 h-5" />
              </button>

              {showThemeMenu && (
                <div className="absolute right-0 top-full w-44 bg-white dark:bg-[#252525] rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-700 py-2 z-50">
                  <button onClick={() => setTheme('light')} className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer text-left ${theme === 'light' ? 'text-[#0D7AD8] bg-blue-50/50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}>
                    <FiSun className="w-4 h-4" />
                    <span>Light</span>
                  </button>
                  <button onClick={() => setTheme('dark')} className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer text-left ${theme === 'dark' ? 'text-[#0D7AD8] bg-blue-50/50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}>
                    <FiMoon className="w-4 h-4" />
                    <span>Dark</span>
                  </button>
                  <button onClick={() => setTheme('system')} className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer text-left ${theme === 'system' ? 'text-[#0D7AD8] bg-blue-50/50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}>
                    <FiMonitor className="w-4 h-4" />
                    <span>System</span>
                  </button>
                </div>
              )}
            </div>

            <button className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors">
              <FiGlobe className="w-5 h-5" />
            </button>
            
            {/* Profile Menu */}
            <div className="relative" onMouseEnter={() => setShowProfileMenu(true)} onMouseLeave={() => setShowProfileMenu(false)}>
              <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Admin" className="w-full h-full object-cover" />
              </div>

              {showProfileMenu && (
                <div className="absolute right-0 top-full w-72 bg-white dark:bg-[#252525] rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-700 py-2 z-50">
                  <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-700 flex items-center space-x-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Admin" className="w-11 h-11 rounded-full object-cover" />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-zinc-900 dark:text-white text-sm">admin</span>
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">Super Admin</span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">admin@codingest.net</p>
                    </div>
                  </div>
                  <div className="py-1">
                    <a href="#profile" className="flex items-center space-x-3 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                      <FiUser className="w-4 h-4 text-zinc-400" />
                      <span>Profile</span>
                    </a>
                  </div>
                  <div className="border-t border-zinc-100 dark:border-zinc-700 pt-1">
                    <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer text-left">
                      <FiLogOut className="w-4 h-4 text-red-500" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Posts Page Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Breadcrumb & Header Title Area */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Posts</h1>
              <div className="flex items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                <Link to="/admin" className="hover:text-[#0D7AD8]">Home</Link>
                <span>/</span>
                <span className="text-zinc-700 dark:text-zinc-200 font-medium">Posts</span>
              </div>
            </div>

            {/* Top Action Buttons (Filter Modal Toggle & Add Post) */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowFilterModal(!showFilterModal)}
                className="flex items-center space-x-2 bg-white dark:bg-[#1e1e1e] border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs font-bold px-4 py-2.5 rounded-lg shadow-2xs transition-colors cursor-pointer"
              >
                <FiFilter className="w-3.5 h-3.5 text-zinc-500" />
                <span>Filter</span>
              </button>
              <Link to="/admin/new-post" className="flex items-center space-x-2 bg-[#0D7AD8] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-2xs transition-colors cursor-pointer">
                <FiPlus className="w-4 h-4" />
                <span>Add Post</span>
              </Link>
            </div>
          </div>

          {/* Added Filter Bar Panel (Toggled via Filter Button) */}
          {showFilterModal && (
            <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-4 items-center transition-all">
              <div className="flex flex-col space-y-1">
                <label className="text-[11px] font-bold text-zinc-400 uppercase">Filter by Format</label>
                <select 
                  value={selectedFormat} 
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-1.5 text-xs outline-none cursor-pointer text-zinc-700 dark:text-zinc-200"
                >
                  <option value="All">All Formats</option>
                  <option value="Article">Article</option>
                  <option value="Video">Video</option>
                  <option value="Gallery">Gallery</option>
                  <option value="Poll">Poll</option>
                  <option value="Event">Event</option>
                  <option value="Recipe">Recipe</option>
                </select>
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-[11px] font-bold text-zinc-400 uppercase">Filter by Category</label>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-1.5 text-xs outline-none cursor-pointer text-zinc-700 dark:text-zinc-200"
                >
                  <option value="All">All Categories</option>
                  <option value="Sport">Sport</option>
                  <option value="Videos">Videos</option>
                  <option value="Nature">Nature</option>
                  <option value="Travel">Travel</option>
                  <option value="Quizzes">Quizzes</option>
                  <option value="Life Style">Life Style</option>
                </select>
              </div>

              <div className="flex items-end self-end">
                <button 
                  onClick={() => { setSelectedFormat('All'); setSelectedCategory('All'); setSearchQuery(''); }}
                  className="text-xs text-[#0D7AD8] font-semibold hover:underline px-2 py-1.5"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}

          {/* Posts Main Table Card */}
          <div className="bg-white dark:bg-[#1e1e1e] rounded-xl shadow-xs border border-zinc-200 dark:border-zinc-800 p-5">
            
            {/* Table Entries Selector & Added Live Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 gap-3">
              <div className="flex items-center space-x-2 text-xs text-zinc-500 w-full sm:w-auto">
                <select className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded px-2.5 py-1 text-xs font-semibold outline-none cursor-pointer">
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>

              {/* Added Real-time Search Bar Input */}
              <div className="relative w-full sm:w-72">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
                  <FiSearch className="w-3.5 h-3.5" />
                </span>
                <input 
                  type="text"
                  placeholder="Search posts by title, author, ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg pl-9 pr-4 py-1.5 text-xs text-zinc-800 dark:text-zinc-100 outline-none focus:border-[#0D7AD8] transition-colors"
                />
              </div>
            </div>

            {/* Table Grid */}
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-400 font-bold uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-2 w-16">ID</th>
                    <th className="py-3 px-3">Post</th>
                    <th className="py-3 px-3">Post Format</th>
                    <th className="py-3 px-3">Pageviews</th>
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-3 text-right">Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 transition-colors group">
                        
                        {/* ID */}
                        <td className="py-3.5 px-2 text-zinc-500 font-semibold align-middle">
                          {post.id}
                        </td>

                        {/* Post Content */}
                        <td className="py-3.5 px-3 align-middle">
                          <div className="flex items-center space-x-3.5">
                            <div className="w-16 h-11 bg-zinc-200 dark:bg-zinc-800 rounded-md overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-700">
                              <img 
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&h=80&fit=crop" 
                                alt="Thumbnail" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <Link to={`/admin/post/${post.id}`} className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-[#0D7AD8] dark:hover:text-[#0D7AD8] line-clamp-1 text-xs">
                                {post.title}
                              </Link>
                              <div className="flex items-center flex-wrap gap-1.5 mt-1">
                                <span className="text-[11px] text-zinc-400 font-medium">
                                  <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{post.author}</span> • {post.category}
                                </span>
                                
                                {post.badges.includes('Premium') && (
                                  <span className="bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 text-[9px] font-bold px-1.5 py-0.5 rounded">Premium</span>
                                )}
                                {post.badges.includes('Slider') && (
                                  <span className="bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 text-[9px] font-bold px-1.5 py-0.5 rounded">Slider</span>
                                )}
                                {post.badges.includes('Featured') && (
                                  <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded">Featured</span>
                                )}
                                {post.badges.includes('Breaking News') && (
                                  <span className="bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 text-[9px] font-bold px-1.5 py-0.5 rounded">Breaking News</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Post Format */}
                        <td className="py-3.5 px-3 text-zinc-600 dark:text-zinc-300 font-medium align-middle">
                          {post.format}
                        </td>

                        {/* Pageviews */}
                        <td className="py-3.5 px-3 text-zinc-600 dark:text-zinc-300 font-semibold align-middle">
                          {post.views}
                        </td>

                        {/* Date & Edited Info */}
                        <td className="py-3.5 px-3 text-zinc-500 text-[11px] align-middle">
                          <div>{post.date}</div>
                          {post.edited && (
                            <div className="text-[10px] text-zinc-400 mt-0.5">Edited: {post.edited}</div>
                          )}
                        </td>

                        {/* Options Dropdown Button */}
                        <td className="py-3.5 px-3 text-right align-middle relative">
                          <div className="relative inline-block text-left">
                            <button 
                              onClick={() => setOpenSelectRow(openSelectRow === post.id ? null : post.id)}
                              className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 font-medium px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1.5 cursor-pointer shadow-2xs"
                            >
                              <span>Select</span>
                              <FiChevronDown className="w-3 h-3" />
                            </button>

                            {openSelectRow === post.id && (
                              <div className="absolute right-0 mt-1 w-36 bg-white dark:bg-[#252525] rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-700 py-1.5 z-30 text-left">
                                <button className="w-full px-4 py-1.5 text-xs text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Edit</button>
                                <button className="w-full px-4 py-1.5 text-xs text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Add to Slider</button>
                                <button className="w-full px-4 py-1.5 text-xs text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Add to Featured</button>
                                <button className="w-full px-4 py-1.5 text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">Delete</button>
                              </div>
                            )}
                          </div>
                        </td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-8 text-center text-zinc-400 text-xs">
                        No posts found matching your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-5 border-t border-zinc-100 dark:border-zinc-800 gap-4">
              <p className="text-xs text-zinc-400">Showing {filteredPosts.length > 0 ? 1 : 0} to {filteredPosts.length} of {postsData.length} entries</p>
              
              <div className="flex items-center space-x-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0D7AD8] text-white font-bold text-xs shadow-2xs cursor-pointer">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold text-xs transition-colors cursor-pointer">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold text-xs transition-colors cursor-pointer">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium text-xs transition-colors cursor-pointer">
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Footer Copyright */}
          <div className="pt-4 pb-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
            <p>Copyright 2026 Varient - All Rights Reserved.</p>
            <p className="mt-2 sm:mt-0">Version 3.1</p>
          </div>

        </main>
      </div>

    </div>
  );
}