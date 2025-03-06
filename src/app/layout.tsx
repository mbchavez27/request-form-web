import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Request Form',
  description: 'Request Form Web App',
}

import { Inter } from 'next/font/google'
import NavBar from './components/navbar'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        <div className="min-h-screen bg-[#F5F5F5]">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
