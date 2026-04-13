import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Link from "next/link"
import { Handshake, TrendingUp, Users, ArrowRight, Check } from "lucide-react"

export const metadata = {
  title: "Parceiros | DEV2B",
  description: "Programa de parcerias DEV2B. Indique clientes e ganhe comissao recorrente.",
}

const beneficios = [
  "Comissao recorrente por cada cliente indicado",
  "Materiais de divulgacao exclusivos",
  "Suporte dedicado para parceiros",
  "Treinamentos e capacitacoes gratuitas",
  "Dashboard com acompanhamento em tempo real",
  "Sem custo para se tornar parceiro",
]

export default function ParceirosPage() {
  return (
    <main>
      <Navbar />
      <section className="relative pt-32 pb-20 bg-[var(--d2b-bg-main)] min-h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C4DFF]/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-6">
              <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Programa de Parceiros</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[var(--d2b-text-primary)] text-balance mb-4">
              Cresça com a DEV2B e{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
                ganhe com isso
              </span>
            </h1>
            <p className="text-[var(--d2b-text-secondary)] text-lg max-w-xl mx-auto text-pretty">
              Indique a DEV2B para negocios da sua regiao e ganhe comissao recorrente. Simples, transparente e lucrativo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {/* Beneficios */}
            <div className="p-8 rounded-2xl border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-surface)]">
              <h2 className="text-xl font-bold text-[var(--d2b-text-primary)] mb-6">Beneficios do parceiro</h2>
              <ul className="flex flex-col gap-3">
                {beneficios.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#C084FC] shrink-0" aria-hidden="true" />
                    <span className="text-sm text-[var(--d2b-text-secondary)]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Como funciona */}
            <div className="flex flex-col gap-5">
              {[
                { icon: Handshake, step: "01", title: "Cadastre-se gratuitamente", desc: "Preencha o formulario de parceria e aguarde a aprovacao do nosso time." },
                { icon: Users, step: "02", title: "Indique negocios", desc: "Compartilhe seu link exclusivo ou indique diretamente pelo painel do parceiro." },
                { icon: TrendingUp, step: "03", title: "Ganhe comissao", desc: "Receba comissao recorrente enquanto os clientes indicados permanecerem ativos." },
              ].map(({ icon: Icon, step, title, desc }) => (
                <div key={title} className="flex gap-4 p-6 rounded-2xl border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-surface)] hover:border-[#7C4DFF]/30 transition-colors">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#7C4DFF]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#C084FC]" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-black text-[var(--d2b-text-faint)]">{step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--d2b-text-primary)] mb-1">{title}</h3>
                    <p className="text-[var(--d2b-text-secondary)] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/contato" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C4DFF] text-white font-bold hover:bg-[#6B3FE8] transition-all shadow-xl shadow-[#7C4DFF]/40">
              Quero ser parceiro <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
