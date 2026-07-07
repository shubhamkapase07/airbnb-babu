"use client";

import { AirbnbLogo, Icon } from "./icons";

export default function Header() {
  return (
    <header className="relative z-20 bg-white border-b border-line-2">
      <div className="mx-auto flex h-20 max-w-[1760px] items-center justify-between gap-4 px-6 md:px-10 lg:px-20">
        {/* Logo */}
        <a href="/" aria-label="Airbnb homepage" className="flex shrink-0 items-center gap-2 text-rausch">
          <AirbnbLogo className="h-8 w-8" />
          <span className="hidden text-[1.35rem] font-bold tracking-tight lg:inline">airbnb</span>
        </a>

        {/* Search pill */}
        <div className="hidden md:flex">
          <button
            className="focus-ring flex h-[48px] items-center rounded-full border border-line bg-white pl-2 pr-2 text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_2px_4px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.08)]"
            aria-label="Search"
          >
            <span className="flex h-9 items-center gap-2 rounded-full pl-4 pr-1">
              <span className="flex h-6 w-6 items-center justify-center">
                {/* little house search glyph */}
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <path d="M3 11.5 12 4l9 7.5" fill="none" stroke="#ff385c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 10.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8.5" fill="#fff" stroke="#ff385c" strokeWidth="1.8" strokeLinejoin="round" />
                  <rect x="10" y="14" width="4" height="6" fill="#ff385c" />
                </svg>
              </span>
              Anywhere
            </span>
            <span className="h-6 w-px bg-line" />
            <span className="px-4">Anytime</span>
            <span className="h-6 w-px bg-line" />
            <span className="pl-4 pr-3 font-normal text-muted-2">Add guests</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rausch text-white">
              <Icon name="search" size={16} stroke={3} />
            </span>
          </button>
        </div>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <a
            href="#"
            className="hidden rounded-full px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-hover lg:block"
          >
            Become a host
          </a>
          <button
            aria-label="Choose a language and region"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-hover"
          >
            <Icon name="globe" size={18} stroke={2} />
          </button>
          <button
            aria-label="Main navigation menu"
            className="focus-ring flex h-10 items-center gap-3 rounded-full border border-line px-3 shadow-sm transition-shadow hover:shadow-md"
          >
            <Icon name="menu" size={16} stroke={2.2} />
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#717171] text-white">
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white" aria-hidden>
                <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 4a4.92 4.92 0 1 1 0 9.85 4.92 4.92 0 0 1 0-9.85zm0 22.6a11.28 11.28 0 0 1-8.5-3.86c.05-2.8 5.67-4.34 8.5-4.34s8.45 1.54 8.5 4.34A11.28 11.28 0 0 1 16 27.3z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
