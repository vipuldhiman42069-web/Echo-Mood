import React from "react";
import { useNavigate } from "react-router-dom";
import sounds from "../assets/sounds.json";

const Similar = () => {
  const navigate = useNavigate();

  const trendingSounds = sounds.slice(0, 3);

  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Similar Sounds
      </h2>
      <div id="trending">

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {trendingSounds.map((sound) => (
          <div
            key={sound.id}
            onClick={() => navigate(`/sound/${sound.id}`)}
            className="flex-1 max-w-md cursor-pointer
            bg-white/10 backdrop-blur-xl
            border border-white/10
            rounded-full px-6 py-4
            flex items-center gap-4
            shadow-lg hover:shadow-2xl
            hover:scale-[1.02]
            transition-all duration-300"
          >
            {/* Cover */}
            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={sound.imageUrl}
                alt={sound.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col overflow-hidden">
              <p className="font-semibold truncate text-black dark:text-white">
                {sound.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                {sound.category}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Similar ;