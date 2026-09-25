import { Icon } from "@iconify/react";

const Error = ({ message, onRetry }) => {
  return (
    <div className="mx-auto my-8 max-w-md rounded-2xl border border-red-500/20 bg-red-950/10 p-8 text-center backdrop-blur-md">
      {/* Illustrated Error Icon */}
      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-500 animate-none">
        {/* Pulsing Red Glow */}
        <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md animate-ping"></div>

        {/* Clapperboard / Alert Icon */}
        <Icon icon="mdi:movie-off-outline" className="relative text-4xl " />
      </div>

      {/* Error Heading */}
      <h3 className="mt-5 text-xl font-bold text-white">Projection Failed!</h3>

      {/* Error Message */}
      <p className="mt-2 text-sm text-slate-400">{message || "We couldn't load the movies right now. Please check your internet connection."}</p>

      {/* Retry Button (যদি পুনরায় চেষ্টা করার ফাংশন থাকে) */}
      {onRetry && (
        <button
          onClick={onRetry}
          type="button"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-500/20 px-5 py-2.5 text-sm font-semibold text-red-400 transition-all hover:bg-red-500 hover:text-white active:scale-95 cursor-pointer"
        >
          <Icon icon="lucide:rotate-cw" className="text-base" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
