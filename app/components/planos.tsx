import Link from "next/link"
import { Check, X } from "lucide-react"
import { REGISTER_URL } from "@/lib/register-url"
const features = [
  "Agenda online 24h",
  "App para agendamento de pacientes",
  "Prontuario digital (anamnese + evolucao)",
  "Resumo automatico com IA",
  "Transcricao de audio para evolucao",
  "Integracao com WhatsApp",
  "Teleconsulta",
  "Financeiro basico",
  "Financeiro completo + DRE",
  "Relatorios avancados",
  "Lembretes automaticos",
  "Gestao de equipe (multiusuario)",
  "Dashboard completo",
  "Controle de comissoes",
  "Integracoes e API",
]

const planos = [
  {
    name: "Smart IA",
    subtitle: "Para profissionais solo",
    price: "39,90",
    promo: "1o mes por R$ 19,90",
    ia: "50 resumos + 30 audios / mes",
    highlighted: false,
    included: [true, true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    cta: "TESTE GRATIS",
  },
  {
    name: "Pro IA",
    subtitle: "Para clinicas em crescimento",
    price: "79,90",
    ia: "200+ usos de IA / mes",
    highlighted: true,
    badge: "Mais popular",
    included: [true, true, true, true, true, true, true, true, true, true, true, false, true, false, false],
    cta: "TESTE GRATIS",
  },
  {
    name: "Clinica IA",
    subtitle: "Para redes e franquias",
    price: "149,90",
    ia: "IA ilimitada",
    highlighted: false,
    included: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    cta: "Falar com especialista",
  },
]

export default function Planos() {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-[var(--d2b-bg-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
            Planos e Precos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--d2b-text-primary)] text-balance mb-4">
            DEV2B sob medida para{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              o seu sucesso
            </span>
          </h2>
          <p className="text-[var(--d2b-text-muted)] text-base max-w-xl mx-auto">
            Menos tempo digitando, mais tempo cuidando do paciente.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {["Teste Gratis por 5 dias", "Primeiro mes por R$ 19,90", "Sem taxa de adesao"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm text-[var(--d2b-text-secondary)]">
                <Check className="w-3.5 h-3.5 text-[#C084FC] shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 items-end">
          {planos.map((plano) => (
            <div
              key={plano.name}
              className={`relative rounded-2xl p-7 flex flex-col gap-5 ${
                plano.highlighted
                  ? "bg-gradient-to-b from-[#7C4DFF] to-[#5B2FD4] shadow-2xl shadow-[#7C4DFF]/40 scale-[1.03] z-10"
                  : "bg-[var(--d2b-card-bg)] border border-[#7C4DFF]/20"
              }`}
            >
              {plano.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#7C4DFF] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wide shadow-lg">
                  {plano.badge}
                </span>
              )}

              <div>
                <p className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${plano.highlighted ? "text-white/60" : "text-[#C084FC]"}`}>
                  {plano.subtitle}
                </p>
                <p className="text-[var(--d2b-text-primary)] font-black text-2xl">{plano.name}</p>
              </div>

              <div>
                <div className="flex items-end gap-1">
                  <span className={`text-sm font-semibold ${plano.highlighted ? "text-white/70" : "text-[var(--d2b-text-secondary)]"}`}>R$</span>
                  <span className="text-[var(--d2b-text-primary)] font-black text-4xl leading-none">{plano.price}</span>
                  <span className={`text-sm font-medium mb-0.5 ${plano.highlighted ? "text-white/60" : "text-[var(--d2b-text-muted)]"}`}>/mes</span>
                </div>
                {plano.promo && (
                  <p className={`text-xs mt-2 font-medium ${plano.highlighted ? "text-white/65" : "text-[#C084FC]"}`}>
                    {plano.promo}
                  </p>
                )}
                {plano.ia && (
                  <p className={`text-[11px] mt-1 ${plano.highlighted ? "text-white/45" : "text-white/30"}`}>
                    {plano.ia}
                  </p>
                )}
              </div>

              <Link
                href={plano.cta === "Falar com especialista" ? "/contato" : REGISTER_URL}
                target={plano.cta === "Falar com especialista" ? undefined : "_blank"}
                rel={plano.cta === "Falar com especialista" ? undefined : "noopener noreferrer"}
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-all ${
                  plano.highlighted
                    ? "bg-white text-[#7C4DFF] hover:bg-gray-100"
                    : "border border-[#7C4DFF]/40 text-[#C084FC] hover:bg-[#7C4DFF]/15"
                }`}
              >
                {plano.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Feature comparison */}
        <div className="overflow-x-auto rounded-2xl border border-[var(--d2b-border-mid)]">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr className="border-b border-[var(--d2b-border-mid)]">
                <th className="text-left py-4 px-6 text-[var(--d2b-text-muted)] text-xs font-semibold uppercase tracking-wide w-1/2">Funcionalidades</th>
                {planos.map((plano) => (
                  <th key={plano.name} className="py-4 px-4 text-center">
                    <span className={`text-sm font-bold ${plano.highlighted ? "text-[#C084FC]" : "text-white/50"}`}>
                      {plano.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--d2b-border-mid)]">
              {features.map((feat, fi) => (
                <tr key={feat} className="hover:bg-[var(--d2b-border)] transition-colors">
                  <td className="py-3 px-6 text-sm text-[var(--d2b-text-secondary)]">{feat}</td>
                  {planos.map((plano) => (
                    <td key={plano.name} className="px-4 py-3 text-center">
                      {plano.included[fi] ? (
                        <Check className="w-4 h-4 text-[#C084FC] mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-white/12 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[var(--d2b-text-faint)] text-xs mt-6">
          Cobranca recorrente que nao consome o limite do seu cartao de credito.
        </p>
      </div>
    </section>
  )
}
