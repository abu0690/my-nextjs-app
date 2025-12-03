import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Learning Next.js App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="bg-blue-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">🚀 My App</h1>
              <nav className="flex gap-4">
                <Link href="/" className="hover:bg-blue-700 px-4 py-2 rounded">
                  Home
                </Link>
                <Link href="/users" className="hover:bg-blue-700 px-4 py-2 rounded">
                  Users
                </Link>
                <Link href="/products" className="hover:bg-blue-700 px-4 py-2 rounded">
                  Products
                </Link>
                <Link href="/dashboard" className="hover:bg-blue-700 px-4 py-2 rounded">
                  Dashboard
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}