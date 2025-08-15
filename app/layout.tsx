import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

// Global CSS import
import '../styles/layout.css'; // tumhara layout ka CSS yahan import hoga
import './globals.css';

export const metadata: Metadata = {
  title: 'Recruit Crm',
  description: 'Recruit Crm',
  generator: 'Recruit Crm',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
