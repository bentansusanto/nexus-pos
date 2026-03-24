'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const avatars = [
  '/professional-headshot-1.png',
  '/professional-headshot-2.png',
  '/professional-headshot-3.png',
  '/professional-headshot-4.png',
  '/professional-headshot-5.png',
]

export function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center px-4 pt-32 pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-sm text-zinc-400">Source Code AI POS Terlengkap</span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          style={{ fontFamily: 'var(--font-cal-sans), sans-serif' }}
        >
          <span className="block overflow-hidden">
            <span className="block">Solusi POS Berbasis AI,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block text-zinc-500">Siap Untuk Klien Anda.</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Hemat waktu pengerjaan proyek dengan source code AI POS fitur enterprise.
          Dari AI Insight hingga Multi-Branch, semua siap Anda kustomisasi untuk kebutuhan klien.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            size="lg"
            className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium"
          >
            <a href="https://l1nq.com/j1WcW" target="_blank" rel="noopener noreferrer">
              Beli Sekarang
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 text-base font-medium border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 bg-transparent"
          >
            <a href="https://aipos.online" target="_blank" rel="noopener noreferrer">
              Lihat Demo
            </a>
          </Button>
        </div>

        {/* Demo Credentials */}
        <div className="flex flex-col gap-2 items-center">
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-500 font-medium">Admin Access:</span>
            <span className="flex items-center gap-1.5">
              <span className="text-zinc-500">User:</span>
              <span className="text-zinc-300 font-mono">nexusadmin</span>
            </span>
            <div className="w-px h-3 bg-zinc-800" />
            <span className="flex items-center gap-1.5">
              <span className="text-zinc-500">Pass:</span>
              <span className="text-zinc-300 font-mono">Testing1!</span>
            </span>
          </div>
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-500 font-medium">Cashier Access:</span>
            <span className="flex items-center gap-1.5">
              <span className="text-zinc-300 font-mono">PIN: 123456</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero Image / Dashboard Preview */}
      <div className="relative z-20 mt-4 max-w-6xl mx-auto px-4 w-full">
        <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 p-2 shadow-xl overflow-hidden min-h-[400px]">
          <Image
            width={1920}
            height={1080}
            src="/bg-hero.png"
            alt="Platform Preview"
            className="rounded-xl border border-zinc-800 w-full h-auto shadow-sm block"
          />
        </div>
      </div>
    </section>
  )
}
