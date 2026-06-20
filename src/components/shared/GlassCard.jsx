export default function GlassCard({ children, className = '', hover = false }) {
  return (
    <div
      className={`glass ${
        hover
          ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
