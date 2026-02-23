import React from "react";
import { useParams } from "react-router-dom";
import sounds from "../assets/sounds.json";
import Navbar from "../components/Navbar";
import UpNext from "../components/UpNext";
import Player from "../components/Player";

const NowPlaying = () => {
  const { id } = useParams();
  const sound = sounds.find((s) => s.id === parseInt(id));

  if (!sound)
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0f172a]">
        Sound not found
      </div>
    );

  return (
    <div
      className="min-h-screen text-white flex flex-col"
      style={{
        background: `linear-gradient(
          180deg,
          ${sound.categoryColor}55 0%,
          #0f172a 60%,
          #020617 100%
        )`,
      }}
    >
      {/* Navbar now inside gradient */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center p-6 pb-32">

        {/* Main Glass Card */}
        <div
          className="max-w-6xl w-full
          bg-white/10 backdrop-blur-xl
          border border-white/10
          rounded-3xl p-6 md:p-10
          flex flex-col md:flex-row
          gap-8 md:gap-12 items-center
          shadow-2xl shadow-black/40"
        >
          {/* Cover */}
          <div className="w-full md:w-[45%]">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src={sound.imageUrl}
                alt={sound.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {sound.title}
              </h1>

              <p
                className="text-sm font-semibold mt-2"
                style={{ color: sound.categoryColor }}
              >
                {sound.category}
              </p>

              <p className="mt-4 text-white/70 max-w-xl">
                {sound.description}
              </p>

              <p className="mt-3 text-white/50 font-mono text-sm">
                {sound.duration}
              </p>
            </div>

            <button
              className="mt-4 px-8 py-3 rounded-full
              bg-white text-black font-semibold
              hover:scale-105 transition-all duration-200"
            >
              Play
            </button>
          </div>
        </div>

        {/* Up Next */}
        <div className="mt-12 max-w-[1400px] w-full mx-auto px-6">
          <UpNext />
        </div>
      </div>

      {/* Glass Capsule Player */}
      <Player
        id={sound.id}
        title={sound.title}
        category={sound.category}
        imageUrl={sound.imageUrl}
      />
    </div>
  );
};

export default NowPlaying;