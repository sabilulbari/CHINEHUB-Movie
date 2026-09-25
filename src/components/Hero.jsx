import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router";

export const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B132B] py-20 sm:py-28 lg:py-36">
      {/* Background Layers */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Cinematic Backdrop Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-luminosity"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />

        {/* Neon Green Ambient Radial Light */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(60% 50% at 50% 30%, rgba(57, 255, 136, 0.15) 0%, rgba(11, 19, 43, 0.95) 100%)",
          }}
        />

        {/* Bottom Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B132B] to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl" style={{ textShadow: "0 0 25px rgba(255, 255, 255, 0.15)" }}>
          DISCOVER{" "}
          <span className="text-[#39FF88]" style={{ textShadow: "0 0 30px rgba(57, 255, 136, 0.5)" }}>
            MOVIES
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
          Explore and discover your favorite movies from around the world. Stream, curate, and review cinema classics and trending blockbusters.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex items-center justify-center">
          <Link
            to="/browse"
            className="flex items-center gap-2.5 rounded-xl bg-[#39FF88] px-8 py-3.5 text-sm font-extrabold tracking-wider text-[#0B132B] transition-all duration-200  active:scale-[0.98] hover:scale-x-90"
            style={{ boxShadow: "0px 0px 22px rgba(57, 255, 136, 0.45)" }}
          >
            {/* Clapper Icon */}
            <Icon icon={"mdi:movie-open-play"} className="text-xl" />
            <span>Explore Now</span>
          </Link>
        </div>

        {/* Feature Badges Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:mx-auto lg:max-w-4xl">
          <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
            <span className="text-base font-bold text-white sm:text-lg">
              10,000+ <span className="text-[#39FF88]">Movies</span>
            </span>
          </div>

          <div className="flex items-center justify-center rounded-2xl border border-[#39FF88]/30 bg-[#39FF88]/5 px-6 py-4 backdrop-blur-md">
            <span className="text-base font-bold text-white sm:text-lg">
              4K Ultra HD <span className="text-[#39FF88]">Streaming</span>
            </span>
          </div>

          <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
            <span className="text-base font-bold text-[#39FF88] sm:text-lg">Daily Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
