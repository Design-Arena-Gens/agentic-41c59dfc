import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], weight: ['400','600','800'] })

export const metadata = {
  title: 'TwistUp ? Brand Identity',
  description: 'Brand system, logo, palette, and guidelines for TwistUp.',
  metadataBase: new URL('https://agentic-41c59dfc.vercel.app'),
  icons: {
    icon: '/assets/favicon.svg',
  },
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
