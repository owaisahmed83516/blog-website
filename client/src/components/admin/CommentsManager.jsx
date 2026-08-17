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
  FiChevronRight
} from 'react-icons/fi';

const CommentsManager = () => {
  // Dropdown states for sidebar navigation
  const [showPostsDropdown, setShowPostsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showReportsDropdown, setShowReportsDropdown] = useState(false);
  const [showSecurityDropdown, setShowSecurityDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  // Status Filter & Table Row Dropdown states
  const [statusFilter, setStatusFilter] = useState('Status');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [activeDropdownRow, setActiveDropdownRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Comments Data mimicking the reference image
  const [comments, setComments] = useState([
    { id: 22, name: 'admin', email: 'admin@codingest.net', ip: '184.23.219.89', text: 'Yes', postTitle: 'The beach, a captivating and idyllic destination', date: '2026-09-03 17:57', status: 'Approved' },
    { id: 21, name: 'admin', email: 'admin@codingest.net', ip: '184.22.161.90', text: 'Show', postTitle: 'The air carries the invigorating scent of moss', date: '2026-09-02 22:19', status: 'Approved' },
    { id: 20, name: 'admin', email: 'admin@codingest.net', ip: '196.168.216.179', text: 'Hhhj', postTitle: 'The beauty and significance of sunrise', date: '2026-07-14 08:07', status: 'Approved' },
    { id: 19, name: 'admin', email: 'admin@codingest.net', ip: '183.187.24.169', text: 'fff', postTitle: 'Riding a bike is a delightful and invigorating experience', date: '2026-06-30 11:59', status: 'Approved' },
    { id: 18, name: 'admin', email: 'admin@codingest.net', ip: '88.216.141.77', text: 'p565rr5y6r', postTitle: 'Our furry friends and faithful companions', date: '2026-08-28 19:44', status: 'Approved' },
    { id: 17, name: 'user', email: 'user@codingest.net', ip: '88.183.122.179', text: 'fghn:,riovcx', postTitle: 'The arrival of winter heralds a shift in the landscape', date: '2026-08-26 14:08', status: 'Pending' },
    { id: 16, name: 'admin', email: 'admin@codingest.net', ip: '212.12.219.247', text: 'test', postTitle: 'Neon Waves Live Concert: 2026', date: '2026-08-25 10:28', status: 'Approved' },
    { id: 15, name: 'admin', email: 'admin@codingest.net', ip: '128.79.53.109', text: 'Oui', postTitle: 'Neon Waves Live Concert: 2026', date: '2026-08-22 17:53', status: 'Approved' },
    { id: 13, name: 'admin', email: 'admin@codingest.net', ip: '128.79.53.109', text: 'Non', postTitle: 'Neon Waves Live Concert: 2026', date: '2026-08-22 17:53', status: 'Approved' },
    { id: 12, name: 'admin', email: 'admin@codingest.net', ip: '128.79.53.109', text: 'Yes', postTitle: 'Neon Waves Live Concert: 2026', date: '2026-08-22 17:53', status: 'Approved' },
    { id: 11, name: 'admin', email: 'admin@codingest.net', ip: '128.79.53.109', text: 'Test', postTitle: 'Neon Waves Live Concert: 2026', date: '2026-08-22 17:52', status: 'Approved' },
    { id: 10, name: 'test', email: 'as@es.com', ip: '74.244.231.116', text: 'test', postTitle: 'Every dress carries a unique design', date: '2026-08-17 00:07', status: 'Pending' },
    { id: 9, name: 'admin', email: 'admin@codingest.net', ip: '84.235.86.42', text: 'fsdglsg', postTitle: 'مصر المدينة بين الاصالة والتاريخ', date: '2026-08-15 11:50', status: 'Approved' },
    { id: 8, name: 'admin', email: 'admin@codingest.net', ip: '95.25.91.83', text: '65651', postTitle: 'The beauty and significance of sunrise', date: '2026-08-05 13:19', status: 'Approved' },
    { id: 7, name: 'user', email: 'user@codingest.net', ip: '92.86.230.202', text: 'hi', postTitle: 'The beauty and significance of sunrise', date: '2026-08-02 20:37', status: 'Pending' },
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
    setActiveDropdownRow(null);
  };

  const filteredComments = comments.filter(c => {
    if (statusFilter === 'Approved') return c.status === 'Approved';
    if (statusFilter === 'Pending') return c.status === 'Pending';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      
      {/* Custom Scrollbar for Sidebar */}
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

      {/* 1. SIDEBAR */}
      <aside className="w-64 bg-[#111111] text-zinc-400 flex flex-col h-screen select-none overflow-y-auto shrink-0 border-r border-zinc-800 fixed left-0 top-0 z-30">
        <div className="p-5 flex items-center space-x-2 border-b border-zinc-800 sticky top-0 bg-[#111111] z-10">
          <div className="w-8 h-8 rounded bg-[#10b981] flex items-center justify-center text-white font-black text-lg">
            V
          </div>
          <span className="text-white text-xl font-bold tracking-wide">Varient</span>
        </div>

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
                    <Link to="/admin/posts" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">• Posts</Link>
                    <Link to="/admin/pending-posts" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">• Pending Posts</Link>
                    <Link to="/admin/scheduled-posts" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">• Scheduled Posts</Link>
                    <Link to="/admin/events" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">• Events</Link>
                    <Link to="/admin/drafts" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">• Drafts</Link>
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
                    <Link to="/admin/gallery/images" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">• Images</Link>
                    <Link to="/admin/gallery/albums" className="block px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 text-xs font-medium transition-colors">• Albums</Link>
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
              <Link to="/admin/comments" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-[#0D7AD8] text-white transition-colors text-sm font-semibold">
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
            <h1 className="text-2xl font-bold text-gray-900">Comments</h1>
            <div className="text-sm text-gray-500 mt-1">
              Home <span className="mx-1.5">›</span> Comments
            </div>
          </div>

          {/* Main Card Container */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            
            {/* Table Header Action Controls (Status Dropdown Filter) */}
            <div className="flex justify-end mb-6 relative">
              <div className="relative">
                <button 
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                  className="flex items-center justify-between w-36 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer shadow-xs"
                >
                  <span>{statusFilter}</span>
                  <FiChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {showStatusDropdown && (
                  <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-10">
                    <button 
                      onClick={() => { setStatusFilter('Status'); setShowStatusDropdown(false); }}
                      className="w-full text-left px-3.5 py-2 text-xs text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      All Status
                    </button>
                    <button 
                      onClick={() => { setStatusFilter('Approved'); setShowStatusDropdown(false); }}
                      className="w-full text-left px-3.5 py-2 text-xs text-green-600 hover:bg-green-50 font-medium"
                    >
                      Approved
                    </button>
                    <button 
                      onClick={() => { setStatusFilter('Pending'); setShowStatusDropdown(false); }}
                      className="w-full text-left px-3.5 py-2 text-xs text-amber-600 hover:bg-amber-50 font-medium"
                    >
                      Pending
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Comments Table */}
            <div className="overflow-x-auto border border-gray-100 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                    <th className="py-3 px-4 w-64">User</th>
                    <th className="py-3 px-4">Comment</th>
                    <th className="py-3 px-4 w-44">Date</th>
                    <th className="py-3 px-4 w-28 text-right">Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {filteredComments.length > 0 ? (
                    filteredComments.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                        {/* User Column */}
                        <td className="py-4 px-4 align-top">
                          <div className="font-bold text-gray-900">{item.name}</div>
                          <div className="text-xs text-blue-600 mt-0.5">{item.email}</div>
                          <div className="text-[11px] text-gray-400 mt-0.5">IP Address: {item.ip}</div>
                        </td>

                        {/* Comment Column */}
                        <td className="py-4 px-4 align-top">
                          <div className="text-gray-900 font-semibold">{item.text}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            <span className="text-gray-400 font-medium">Post:</span> {item.postTitle}
                          </div>
                        </td>

                        {/* Date Column */}
                        <td className="py-4 px-4 align-top">
                          <div className="text-gray-700 text-xs font-medium">{item.date}</div>
                          <div className={`text-[11px] font-semibold mt-1 inline-block ${
                            item.status === 'Approved' ? 'text-emerald-600' : 'text-amber-500'
                          }`}>
                            {item.status}
                          </div>
                        </td>

                        {/* Options Column */}
                        <td className="py-4 px-4 text-right align-top relative">
                          <div className="inline-block relative">
                            <button 
                              onClick={() => setActiveDropdownRow(activeDropdownRow === item.id ? null : item.id)}
                              className="inline-flex items-center justify-between w-24 bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                            >
                              <span>Select</span>
                              <FiChevronDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
                            </button>

                            {activeDropdownRow === item.id && (
                              <div className="absolute right-0 mt-1 w-28 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-10 text-left">
                                <button 
                                  onClick={() => handleDelete(item.id)}
                                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors cursor-pointer font-medium"
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
                      <td colSpan="4" className="py-8 text-center text-gray-500 text-sm">No comments found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-1.5 mt-6">
              <button 
                onClick={() => setCurrentPage(1)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  currentPage === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                1
              </button>
              <button 
                onClick={() => setCurrentPage(2)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  currentPage === 2 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                2
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, 2))}
                className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
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

    </div>
  );
};

export default CommentsManager;