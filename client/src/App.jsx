import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Subscribe from './components/Subscribe';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './pages/About';
import Contact from './pages/Contact';
import TechNews from './pages/TechNews';
import AiSecurity from './pages/AiSecurity ';
import Startup from './pages/Startup';
import ArticleView from './pages/ArticleView';
import Events from './pages/Events';
import TechLeadership from './pages/TechLeadership';
import TechInterviews from './pages/TechInterviews';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminThemes from './components/admin/AdminThemes';
import AdminNavigation from './components/admin/AdminNavigation';
import AdminPages from './components/admin/AdminPages';
import AddPostFormat from './components/admin/AddPostFormat';
import BulkPostUpload from './components/admin/BulkPostUpload';
import AdminPosts from './components/admin/AdminPosts';
import PendingPosts from './components/admin/PendingPosts';
import ScheduledPosts from './components/admin/ScheduledPosts';
import AdminEvents from './components/admin/AdminEvents';
import AdminDrafts from './components/admin/AdminDrafts';
import Media from './components/admin/Media';
import Tags from './components/admin/Tags';
import RSSFeeds from './components/admin/RSSFeeds';
import Polls from './components/admin/Polls';
import Categories from './components/admin/Categories';
import WidgetsManager from './components/admin/WidgetsManager';
import AdminContact from './components/admin/AdminContact';
import CommentsManager from './components/admin/CommentsManager';



const AddPost = () => <div className="p-8 text-2xl font-bold">Add Post Page Content</div>;

function MainContent() {
  const navigate = useNavigate();
  const location = useLocation(); // 1. Current path check karne ke liye

  // Check if the current route starts with /admin
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSubscribeClick = () => {
    navigate('/subscribe');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between relative">
      <div>
        {/* Navbar sirf tab dikhega jab route admin na ho */}
        {!isAdminRoute && (
          <Navbar 
            onSubscribeClick={handleSubscribeClick} 
            onLoginClick={() => setIsLoginOpen(true)}
            onSignUpClick={() => setIsSignUpOpen(true)} 
          />
        )}

        {/* Routes */}
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/themes" element={<AdminThemes />} />
          <Route path="/admin/navigation" element={<AdminNavigation />} />
          <Route path="/admin/pages" element={<AdminPages />} />
          <Route path="/admin/new-post" element={<AddPostFormat />} />
          <Route path="/admin/bulk-post-upload" element={<BulkPostUpload />} />
          <Route path="/admin/posts" element={<AdminPosts />} />
          <Route path="/admin/pending-posts" element={<PendingPosts />} />
          <Route path="/admin/scheduled-posts" element={<ScheduledPosts />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/drafts" element={<AdminDrafts />} />
          <Route path="/admin/media" element={<Media />} />
          <Route path="/admin/tags" element={<Tags />} />
          <Route path="/admin/rss" element={<RSSFeeds/>} />
          <Route path="/admin/polls" element={<Polls/>} />
          <Route path="/admin/categories" element={<Categories/>} />
          <Route path="/admin/widgets" element={<WidgetsManager/>} />
          <Route path="/admin/contact-messages" element={<AdminContact/>} />
          <Route path="/admin/comments" element={<CommentsManager/>} />
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

      {/* Footer sirf tab dikhega jab route admin na ho */}
      {!isAdminRoute && <Footer />}

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