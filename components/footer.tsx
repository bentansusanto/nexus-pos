"use client"

import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-zinc-950 font-bold text-sm">N</span>
              </div>
              <span className="font-semibold text-white">Nexus POS</span>
            </a>
            <p className="text-sm text-zinc-500 max-w-sm mb-6">
              Solusi POS Modern berbasis AI untuk Software House dan Freelancer.
              Bangun bisnis klien Anda lebih cepat dengan source code berkualitas tinggi.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-zinc-400">All Systems Operational</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Navigasi</h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Fitur Unggulan
                </a>
              </li>
              <li>
                <a href="#arsitektur" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Arsitektur Sistem
                </a>
              </li>
              <li>
                <a href="#value" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  Lisensi & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Action */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6">Mulai Sekarang</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://l1nq.com/j1WcW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white flex items-center group"
                >
                  Beli Source Code
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://aipos.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Lihat Demo Live
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Nexus POS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-zinc-600">Built for developers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
