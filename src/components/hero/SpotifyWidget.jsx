import { SiSpotify } from 'react-icons/si';

export default function SpotifyWidget() {
  return (
    <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10 hidden sm:flex">
      <div className="glass max-w-[220px] rounded-xl p-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-default">
        {/* Now Playing label */}
        <div className="flex items-center gap-1.5 mb-2">
          <SiSpotify className="text-[#1DB954] text-sm" />
          <span className="text-[10px] font-medium text-chrome-500 dark:text-chrome-400 uppercase tracking-wider">
            Now Playing
          </span>
        </div>

        {/* Track info */}
        <div className="flex items-center gap-3">
          {/* Album art placeholder */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-lg shrink-0 shadow-inner">
            🎵
          </div>

          {/* Track details */}
          <div className="min-w-0">
            <p className="text-sm font-semibold text-chrome-800 dark:text-chrome-200 truncate">
              Blinding Lights
            </p>
            <p className="text-xs text-chrome-500 dark:text-chrome-400 truncate">
              The Weeknd
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-2.5 w-full h-1 bg-chrome-200 dark:bg-chrome-700 rounded-full overflow-hidden">
          <div className="h-full w-3/5 bg-[#1DB954] rounded-full" />
        </div>
      </div>
    </div>
  );
}
