import React, { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    subject: '',
    message: '',
    agreed: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sidebarPosts = [
    { title: 'Initiatives for Environmenta...', date: 'Dec 18, 2017', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=100&h=80&fit=crop' },
    { title: 'The Hypocrisy of the Philip...', date: 'Dec 18, 2017', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=80&fit=crop' },
    { title: 'In Egypt, Both Sexual Haras...', date: 'Dec 15, 2017', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&h=80&fit=crop' },
    { title: 'Found in Translation: Local ...', date: 'Dec 15, 2017', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=80&fit=crop' },
    { title: 'After Authorities Evict Beiji...', date: 'Dec 15, 2017', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=100&h=80&fit=crop' }
  ];

  const popularPosts = [
    { title: 'UNESCO Protects Balkan Grandma March Day Custom As Cultural Heritage', date: 'March 01, 2018', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=80&fit=crop' },
    { title: 'The Fall Of Chinese Internet Giant LeEco: Lessons Learned', date: 'March 01, 2018', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=80&fit=crop' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white select-none">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Contact Form Section */}
        <div className="lg:col-span-2">
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0D7AD8] mb-4">Contact</h1>
            <div className="text-[#666666] text-sm space-y-1">
              <p>123 Main Street, Downtown District, Metro City, ST 12345</p>
              <p>+1 (555) 123-4567 (4 lines) - +1 (555) 987-6543</p>
              <p>+1 (555) 246-8135</p>
              <p className="pt-1">
                <a href="mailto:contact@example.com" className="text-[#333333] hover:underline">
                  contact@example.com
                </a>
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-sky-50 border border-sky-200 p-6 rounded text-center">
              <h3 className="text-lg font-bold text-sky-800 mb-1">Message Sent Successfully!</h3>
              <p className="text-sky-600 text-xs mb-3">Thank you for contacting us. We will get back to you shortly.</p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', address: '', phone: '', subject: '', message: '', agreed: false }); }}
                className="bg-[#0D7AD8] text-white px-4 py-1.5 text-xs font-bold uppercase rounded-sm hover:bg-[#0b65b2] transition-colors cursor-pointer"
              >
                Reset
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#333333] mb-1">
                    Name <span className="text-[#0D7AD8]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#cccccc] rounded-sm text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#666666]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333333] mb-1">
                    Email <span className="text-[#0D7AD8]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#cccccc] rounded-sm text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#666666]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#333333] mb-1">Address</label>
                  <input
                    type="text"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#cccccc] rounded-sm text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#666666]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333333] mb-1">Phone</label>
                  <input
                    type="text"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#cccccc] rounded-sm text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#666666]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333333] mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#cccccc] rounded-sm text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#666666]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333333] mb-1">
                  Message <span className="text-[#0D7AD8]">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#cccccc] rounded-sm text-sm text-[#333333] placeholder-[#999999] focus:outline-none focus:border-[#666666] resize-y"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  required
                  id="terms"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="w-4 h-4 text-[#0D7AD8] border-[#cccccc] rounded-sm focus:ring-0 cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-[#666666] cursor-pointer">
                  I agree to the Terms and Privacy Policy
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#0D7AD8] text-white px-6 py-2 text-xs font-bold uppercase rounded-sm hover:bg-[#0b65b2] transition-colors cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="space-y-3">
            {sidebarPosts.map((post, idx) => (
              <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                <img src={post.image} alt={post.title} className="w-[85px] h-[60px] object-cover rounded-sm flex-shrink-0" />
                <div>
                  <h4 className="text-[13px] font-bold text-[#333333] group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h4>
                  <div className="text-[11px] text-[#999999] flex items-center space-x-1 mt-1">
                    <FiCalendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <div className="relative border-b-2 border-[#0D7AD8] pb-0 mb-4">
              <span className="bg-[#0D7AD8] text-white px-3 py-1.5 font-bold text-[11px] uppercase tracking-wider inline-block">
                POPULAR POSTS
              </span>
            </div>
            
            <div className="space-y-3">
              {popularPosts.map((post, idx) => (
                <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                  <img src={post.image} alt={post.title} className="w-[85px] h-[60px] object-cover rounded-sm flex-shrink-0" />
                  <div>
                    <h4 className="text-[13px] font-bold text-[#333333] group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <div className="text-[11px] text-[#999999] flex items-center space-x-1 mt-1">
                      <FiCalendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;