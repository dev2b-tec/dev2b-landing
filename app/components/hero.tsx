import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D0520] pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full bg-[#7C4DFF]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#C084FC]/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, #C084FC 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C084FC] animate-pulse" aria-hidden="true" />
          <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Plataforma DEV2B &mdash; Inovacao em gestao digital</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] text-balance max-w-4xl">
          o ano entrou em{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #7C4DFF 0%, #C084FC 100%)" }}>
            modo turbo
          </span>
          <br />ative o modo crescimento
        </h1>

        <p className="mt-7 text-lg sm:text-xl text-white/50 max-w-2xl text-balance leading-relaxed">
          Assuma o controle da sua gestao com a DEV2B e tenha mais organizacao, resultado e tempo pra focar no que importa: fazer seu negocio crescer de verdade.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/planos"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C4DFF] text-white font-bold text-base hover:bg-[#6B3FE8] transition-all duration-200 shadow-xl shadow-[#7C4DFF]/40 hover:shadow-[#7C4DFF]/60 hover:-translate-y-0.5"
          >
            TESTE GRATIS
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <button className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/12 text-white/70 font-medium text-base hover:border-[#7C4DFF]/50 hover:text-white transition-all duration-200 group">
            <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center group-hover:bg-[#7C4DFF]/20 transition-colors">
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" aria-hidden="true" />
            </div>
            Ver demonstracao
          </button>
        </div>

        <p className="mt-5 text-white/25 text-sm">Sem taxa de adesao &bull; 5 dias gratis &bull; Cancele quando quiser</p>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 text-center w-full max-w-2xl">
          {[
            { num: "+13 anos", label: "no mercado" },
            { num: "+44 mil", label: "negocios ativos" },
            { num: "+7 mi", label: "usuarios" },
            { num: "+460 mi", label: "agendamentos" },
          ].map((s) => (
            <div key={s.num} className="flex flex-col items-center gap-1">
              <span className="text-2xl sm:text-3xl font-black text-white">{s.num}</span>
              <span className="text-xs text-white/35">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Dashboard image */}
        <div className="mt-20 w-full max-w-5xl relative">
          <div className="absolute -inset-4 rounded-3xl bg-[#7C4DFF]/8 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-[#7C4DFF]/20 overflow-hidden shadow-2xl shadow-black/70">
            {/* Fake browser bar */}
            <div className="bg-[#0D0520] border-b border-white/[0.06] h-9 flex items-center gap-2 px-4" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="mx-auto flex items-center gap-2 bg-white/5 rounded-md px-4 py-1">
                <span className="text-[10px] text-white/25">app.dev2b.com.br</span>
              </div>
            </div>
            <Image
              src="/images/hero-dashboard.jpg"
              alt="Painel de gestao DEV2B com agenda, financeiro e clientes"
              width={1200}
              height={680}
              className="w-full object-cover"
              priority
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0D0520] to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
