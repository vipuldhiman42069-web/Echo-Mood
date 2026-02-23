import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MasonryGrid from '../components/MasonryGrid';
import Player from '../components/Player';

function Home() {
  return (
    
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display flex flex-col">
      
      
      <Navbar />
      <HeroSection />
      
      <main className="flex-grow w-full py-8 
bg-gradient-to-b 
from-transparent 
via-fuchsia-900/40 
to-rose-950 
dark:via-fuchsia-950/50 
dark:to-[#1a0b1f]">
        <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-extrabold mb-2 px-6 lg:px-20 
  bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 
  bg-clip-text text-transparent tracking-tight">
    Discover Moods
  </h2>
  <p className="text-slate-500 dark:text-slate-300 text-sm sm:text-base 
  mb-6 px-6 lg:px-20 font-medium">
    Curated soundscapes for focus, sleep, and relaxation.
  </p>
          <MasonryGrid />
        </div>
      </main>
      <Player
        id={0}
        title="Ambient Escape"
        category="Relaxation"
        imageUrl="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
      />
    </div>
   
  );
}

export default Home;
