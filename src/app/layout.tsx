import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { AuthProvider } from '@/providers/auth-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
    <html lang="pt-br">
      <body>{children}</body>
    </html>
    </AuthProvider>
  )
}
