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
  FiLogOut,
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
  FiHardDrive,
  FiZap,
  FiDatabase,
  FiCheckCircle,
  FiMessageSquare,
  FiMail,
  FiSliders,
  FiAward as FiBadgeIcon,
  FiCheck
} from 'react-icons/fi';

export default function AdminThemes() {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [theme, setTheme] = useState('light');

  // Sidebar Dropdown States
  const [showPostsDropdown, setShowPostsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showSecurityDropdown, setShowSecurityDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  // Active Theme State (Magazine is active by default in screenshot)
  const [activeTheme, setActiveTheme] = useState('magazine');

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

  const handleSelectTheme = (themeName) => {
    setActiveTheme(themeName);
  };

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
              <Link to="/admin/themes" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-[#0D7AD8] text-white transition-colors text-sm font-semibold">
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

              <Link to="/admin/rss" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiRss className="w-4 h-4" />
                <span>RSS Feeds</span>
              </Link>
              <Link to="/admin/categories" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiGrid className="w-4 h-4" />
                <span>Categories</span>
              </Link>
              <Link to="/admin/tags" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiTag className="w-4 h-4" />
                <span>Tags</span>
              </Link>
              <Link to="/admin/widgets" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiCpu className="w-4 h-4" />
                <span>Widgets</span>
              </Link>
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

        {/* Themes Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Breadcrumb & Header Title Area */}
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Themes</h1>
            <div className="flex items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              <Link to="/admin" className="hover:text-[#0D7AD8]">Home</Link>
              <span>/</span>
              <span className="text-zinc-700 dark:text-zinc-200 font-medium">Themes</span>
            </div>
          </div>

          {/* Themes Grid Layout matching the screenshot precisely */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Theme Card 1: Magazine */}
            <div className={`bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xs border transition-all duration-200 flex flex-col ${activeTheme === 'magazine' ? 'border-[#0D7AD8] ring-2 ring-[#0D7AD8]/20' : 'border-zinc-200 dark:border-zinc-800'}`}>
              
              {/* Theme Preview Box */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
                <div className="bg-white dark:bg-[#181818] rounded-lg shadow-sm overflow-hidden border border-zinc-200/80 dark:border-zinc-700">
                  {/* Mini Nav Mock */}
                  <div className="bg-[#0D7AD8] px-3 py-2 flex items-center justify-between text-white text-[10px]">
                    <div className="flex items-center space-x-2 font-bold">
                      <span className="bg-white/20 px-1.5 py-0.5 rounded text-[9px]">Active</span>
                      <span>HOME</span>
                      <span>LIFE STYLE</span>
                      <span>TRAVEL</span>
                    </div>
                  </div>
                  {/* Mini Hero Content Mock */}
                  <div className="p-3 grid grid-cols-3 gap-2 bg-zinc-100 dark:bg-zinc-900">
                    <div className="col-span-2 h-24 bg-zinc-300 dark:bg-zinc-800 rounded relative overflow-hidden flex items-end p-1.5">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <span className="text-white text-[8px] font-semibold relative z-10 leading-tight">Implementing these goals requires a careful examination</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-11 bg-zinc-300 dark:bg-zinc-800 rounded"></div>
                      <div className="h-11 bg-zinc-300 dark:bg-zinc-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Theme Footer Bar with Action Button */}
              <div className={`p-4 flex items-center justify-between transition-colors ${activeTheme === 'magazine' ? 'bg-[#0D7AD8] text-white' : 'bg-white dark:bg-[#1e1e1e] text-zinc-800 dark:text-zinc-100'}`}>
                <span className="font-bold text-sm tracking-wide">Magazine</span>
                
                {activeTheme === 'magazine' ? (
                  <button className="flex items-center space-x-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">
                    <FiCheck className="w-3.5 h-3.5" />
                    <span>Active Theme</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => handleSelectTheme('magazine')}
                    className="bg-[#0D7AD8] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-2xs transition-colors cursor-pointer"
                  >
                    Select Theme
                  </button>
                )}
              </div>
            </div>

            {/* Theme Card 2: News */}
            <div className={`bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xs border transition-all duration-200 flex flex-col ${activeTheme === 'news' ? 'border-[#0D7AD8] ring-2 ring-[#0D7AD8]/20' : 'border-zinc-200 dark:border-zinc-800'}`}>
              
              {/* Theme Preview Box */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
                <div className="bg-white dark:bg-[#181818] rounded-lg shadow-sm overflow-hidden border border-zinc-200/80 dark:border-zinc-700">
                  {/* Mini Nav Mock */}
                  <div className="bg-zinc-900 px-3 py-2 flex items-center justify-between text-white text-[10px]">
                    <div className="flex items-center space-x-2 font-bold">
                      <span className="text-[#0D7AD8]">Varient</span>
                      <span>HOME</span>
                      <span>RSS NEWS</span>
                      <span>TRAVEL</span>
                    </div>
                  </div>
                  {/* Mini Hero Content Mock */}
                  <div className="p-3 space-y-2 bg-zinc-100 dark:bg-zinc-900">
                    <div className="h-16 bg-zinc-300 dark:bg-zinc-800 rounded relative overflow-hidden flex items-end p-1.5">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <span className="text-white text-[8px] font-semibold relative z-10">Top Headlines & Breaking News Feed</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 bg-zinc-300 dark:bg-zinc-800 rounded"></div>
                      <div className="h-10 bg-zinc-300 dark:bg-zinc-800 rounded"></div>
                      <div className="h-10 bg-zinc-300 dark:bg-zinc-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Theme Footer Bar with Action Button */}
              <div className={`p-4 flex items-center justify-between transition-colors ${activeTheme === 'news' ? 'bg-[#0D7AD8] text-white' : 'bg-white dark:bg-[#1e1e1e] text-zinc-800 dark:text-zinc-100'}`}>
                <span className="font-bold text-sm tracking-wide">News</span>
                
                {activeTheme === 'news' ? (
                  <button className="flex items-center space-x-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">
                    <FiCheck className="w-3.5 h-3.5" />
                    <span>Active Theme</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => handleSelectTheme('news')}
                    className="bg-[#0D7AD8] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-2xs transition-colors cursor-pointer"
                  >
                    Select Theme
                  </button>
                )}
              </div>
            </div>

            {/* Theme Card 3: Classic */}
            <div className={`bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xs border transition-all duration-200 flex flex-col md:col-span-2 ${activeTheme === 'classic' ? 'border-[#0D7AD8] ring-2 ring-[#0D7AD8]/20' : 'border-zinc-200 dark:border-zinc-800'}`}>
              
              {/* Theme Preview Box */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
                <div className="bg-white dark:bg-[#181818] rounded-lg shadow-sm overflow-hidden border border-zinc-200/80 dark:border-zinc-700 max-w-2xl mx-auto">
                  {/* Mini Nav Mock */}
                  <div className="bg-zinc-800 px-3 py-2 flex items-center justify-between text-white text-[10px]">
                    <div className="flex items-center space-x-2 font-bold">
                      <span className="text-amber-400">VARIENT.</span>
                      <span>HOME</span>
                      <span>LIFE STYLE</span>
                      <span>TRAVEL</span>
                    </div>
                  </div>
                  {/* Mini Hero Content Mock */}
                  <div className="p-3 grid grid-cols-3 gap-2 bg-zinc-100 dark:bg-zinc-900">
                    <div className="col-span-2 h-20 bg-zinc-300 dark:bg-zinc-800 rounded"></div>
                    <div className="h-20 bg-zinc-300 dark:bg-zinc-800 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Theme Footer Bar with Action Button */}
              <div className={`p-4 flex items-center justify-between transition-colors ${activeTheme === 'classic' ? 'bg-[#0D7AD8] text-white' : 'bg-white dark:bg-[#1e1e1e] text-zinc-800 dark:text-zinc-100'}`}>
                <span className="font-bold text-sm tracking-wide">Classic</span>
                
                {activeTheme === 'classic' ? (
                  <button className="flex items-center space-x-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer">
                    <FiCheck className="w-3.5 h-3.5" />
                    <span>Active Theme</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => handleSelectTheme('classic')}
                    className="bg-[#0D7AD8] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-2xs transition-colors cursor-pointer"
                  >
                    Select Theme
                  </button>
                )}
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