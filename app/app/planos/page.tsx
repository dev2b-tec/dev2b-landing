import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Planos from "@/components/planos"
import CTA from "@/components/cta"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Planos e Precos | DEV2B",
  description: "Escolha o plano ideal para o seu negocio. Teste gratis por 5 dias. Sem taxa de adesao e sem cartao de credito.",
}

export default function PlanosPage() {
  return (
    <main>
      <Navbar />
      {/* Hero da pagina */}
      <section className="relative pt-32 pb-16 bg-[#0D0520] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C4DFF]/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-6">
            <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Planos e Precos</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white text-balance mb-5">
            DEV2B sob medida para{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              o seu sucesso
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto text-pretty mb-8">
            Solucoes personalizadas para todos os tipos de negocios, desde os pequenos empreendimentos ate grandes redes e franquias.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#planos" className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#7C4DFF] text-white font-bold hover:bg-[#6B3FE8] transition-colors shadow-lg shadow-[#7C4DFF]/30">
              Ver planos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <Planos />
      <CTA />
      <Footer />
    </main>
  )
}
