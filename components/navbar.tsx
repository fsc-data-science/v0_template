"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            {/* TODO: Update Flipside logo path if needed */}
            <Image src="/images/image.png" alt="Flipside" width={120} height={32} className="h-8 w-auto" priority />
            <span className="text-gray-400">×</span>
            {/* TODO: Replace placeholder-logo.png with your brand logo and update alt text */}
            <Image
              src="/placeholder-logo.png"
              alt="YOUR_BRAND_NAME (Placeholder Logo)"
              width={100}
              height={28}
              className="h-7 w-auto opacity-60"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="https://app.snowflake.com/marketplace/providers/GZT0ZJKG5N9/Flipside%20Crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              Access our Data Directly via Snowflake
            </a>
            <a
              href="https://docs.flipsidecrypto.xyz/flipsideai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              Flipside AI Docs
            </a>
            <a
              href="https://flipsidecrypto.xyz/chat/settings/mcp-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              Use Flipside via MCP
            </a>
          </div>

          <div className="hidden md:block">
            {/* TODO: Replace #6B7280 and #4B5563 (placeholder grays) with your brand's primary colors */}
            <Button
              asChild
              className="rounded-full bg-[#6B7280] px-6 text-sm font-semibold text-white hover:bg-[#4B5563] shadow-sm"
            >
              <a href="https://flipsidecrypto.xyz/chat" target="_blank" rel="noopener noreferrer">
                Access Flipside AI Chat
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <a
              href="https://app.snowflake.com/marketplace/providers/GZT0ZJKG5N9/Flipside%20Crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 text-left text-sm text-gray-600 hover:text-gray-900"
            >
              Access our Data Directly via Snowflake
            </a>
            <a
              href="https://docs.flipsidecrypto.xyz/flipsideai"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 text-left text-sm text-gray-600 hover:text-gray-900"
            >
              Flipside AI Docs
            </a>
            <a
              href="https://flipsidecrypto.xyz/chat/settings/mcp-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 text-left text-sm text-gray-600 hover:text-gray-900"
            >
              Use Flipside via MCP
            </a>
            <div className="pt-2">
              {/* TODO: Replace #6B7280 and #4B5563 (placeholder grays) with your brand's primary colors */}
              <Button
                asChild
                className="w-full rounded-full bg-[#6B7280] text-sm font-semibold text-white hover:bg-[#4B5563]"
              >
                <a href="https://flipsidecrypto.xyz/chat" target="_blank" rel="noopener noreferrer">
                  Access Flipside AI Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
