import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { REGISTER_URL } from "@/lib/register-url"

const stats = [
  { num: "+13 anos", label: "no mercado" },
  { num: "+44 mil", label: "clinicas ativas" },
  { num: "+7 mi", label: "pacientes gerenciados" },
  { num: "+460 mi", label: "agendamentos" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--d2b-bg-main)] pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[800px] h-[600px] rounded-full bg-[#7C4DFF]/10 blur-[160px] -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#C084FC]/6 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #C084FC 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — text */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C084FC] animate-pulse" aria-hidden="true" />
              <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Plataforma DEV2B &mdash; IA + WhatsApp para clinicas</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--d2b-text-primary)] leading-[1.05] mb-6">
              Organize sua clinica{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #7C4DFF 0%, #C084FC 100%)" }}>
                com IA + WhatsApp
              </span>
              <br />por{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #7C4DFF 0%, #C084FC 100%)" }}>
                R$39/mes
              </span>
            </h1>

            <p className="text-lg text-[var(--d2b-text-muted)] max-w-lg leading-relaxed mb-10">
              Agenda online, confirmacao automatica via WhatsApp, atendimento com IA e gestao completa. Tudo que sua clinica precisa em um unico sistema.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <Link
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C4DFF] text-white font-bold text-base hover:bg-[#6B3FE8] transition-all duration-200 shadow-xl shadow-[#7C4DFF]/40 hover:shadow-[#7C4DFF]/60 hover:-translate-y-0.5"
              >
                TESTE GRATIS
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href="https://youtu.be/S6FIZmDtBOM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-[var(--d2b-border-mid)] text-[var(--d2b-text-secondary)] font-medium text-base hover:border-[#7C4DFF]/50 hover:text-[var(--d2b-text-primary)] transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center group-hover:bg-[#7C4DFF]/20 transition-colors">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" aria-hidden="true" />
                </div>
                Ver demonstracao
              </a>
            </div>

            <p className="text-[var(--d2b-text-faint)] text-sm mb-14">Sem taxa de adesão &bull; 5 dias gratis &bull; Cancele quando quiser</p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.num} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-black text-[var(--d2b-text-primary)]">{s.num}</span>
                  <span className="text-xs text-[var(--d2b-text-muted)]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — dashboard screenshot */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[#7C4DFF]/10 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-2xl border border-[#7C4DFF]/25 overflow-hidden shadow-2xl shadow-black/70">
              {/* Fake browser bar */}
              <div className="bg-[var(--d2b-bg-surface)] border-b border-[var(--d2b-border)] h-9 flex items-center gap-2 px-4 shrink-0" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <div className="mx-auto flex items-center gap-2 bg-[var(--d2b-border)] rounded-md px-4 py-1">
                  <span className="text-[10px] text-[var(--d2b-text-faint)]">app.dev2b.com.br/dashboard</span>
                </div>
              </div>
              <Image
                src="/images/produto-dashboard-limpo.png"
                alt="Painel DEV2B — Dashboard com agenda, DRE e relatorios"
                width={1080}
                height={1080}
                className="w-full object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[var(--d2b-bg-main)] to-transparent" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
