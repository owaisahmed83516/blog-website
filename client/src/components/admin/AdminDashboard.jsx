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
  FiCreditCard,
  FiMail,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiSettings,
  FiLock,
  FiLogOut,
  FiBarChart,
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
  FiDatabase
} from 'react-icons/fi';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [theme, setTheme] = useState('light');

  // Sidebar Dropdown States
  const [showPostsDropdown, setShowPostsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showReportsDropdown, setShowReportsDropdown] = useState(false);
  const [showSecurityDropdown, setShowSecurityDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

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
              <Link to="/admin" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-[#0D7AD8] text-white font-semibold text-sm">
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

          {/* Content Management Section */}
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

              {/* Posts Dropdown */}
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
                    <Link to="/admin/posts" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
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
              <a href="/admin/categories" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
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
                <FiAward className="w-4 h-4" />
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

              {/* Reports Dropdown */}
              <div>
                <div 
                  onClick={() => setShowReportsDropdown(!showReportsDropdown)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <FiPieChart className="w-4 h-4" />
                    <span>Reports</span>
                  </div>
                  {showReportsDropdown ? <FiChevronUp className="w-3.5 h-3.5" /> : <FiChevronDown className="w-3.5 h-3.5" />}
                </div>

                {showReportsDropdown && (
                  <div className="pl-9 pr-2 py-1 space-y-1">
                    <Link to="/admin/reports/traffic" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Traffic Reports
                    </Link>
                    <Link to="/admin/reports/performance" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">
                      • Performance
                    </Link>
                  </div>
                )}
              </div>

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
                    <FiSettings className="w-4 h-4" />
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

        {/* Dashboard Body / Scrollable Content with Full Home Sections */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Top Grid: Total Submitted Posts & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#1e88e5] to-[#1565c0] rounded-2xl p-6 text-white shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-black mb-1">124</h2>
                <p className="text-sm font-medium text-blue-100">Total Submitted Posts</p>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold">0</h3>
                  <p className="text-xs text-blue-100">Scheduled</p>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center text-xs font-semibold mb-1">
                  <span>0 Pending</span>
                  <span>0%</span>
                </div>
                <div className="w-full bg-blue-900/40 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-[0%]"></div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-4">Highlights</h3>
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <FiCreditCard className="w-4 h-4 text-zinc-400" />
                    <span>Pending Payouts</span>
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-white">0</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <FiMail className="w-4 h-4 text-zinc-400" />
                    <span>Contact Messages</span>
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-white">1</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <FiUser className="w-4 h-4 text-zinc-400" />
                    <span>Newsletter</span>
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-white">8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row Grid: Comments & Registered Users */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">24</h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">Comments</p>
              </div>
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800 border-t border-zinc-100 dark:border-zinc-800 pt-2">
                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <FiMessageSquare className="w-4 h-4 text-zinc-400" />
                    <span>Pending Comments</span>
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-white">4</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <FiCheckCircle className="w-4 h-4 text-zinc-400" />
                    <span>Approved Comments</span>
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-white">20</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">36</h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-6">Total registered users</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Recently registered users</p>
                <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" alt="User" className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-zinc-700 shadow-xs" />
                  <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-xs">S</div>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" alt="User" className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-zinc-700 shadow-xs" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop" alt="User" className="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-zinc-700 shadow-xs" />
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">G</div>
                  <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">E</div>
                  <div className="w-9 h-9 rounded-full bg-zinc-400 flex items-center justify-center text-white font-bold text-xs shadow-xs">J</div>
                  <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">J</div>
                  <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-200 flex items-center justify-center font-bold text-xs shadow-xs">All</div>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings & Stats Section */}
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Earnings & Stats</h4>
                <p className="text-xs text-zinc-500">Aug 2026</p>
              </div>
              <select className="bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold px-3 py-1.5 rounded-lg border-none outline-none">
                <option>Unique Pageviews</option>
              </select>
            </div>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">126</h3>
            <p className="text-xs text-zinc-400 mb-6">Total Pageviews</p>
            
            {/* Simulated Line Chart Area */}
            <div className="h-44 w-full relative flex items-end border-b border-zinc-100 dark:border-zinc-800 pb-2">
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 100">
                <path d="M 0,80 Q 50,50 100,60 T 200,20 T 300,90 T 400,95 L 500,98" fill="none" stroke="#0D7AD8" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex justify-between text-[10px] text-zinc-400 pt-2">
              <span>01</span><span>04</span><span>07</span><span>10</span><span>13</span><span>15</span><span>19</span><span>22</span><span>25</span><span>28</span><span>31</span>
            </div>
          </div>

          {/* Pending Posts Table Section */}
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Pending Posts</h3>
              <button className="text-xs bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 font-semibold px-3 py-1.5 rounded-lg transition-colors">View All</button>
            </div>
            <p className="text-xs text-zinc-400 mb-6">Posts awaiting administrative approval.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-zinc-500 dark:text-zinc-400">
                <thead className="border-b border-zinc-100 dark:border-zinc-800 text-[10px] uppercase">
                  <tr>
                    <th className="pb-3 font-bold">ID</th>
                    <th className="pb-3 font-bold">Post</th>
                    <th className="pb-3 font-bold">Author</th>
                    <th className="pb-3 font-bold">Post Format</th>
                    <th className="pb-3 font-bold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-zinc-400">No records found.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pending Comments Table Section */}
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Pending Comments</h3>
              <button className="text-xs bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 font-semibold px-3 py-1.5 rounded-lg transition-colors">View All</button>
            </div>
            <p className="text-xs text-zinc-400 mb-6">Comments awaiting administrative approval.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-zinc-500 dark:text-zinc-400">
                <thead className="border-b border-zinc-100 dark:border-zinc-800 text-[10px] uppercase">
                  <tr>
                    <th className="pb-3 font-bold">ID</th>
                    <th className="pb-3 font-bold">User</th>
                    <th className="pb-3 font-bold">Comment</th>
                    <th className="pb-3 font-bold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  <tr>
                    <td className="py-3">17</td>
                    <td className="py-3 text-zinc-900 dark:text-white font-medium">user<br/><span className="text-[10px] text-zinc-400">user@codingest.net</span></td>
                    <td className="py-3 text-[#0D7AD8]">fghjhyunvcc</td>
                    <td className="py-3">2026-06-26 14:08</td>
                  </tr>
                  <tr>
                    <td className="py-3">10</td>
                    <td className="py-3 text-zinc-900 dark:text-white font-medium">test<br/><span className="text-[10px] text-zinc-400">as@as.com</span></td>
                    <td className="py-3 text-[#0D7AD8]">test</td>
                    <td className="py-3">2026-06-17 00:07</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Latest Transactions Section */}
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Latest Transactions</h3>
              <button className="text-xs bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 font-semibold px-3 py-1.5 rounded-lg transition-colors">View All</button>
            </div>
            <p className="text-xs text-zinc-400 mb-6">Overview of recent financial activities.</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800 text-xs">
                <div>
                  <p className="font-semibold text-[#0D7AD8]">Subscription</p>
                  <p className="text-[10px] text-zinc-400">Elite Yearly</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-zinc-900 dark:text-white">112.00 USD</p>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-semibold">Succeeded</span>
                </div>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800 text-xs">
                <div>
                  <p className="font-semibold text-[#0D7AD8]">Subscription</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-zinc-900 dark:text-white">10.00 USD</p>
                  <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-semibold">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Upcoming Events</h3>
              <button className="text-xs bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 font-semibold px-3 py-1.5 rounded-lg transition-colors">View All</button>
            </div>
            <p className="text-xs text-zinc-400 mb-6">Overview of the upcoming schedule.</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 p-2 rounded-lg text-center font-bold text-xs">
                    Sep<br/><span className="text-sm">16</span>
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-zinc-900 dark:text-white">Future Creators Festival 2026</p>
                    <p className="text-[10px] text-zinc-400">16 Sep 2026 - 09:00 - 18:00</p>
                  </div>
                </div>
                <button className="text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-lg font-medium">Details</button>
              </div>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="pt-6 pb-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
            <p>Copyright 2026 Varient - All Rights Reserved.</p>
            <p className="mt-2 sm:mt-0">Version 3.1</p>
          </div>

        </main>
      </div>

    </div>
  );
}