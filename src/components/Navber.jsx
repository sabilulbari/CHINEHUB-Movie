import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation, useParams } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);

  const NavLink = [
    { id: 1, Name: "Home", href: "/" },
    { id: 2, Name: "Browse", href: "/browse" },
    { id: 3, Name: "Categories", href: "/categories" },
  ];



  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B132B]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 transition-opacity hover:opacity-90 border-none">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#39FF88]/10 text-[#39FF88]">
            <Icon icon="iconoir:cinema-old" className="text-[#39FF88] text-3xl -rotate-90" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            CINE<span className="text-[#39FF88]">HUB</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {NavLink.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link key={link.id} to={link.href} className="relative py-1 text-sm font-medium text-[#39FF88] transition-colors">
                {link.Name}
                {isActive && <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#39FF88]" />}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/movies"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[#39FF88] px-5 py-2.5 text-sm font-semibold text-[#0B132B] transition-all hover:bg-[#52FF98] hover:shadow-[0_4px_16px_rgba(57,255,136,0.2)] active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Explore Movies
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#39FF88] md:hidden cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <Icon icon="line-md:menu-to-close-alt-transition" className="text-[#39FF88] text-3xl" />
            ) : (
              <Icon icon="ci:hamburger-md" className="text-[#39FF88] text-3xl" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu*/}
      {isMobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#0B132B] px-4 pb-6 pt-2 md:hidden" id="mobile-menu">
          <div className="space-y-2">
            {NavLink.map((link) => {
            const isActive = pathname === link.href;

              return (
                <a key={link.id} href={link.href} className={`block rounded-md ${isActive && "bg-white/5"} px-3 py-2 text-base font-medium text-[#39FF88]`}>
                  {link.Name}
                </a>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 sm:hidden">
            <a href="/movies" className="flex w-full items-center justify-center gap-2 rounded-md bg-[#39FF88] px-5 py-3 text-center text-sm font-semibold text-[#0B132B]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Explore Movies
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
