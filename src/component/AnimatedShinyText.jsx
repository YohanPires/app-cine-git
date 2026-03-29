// components/AnimatedShinyText.jsx
export default function AnimatedShinyText({
  children,
  className = '',
  shimmerWidth = 100,
}) {
  return (
    <p
      style={{ '--shimmer-width': `${shimmerWidth}px` }}
      className={[
        'mx-auto max-w-md text-white/50 dark:text-white/90',
        'animate-shimmer-ui bg-clip-text bg-no-repeat',
        '[background-position:0_0] [background-size:var(--shimmer-width)_100%]',
        'bg-gradient-to-r from-transparent via-black/5 via-50% to-transparent dark:via-white/100',
        className,
      ].join(' ')}
    >
      {children}
    </p>
  )
}