import React, { useState } from "react";

const Player = ({ id, title, category, imageUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      
      {/* Glass Capsule */}
      <div className="bg-white/20 dark:bg-white/5 backdrop-blur-xl
      border border-white/20 dark:border-white/10
      rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      px-4 md:px-6 py-3 flex items-center justify-between gap-4">

        {/* Track Info */}
        <div className="flex items-center gap-3 min-w-[120px]">
          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-semibold text-white truncate">
              {title}
            </p>
            <p className="text-xs font-medium truncate text-white/70">
              {category}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-white/80 hover:text-white transition">
            <span className="material-symbols-outlined text-2xl">
              skip_previous
            </span>
          </button>

          <button
            onClick={togglePlay}
            className="flex items-center justify-center
            w-12 h-12 rounded-full
            bg-primary text-white
            shadow-lg shadow-primary/40
            hover:scale-105 transition"
          >
            <span className="material-symbols-outlined text-xl">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>

          <button className="text-white/80 hover:text-white transition">
            <span className="material-symbols-outlined text-2xl">
              skip_next
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Player;