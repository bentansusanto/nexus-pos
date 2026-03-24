import { CheckCircle2, DollarSign, Package, Headphones, FileCode, Users } from "lucide-react"

const valueItems = [
  {
    icon: <FileCode className="w-6 h-6 text-emerald-500" />,
    title: "Full Source Code",
    description: "Akses 100% kode sumber Next.js, TypeScript, dan Prisma/Drizzle tanpa batasan enkripsi.",
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-500" />,
    title: "Commercial License",
    description: "Hak penuh untuk memodifikasi dan menjual kembali sistem ini ke klien Anda berkali-kali.",
  },
  {
    icon: <Package className="w-6 h-6 text-emerald-500" />,
    title: "Project-Ready",
    description: "Hemat ratusan jam pengerjaan. Tinggal kustomisasi sedikit, proyek siap Anda serahkan.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
    title: "Support SaaS POS",
    description: "ROI bisa lebih besar dengan model bisnis SaaS. Gunakan sistem ini sebagai produk berlangganan Anda sendiri.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    title: "Lifetime Updates",
    description: "Dapatkan akses ke semua update fitur, keamanan, dan bugfixes gratis selamanya.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-emerald-500" />,
    title: "Technical Support 14 Hari",
    description: "Bantuan teknis langsung selama 14 hari untuk perbaikan bug minor dan kendala deployment pengerjaan proyek Anda.",
  },
]

export function ValueSection() {
  return (
    <section id="value" className="py-24 px-4 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Segalanya Untuk Bisnis Anda</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Bukan sekadar sistem POS biasa, kami memberikan pondasi bisnis yang kokoh untuk membantu software house dan freelancer naik level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-zinc-800 bg-zinc-950/50"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 w-fit">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
