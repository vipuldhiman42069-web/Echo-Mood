import React from "react";
import { useNavigate } from "react-router-dom";
import sounds from "../assets/sounds.json";

const UpNext = () => {
  const navigate = useNavigate();

  const shuffled = [...sounds].sort(() => 0.5 - Math.random());
  const nextSounds = shuffled.slice(0, 6);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            queue_music
          </span>
          Up Next
        </h3>

        <button className="text-sm text-white/50 hover:text-white transition">
          Clear Queue
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {nextSounds.map((sound) => (
          <div
            key={sound.id}
            onClick={() => navigate(`/sound/${sound.id}`)}
            className="group flex items-center gap-5 p-5 rounded-2xl
            bg-white/10 backdrop-blur-lg
            border border-white/10
            hover:bg-white/15
            transition-all duration-300
            cursor-pointer"
          >
            {/* Cover */}
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={sound.imageUrl}
                alt={sound.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 
              flex items-center justify-center 
              opacity-0 group-hover:opacity-100 
              transition-opacity">
                <span className="material-symbols-outlined text-white text-2xl">
                  play_arrow
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col flex-grow min-w-0 space-y-1">
              <h4 className="text-white font-semibold truncate">
                {sound.title}
              </h4>

              <p
                className="text-sm font-medium truncate"
                style={{ color: sound.categoryColor }}
              >
                {sound.category}
              </p>

              <p className="text-sm text-white/60 line-clamp-2">
                {sound.description}
              </p>
            </div>

            {/* Duration */}
            <div className="text-sm text-white/70 font-mono whitespace-nowrap">
              {sound.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpNext;