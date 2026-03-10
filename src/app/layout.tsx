import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Swastik Naikada | Full Stack Web Developer',
  description: 'Professional Full Stack Web Developer specializing in React, Node.js, and modern web technologies. Building scalable, user-centric web applications.',
  keywords: 'web developer, full stack, react, node.js, freelancer, portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
