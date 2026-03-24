"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Brain, LayoutGrid, ShieldCheck, Clock, Package, BarChart3 } from "lucide-react"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    } as any,
  },
}

function SystemStatus() {
  const [dots, setDots] = useState([true, true, true, false, true])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => prev.map(() => Math.random() > 0.2))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      {dots.map((active, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full ${active ? "bg-emerald-500" : "bg-zinc-700"}`}
          animate={active ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Fitur Unggulan AI POS
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Source code lengkap dengan fitur enterprise yang siap Anda kustomisasi dan jual kembali ke klien Anda.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* AI Insight - Large Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 group relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.01] transition-all duration-300 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="flex-1">
                <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-6">
                  <Brain className="w-6 h-6 text-zinc-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Engine Siap Pakai</h3>
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  Integrasi AI untuk prediksi penjualan dan stok otomatis yang bisa langsung Anda demokan ke klien sebagai nilai jual utama.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-500">AI Active</span>
                  </div>
                  <span className="text-xs text-zinc-500">Predictive Analysis</span>
                </div>
              </div>
              <div className="flex-1 relative min-h-[200px] bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-zinc-500">PROFIT_PREDICTION</span>
                  <BarChart3 className="w-4 h-4 text-zinc-600" />
                </div>
                <div className="space-y-3">
                  {[80, 45, 90, 60].map((width, i) => (
                    <div key={i} className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${width}%` } : {}}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-zinc-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Multi Branch */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
              <LayoutGrid className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Arsitektur Multi-Outlet</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Struktur database solid yang mendukung banyak cabang, siap untuk kebutuhan bisnis franchise klien Anda.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-1 bg-zinc-800 rounded-full" />
              <div className="h-1 bg-zinc-800 rounded-full" />
              <div className="h-1 bg-zinc-700 rounded-full" />
            </div>
          </motion.div>

          {/* Dynamic RBAC */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
              <ShieldCheck className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Modul RBAC Fleksibel</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Kelola izin akses user secara dinamis, fitur premium yang dicari setiap klien korporat maupun UMKM.
            </p>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-zinc-800 border-2 border-zinc-900" />
              <div className="w-6 h-6 rounded-full bg-zinc-700 border-2 border-zinc-900" />
            </div>
          </motion.div>

          {/* POS Session */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
              <Clock className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Keamanan Sesi & Kasir</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Fitur tracking sesi kasir untuk meminimalisir fraud, memberikan nilai tambah tinggi untuk jasa pengerjaan Anda.
            </p>
            <div className="flex items-center gap-2 text-emerald-500 text-sm">
              <span className="font-mono">Secure Session</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </motion.div>

          {/* Inventory Management */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-zinc-800 w-fit mb-4">
              <Package className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Manajemen Stok Lengkap</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Fitur stock opname dan product batches yang sudah jadi, hemat waktu pengembangan berbulan-bulan.
            </p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">Stock Opname</span>
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">Batches</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
