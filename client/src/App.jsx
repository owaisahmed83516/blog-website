import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Subscribe from './components/Subscribe';
import Login from './components/Login';
import SignUp from './components/SignUp'; // 1. SignUp component import kiya
import About from './pages/About';
import Contact from './pages/Contact';
import TechNews from './pages/TechNews';
import AiSecurity from './pages/AiSecurity ';
import Startup from './pages/Startup';
import ArticleView from './pages/ArticleView';
import Events from './pages/Events';
import TechLeadership from './pages/TechLeadership';
import TechInterviews from './pages/TechInterviews';

const AddPost = () => <div className="p-8 text-2xl font-bold">Add Post Page Content</div>;

function MainContent() {
  const navigate = useNavigate();

  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // SignUp modal state

  const handleSubscribeClick = () => {
    navigate('/subscribe');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between relative">
      <div>
        {/* Navbar ko onLoginClick aur onSignUpClick props diye */}
        <Navbar 
          onSubscribeClick={handleSubscribeClick} 
          onLoginClick={() => setIsLoginOpen(true)}
          onSignUpClick={() => setIsSignUpOpen(true)} 
        />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/tech-news" element={<TechNews />} />
          <Route path="/category/ai-security" element={<AiSecurity />} />
          <Route path="/category/start-up" element={<Startup />} />
          <Route path="/category/article" element={<ArticleView />} />
          <Route path="/category/upcoming-tech-event" element={<Events />} />
          <Route path="/category/tech-leadership" element={<TechLeadership />} />
          <Route path="/category/interview" element={<TechInterviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </div>

      <Footer />

      {/* Global Modals */}
      <Login 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSwitchToSignUp={() => {
          setIsLoginOpen(false);
          setIsSignUpOpen(true);
        }}
      />
      
      <SignUp 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSwitchToLogin={() => {
          setIsSignUpOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;