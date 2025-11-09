export default function LogoWordmark({ variant = 'dark', size = 'md' }){
  const fills = {
    dark: { text: 'var(--tw-charcoal)', underline: 'var(--tw-tangerine)' },
    light: { text: '#ffffff', underline: '#ffffff' },
    mint: { text: 'var(--tw-mint)', underline: 'var(--tw-tangerine)' },
  }[variant]

  const width = size === 'lg' ? 320 : 240
  const height = size === 'lg' ? 84 : 64

  return (
    <svg className="logoLarge" width={width} height={height} viewBox="0 0 640 168" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TwistUp logo">
      <title>TwistUp</title>
      <defs>
        <linearGradient id="tw-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="rgba(255,255,255,0.6)" offset="0%"/>
          <stop stopColor="rgba(255,255,255,0)" offset="100%"/>
        </linearGradient>
      </defs>
      <g>
        <text x="6" y="110" fontFamily="Rubik, system-ui, -apple-system, Segoe UI, Roboto, Arial" fontWeight="800" fontSize="118" letterSpacing="1" fill={fills.text}>
          Twist<tspan dy="-10">Up</tspan>
        </text>
        <path d="M20 130 C 140 170, 340 160, 610 130" stroke={fills.underline} strokeWidth="14" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  )
}
