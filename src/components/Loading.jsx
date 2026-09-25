import { Icon } from "@iconify/react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Visual Illustrated Icon with Glow Effect */}
      <div className="relative flex items-center justify-center">
        {/* Glowing Background Effect */}
        <div className="absolute h-24 w-24 rounded-full bg-[#39FF88]/20 blur-xl animate-pulse"></div>

        {/* Outer Rotating Border ring */}
        <div className="h-20 w-20 rounded-full border-2 border-dashed border-[#39FF88]/40 animate-[spin_8s_linear_infinite]"></div>

        {/* Center Film Reel Icon (Fast Spin) */}
        <div className="absolute animate-spin">
          <Icon icon="mdi:movie-roll" className="text-5xl text-[#39FF88]" />
        </div>
      </div>

      {/* Loading Text & Animated Dots */}
      <div className="mt-6 flex items-center gap-1">
        <h3 className="text-lg font-bold tracking-wider text-white">FETCHING MOVIES</h3>
        <span className="flex gap-1 text-[#39FF88]">
          <span className="animate-bounce [animation-delay:-0.3s]">•</span>
          <span className="animate-bounce [animation-delay:-0.15s]">•</span>
          <span className="animate-bounce">•</span>
        </span>
      </div>

      {/* Tagline */}
      <p className="mt-1 text-xs text-slate-400">Grab your popcorn, loading the best titles for you...</p>
    </div>
  );
};

export default Loading;
