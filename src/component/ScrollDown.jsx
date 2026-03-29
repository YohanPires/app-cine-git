// component/ScrollDown.jsx
export default function ScrollDown({ onClick, className = '' }) {
  return (
    <button
      onClick={onClick ?? (() => window.scrollBy({ top: 200, behavior: 'smooth' }))}
      className={`w-12 h-10 rounded-full border border-white/70
        flex items-center justify-center cursor-pointer
        hover:scale-110 transition-all duration-300 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: 'rotate(90deg)' }}
      >
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </button>
  )
}