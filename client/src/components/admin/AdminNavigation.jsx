import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  FiMove,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiInfo,
  FiAlertCircle,
  FiCheckSquare,
  FiImage,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiAward,
  FiDollarSign,
  FiSquare,
  FiUsers,
  FiUserCheck,
  FiCheckCircle,
  FiShield,
  FiTool,
  FiHardDrive,
  FiZap,
  FiSliders,
  FiDatabase,
  FiBookmark as FiBadgeIcon
} from 'react-icons/fi';

export default function AdminNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [theme, setTheme] = useState('light');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  // Sidebar dropdown states
  const [showPostsDropdown, setShowPostsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showSecurityDropdown, setShowSecurityDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  // Form states for adding/updating a menu link
  const [linkTitle, setLinkTitle] = useState('');
  const [linkType, setLinkType] = useState('Category');
  const [linkCategory, setLinkCategory] = useState('Travel');

  // Initial navigation items based on the screenshot
  const [navItems, setNavItems] = useState([
    { id: 1, title: 'Home', type: 'Home', isStatic: true },
    { id: 2, title: 'Travel', type: 'Category' },
    { id: 3, title: 'Life Style', type: 'Category' },
    { id: 4, title: 'Fashion', type: 'Category' },
    { id: 5, title: 'Sport', type: 'Category' },
    { id: 6, title: 'Quizzes', type: 'Category' },
    { id: 7, title: 'RSS News', type: 'Category' },
    { id: 8, title: 'Videos', type: 'Category' },
    { id: 9, title: 'Gallery', type: 'Page' },
    { id: 10, title: 'Pages', type: 'Link' },
    { id: 11, title: 'External Links', type: 'Link' },
  ]);

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

  const handleAddMenuLink = (e) => {
    e.preventDefault();
    if (!linkTitle.trim()) return;
    const newItem = {
      id: Date.now(),
      title: linkTitle,
      type: linkType
    };
    setNavItems([...navItems, newItem]);
    setLinkTitle('');
  };

  const handleDeleteItem = (id) => {
    setNavItems(navItems.filter(item => item.id !== id));
  };

  return (
    <div className="flex h-screen bg-[#f4f6f9] dark:bg-[#121212] overflow-hidden text-zinc-800 dark:text-zinc-100 transition-colors duration-200" style={{ fontFamily: '"Open Sans", system-ui, -apple-system, sans-serif' }}>
      
      {/* Custom Scrollbar Styles for Sidebar */}
      <style>{`
        aside::-webkit-scrollbar {
          width: 5px;
        }
        aside::-webkit-scrollbar-track {
          background: transparent;
        }
        aside::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        aside::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Sidebar - Fully Scrollable */}
      <aside className="w-64 bg-[#111111] text-zinc-400 flex flex-col h-screen select-none overflow-y-auto shrink-0 border-r border-zinc-800">
        {/* Logo / Brand */}
        <div className="p-5 flex items-center space-x-2 border-b border-zinc-800 sticky top-0 bg-[#111111] z-10">
          <div className="w-8 h-8 rounded bg-[#10b981] flex items-center justify-center text-white font-black text-lg">
            V
          </div>
          <span className="text-white text-xl font-bold tracking-wide">Varient</span>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 px-4 py-6 space-y-6">
          
          {/* Dashboard Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Dashboard</p>
            <nav className="space-y-1">
              <Link 
                to="/admin" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiHome className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link 
                to="/admin/themes" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/themes" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiLayout className="w-4 h-4" />
                <span>Themes</span>
              </Link>
              <Link 
                to="/admin/navigation" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/navigation" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiMenu className="w-4 h-4" />
                <span>Navigation</span>
              </Link>
              <Link 
                to="/admin/pages" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/pages" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiFileText className="w-4 h-4" />
                <span>Pages</span>
              </Link>
            </nav>
          </div>

          {/* Content Management Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Content Management</p>
            <nav className="space-y-1">
              <Link 
                to="/admin/new-post" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/new-post" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiPlusSquare className="w-4 h-4" />
                <span>Add Post</span>
              </Link>
              <Link 
                to="/admin/bulk-post-upload" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/bulk-post-upload" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
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
                    <Link 
                      to="/admin/posts" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/posts" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • Posts
                    </Link>
                    <Link 
                      to="/admin/pending-posts" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/pending-posts" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • Pending Posts
                    </Link>
                    <Link 
                      to="/admin/scheduled-posts" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/scheduled-posts" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • Scheduled Posts
                    </Link>
                    <Link 
                      to="/admin/events" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/events" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • Events
                    </Link>
                    <Link 
                      to="/admin/drafts" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/drafts" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • Drafts
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/admin/polls" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/polls" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiCheckSquare className="w-4 h-4" />
                <span>Polls</span>
              </Link>

              <a 
                href="/admin/rss" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.hash === "/admin/rss" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiRss className="w-4 h-4" />
                <span>RSS Feeds</span>
              </a>
              <a 
                href="/admin/categories" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.hash === "/admin/categories" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiGrid className="w-4 h-4" />
                <span>Categories</span>
              </a>
              <a 
                href="/admin/tags" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.hash === "/admin/tags" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiTag className="w-4 h-4" />
                <span>Tags</span>
              </a>
              <a 
                href="admin/widgets" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.hash === "admin/widgets" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiCpu className="w-4 h-4" />
                <span>Widgets</span>
              </a>
            </nav>
          </div>

          {/* Media Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Media</p>
            <nav className="space-y-1">
              <Link 
                to="/admin/media" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/media" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
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
                    <Link 
                      to="/admin/gallery/images" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/gallery/images" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • Images
                    </Link>
                    <Link 
                      to="/admin/gallery/albums" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/gallery/albums" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
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
              <Link 
                to="/admin/contact-messages" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/contact-messages" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiMail className="w-4 h-4" />
                <span>Contact Messages</span>
              </Link>
              <Link 
                to="/admin/comments" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/comments" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiMessageSquare className="w-4 h-4" />
                <span>Comments</span>
              </Link>
              <Link 
                to="/admin/newsletter" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/newsletter" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiSend className="w-4 h-4" />
                <span>Newsletter</span>
              </Link>
            </nav>
          </div>

          {/* Monetization Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Monetization</p>
            <nav className="space-y-1">
              <Link 
                to="/admin/premium-membership" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/premium-membership" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiAward className="w-4 h-4" />
                <span>Premium Membership</span>
              </Link>
              <Link 
                to="/admin/reward-system" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/reward-system" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiDollarSign className="w-4 h-4" />
                <span>Reward System</span>
              </Link>
              <Link 
                to="/admin/ad-spaces" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/ad-spaces" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiSquare className="w-4 h-4" />
                <span>Ad Spaces</span>
              </Link>
              <Link 
                to="/admin/my-earnings" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/my-earnings" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiDollarSign className="w-4 h-4" />
                <span>My Earnings</span>
              </Link>
            </nav>
          </div>

          {/* Users & Permissions Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">Users & Permissions</p>
            <nav className="space-y-1">
              <Link 
                to="/admin/users" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/users" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiUsers className="w-4 h-4" />
                <span>Users</span>
              </Link>
              <Link 
                to="/admin/premium-users" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/premium-users" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiUserCheck className="w-4 h-4" />
                <span>Premium Users</span>
              </Link>
              <Link 
                to="/admin/author-applications" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/author-applications" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiCheckCircle className="w-4 h-4" />
                <span>Author Applications</span>
              </Link>
              <Link 
                to="/admin/roles-permissions" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/roles-permissions" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiShield className="w-4 h-4" />
                <span>Roles & Permissions</span>
              </Link>
              <Link 
                to="/admin/badges" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/badges" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiBadgeIcon className="w-4 h-4" />
                <span>Badges</span>
              </Link>
            </nav>
          </div>

          {/* System Tools Section */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-2">System Tools</p>
            <nav className="space-y-1">
              <Link 
                to="/admin/seo-tools" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/seo-tools" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiTool className="w-4 h-4" />
                <span>SEO Tools</span>
              </Link>
              <Link 
                to="/admin/google-news" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/google-news" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiGlobe className="w-4 h-4" />
                <span>Google News</span>
              </Link>
              <Link 
                to="/admin/storage" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/storage" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
                <FiHardDrive className="w-4 h-4" />
                <span>Storage</span>
              </Link>
              <Link 
                to="/admin/cache-system" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/cache-system" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
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
                    <Link 
                      to="/admin/security/general" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/security/general" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • General Security
                    </Link>
                    <Link 
                      to="/admin/security/activity-logs" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/security/activity-logs" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
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
                    <Link 
                      to="/admin/settings/general" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/settings/general" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • General Settings
                    </Link>
                    <Link 
                      to="/admin/settings/email" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/settings/email" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • Email Settings
                    </Link>
                    <Link 
                      to="/admin/settings/social" 
                      className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        location.pathname === "/admin/settings/social" 
                          ? "bg-[#0D7AD8] text-white font-semibold" 
                          : "hover:bg-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      • Social Logins
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/admin/database-backup" 
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  location.pathname === "/admin/database-backup" 
                    ? "bg-[#0D7AD8] text-white font-semibold" 
                    : "hover:bg-zinc-800 hover:text-zinc-200"
                }`}
              >
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
            {/* View Site Button */}
            <Link 
              to="/" 
              title="View Site"
              className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors"
            >
              <FiExternalLink className="w-5 h-5" />
            </Link>

            {/* Theme Toggle Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowThemeMenu(true)}
              onMouseLeave={() => setShowThemeMenu(false)}
            >
              <button className="p-2 text-[#0D7AD8] bg-blue-50 dark:bg-zinc-800 hover:bg-blue-100 rounded-lg cursor-pointer transition-colors flex items-center justify-center">
                <FiSun className="w-5 h-5" />
              </button>

              {showThemeMenu && (
                <div className="absolute right-0 top-full w-44 bg-white dark:bg-[#252525] rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-700 py-2 z-50">
                  <button 
                    onClick={() => setTheme('light')}
                    className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer text-left ${theme === 'light' ? 'text-[#0D7AD8] bg-blue-50/50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                  >
                    <FiSun className="w-4 h-4" />
                    <span>Light</span>
                  </button>
                  <button 
                    onClick={() => setTheme('dark')}
                    className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer text-left ${theme === 'dark' ? 'text-[#0D7AD8] bg-blue-50/50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                  >
                    <FiMoon className="w-4 h-4" />
                    <span>Dark</span>
                  </button>
                  <button 
                    onClick={() => setTheme('system')}
                    className={`w-full flex items-center space-x-3 px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer text-left ${theme === 'system' ? 'text-[#0D7AD8] bg-blue-50/50 dark:bg-zinc-800' : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                  >
                    <FiMonitor className="w-4 h-4" />
                    <span>System</span>
                  </button>
                </div>
              )}
            </div>

            {/* Globe Icon Button */}
            <button className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors">
              <FiGlobe className="w-5 h-5" />
            </button>
            
            {/* Profile Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowProfileMenu(true)}
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
                  alt="Admin Profile" 
                  className="w-full h-full object-cover"
                />
              </div>

              {showProfileMenu && (
                <div className="absolute right-0 top-full w-72 bg-white dark:bg-[#252525] rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-700 py-2 z-50">
                  <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-700 flex items-center space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
                      alt="Admin" 
                      className="w-11 h-11 rounded-full object-cover"
                    />
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
                    <a href="#settings" className="flex items-center space-x-3 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                      <FiSettings className="w-4 h-4 text-zinc-400" />
                      <span>Account Settings</span>
                    </a>
                    <a href="#password" className="flex items-center space-x-3 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                      <FiLock className="w-4 h-4 text-zinc-400" />
                      <span>Change Password</span>
                    </a>
                  </div>

                  <div className="border-t border-zinc-100 dark:border-zinc-700 pt-1">
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer text-left"
                    >
                      <FiLogOut className="w-4 h-4 text-red-500" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* Navigation Page Body */}
        <main className="flex-1 overflow-y-auto p-8 space-y-6">
          
          {/* Breadcrumb Header */}
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Navigation</h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Home <span className="mx-1">-</span> Navigation
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Column: Add Menu Link Form */}
            <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 h-fit">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-4">Add Menu Link</h3>
              
              <form onSubmit={handleAddMenuLink} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={linkTitle}
                    onChange={(e) => setLinkTitle(e.target.value)}
                    placeholder="Title" 
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D7AD8]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Link Type
                  </label>
                  <select 
                    value={linkType}
                    onChange={(e) => setLinkType(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D7AD8]"
                  >
                    <option value="Category">Category</option>
                    <option value="Page">Page</option>
                    <option value="Link">Link</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Category
                  </label>
                  <select 
                    value={linkCategory}
                    onChange={(e) => setLinkCategory(e.target.value)}
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D7AD8]"
                  >
                    <option value="Travel">Travel</option>
                    <option value="Life Style">Life Style</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Sport">Sport</option>
                    <option value="Quizzes">Quizzes</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-[#0D7AD8] hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors cursor-pointer shadow-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Navigation List & Alerts */}
            <div className="xl:col-span-2 space-y-6">
              
              {/* Main Navigation Card */}
              <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                
                {/* Header Controls inside card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Navigation</h3>
                  
                  <div className="flex items-center space-x-3">
                    {/* Language Dropdown */}
                    <div className="relative">
                      <button 
                        onClick={() => setShowLangDropdown(!showLangDropdown)}
                        className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 cursor-pointer"
                      >
                        <span>{selectedLanguage}</span>
                        <FiChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                      </button>

                      {showLangDropdown && (
                        <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-[#252525] rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-700 py-1.5 z-20">
                          <button onClick={() => { setSelectedLanguage('English'); setShowLangDropdown(false); }} className="w-full px-4 py-2 text-xs font-medium text-left hover:bg-zinc-50 dark:hover:bg-zinc-800">English</button>
                          <button onClick={() => { setSelectedLanguage('Urdu'); setShowLangDropdown(false); }} className="w-full px-4 py-2 text-xs font-medium text-left hover:bg-zinc-50 dark:hover:bg-zinc-800">Urdu</button>
                          <button onClick={() => { setSelectedLanguage('Arabic'); setShowLangDropdown(false); }} className="w-full px-4 py-2 text-xs font-medium text-left hover:bg-zinc-50 dark:hover:bg-zinc-800">Arabic</button>
                        </div>
                      )}
                    </div>

                    {/* Add Menu Link Button */}
                    <button className="bg-[#0D7AD8] hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer shadow-sm">
                      <FiPlus className="w-4 h-4" />
                      <span>Add Menu Link</span>
                    </button>
                  </div>
                </div>

                {/* Draggable Nav List Items */}
                <div className="space-y-2.5">
                  {navItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex items-center justify-between p-3.5 bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <FiMove className="w-4 h-4 text-zinc-400 cursor-grab active:cursor-grabbing" />
                        <span className="font-semibold text-sm text-zinc-900 dark:text-white">
                          {item.title}
                        </span>
                        {!item.isStatic && (
                          <span className="text-xs text-zinc-400 font-normal italic">
                            ({item.type})
                          </span>
                        )}
                      </div>

                      {!item.isStatic && (
                        <div className="flex items-center space-x-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-blue-50 dark:bg-blue-950/40 text-[#0D7AD8] hover:bg-blue-100 rounded-lg cursor-pointer transition-colors" title="Edit">
                            <FiEdit2 className="w-3.5 h-3.5" />
                          </button>
                          <button 
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-2 bg-red-50 dark:bg-red-950/40 text-red-600 hover:bg-red-100 rounded-lg cursor-pointer transition-colors" 
                            title="Delete"
                          >
                            <FiTrash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>

              {/* Info Alert Box */}
              <div className="bg-[#e8f8f0] dark:bg-emerald-950/30 border border-[#b4e7ce] dark:border-emerald-800/50 rounded-2xl p-4 flex items-start space-x-3">
                <div className="p-1 bg-[#10b981] text-white rounded-lg mt-0.5">
                  <FiInfo className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#0f5132] dark:text-emerald-300 uppercase tracking-wide">Info</h4>
                  <p className="text-xs text-[#155724] dark:text-emerald-400 mt-0.5 font-medium">You can manage the navigation by dragging and dropping menu items.</p>
                </div>
              </div>

              {/* Warning Alert Box */}
              <div className="bg-[#f8d7da]/60 dark:bg-red-950/30 border border-[#f5c6cb] dark:border-red-900/50 rounded-2xl p-4 flex items-start space-x-3">
                <div className="p-1 bg-red-500 text-white rounded-lg mt-0.5">
                  <FiAlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#721c24] dark:text-red-300 uppercase tracking-wide">Warning</h4>
                  <p className="text-xs text-[#721c24] dark:text-red-400 mt-0.5 font-medium">You cannot drag a category below a page or a page below a category link!</p>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Copyright */}
          <div className="pt-8 pb-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 mt-12">
            <p>Copyright 2026 Varient - All Rights Reserved.</p>
            <p className="mt-2 sm:mt-0">Version 3.1</p>
          </div>

        </main>
      </div>

    </div>
  );
}