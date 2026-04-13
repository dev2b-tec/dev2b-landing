import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Link from "next/link"
import { PlayCircle, BookOpen, Users, ArrowRight } from "lucide-react"
import { REGISTER_URL } from "@/lib/register-url"

export const metadata = {
  title: "Treinamentos | DEV2B",
  description: "Webinars, tutoriais e treinamentos gratuitos para voce aproveitar ao maximo a plataforma DEV2B.",
}

const trilhas = [
  { icon: PlayCircle, title: "Primeiros Passos", desc: "Configure sua conta e comece a usar a DEV2B em menos de 30 minutos.", tag: "Iniciante", count: "8 videos" },
  { icon: BookOpen, title: "Gestao Financeira", desc: "Aprenda a usar o fluxo de caixa, relatorios e fechamento de contas.", tag: "Intermediario", count: "12 videos" },
  { icon: Users, title: "Fidelizacao de Clientes", desc: "Estrategias de retencao usando clube de assinaturas e comunicacao.", tag: "Avancado", count: "6 videos" },
]

export default function TreinamentosPage() {
  return (
    <main>
      <Navbar />
      <section className="relative pt-32 pb-20 bg-[var(--d2b-bg-main)] min-h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C4DFF]/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-6">
              <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Treinamentos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[var(--d2b-text-primary)] text-balance mb-4">
              Aprenda a tirar o maximo{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
                da DEV2B
              </span>
            </h1>
            <p className="text-[var(--d2b-text-secondary)] text-lg max-w-xl mx-auto text-pretty">
              Webinars ao vivo, tutoriais em video e materiais exclusivos para voce e sua equipe. Tudo gratuito para clientes DEV2B.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {trilhas.map(({ icon: Icon, title, desc, tag, count }) => (
              <div key={title} className="p-7 rounded-2xl border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-surface)] hover:border-[#7C4DFF]/35 transition-all group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#7C4DFF]/20 flex items-center justify-center group-hover:bg-[#7C4DFF]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#C084FC]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-[#C084FC] bg-[#7C4DFF]/15 px-2.5 py-1 rounded-full">{tag}</span>
                </div>
                <h3 className="font-bold text-[var(--d2b-text-primary)] text-lg mb-2">{title}</h3>
                <p className="text-[var(--d2b-text-secondary)] text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--d2b-text-faint)] text-xs">{count}</span>
                  <button className="text-sm text-[#C084FC] font-semibold hover:text-white transition-colors flex items-center gap-1.5">
                    Acessar <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center p-10 rounded-2xl border border-[var(--d2b-border-mid)] bg-[#7C4DFF]/8">
            <h2 className="text-2xl font-black text-[var(--d2b-text-primary)] mb-3">Proximo webinar ao vivo</h2>
            <p className="text-[var(--d2b-text-secondary)] mb-2">Como aumentar seu faturamento com clube de assinaturas</p>
            <p className="text-[#C084FC] font-semibold text-sm mb-6">Quarta-feira, 01 de Abril &bull; 19h (horario de Brasilia)</p>
            <Link href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#7C4DFF] text-white font-bold hover:bg-[#6B3FE8] transition-colors shadow-lg shadow-[#7C4DFF]/30">
              Garantir minha vaga <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
