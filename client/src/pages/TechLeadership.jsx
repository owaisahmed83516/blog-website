import React from 'react';
import { Link } from 'react-router-dom';
import { FiTag, FiLinkedin, FiTwitter, FiMail, FiArrowRight } from 'react-icons/fi';

const TechLeadership = () => {
  const leaders = [
    {
      id: 1,
      name: 'Hamza Ali',
      role: 'Chief Executive Officer & Founder',
      bio: 'Leading the vision and technological roadmap for modern enterprise ecosystems, AI integrations, and high-growth startup scaling.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop',
      linkedin: '#linkedin',
      twitter: '#twitter',
      email: 'mailto:hamza@example.com'
    },
    {
      id: 2,
      name: 'Ayesha Siddiqui',
      role: 'Chief Technology Officer (CTO)',
      bio: 'Overseeing core engineering, scalable cloud architecture, infrastructure security, and cutting-edge product engineering pipelines.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
      linkedin: '#linkedin',
      twitter: '#twitter',
      email: 'mailto:ayesha@example.com'
    },
    {
      id: 3,
      name: 'Zainab Khan',
      role: 'Head of Product Design & UX',
      bio: 'Driving user-centric design principles, minimal aesthetic systems, and seamless cross-platform digital experiences.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop',
      linkedin: '#linkedin',
      twitter: '#twitter',
      email: 'mailto:zainab@example.com'
    },
    {
      id: 4,
      name: 'Bilal Ahmed',
      role: 'VP of Engineering & DevOps',
      bio: 'Specializing in robust backend systems, automated deployment pipelines, database optimization, and high-performance server structures.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      linkedin: '#linkedin',
      twitter: '#twitter',
      email: 'mailto:bilal@example.com'
    }
  ];

  return (
    <div 
      className="min-h-screen bg-white text-zinc-900 py-12 px-4 md:px-12 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center space-x-1.5 bg-blue-50 text-[#0D7AD8] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-3 border border-blue-100">
            <FiTag className="w-3.5 h-3.5" />
            <span>Leadership</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            Meet Our Tech Leadership Team
          </h1>
          <p className="text-zinc-600 text-base md:text-lg mt-4 leading-relaxed">
            The visionary minds, engineers, and product strategists driving innovation, technical excellence, and sustainable growth across our platform.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {leaders.map((leader) => (
            <div 
              key={leader.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="text-[10px] font-bold text-[#0D7AD8] uppercase tracking-wider block mb-1">
                    {leader.role}
                  </span>
                  <h3 className="text-lg font-black text-zinc-900 tracking-tight mb-3">
                    {leader.name}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed line-clamp-3 mb-6">
                    {leader.bio}
                  </p>
                </div>
              </div>

              {/* Social Icons Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 mt-auto">
                <div className="flex items-center space-x-3 text-zinc-500">
                  <a href={leader.linkedin} className="hover:text-[#0D7AD8] transition-colors p-1" title="LinkedIn">
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a href={leader.twitter} className="hover:text-[#0D7AD8] transition-colors p-1" title="Twitter">
                    <FiTwitter className="w-4 h-4" />
                  </a>
                  <a href={leader.email} className="hover:text-[#0D7AD8] transition-colors p-1" title="Email">
                    <FiMail className="w-4 h-4" />
                  </a>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Executive
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl mb-6 md:mb-0">
            <h2 className="text-2xl font-black text-zinc-900 tracking-tight mb-2">
              Want to join our engineering and tech team?
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              We are constantly looking for talented developers, system architects, and product designers who love building exceptional digital solutions.
            </p>
          </div>
          <Link 
            to="/careers" 
            className="inline-flex items-center space-x-2 bg-[#0D7AD8] hover:bg-blue-700 text-white font-bold text-xs md:text-sm py-3.5 px-6 rounded-lg transition-colors shadow-xs cursor-pointer shrink-0"
          >
            <span>Explore Open Roles</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TechLeadership;