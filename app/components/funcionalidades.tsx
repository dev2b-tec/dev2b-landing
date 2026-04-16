import Image from "next/image"
import Link from "next/link"
import { Calendar, TrendingUp, MessageSquare, FileText, CreditCard, Lightbulb, ArrowRight } from "lucide-react"

const features = [
  {
    id: "agenda",
    tag: "Agenda e Atendimentos",
    title: "Agenda que trabalha por voce",
    description:
      "Calendario completo com visao por dia, semana e mes. Filtre por profissional, gerencie salas e receba confirmacoes automaticas. Seus pacientes agendam 24h pelo app ou WhatsApp.",
    bullets: ["Agenda online 24h por profissional e sala", "Confirmacao e lembretes automaticos", "Visualizacao por semana, dia e mes", "Filtro por profissional e status"],
    image: "/images/produto-calendario-novo.png",
    icon: Calendar,
    href: "/solucoes#agenda",
    cta: "Saiba mais",
  },
  {
    id: "financeiro",
    tag: "Financeiro e DRE",
    title: "Controle total do seu caixa",
    description:
      "Acompanhe valores recebidos, contas a receber, contas a pagar e tenha o DRE (Demonstracao de Resultados) sempre atualizado. Tome decisoes com dados reais, nao chutes.",
    bullets: ["DRE - Demonstracao de Resultados", "Contas a receber e a pagar", "Relatorios de faturamento por profissional", "Integracao com NFS-e"],
    image: "/images/produto-dashboard-limpo.png",
    icon: TrendingUp,
    href: "/solucoes#financeiro",
    cta: "Saiba mais",
  },
  {
    id: "comunicacao",
    tag: "Chat e WhatsApp",
    title: "Fique perto dos seus pacientes",
    description:
      "Chat integrado diretamente ao WhatsApp dos seus pacientes. Receba mensagens, responda duvidas e gerencie conversas ativas sem sair da plataforma. Comunicacao centralizada e rapida.",
    bullets: ["Chat integrado ao WhatsApp", "Historico completo de conversas", "Envio de avisos e mensagens em massa", "Notificacoes de novas mensagens"],
    image: "/images/chatboot-customizavel.png",
    icon: MessageSquare,
    href: "/solucoes#comunicacao",
    cta: "Saiba mais",
  },
  {
    id: "anamneses",
    tag: "Prontuario Digital",
    title: "Anamneses e evolucoes clinicas",
    description:
      "Crie fichas de anamnese personalizadas para cada tipo de procedimento ou especialidade. Registre evolucoes clinicas, mantenha o historico do paciente organizado e acesse de qualquer lugar.",
    bullets: ["Anamneses digitais personalizadas", "Evolucoes clinicas por sessao", "Historico completo por paciente", "Modelos prontos e editaveis"],
    image: "/images/produto-clientes.png",
    icon: FileText,
    href: "/solucoes#anamneses",
    cta: "Saiba mais",
  },
]

const miniCards = [
  { id: "nfse",    icon: FileText,   title: "NFS-e Integrada",          desc: "Emissao de notas fiscais direto pelo sistema" },
  { id: "ideias",  icon: Lightbulb,  title: "Canal de Ideias",           desc: "Seus clientes sugerem melhorias, voce evolui" },
  { id: "pagamentos", icon: CreditCard, title: "Pagamentos Integrados",  desc: "Maquininha com split automatico de comissoes" },
]

export default function Funcionalidades() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-[var(--d2b-bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
            Solucoes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--d2b-text-primary)] text-balance mb-5">
            tudo que sua clinica precisa{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              em um so lugar
            </span>
          </h2>
          <p className="text-[var(--d2b-text-secondary)] text-lg max-w-2xl mx-auto text-pretty">
            Da agenda online ao prontuario digital, do financeiro completo ao chat com pacientes &mdash; tudo integrado para voce focar no que importa: cuidar das pessoas.
          </p>
        </div>

        {/* Feature rows - alternating layout */}
        <div className="flex flex-col gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            const reversed = idx % 2 !== 0
            return (
              <div
                key={feature.title}
                id={feature.id}
                className="rounded-2xl border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-surface)] overflow-hidden hover:border-[#7C4DFF]/30 transition-all duration-300 group scroll-mt-20"
              >
                <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch min-h-[320px]`}>
                  {/* Image side */}
                  <div className="relative w-full lg:w-[45%] shrink-0 h-56 lg:h-auto">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain object-left group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 ${reversed ? "bg-gradient-to-r from-[var(--d2b-bg-surface)]/60 to-transparent" : "bg-gradient-to-l from-[var(--d2b-bg-surface)]/60 to-transparent"}`} aria-hidden="true" />
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-[#7C4DFF]/20 border border-[#7C4DFF]/30 flex items-center justify-center shrink-0">
                        <Icon className="w-4.5 h-4.5 text-[#C084FC]" aria-hidden="true" />
                      </div>
                      <span className="text-[#C084FC] text-xs font-bold uppercase tracking-widest">{feature.tag}</span>
                    </div>
                    <h3 className="text-2xl font-black text-[var(--d2b-text-primary)] mb-3">{feature.title}</h3>
                    <p className="text-[var(--d2b-text-secondary)] leading-relaxed mb-6 max-w-lg">{feature.description}</p>
                    <ul className="flex flex-col gap-2 mb-7">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-sm text-[var(--d2b-text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C4DFF] shrink-0" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-2 text-[#C084FC] font-semibold text-sm hover:text-white transition-colors group/link"
                    >
                      {feature.cta}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mini cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {miniCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.id}
                id={card.id}
                className="rounded-2xl border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-surface)] p-6 flex items-start gap-4 hover:border-[#7C4DFF]/30 transition-all scroll-mt-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7C4DFF]/15 border border-[#7C4DFF]/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#C084FC]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[var(--d2b-text-primary)] font-semibold text-sm mb-1">{card.title}</p>
                  <p className="text-[var(--d2b-text-muted)] text-xs leading-relaxed">{card.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
