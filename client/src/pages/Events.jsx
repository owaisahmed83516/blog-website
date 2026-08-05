import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiMapPin, FiClock, FiArrowRight, FiTag } from 'react-icons/fi';

const Events = () => {
  const [filter, setFilter] = useState('ALL');

  const events = [
    {
      id: 'evt-1',
      title: 'Global Tech & AI Innovation Summit 2026',
      category: 'AI & INNOVATION',
      date: 'Sep 14, 2026',
      time: '09:00 AM - 05:00 PST',
      location: 'Silicon Valley, CA & Virtual',
      description: 'Explore groundbreaking advancements in generative artificial intelligence, cloud infrastructure, and enterprise tech scaling.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
      link: '/events/global-tech-summit-2026',
      badge: 'Featured'
    },
    {
      id: 'evt-2',
      title: 'Seed Funding & Venture Capital Masterclass',
      category: 'FUNDING',
      date: 'Sep 28, 2026',
      time: '02:00 PM - 04:30 PST',
      location: 'New York, NY',
      description: 'A direct session with top-tier angel investors and micro-VCs focusing on pitch deck optimization and term sheet negotiations.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop',
      link: '/events/vc-masterclass-2026',
      badge: 'Limited Seats'
    },
    {
      id: 'evt-3',
      title: 'SaaS Founders Meetup & Networking Night',
      category: 'FOUNDERS',
      date: 'Oct 12, 2026',
      time: '06:00 PM - 09:00 PST',
      location: 'Austin, TX',
      description: 'Connect with fellow bootstrap and venture-backed SaaS founders to discuss growth metrics, product-led growth, and scaling strategies.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop',
      link: '/events/saas-founders-meetup',
      badge: 'Networking'
    }
  ];

  const categories = ['ALL', 'AI & INNOVATION', 'FUNDING', 'FOUNDERS'];

  const filteredEvents = filter === 'ALL' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div 
      className="min-h-screen bg-white text-zinc-900 py-12 px-4 md:px-12 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-200">
          <div>
            <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-[#0D7AD8] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-3 border border-blue-100">
              <FiTag className="w-3.5 h-3.5" />
              <span>Calendar</span>
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">
              Upcoming Tech Events
            </h1>
            <p className="text-zinc-600 text-sm md:text-base mt-2">
              Join industry leaders, founders, and investors at our upcoming summits, masterclasses, and networking meetups.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  filter === cat 
                    ? 'bg-[#0D7AD8] text-white shadow-sm' 
                    : 'bg-gray-100 text-zinc-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* Event Image & Badge */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#0D7AD8] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                    {event.badge}
                  </span>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <span className="text-[10px] font-bold text-[#0D7AD8] uppercase tracking-wider block mb-2">
                    {event.category}
                  </span>
                  
                  <h3 className="text-lg font-black text-zinc-900 group-hover:text-[#0D7AD8] transition-colors line-clamp-2 leading-snug mb-3">
                    {event.title}
                  </h3>

                  <p className="text-xs md:text-sm text-zinc-600 line-clamp-3 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Date, Time & Location Meta */}
                  <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-zinc-500">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-4 h-4 text-[#0D7AD8] shrink-0" />
                      <span className="font-semibold text-zinc-800">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiClock className="w-4 h-4 text-[#0D7AD8] shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiMapPin className="w-4 h-4 text-[#0D7AD8] shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="px-6 pb-6 pt-2">
                <Link 
                  to={event.link}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gray-50 hover:bg-[#0D7AD8] text-zinc-800 hover:text-white font-bold text-xs py-3 px-4 rounded-lg transition-colors border border-gray-200 hover:border-[#0D7AD8] cursor-pointer"
                >
                  <span>Reserve Your Spot</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;