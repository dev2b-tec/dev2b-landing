import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#120328] relative overflow-hidden">
      {/* Glow + dot grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#7C4DFF]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#7C4DFF]/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #C084FC 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-5">
          Comece agora
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-balance mb-6 leading-[1.08]">
          A sua parceira dos negocios{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
            faz parte do grupo que bota pra girar
          </span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          Mais de 40 mil negocios tornaram sua gestao mais agil. Voce ta esperando o que?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/planos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C4DFF] text-white font-bold text-base hover:bg-[#6B3FE8] transition-all duration-200 shadow-xl shadow-[#7C4DFF]/40 hover:shadow-[#7C4DFF]/60 hover:-translate-y-0.5"
          >
            Teste gratis por 5 dias
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/solucoes"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-[#7C4DFF]/40 text-[#C084FC] font-semibold hover:bg-[#7C4DFF]/10 hover:text-white transition-all duration-200"
          >
            Ver solucoes
          </Link>
        </div>

        <p className="mt-6 text-white/30 text-sm">
          Sem taxa de adesao &bull; Sem cartao de credito &bull; Cancele quando quiser
        </p>
      </div>
    </section>
  )
}
