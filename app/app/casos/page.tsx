import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Casos de Sucesso | DEV2B",
  description: "Veja historias reais de negocios que cresceram com a DEV2B.",
}

const casos = [
  {
    name: "Rodrigo Guimaraes",
    negocio: "Club Men",
    segmento: "Barbearia",
    avatar: "https://i.pravatar.cc/120?img=12",
    resultado: "+60% de faturamento",
    depoimento: "A DEV2B ao mesmo tempo que e uma grande empresa que atende todo o Brasil, e tambem uma empresa familiar, pois eles te acolhem. O sistema me atende aqui no negocio ou onde eu estiver, porque ele e online.",
    image: "/images/segmento-fitness.jpg",
  },
  {
    name: "Leonardo Benites",
    negocio: "Confraria da Barba",
    segmento: "Rede de Barbearias",
    avatar: "https://i.pravatar.cc/120?img=52",
    resultado: "Expansao para 8 unidades",
    depoimento: "A DEV2B foi parte fundamental no crescimento da nossa rede. Sem ela, eu nao teria atingido o que atingi hoje. Foi uma decisao fundamental no momento em que eu quis expandir a empresa.",
    image: "/images/hero-dashboard.jpg",
  },
  {
    name: "Jane Muniz",
    negocio: "Spa das Sobrancelhas",
    segmento: "Studio",
    avatar: "https://i.pravatar.cc/120?img=47",
    resultado: "+40% de clientes recorrentes",
    depoimento: "Se voce esta procurando um sistema para a gestao do seu negocio eu recomendo, porque eu uso a DEV2B. O sistema e perfeito para atender todas as minhas necessidades.",
    image: "/images/segmento-estetica.jpg",
  },
  {
    name: "Vania Urias",
    negocio: "One Beaute",
    segmento: "Salao de Beleza",
    avatar: "https://i.pravatar.cc/120?img=60",
    resultado: "Gestao 100% digital",
    depoimento: "Mais que um software, a DEV2B e uma parceira de resultados! Hoje, em um clique temos uma dashboard com os principais numeros para que possamos tomar as melhores decisoes.",
    image: "/images/segmento-saude.jpg",
  },
]

export default function CasosPage() {
  return (
    <main>
      <Navbar />

      <section className="relative pt-32 pb-14 bg-[#0D0520] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C4DFF]/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-6">
            <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Casos de Sucesso</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white text-balance mb-4">
            Quem inova com a DEV2B{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              vai alem
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto text-pretty">
            Historias reais de empreendedores que transformaram a gestao dos seus negocios e alcancaram resultados extraordinarios.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#0D0520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-8">
            {casos.map((caso, idx) => (
              <div key={caso.name} className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} rounded-2xl overflow-hidden border border-[#7C4DFF]/12 bg-[#120328]/50 hover:border-[#7C4DFF]/30 transition-all group`}>
                <div className="relative w-full lg:w-80 h-56 lg:h-auto shrink-0">
                  <Image src={caso.image} alt={caso.negocio} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#0D0520]/40" aria-hidden="true" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#7C4DFF] text-white text-xs font-bold px-3 py-1.5 rounded-full">{caso.resultado}</span>
                  </div>
                </div>
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C084FC] text-[#C084FC]" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed mb-6 italic text-pretty">&ldquo;{caso.depoimento}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Image src={caso.avatar} alt={caso.name} width={44} height={44} className="rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-white">{caso.name}</p>
                      <p className="text-white/40 text-sm">{caso.negocio} &bull; {caso.segmento}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/planos" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C4DFF] text-white font-bold hover:bg-[#6B3FE8] transition-all shadow-xl shadow-[#7C4DFF]/40 hover:-translate-y-0.5">
              Quero resultados como esses <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
