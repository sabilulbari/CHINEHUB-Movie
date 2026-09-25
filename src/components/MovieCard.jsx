import React from 'react';

const MovieCard = ({ movie, setSelectedMovie }) => {
  return (
    <div>
      <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B132B]/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#39FF88]/40 hover:shadow-[0_8px_30px_rgba(57,255,136,0.15)]">
        {/* Poster Image Container */}
        <div className="relative aspect-[2/2] w-full overflow-hidden bg-slate-900">
          <img src={movie.image.original} alt={movie.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          {/* Top Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />

          {/* Rating Badge Overlay */}
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-lg border border-black/20 bg-[#0B132B]/80 px-2.5 py-1 backdrop-blur-md">
            <span className="text-xs">⭐</span>
            <span className="text-xs font-bold text-white">{movie.rating.average}</span>
          </div>
        </div>

        {/* Card Details */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <h3 className="line-clamp-1 text-base font-bold text-white group-hover:text-[#39FF88] transition-colors">{movie.name}</h3>
            <div className="mt-2 flex items-center gap-2 text-xs font-medium text-slate-400">
              <span>📅 {movie.year}</span>
              {movie.genres && (
                <>
                  <span>•</span>
                  <span className="line-clamp-1">{movie.genres.join(", ")}</span>
                </>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-5">
            <button
              onClick={() => setSelectedMovie(movie)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#39FF88]/30 bg-[#39FF88]/10 py-2.5 text-xs font-bold uppercase tracking-wider text-[#39FF88] transition-all hover:bg-[#39FF88] hover:text-[#0B132B] active:scale-[0.98] cursor-pointer"
            >
              <span>See Details</span>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;