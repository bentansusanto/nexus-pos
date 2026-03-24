import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-cal-sans), sans-serif' }}
        >
          Siap Selesaikan Proyek POS Anda?
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Gunakan source code AI POS kami untuk memberikan solusi terbaik bagi klien Anda.
          Hemat waktu, tenaga, dan berikan hasil profesional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            size="lg"
            className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-14 text-base font-medium"
          >
            <a href="https://l1nq.com/j1WcW" target="_blank" rel="noopener noreferrer">Beli Sekarang</a>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-base font-medium border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 bg-transparent"
          >
            <a href="https://aipos.online" target="_blank" rel="noopener noreferrer">
              Lihat Demo
            </a>
          </Button>
        </div>

        {/* Demo Credentials */}
        <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="text-zinc-500">Username:</span>
            <span className="text-zinc-300 font-mono">nexusadmin</span>
          </span>
          <div className="w-px h-3 bg-zinc-800" />
          <span className="flex items-center gap-1.5">
            <span className="text-zinc-500">Password:</span>
            <span className="text-zinc-300 font-mono">Testing1!</span>
          </span>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Lisensi penuh untuk kustomisasi dan penggunaan komersial.
        </p>
      </div>
    </section>
  )
}
