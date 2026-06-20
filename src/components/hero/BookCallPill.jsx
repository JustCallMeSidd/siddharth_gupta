export default function BookCallPill() {
  return (
    <a
      href="mailto:justcallmesidd@gmail.com"
      className="absolute bottom-24 left-6 sm:bottom-28 sm:left-8 z-10 glass rounded-full px-5 py-2.5 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 hover:shadow-lg no-underline group"
    >
      {/* Green live dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>

      {/* Label */}
      <span className="text-sm font-medium text-chrome-800 dark:text-chrome-200 group-hover:text-chrome-900 dark:group-hover:text-white transition-colors">
        Available for work
      </span>
    </a>
  );
}
