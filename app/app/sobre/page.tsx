import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Link from "next/link"
import { ArrowRight, Users, Award, Globe, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Sobre nos | DEV2B",
  description: "Conhea a DEV2B, a plataforma de gestao digital para negocios de servicos.",
}

const numeros = [
  { value: "+13 anos", label: "no mercado" },
  { value: "+44 mil", label: "negocios ativos" },
  { value: "+5.500", label: "cidades atendidas" },
  { value: "+7 mi", label: "usuarios na plataforma" },
]

const valores = [
  { icon: Users, title: "Proximidade", desc: "Somos parceiros do seu negocio, nao apenas um software. Estamos ao seu lado em cada etapa do crescimento." },
  { icon: Award, title: "Excelencia", desc: "Buscamos a melhor experiencia para voce e seus clientes em cada funcionalidade que desenvolvemos." },
  { icon: Globe, title: "Inovacao", desc: "Tecnologia de ponta para simplificar a sua gestao e levar o seu negocio alem dos limites." },
  { icon: TrendingUp, title: "Resultado", desc: "Nosso sucesso e medido pelo sucesso dos nossos clientes. Seu crescimento e nossa missao." },
]

export default function SobrePage() {
  return (
    <main>
      <Navbar />

      <section className="relative pt-32 pb-20 bg-[#0D0520] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C4DFF]/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-6">
              <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Sobre a DEV2B</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white text-balance mb-6">
              Somos a parceira de negocios que{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
                bota pra girar
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed text-pretty">
              Ha mais de 13 anos, a DEV2B conecta tecnologia e empreendedorismo para transformar a gestao de negocios de servicos no Brasil. Somos mais que um software: somos parceiros de resultado.
            </p>
          </div>

          {/* Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20">
            {numeros.map((n) => (
              <div key={n.label} className="text-center p-6 rounded-2xl border border-[#7C4DFF]/12 bg-[#120328]/50">
                <p className="text-3xl lg:text-4xl font-black text-white mb-1">{n.value}</p>
                <p className="text-white/40 text-sm">{n.label}</p>
              </div>
            ))}
          </div>

          {/* Valores */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-white text-center mb-10">Nossos valores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valores.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-6 rounded-2xl border border-[#7C4DFF]/12 bg-[#120328]/50 hover:border-[#7C4DFF]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#7C4DFF]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C084FC]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/planos" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C4DFF] text-white font-bold hover:bg-[#6B3FE8] transition-all shadow-xl shadow-[#7C4DFF]/40">
              Conheca nossos planos <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
