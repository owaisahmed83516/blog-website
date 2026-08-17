import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  FiTrash2,
  FiEye,
  FiX,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiAlignJustify,
  FiList,
  FiMaximize2,
  FiCode,
  FiMoreHorizontal,
  FiPaperclip
} from 'react-icons/fi';

const AdminContact = () => {
  // Dropdown states for sidebar navigation
  const [showPostsDropdown, setShowPostsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showReportsDropdown, setShowReportsDropdown] = useState(false);
  const [showSecurityDropdown, setShowSecurityDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  // Table & Page states
  const [entriesPerPage, setEntriesPerPage] = useState('20');
  const [activeDropdownRow, setActiveDropdownRow] = useState(null);

  // Modal State for Reply Popup
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replySubject, setReplySubject] = useState('');
  const [replyContent, setReplyContent] = useState('');

  // Initial Contact Messages Data based on the reference image
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      name: 'ward_test', 
      email: 'ward_test@domain.com', 
      message: 'How to anti Spam Message?', 
      date: '2026-06-15 10:49' 
    }
  ]);

  const handleDelete = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
    setActiveDropdownRow(null);
  };

  const handleOpenReplyModal = (item) => {
    setSelectedMessage(item);
    setReplySubject('');
    setReplyContent('');
    setActiveDropdownRow(null);
    setIsReplyModalOpen(true);
  };

  const handleSendReply = (e) => {
    e.preventDefault();
    alert(`Reply sent successfully to ${selectedMessage?.email}!`);
    setIsReplyModalOpen(false);
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

              <Link to="/admin/polls" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
                <FiCheckSquare className="w-4 h-4" />
                <span>Polls</span>
              </Link>
              <Link to="/admin/rss-feeds" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-colors text-sm font-medium">
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
              <Link to="/admin/contact-messages" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-[#0D7AD8] text-white transition-colors text-sm font-semibold">
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
          <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <FiMenu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" title="View Site">
              <FiExternalLink className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" title="Toggle Theme">
              <FiSun className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" title="Language">
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
        <main className="flex-1 p-8">
          
          {/* Breadcrumb Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
            <div className="text-sm text-gray-500 mt-1">
              Home <span className="mx-1.5">›</span> Contact Messages
            </div>
          </div>

          {/* Main Card Container */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            
            {/* Table Action Controls Header */}
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
            </div>

            {/* Contact Messages Data Table */}
            <div className="overflow-x-auto border border-gray-100 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                    <th className="py-3 px-4 w-16">Id</th>
                    <th className="py-3 px-4 w-64">Name</th>
                    <th className="py-3 px-4">Message</th>
                    <th className="py-3 px-4 w-44">Date</th>
                    <th className="py-3 px-4 w-32 text-right">Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {messages.length > 0 ? (
                    messages.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-4 px-4 text-gray-500 font-medium">{item.id}</td>
                        <td className="py-4 px-4">
                          <div className="font-bold text-gray-900">{item.name}</div>
                          <div className="text-xs text-blue-600 mt-0.5">{item.email}</div>
                        </td>
                        <td className="py-4 px-4 text-gray-700 font-medium">{item.message}</td>
                        <td className="py-4 px-4 text-gray-500 text-xs">{item.date}</td>
                        <td className="py-4 px-4 text-right relative">
                          <div className="inline-block relative">
                            <button 
                              onClick={() => setActiveDropdownRow(activeDropdownRow === item.id ? null : item.id)}
                              className="inline-flex items-center justify-between w-28 bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                            >
                              <span>Select</span>
                              <FiChevronDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
                            </button>

                            {activeDropdownRow === item.id && (
                              <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-10 text-left">
                                <button 
                                  onClick={() => handleOpenReplyModal(item)}
                                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer font-medium"
                                >
                                  <FiMail className="w-3.5 h-3.5" />
                                  <span>Reply</span>
                                </button>
                                <button 
                                  onClick={() => handleDelete(item.id)}
                                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                >
                                  <FiTrash2 className="w-3.5 h-3.5" />
                                  <span>Delete</span>
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-8 text-center text-gray-500 text-sm">No contact messages found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>

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

      {/* REPLY MODAL POPUP */}
      {isReplyModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in duration-150">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Reply Message</h3>
              <button 
                onClick={() => setIsReplyModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Content */}
            <form onSubmit={handleSendReply} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              
              {/* Recipient Field */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Recipient <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  readOnly 
                  value={selectedMessage?.email || ''} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 font-medium focus:outline-none"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Subject"
                  value={replySubject}
                  onChange={(e) => setReplySubject(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Content / Editor Section */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Content <span className="text-red-500">*</span>
                </label>
                
                {/* Custom Action Buttons Above Editor */}
                <div className="flex items-center gap-2 mb-3">
                  <button type="button" className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer">
                    <FiPaperclip className="w-3.5 h-3.5" />
                    <span>Add Image</span>
                  </button>
                  <button type="button" className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer">
                    <FiCpu className="w-3.5 h-3.5" />
                    <span>AI Writer</span>
                  </button>
                </div>

                {/* TinyMCE / Rich Text Editor Mockup Box */}
                <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  
                  {/* Toolbar */}
                  <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-600">
                    <div className="flex items-center gap-3">
                      <span className="hover:text-gray-900 cursor-pointer">File</span>
                      <span className="hover:text-gray-900 cursor-pointer">Edit</span>
                      <span className="hover:text-gray-900 cursor-pointer">View</span>
                      <span className="hover:text-gray-900 cursor-pointer">Insert</span>
                      <span className="hover:text-gray-900 cursor-pointer">Format</span>
                      <span className="hover:text-gray-900 cursor-pointer">Tools</span>
                      <span className="hover:text-gray-900 cursor-pointer">Table</span>
                    </div>
                  </div>

                  <div className="bg-white border-b border-gray-200 px-3 py-2 flex flex-wrap items-center gap-3 text-gray-600">
                    <div className="flex items-center gap-2 border-r border-gray-200 pr-3">
                      <FiMaximize2 className="w-4 h-4 cursor-pointer hover:text-blue-600" title="Maximize" />
                      <FiCode className="w-4 h-4 cursor-pointer hover:text-blue-600" title="Source Code" />
                      <FiEye className="w-4 h-4 cursor-pointer hover:text-blue-600" title="Preview" />
                    </div>
                    <div className="flex items-center gap-2 border-r border-gray-200 pr-3">
                      <span className="cursor-pointer hover:text-blue-600 font-bold">B</span>
                      <span className="cursor-pointer hover:text-blue-600 italic">I</span>
                      <span className="cursor-pointer hover:text-blue-600 underline">U</span>
                    </div>
                    <div className="flex items-center gap-2 border-r border-gray-200 pr-3">
                      <FiAlignLeft className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                      <FiAlignCenter className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                      <FiAlignRight className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                      <FiAlignJustify className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                    </div>
                    <div className="flex items-center gap-2">
                      <FiList className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                      <FiMoreHorizontal className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                    </div>
                  </div>

                  {/* Textarea Area */}
                  <textarea 
                    rows="6"
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Write your reply here..."
                    className="w-full p-4 text-sm text-gray-800 focus:outline-none resize-y"
                    required
                  ></textarea>

                  {/* Tiny footer brand bar inside editor */}
                  <div className="bg-gray-50 border-t border-gray-100 px-3 py-1.5 flex justify-between items-center text-[11px] text-gray-400">
                    <span>p</span>
                    <span className="font-bold tracking-tight">tiny</span>
                  </div>

                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={() => setIsReplyModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  Send Reply
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminContact;