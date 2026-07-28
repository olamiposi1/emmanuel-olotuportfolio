import React, { useState, useEffect } from 'react';
import { PROFILE_DATA, ASSETS } from '../data';
import { MapPin, Navigation, Clock, Copy, Check } from 'lucide-react';

export const MapCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [montrealTime, setMontrealTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Toronto',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setMontrealTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCoords = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PROFILE_DATA.coordinates);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#f2f4f6] hover:bg-[#eff1f4] rounded-3xl p-5 sm:p-6 transition-all duration-300 border border-neutral-200/50 shadow-soft flex flex-col justify-between h-full group relative overflow-hidden min-h-[220px]">
      {/* Map Graphic Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-500">
        <img
          src={ASSETS.montrealMap}
          alt="Montreal Canada Map"
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      {/* Top Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-neutral-800 shadow-2xs border border-neutral-200/80">
          Map
        </span>

        {/* Live Montreal Time Badge */}
        {montrealTime && (
          <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-neutral-600 shadow-2xs border border-neutral-200/80 flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-emerald-600" />
            <span>{montrealTime} EDT</span>
          </div>
        )}
      </div>

      {/* Bottom Overlay Info */}
      <div className="relative z-10 mt-auto pt-8">
        <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 tracking-[0.2em] uppercase font-mono">
          MONTREAL
        </h3>
        <p className="text-xs font-semibold text-neutral-500 tracking-[0.15em] uppercase mt-0.5">
          CANADA
        </p>

        <button
          onClick={handleCopyCoords}
          className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-neutral-500 hover:text-neutral-900 transition-colors mt-2 bg-white/70 hover:bg-white px-2 py-0.5 rounded-md border border-neutral-200/50"
          title="Click to copy location coordinates"
        >
          <span>{PROFILE_DATA.coordinates}</span>
          {copied ? <Check className="w-2.5 h-2.5 text-emerald-600" /> : <Copy className="w-2.5 h-2.5 text-neutral-400" />}
        </button>
      </div>
    </div>
  );
};
