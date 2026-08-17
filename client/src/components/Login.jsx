import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const Login = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Yahan aap apna authentication check laga sakte hain
    navigate('/admin');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs px-4">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200 select-none"
        style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-700 cursor-pointer transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-zinc-900 tracking-tight mb-1">Log In</h2>
          <p className="text-zinc-500 text-xs md:text-sm">Welcome back! Please enter your details.</p>
        </div>

        {/* Google Login Button */}
        <button 
          type="button"
          className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-zinc-200 rounded-xl font-semibold text-sm text-zinc-700 hover:bg-zinc-50 transition-colors cursor-pointer mb-6 shadow-xs"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-200"></div>
          </div>
          <span className="relative bg-white px-4 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            Or sign up with email
          </span>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="border border-zinc-200 rounded-xl px-4 py-2.5 focus-within:border-[#0D7AD8] transition-colors">
            <label className="block text-[11px] font-medium text-zinc-400">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@codingest.com"
              className="w-full text-sm font-medium text-zinc-900 outline-none bg-transparent pt-0.5"
            />
          </div>

          <div className="relative border border-zinc-200 rounded-xl px-4 py-2.5 focus-within:border-[#0D7AD8] transition-colors">
            <label className="block text-[11px] font-medium text-zinc-400">Password</label>
            <div className="flex items-center justify-between">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••"
                className="w-full text-sm font-medium text-zinc-900 outline-none bg-transparent pt-0.5"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-zinc-400 hover:text-zinc-600 cursor-pointer focus:outline-none"
              >
                {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <a href="#forgot" className="text-xs font-bold text-[#0D7AD8] hover:underline">
              Forgot Password?
            </a>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#0D7AD8] text-white py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#0b65b2] transition-colors cursor-pointer mt-2"
          >
            Log In
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-6 text-xs text-zinc-500">
          Don't have an account?{' '}
          <a href="#signup" className="font-bold text-[#0D7AD8] hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;