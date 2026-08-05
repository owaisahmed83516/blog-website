import React from 'react';
import Home from '../components/HomePage';
import RssNewsSection from '../components/RssNewsSection';
import QuizzesSection from '../components/QuizzesSection';
import LifestyleSec from '../components/LifestyleSec';
import TechSection from '../components/TechSection';
import TravelSection from '../components/TravelSection';
import SportSection from '../components/SportSection';
import VideosSection from '../components/VideosSection';

function App() {
  return (
    <div>
      <Home />
      <LifestyleSec/>
      <TravelSection/>
      <QuizzesSection/>
      <RssNewsSection/>
      <TechSection/>
      <VideosSection/>
      <SportSection/>
    </div>
  );
}

export default App;