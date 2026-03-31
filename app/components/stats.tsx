import Link from "next/link"

const stats = [
  { value: "+13 anos", label: "no mercado" },
  { value: "+44 mil", label: "negocios de servicos" },
  { value: "+5.500", label: "cidades atendidas" },
  { value: "+7 mi", label: "usuarios" },
  { value: "+460 mi", label: "de agendamentos" },
]

export default function Stats() {
  return (
    <section className="py-20 lg:py-24 bg-[#0D0520] relative overflow-hidden border-y border-[#7C4DFF]/10">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C4DFF]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-[#7C4DFF]/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-white/35 text-sm font-semibold uppercase tracking-widest mb-12">
          Feita por quem entende o mercado como ninguem
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span className="text-3xl lg:text-4xl font-black text-white">{stat.value}</span>
              <span className="text-white/35 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-white/40 text-base mb-6">
            Mais de 40 mil negocios tornaram sua gestao mais agil.{" "}
            <strong className="text-white/70">Voce ta esperando o que?</strong>
          </p>
          <Link
            href="/planos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C4DFF] text-white font-bold hover:bg-[#6B3FE8] transition-all duration-200 shadow-lg shadow-[#7C4DFF]/30 hover:shadow-[#7C4DFF]/50 hover:-translate-y-0.5"
          >
            Teste gratis por 5 dias
          </Link>
        </div>
      </div>
    </section>
  )
}
