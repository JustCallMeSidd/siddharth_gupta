export default function SpeechBubble() {
  return (
    <div
      className="absolute top-8 left-8 sm:top-12 sm:left-12 lg:top-16 lg:left-16 z-10 animate-bounce-in animate-float"
      style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
    >
      <div className="relative glass px-5 py-3 rounded-2xl shadow-lg">
        {/* Bubble content */}
        <p className="font-pixel text-xs text-chrome-800 dark:text-chrome-200 leading-relaxed">
          HI, I&apos;M
        </p>
        <p className="font-sans font-bold text-sm text-chrome-800 dark:text-chrome-200 mt-1">
          SIDDHARTH
        </p>

        {/* Triangle tail pointing down-right */}
        <div
          className="absolute -bottom-2 left-6 w-0 h-0"
          style={{
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid rgba(255, 255, 255, 0.7)',
          }}
        />
      </div>
    </div>
  );
}
