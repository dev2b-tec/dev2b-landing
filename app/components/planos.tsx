import Link from "next/link"
import { Check, X } from "lucide-react"

const features = [
  "Agenda Online",
  "Site e App para agendamento",
  "Gestao e relatorios financeiros",
  "Conta digital integrada",
  "Pacotes, servicos e promocoes",
  "Controle de estoque",
  "App profissional",
  "Comunidade de empreendedores",
  "Suporte humanizado",
  "Treinamentos online",
  "Onboarding personalizado",
  "Migracao assistida",
  "Clube de assinaturas",
  "Rotina de mensagens via WhatsApp",
  "Programa de fidelidade",
  "Lembretes e convite de retorno",
  "Autoatendimento",
  "Emissao de Notas Fiscais",
]

const planos = [
  {
    name: "Essencial",
    profissionais: "1 a 2",
    price: "76",
    highlighted: false,
    included: [true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false],
    cta: "TESTE GRATIS",
  },
  {
    name: "Pro",
    profissionais: "3 a 4",
    price: "104",
    highlighted: true,
    badge: "Mais popular",
    included: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false],
    cta: "TESTE GRATIS",
  },
  {
    name: "Avancado",
    profissionais: "5 a 10",
    price: "Sob consulta",
    highlighted: false,
    included: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    cta: "Falar com especialista",
  },
]

export default function Planos() {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-[#120328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
            Planos e Precos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-balance mb-5">
            DEV2B sob medida para{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              o seu sucesso
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto text-pretty">
            Solucoes personalizadas para todos os tipos de negocios, desde os pequenos empreendimentos ate grandes redes e franquias.
          </p>

          {/* Highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
            {[
              { icon: "🎁", label: "Teste Gratis por 5 dias" },
              { icon: "✓", label: "Sem taxa de adesao" },
              { icon: "📚", label: "Treinamentos gratuitos" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-white/60">
                <span className="text-[#C084FC]">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Plans comparison */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left py-4 pr-6 text-white/35 text-sm font-medium w-64">Funcionalidades</th>
                {planos.map((plano) => (
                  <th key={plano.name} className="px-4 pb-6 text-center relative">
                    {plano.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-[#7C4DFF] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                          {plano.badge}
                        </span>
                      </div>
                    )}
                    <div className={`rounded-2xl p-6 ${plano.highlighted ? "bg-[#7C4DFF] shadow-2xl shadow-[#7C4DFF]/40" : "bg-[#0D0520] border border-[#7C4DFF]/15"}`}>
                      <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plano.highlighted ? "text-white/70" : "text-[#C084FC]"}`}>
                        {plano.profissionais} profissionais
                      </p>
                      <p className="text-white font-black text-xl mb-2">{plano.name}</p>
                      {plano.price === "Sob consulta" ? (
                        <p className="text-white/60 text-sm font-medium">Sob consulta</p>
                      ) : (
                        <p className="text-white font-black text-3xl">
                          R$ <span>{plano.price}</span>
                          <span className={`text-sm font-medium ${plano.highlighted ? "text-white/70" : "text-white/40"}`}>/mes</span>
                        </p>
                      )}
                      <Link
                        href="/planos"
                        className={`mt-4 block text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${
                          plano.highlighted
                            ? "bg-white text-[#7C4DFF] hover:bg-gray-100"
                            : "border border-[#7C4DFF]/40 text-[#C084FC] hover:bg-[#7C4DFF]/15"
                        }`}
                      >
                        {plano.cta}
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#7C4DFF]/8">
              {features.map((feat, fi) => (
                <tr key={feat} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 pr-6 text-sm text-white/55">{feat}</td>
                  {planos.map((plano) => (
                    <td key={plano.name} className="px-4 py-3 text-center">
                      {plano.included[fi] ? (
                        <Check className="w-4 h-4 text-[#C084FC] mx-auto" aria-label="Incluso" />
                      ) : (
                        <X className="w-4 h-4 text-white/15 mx-auto" aria-label="Nao incluso" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-white/25 text-xs mt-8">
          Cobranca recorrente que nao consome o limite do seu cartao de credito.
        </p>
      </div>
    </section>
  )
}
