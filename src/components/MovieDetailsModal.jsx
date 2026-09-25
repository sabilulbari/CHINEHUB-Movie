import { Icon } from "@iconify/react";

const MovieDetailsModal = ({ movie, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 mt-10 backdrop-blur-sm">
        {/* Modal Box */}
        <div className="relative max-h-[75vh] md:max-h-screen w-full md:max-w-4xl overflow-y-auto no-scrollbar rounded-2xl border border-white/10 bg-[#0B132B] p-6 text-white shadow-2xl">
          {/* Close Button */}
          <button onClick={onClose} className="absolute right-4 top-4 hover:text-white cursor-pointer rounded-full bg-white/50 p-2 text-white-400 hover:bg-red-500 font-extrabold">
            <Icon icon="ant-design:close-outlined" className="text-xl font-bold" />
          </button>

          <div className="flex flex-col gap-6 md:flex-row">
            {/* Movie Poster */}
            <img
              src={movie?.image?.original || movie?.image?.medium || "https://via.placeholder.com/210x295"}
              alt={movie?.name}
              className="h-72 w-full rounded-xl object-cover md:w-56 mt-10 md:mt-0"
            />

            {/* Movie Details */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{movie?.name}</h2>

              <div className="mt-2 flex flex-wrap gap-2">
                {movie?.genres?.map((genre, index) => (
                  <span key={index} className="rounded-md bg-[#39FF88]/10 px-2.5 py-1 text-xs font-semibold text-[#39FF88]">
                    {genre}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-slate-300">
                <span className="font-semibold text-white">Rating:</span> ⭐ {movie?.rating?.average || "N/A"}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                <span className="font-semibold text-white">Language:</span> {movie?.language}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                <span className="font-semibold text-white">Premiered:</span> {movie?.premiered || "Unknown"}
              </p>

              <div className="mt-4 text-sm text-slate-400 [&>p]:mb-2" dangerouslySetInnerHTML={{ __html: movie?.summary || "No description available." }} />
            </div>
          </div>
        </div>
      </div>
    </>
    // Backdrop / Overlay
  );
};

export default MovieDetailsModal;
