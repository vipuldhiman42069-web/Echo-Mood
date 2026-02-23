import React from 'react';

function HeroSection() {
  return (
    <section className="relative w-full py-20 px-6 flex justify-center">

      {/* Glass Hero Card */}
      <div
        className="max-w-6xl w-full
        bg-white/10 backdrop-blur-xl
        border border-white/10
        rounded-3xl p-6 md:p-12
        flex flex-col md:flex-row
        gap-10 items-center
        shadow-2xl shadow-black/30"
      >
        {/* Hero Image */}
        <div className="w-full md:w-[45%]">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEaKsq68ZD1LvqeGKKU_cuEJSY110ePcPRQ&s"
              alt="EchoMood ambience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="flex-1 text-center md:text-left space-y-6">

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight
          text-neutral-900 drop-shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
            EchoMood
          </h1>

          <p className="text-neutral-700 text-lg md:text-xl
          font-normal leading-relaxed max-w-xl">
            Curated ambient soundscapes to help you focus, relax,
            sleep, and flow effortlessly through your day.
          </p>

          <button
            className="mt-2 px-8 py-3 rounded-full
            bg-neutral-900 text-white font-medium
            hover:bg-black hover:scale-105
            transition-all duration-200 shadow-lg"
          >
            Explore Moods
          </button>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;