import React from "react";
import { useNavigate } from "react-router-dom";

const SoundCard = ({ sound }) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate(`/sound/${sound.id}`);
  };

  return (
    <div
      className="cursor-pointer rounded-2xl overflow-hidden 
      bg-white/60 dark:bg-white/5 backdrop-blur-md
      border border-white/40 dark:border-white/10
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
      hover:-translate-y-1 transition-all duration-300
      mb-6 break-inside-avoid"
      onClick={handlePlayClick}
    >
      <img
        src={sound.imageUrl}
        alt={sound.title}
        className="w-full object-cover"
        style={{ height: `${140 + Math.random() * 120}px` }}
      />

      <div className="p-4">
        <h3 className="font-semibold text-sm tracking-tight 
        text-slate-900 dark:text-white truncate">
          {sound.title}
        </h3>

        <p className="text-xs mt-1 
        text-slate-600 dark:text-slate-400 
        font-medium tracking-wide truncate">
          {sound.category}
        </p>
      </div>
    </div>
  );
};

export default SoundCard;