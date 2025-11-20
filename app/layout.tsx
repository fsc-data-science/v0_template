import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  // TODO: Replace "YOUR_BRAND_NAME" with your actual brand name
  title: "YOUR_BRAND_NAME | AI-Powered Modules",
  // TODO: Update description with your brand-specific messaging
  description: "Custom built AI-powered modules for intelligent analysis and insights on YOUR_BRAND_NAME.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
