import React, { useState } from 'react';
import { Play, Pause, Music, Volume2, Disc, ExternalLink } from 'lucide-react';
import { TRACK_LIST, ASSETS } from '../data';

export const MusicCard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const currentTrack = TRACK_LIST[currentTrackIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACK_LIST.length);
  };

  return (
    <div className="bg-[#f2f4f6] hover:bg-[#eff1f4] rounded-3xl p-5 sm:p-6 transition-all duration-300 border border-neutral-200/50 shadow-soft flex flex-col justify-between h-full group">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-neutral-400 tracking-wide uppercase">
          My music playlist
        </span>
        <Disc className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-transform ${isPlaying ? 'animate-spin' : ''}`} />
      </div>

      {/* Overlapping Albums Display matching reference */}
      <div className="my-2 py-2 flex items-center justify-center relative cursor-pointer" onClick={togglePlay}>
        <div className="relative w-36 h-28 flex items-center justify-center">
          {/* Left Album Stacked */}
          <div className="absolute left-0 top-2 w-18 h-18 rounded-xl overflow-hidden shadow-md -rotate-12 transform transition-transform group-hover:-translate-x-2 group-hover:-rotate-16 border border-white/60 opacity-80">
            <img
              src={ASSETS.albumCover}
              alt="Album Artwork 1"
              className="w-full h-full object-cover filter brightness-90 saturate-150"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Album Stacked */}
          <div className="absolute right-0 top-2 w-18 h-18 rounded-xl overflow-hidden shadow-md rotate-12 transform transition-transform group-hover:translate-x-2 group-hover:rotate-16 border border-white/60 opacity-80">
            <img
              src={ASSETS.albumCover}
              alt="Album Artwork 2"
              className="w-full h-full object-cover filter contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Center Main Album Artwork */}
          <div className="relative z-10 w-22 h-22 rounded-2xl overflow-hidden shadow-card border-2 border-white transform transition-transform group-hover:scale-105">
            <img
              src={ASSETS.albumCover}
              alt="Alex Playlist Main Album"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Play overlay button on hover */}
            <div className={`absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center transition-opacity duration-200 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-black text-black" />
                ) : (
                  <Play className="w-4 h-4 fill-black text-black ml-0.5" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playlist Title & Spotify Link */}
      <div className="text-center mt-2">
        <h4 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
          Alex Playlist
        </h4>

        {/* Audio Equalizer bars if playing */}
        {isPlaying && (
          <div className="flex items-center justify-center gap-1 my-1.5 h-3">
            <span className="w-1 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_100ms] h-2" />
            <span className="w-1 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_300ms] h-3" />
            <span className="w-1 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_200ms] h-1.5" />
            <span className="w-1 bg-emerald-500 rounded-full animate-[bounce_1s_infinite_400ms] h-2.5" />
          </div>
        )}

        {/* Play on Spotify Button */}
        <a
          href={currentTrack.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 hover:text-emerald-600 transition-colors mt-1"
        >
          {/* Spotify SVG Icon */}
          <svg className="w-3.5 h-3.5 fill-current text-emerald-500" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C13.62 9.9 19.08 10.56 22.8 12.84c.36.24.54.84.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z" />
          </svg>
          <span>Play on Spotify</span>
        </a>
      </div>
    </div>
  );
};
