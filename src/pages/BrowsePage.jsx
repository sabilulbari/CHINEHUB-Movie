import { cacheSignal, useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import MovieDetailsModal from '../components/MovieDetailsModal';



// Main Page Component
const BrowsePage= () => {

  const [movies, setMovies]= useState([])
  const [isLoading, setLoading]= useState(true)
  const [error, setError] = useState(null)

  useEffect (()=>{
    axios.get("https://api.tvmaze.com/shows")
    .then((response)=>{
      setMovies(response.data)
      setLoading(false)
    }).catch((err)=>{
      setError(err.message)
      setLoading(false)
    })
  }, [])

  const [searchQuery, setSearchQuery] = useState('');
  // UI Search Filtering Logic (Pre-API Integration)
  const filteredMovies = movies.filter((movie) => movie.name.toLowerCase().includes(searchQuery.toLowerCase()));


  const [selectedMovie, setSelectedMovie] = useState(null);



  return (
    <div className="min-h-screen bg-[#0B132B] text-white">
      {/* Top Ambient Glow */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-96 z-0"
        style={{
          background: "radial-gradient(60% 30% at 50% 0%, rgba(57, 255, 136, 0.1) 0%, rgba(11, 19, 43, 0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Page Header & Search Bar Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            EXPLORE <span className="text-[#39FF88]">MOVIES</span> & SHOWS
          </h1>
          <p className="mt-3 text-sm font-normal text-slate-400 sm:text-base">Search through thousands of titles from around the globe.</p>

          {/* Search Input Box */}
          <div className="relative mt-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a movie or show by title..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-12 text-sm font-medium text-white placeholder-slate-400 backdrop-blur-md outline-none transition-all duration-200 focus:border-[#39FF88] focus:bg-white/10 focus:ring-1 focus:ring-[#39FF88] hover:border-white/20"
            />

            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Something went wrong</h1>}

            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Status Line */}
        <div className="mt-12 flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Results Found: <span className="text-[#39FF88]">{filteredMovies.length}</span>
          </span>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Sort By:</span>
            <select className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white outline-none focus:border-[#39FF88]">
              <option value="popular" className="bg-[#0B132B]">
                Popularity
              </option>
              <option value="rating" className="bg-[#0B132B]">
                Rating
              </option>
              <option value="year" className="bg-[#0B132B]">
                Release Year
              </option>
            </select>
          </div>
        </div>

        {/* Movie Grid Section */}
        {filteredMovies.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredMovies.slice(0, 8).map((movie) => (
              <MovieCard key={movie.id} movie={movie} setSelectedMovie={setSelectedMovie} />
            ))}
          </div>
        ) : (
          /* Empty State Design */
          <div className="mt-16 flex flex-col items-center justify-center text-center py-12 border border-dashed border-white/10 rounded-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-slate-400">🎬</div>
            <h3 className="mt-4 text-lg font-bold text-white">No Movies Found</h3>
            <p className="mt-1 text-sm text-slate-400">We couldn't find anything matching "{searchQuery}". Try a different title.</p>
          </div>
        )}

        {/* Movie Modal */}
        {selectedMovie && <MovieDetailsModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
      </div>
    </div>
  );
};

export default BrowsePage;