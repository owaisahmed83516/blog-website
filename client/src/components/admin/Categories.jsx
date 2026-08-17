import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FiHome, 
  FiLayout, 
  FiMenu, 
  FiFileText, 
  FiPlusSquare, 
  FiUploadCloud, 
  FiLayers, 
  FiChevronUp, 
  FiChevronDown, 
  FiCheckSquare, 
  FiRss, 
  FiGrid, 
  FiTag, 
  FiCpu, 
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
  FiPieChart, 
  FiGlobe, 
  FiHardDrive, 
  FiZap, 
  FiSettings, 
  FiDatabase,
  FiExternalLink, 
  FiSun, 
  FiPlus, 
  FiSearch,
  FiEdit2,
  FiTrash2
} from 'react-icons/fi';

// Main Container Component that handles view switching between Category List and Add Category Form
const Categories = () => {
  const [currentView, setCurrentView] = useState('list'); // 'list' or 'add'

  // Dropdown states for sidebar navigation
  const [showPostsDropdown, setShowPostsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showReportsDropdown, setShowReportsDropdown] = useState(false);
  const [showSecurityDropdown, setShowSecurityDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  // Table & Page states for List View
  const [entriesPerPage, setEntriesPerPage] = useState('20');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Form states for Add Category View
  const [formData, setFormData] = useState({
    language: 'English',
    parentCategory: 'Select a category',
    sortOrder: '1',
    color: '#2d65fe',
    status: true,
    showOnMenu: true,
    showOnHomepage: true,
    categoryName: '',
    slug: '',
    blockStyle: 'Block Style 1',
    premiumCategory: false,
    exclusiveCategory: false,
    applyToSubcategories: false,
    metaTitle: '',
    metaDescription: '',
    metaKeywords: ''
  });

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const categoriesData = [
    { id: 3, name: 'Lifestyle', isExclusive: false, status: 'Active' },
    { id: 4, name: 'Tech', isExclusive: true, status: 'Active' },
    { id: 5, name: 'Fashion', isExclusive: false, status: 'Active' },
    { id: 6, name: 'Travel', isExclusive: true, status: 'Active' },
    { id: 7, name: 'Food', isExclusive: false, status: 'Active' },
    { id: 8, name: 'Reviews', isExclusive: false, status: 'Active' },
    { id: 9, name: 'Videos', isExclusive: false, status: 'Active' },
  ];

  const filteredCategories = categoriesData.filter(cat => 
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      
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

      {/* 1. SIDEBAR - Fully Scrollable */}
      <aside className="w-64 bg-[#111111] text-zinc-400 flex flex-col h-screen select-none overflow-y-auto shrink-0 border-r border-zinc-800 fixed left-0 top-0 z-30">
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
              <Link to="/admin/rss" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiRss className="w-4 h-4" />
                <span>RSS Feeds</span>
              </Link>
              <div 
                onClick={() => setCurrentView('list')}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-semibold cursor-pointer ${currentView === 'list' ? 'bg-[#0D7AD8] text-white' : 'hover:bg-zinc-800 hover:text-zinc-200'}`}
              >
                <FiGrid className="w-4 h-4" />
                <span>Categories</span>
              </div>
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

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col pl-64">
        
        {/* 2. NAVBAR */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-20">
          <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <FiMenu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors" title="View Site">
              <FiExternalLink className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Toggle Theme">
              <FiSun className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Language">
              <FiGlobe className="w-5 h-5" />
            </button>
            <div className="ml-2">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" 
                alt="Profile Avatar" 
                className="w-8 h-8 rounded-full object-cover border border-gray-200 cursor-pointer"
              />
            </div>
          </div>
        </header>

        {/* CONDITIONAL PAGE CONTENT CONTAINER */}
        <main className="flex-1 p-6">
          
          {currentView === 'list' ? (
            /* ================= VIEW 1: CATEGORIES LIST ================= */
            <>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
                <div className="text-sm text-gray-500 mt-1">
                  Home <span className="mx-1.5">›</span> Categories
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  
                  {/* Entries Dropdown */}
                  <div className="relative">
                    <select 
                      value={entriesPerPage}
                      onChange={(e) => setEntriesPerPage(e.target.value)}
                      className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
                  </div>

                  {/* Search and Add Category Button */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search"
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <button 
                      onClick={() => setCurrentView('add')}
                      className="flex items-center justify-center gap-2 bg-[#0D7AD8] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shrink-0 cursor-pointer"
                    >
                      <FiPlus className="w-4 h-4" />
                      <span>Add Category</span>
                    </button>
                  </div>
                </div>

                {/* Categories List Table/Rows */}
                <div className="border border-gray-100 rounded-lg overflow-hidden divide-y divide-gray-100">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                      <div key={category.id} className="flex items-center justify-between p-4 hover:bg-gray-50/60 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 text-sm">•</span>
                          <span className="text-gray-900 font-semibold text-sm">
                            {category.name} <span className="text-gray-400 font-normal ml-1">(ID: {category.id})</span>
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          {category.isExclusive && (
                            <span className="bg-emerald-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded tracking-wide shadow-sm">
                              Exclusive
                            </span>
                          )}
                          <span className="bg-emerald-50 text-emerald-600 border border-emerald-100/60 text-[11px] font-semibold px-2 py-0.5 rounded">
                            {category.status}
                          </span>
                          
                          <div className="flex items-center gap-1.5 ml-2">
                            <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-lg transition-colors cursor-pointer" title="Edit">
                              <FiEdit2 className="w-3.5 h-3.5" />
                            </button>
                            <button className="bg-red-50 hover:bg-red-100 text-red-500 p-2 rounded-lg transition-colors cursor-pointer" title="Delete">
                              <FiTrash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-gray-500 text-sm">
                      No categories found.
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* ================= VIEW 2: ADD CATEGORY FORM ================= */
            <>
              {/* Header Title & Top Categories Button */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Add Category</h1>
                  <div className="text-sm text-gray-500 mt-1">
                    Home <span className="mx-1.5">›</span> Categories <span className="mx-1.5">›</span> Add Category
                  </div>
                </div>

                <button 
                  onClick={() => setCurrentView('list')}
                  className="flex items-center gap-2 bg-[#0D7AD8] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer"
                >
                  <FiGrid className="w-4 h-4" />
                  <span>Categories</span>
                </button>
              </div>

              {/* Main Form Grid Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* LEFT COLUMN: Options & Premium settings */}
                <div className="lg:col-span-1 space-y-6">
                  
                  {/* Options Card */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
                    <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Options</h2>

                    {/* Language */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">
                        Language <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select 
                          value={formData.language}
                          onChange={(e) => setFormData({...formData, language: e.target.value})}
                          className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-gray-800 focus:outline-none focus:border-blue-500 cursor-pointer"
                        >
                          <option value="English">English</option>
                          <option value="Spanish">Spanish</option>
                          <option value="French">French</option>
                        </select>
                        <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
                      </div>
                    </div>

                    {/* Parent Category */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">Parent Category</label>
                      <div className="relative">
                        <select 
                          value={formData.parentCategory}
                          onChange={(e) => setFormData({...formData, parentCategory: e.target.value})}
                          className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm text-gray-800 focus:outline-none focus:border-blue-500 cursor-pointer"
                        >
                          <option value="Select a category">Select a category</option>
                          <option value="Lifestyle">Lifestyle</option>
                          <option value="Tech">Tech</option>
                          <option value="Fashion">Fashion</option>
                        </select>
                        <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
                      </div>
                    </div>

                    {/* Sort Order */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">
                        Sort Order <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="number"
                        value={formData.sortOrder}
                        onChange={(e) => setFormData({...formData, sortOrder: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Color */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">
                        Color <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white px-3 py-2">
                        <input 
                          type="text"
                          value={formData.color}
                          onChange={(e) => setFormData({...formData, color: e.target.value})}
                          className="w-full text-sm text-gray-800 focus:outline-none bg-transparent"
                        />
                        <div 
                          className="w-6 h-6 rounded shrink-0 cursor-pointer border border-black/10" 
                          style={{ backgroundColor: formData.color }}
                        />
                      </div>
                    </div>

                    {/* Toggle: Status */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-gray-700">Status</span>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, status: !formData.status})}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${formData.status ? 'bg-emerald-500' : 'bg-gray-300'}`}
                      >
                        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${formData.status ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                    </div>

                    {/* Toggle: Show on Menu */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-gray-700">Show on Menu</span>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, showOnMenu: !formData.showOnMenu})}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${formData.showOnMenu ? 'bg-emerald-500' : 'bg-gray-300'}`}
                      >
                        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${formData.showOnMenu ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                    </div>

                    {/* Toggle: Show on Homepage */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-gray-700">Show on Homepage</span>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, showOnHomepage: !formData.showOnHomepage})}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${formData.showOnHomepage ? 'bg-emerald-500' : 'bg-gray-300'}`}
                      >
                        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${formData.showOnHomepage ? 'translate-x-5' : 'translate-x-0'}`} />
                      </button>
                    </div>

                  </div>

                  {/* Premium Card */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
                    <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Premium</h2>

                    {/* Premium Category Toggle */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-700">Premium Category</span>
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, premiumCategory: !formData.premiumCategory})}
                          className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${formData.premiumCategory ? 'bg-emerald-500' : 'bg-gray-300'}`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${formData.premiumCategory ? 'translate-x-5' : 'translate-x-0'}`} />
                        </button>
                      </div>
                      <p className="text-[11px] text-gray-400">If enabled, all posts under this category will require a premium membership to be viewed.</p>
                    </div>

                    {/* Exclusive Category Toggle */}
                    <div className="space-y-1 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-700">Exclusive Category</span>
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, exclusiveCategory: !formData.exclusiveCategory})}
                          className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${formData.exclusiveCategory ? 'bg-emerald-500' : 'bg-gray-300'}`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${formData.exclusiveCategory ? 'translate-x-5' : 'translate-x-0'}`} />
                        </button>
                      </div>
                      <p className="text-[11px] text-gray-400">If enabled, all posts under this category will require a separate one-time purchase.</p>
                    </div>

                    {/* Checkbox: Apply setting to all subcategories */}
                    <div className="flex items-center gap-2.5 pt-2 border-t border-gray-100">
                      <input 
                        type="checkbox"
                        id="subcat"
                        checked={formData.applyToSubcategories}
                        onChange={(e) => setFormData({...formData, applyToSubcategories: e.target.checked})}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                      />
                      <label htmlFor="subcat" className="text-xs text-gray-600 cursor-pointer select-none">
                        Apply this setting to all subcategories
                      </label>
                    </div>

                  </div>

                </div>

                {/* RIGHT COLUMN: General & Meta Options */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* General Card */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
                    <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">General</h2>

                    {/* Category Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">
                        Category Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        value={formData.categoryName}
                        onChange={(e) => setFormData({...formData, categoryName: e.target.value})}
                        placeholder="Category Name"
                        className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Slug */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">Slug</label>
                      <input 
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({...formData, slug: e.target.value})}
                        placeholder="Slug"
                        className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                      <p className="text-[11px] text-gray-400">If you leave it blank, it will be generated automatically.</p>
                    </div>

                    {/* Category Block Style Selection */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-xs font-bold text-gray-700">
                        Category Block Style <span className="text-red-500">*</span>
                      </label>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'Block Style 1', label: 'Block Style 1', mockupBg: 'bg-gray-300' },
                          { id: 'Block Style 2', label: 'Block Style 2', mockupBg: 'bg-gray-200' },
                          { id: 'Block Style 3', label: 'Block Style 3', mockupBg: 'bg-gray-200' },
                          { id: 'Block Style 4', label: 'Block Style 4', mockupBg: 'bg-gray-200' },
                          { id: 'Block Style 5 (Slider)', label: 'Block Style 5 (Slider)', mockupBg: 'bg-gray-200' },
                          { id: 'Block Style 6', label: 'Block Style 6', mockupBg: 'bg-zinc-800' }
                        ].map((style) => {
                          const isSelected = formData.blockStyle === style.id;
                          return (
                            <div 
                              key={style.id}
                              onClick={() => setFormData({...formData, blockStyle: style.id})}
                              className={`border rounded-xl p-3 cursor-pointer transition-all ${isSelected ? 'border-blue-500 ring-2 ring-blue-500/10 bg-blue-50/10' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                            >
                              {/* Visual Mockup Box */}
                              <div className={`w-full h-24 rounded-lg p-2 flex flex-col justify-between mb-3 border border-black/5 ${style.mockupBg}`}>
                                <div className="w-full h-4 bg-white/60 rounded-sm"></div>
                                <div className="grid grid-cols-2 gap-1.5">
                                  <div className="h-8 bg-white/40 rounded-sm"></div>
                                  <div className="h-8 bg-white/40 rounded-sm"></div>
                                </div>
                              </div>

                              {/* Radio label */}
                              <div className="flex items-center gap-2">
                                <input 
                                  type="radio" 
                                  checked={isSelected} 
                                  onChange={() => setFormData({...formData, blockStyle: style.id})}
                                  className="text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-xs font-medium text-gray-800">{style.label}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* Meta Options Card */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
                    <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Meta Options</h2>

                    {/* Meta Title */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">Meta Title</label>
                      <input 
                        type="text"
                        value={formData.metaTitle}
                        onChange={(e) => setFormData({...formData, metaTitle: e.target.value})}
                        placeholder="Meta Title"
                        className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Meta Description */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">Meta Description</label>
                      <textarea 
                        rows="3"
                        value={formData.metaDescription}
                        onChange={(e) => setFormData({...formData, metaDescription: e.target.value})}
                        placeholder="Meta Description"
                        className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>

                    {/* Meta Keywords */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">Meta Keywords</label>
                      <input 
                        type="text"
                        value={formData.metaKeywords}
                        onChange={(e) => setFormData({...formData, metaKeywords: e.target.value})}
                        placeholder="Meta Keywords"
                        className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                      <p className="text-[11px] text-gray-400">Enter keywords separated by commas (e.g., technology, ai, future)</p>
                    </div>

                  </div>

                  {/* Bottom Action Button */}
                  <div className="flex justify-end pt-2 pb-6">
                    <button 
                      onClick={() => alert('Category added successfully!')}
                      className="bg-[#0D7AD8] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer"
                    >
                      Add Category
                    </button>
                  </div>

                </div>

              </div>
            </>
          )}

        </main>

        {/* 3. FOOTER */}
        <footer className="bg-white border-t border-gray-100 py-4 px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 mt-auto">
          <div>
            Copyright 2026 Varient - All Rights Reserved.
          </div>
          <div className="mt-2 sm:mt-0">
            Version 3.1
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Categories;