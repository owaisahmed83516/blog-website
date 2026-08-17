import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  FiTrash2,
  FiBarChart2,
  FiFilter,
  FiEdit
} from 'react-icons/fi';

const Polls = () => {
  // View state: 'list' or 'add'
  const [currentView, setCurrentView] = useState('list');

  // Dropdown states for sidebar navigation
  const [showPostsDropdown, setShowPostsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showReportsDropdown, setShowReportsDropdown] = useState(false);
  const [showSecurityDropdown, setShowSecurityDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  // Table & Page states
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [entriesPerPage, setEntriesPerPage] = useState('20');
  const location = useLocation();

  // Add Poll Form States
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [language, setLanguage] = useState('English');
  const [votePermission, setVotePermission] = useState('All Users Can Vote');
  const [statusActive, setStatusActive] = useState(true);

  const isActive = (path) => location.pathname === path;

  const [pollsData, setPollsData] = useState([
    { 
      id: 3, 
      question: 'Do you like reading in the subway?', 
      language: 'English', 
      votePermission: 'Only Registered Users Can Vote', 
      status: 'Active', 
      date: '2026-04-16 16:16' 
    },
    { 
      id: 2, 
      question: 'What is your favorite color?', 
      language: 'English', 
      votePermission: 'All Users Can Vote', 
      status: 'Active', 
      date: '2026-04-16 16:16' 
    },
    { 
      id: 1, 
      question: 'ما هو لونك المفضلة؟', 
      language: 'Arabic', 
      votePermission: 'All Users Can Vote', 
      status: 'Active', 
      date: '2026-04-16 16:13' 
    },
  ]);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleRemoveOption = (index) => {
    if (options.length > 1) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const handleSavePoll = (e) => {
    e.preventDefault();
    const newPoll = {
      id: pollsData.length + 1,
      question: question || 'Untitled Poll',
      language: language,
      votePermission: votePermission,
      status: statusActive ? 'Active' : 'Inactive',
      date: new Date().toISOString().slice(0, 16).replace('T', ' ')
    };
    setPollsData([newPoll, ...pollsData]);
    setCurrentView('list');
    // Reset form
    setQuestion('');
    setOptions(['', '']);
  };

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

              <Link to="/admin/polls" className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-semibold ${isActive('/admin/polls') ? 'bg-[#0D7AD8] text-white' : 'hover:bg-zinc-800 hover:text-zinc-200'}`}>
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

        {/* PAGE CONTENT CONTAINER */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{currentView === 'list' ? 'Polls' : 'Add Poll'}</h1>
              <div className="text-sm text-gray-500 mt-1">
                Home <span className="mx-1.5">›</span> {currentView === 'list' ? 'Polls' : 'Add Poll'}
              </div>
            </div>
            {currentView === 'add' && (
              <button 
                onClick={() => setCurrentView('list')}
                className="bg-[#0D7AD8] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
              >
                <FiCheckSquare className="w-4 h-4" />
                <span>Polls</span>
              </button>
            )}
          </div>

          {currentView === 'list' ? (
            /* POLLS LIST VIEW */
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
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

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    <FiFilter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  <button 
                    onClick={() => setCurrentView('add')}
                    className="flex items-center justify-center gap-2 bg-[#0D7AD8] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
                  >
                    <FiPlus className="w-4 h-4" />
                    <span>Add Poll</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      <th className="py-3 px-4 w-16">ID</th>
                      <th className="py-3 px-4">Question</th>
                      <th className="py-3 px-4">Language</th>
                      <th className="py-3 px-4">Vote Permission</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Date Added</th>
                      <th className="py-3 px-4 text-right">Options</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {pollsData.map((poll) => (
                      <tr key={poll.id} className="hover:bg-gray-50/60 transition-colors group">
                        <td className="py-4 px-4 text-gray-500 font-medium">{poll.id}</td>
                        <td className="py-4 px-4">
                          <div className="font-semibold text-gray-900 mb-1.5">{poll.question}</div>
                          <button className="inline-flex items-center gap-1.5 bg-purple-50 hover:bg-purple-100 text-purple-600 text-xs font-medium px-2.5 py-1 rounded-md transition-colors">
                            <FiBarChart2 className="w-3 h-3" />
                            <span>View Results</span>
                          </button>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{poll.language}</td>
                        <td className="py-4 px-4 text-gray-600 font-medium">{poll.votePermission}</td>
                        <td className="py-4 px-4">
                          <span className="inline-block bg-emerald-50 text-emerald-600 border border-emerald-100/60 text-[11px] font-semibold px-2 py-0.5 rounded">
                            {poll.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-500 text-xs">{poll.date}</td>
                        <td className="py-4 px-4 text-right relative">
                          <div className="inline-block">
                            <button 
                              onClick={() => toggleDropdown(poll.id)}
                              className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                            >
                              <span>Select</span>
                              <FiChevronDown className="w-3.5 h-3.5" />
                            </button>

                            {activeDropdown === poll.id && (
                              <div className="absolute right-4 mt-2 w-28 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-20 text-left">
                                <button className="w-full flex items-center gap-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors">
                                  <FiEdit className="w-3.5 h-3.5 text-gray-400" />
                                  <span>Edit</span>
                                </button>
                                <button className="w-full flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors">
                                  <FiTrash2 className="w-3.5 h-3.5 text-red-500" />
                                  <span>Delete</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* ADD POLL FORM VIEW */
            <form onSubmit={handleSavePoll} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column: General Section */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-base font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">General</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      Question <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows="3"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Question" 
                      className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-400"
                      required
                    ></textarea>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-800">
                      Options <span className="text-red-500">*</span>
                    </label>
                    
                    {options.map((option, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input 
                          type="text"
                          value={option}
                          onChange={(e) => handleOptionChange(index, e.target.value)}
                          placeholder="Option"
                          className="flex-1 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-400"
                          required
                        />
                        {options.length > 1 && (
                          <button 
                            type="button"
                            onClick={() => handleRemoveOption(index)}
                            className="bg-red-50 hover:bg-red-100 text-red-500 p-2.5 rounded-lg transition-colors"
                            title="Remove Option"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}

                    <button 
                      type="button"
                      onClick={handleAddOption}
                      className="mt-2 bg-[#F3E8FF] hover:bg-[#E9D5FF] text-[#7E22CE] px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <FiPlus className="w-3.5 h-3.5" />
                      <span>Add Option</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Settings & Submit */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
                  
                  {/* Language */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Language</label>
                    <div className="relative">
                      <select 
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm font-medium text-gray-800 focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="English">English</option>
                        <option value="Arabic">Arabic</option>
                        <option value="French">French</option>
                      </select>
                      <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
                    </div>
                  </div>

                  {/* Vote Permission */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                      Vote Permission <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        value={votePermission}
                        onChange={(e) => setVotePermission(e.target.value)}
                        className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 pr-10 text-sm font-medium text-gray-800 focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="All Users Can Vote">All Users Can Vote</option>
                        <option value="Only Registered Users Can Vote">Only Registered Users Can Vote</option>
                      </select>
                      <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
                    </div>
                  </div>

                  {/* Status Toggle */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-semibold text-gray-800">Status</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={statusActive} 
                        onChange={(e) => setStatusActive(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#22C55E]"></div>
                    </label>
                  </div>

                </div>

                {/* Submit Button Section */}
                <div className="flex justify-end">
                  <button 
                    type="submit"
                    className="bg-[#0D7AD8] hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto"
                  >
                    Add Poll
                  </button>
                </div>
              </div>

            </form>
          )}
        </main>

        {/* 3. FOOTER */}
        <footer className="bg-white border-t border-gray-100 py-4 px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
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

export default Polls;