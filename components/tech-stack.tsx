import { Server, Layout, Database, Zap, Brain, Box } from "lucide-react"

const techItems = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "NestJS Backend",
    description: "Arsitektur server-side yang scalable, terstruktur, dan mudah untuk di-maintain.",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "NextJS Frontend",
    description: "Framework React modern dengan App Router untuk performa dan SEO maksimal.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "PostgreSQL",
    description: "Database relasional yang handal dan powerful untuk manajemen data kompleks.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "WebSocket",
    description: "Komunikasi dua arah secara real-time untuk update stok dan transaksi instan.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "OpenAI Pre-Trained",
    description: "Integrasi model AI tercanggih untuk prediksi bisnis dan asisten pintar.",
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "Docker Ready",
    description: "Siap dideploy di mana saja dengan containerization untuk kemudahan skalabilitas.",
  },
]



export function TechStack() {
  return (
    <section id="arsitektur" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Arsitektur Modern & Skalabel</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Dibangun dengan teknologi terbaru untuk memastikan performa maksimal dan kemudahan kustomisasi bagi developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techItems.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
