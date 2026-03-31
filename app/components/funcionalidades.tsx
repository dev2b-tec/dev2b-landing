import Image from "next/image"
import Link from "next/link"
import { Calendar, TrendingUp, MessageSquare, Star, CreditCard, Package, ArrowRight } from "lucide-react"

const features = [
  {
    id: "agenda",
    tag: "Beneficios e Solucoes",
    title: "O essencial para o seu sucesso",
    description:
      "Os recursos que o seu negocio precisa estao todos aqui. Digitalize e automatize processos com solucoes completas e ganhe tempo para se preocupar com o que mais importa: o seu sucesso.",
    bullets: ["Agenda online", "Fechamento de contas", "Controle de clientes e profissionais", "Pesquisa de satisfacao"],
    image: "/images/feature-agenda.jpg",
    icon: Calendar,
    href: "/solucoes#agenda",
    cta: "Saiba mais",
  },
  {
    id: "financeiro",
    tag: "Financeiro",
    title: "Bora simplificar as financas",
    description:
      "Simplifique sua gestao financeira com registros completos, relatorios personalizados, maquina de cartao integrada ao sistema de pagamentos e muito mais.",
    bullets: ["Fluxo de caixa", "Relatorios financeiros", "Pagamentos integrados", "Conta digital"],
    image: "/images/feature-financeiro.jpg",
    icon: TrendingUp,
    href: "/solucoes#financeiro",
    cta: "Saiba mais",
  },
  {
    id: "comunicacao",
    tag: "Comunicacao",
    title: "Comunicacao para ir alem",
    description:
      "Aqui a sua comunicacao acontece num piscar de olhos: voce conecta o seu negocio com o Google, Instagram e Facebook. E com as rotinas de mensagens voce garante o engajamento dos seus clientes.",
    bullets: ["Seu site", "E-mail Marketing e SMS", "Rotina de mensagens via WhatsApp", "Integracao com redes sociais"],
    image: "/images/feature-clientes.jpg",
    icon: MessageSquare,
    href: "/solucoes#comunicacao",
    cta: "Saiba mais",
  },
  {
    id: "relatorios",
    tag: "Crescimento",
    title: "Para expandir sem limites",
    description:
      "Mais de 130 tipos de relatorios detalhados e visao centralizada para gerenciamento de redes e franquias. Tudo para voce inovar na sua gestao em um so lugar.",
    bullets: ["Autoatendimento", "Conta digital", "Mais de 130 relatorios", "Visao centralizada de redes e franquias"],
    image: "/images/hero-dashboard.jpg",
    icon: Star,
    href: "/solucoes#relatorios",
    cta: "Saiba mais",
  },
]

const miniCards = [
  { id: "pagamentos", icon: CreditCard, title: "Pagamentos Integrados", desc: "Maquininha com split automatico de comissoes" },
  { id: "estoque",    icon: Package,    title: "Controle de Estoque",    desc: "Alertas de reposicao e relatorios detalhados" },
  { id: "fidelidade", icon: Star,       title: "Clube de Assinaturas",   desc: "Fidelize clientes com planos recorrentes" },
]

export default function Funcionalidades() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-[#0D0520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
            Solucoes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-balance mb-5">
            seu sistema de gestao{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              completo
            </span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto text-pretty">
            Da agenda online a solucoes em pagamentos, do clube de assinaturas as rotinas de mensagens, tudo para voce inovar na sua gestao em um so lugar.
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
                className="rounded-2xl border border-[#7C4DFF]/12 bg-[#120328]/50 overflow-hidden hover:border-[#7C4DFF]/30 transition-all duration-300 group scroll-mt-20"
              >
                <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch min-h-[320px]`}>
                  {/* Image side */}
                  <div className="relative w-full lg:w-[45%] shrink-0 h-56 lg:h-auto">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#120328]/40" aria-hidden="true" />
                  </div>

                  {/* Text side */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-[#7C4DFF]/20 border border-[#7C4DFF]/30 flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5 text-[#C084FC]" aria-hidden="true" />
                      </div>
                      <span className="text-[#C084FC] text-xs font-bold uppercase tracking-widest">{feature.tag}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/50 leading-relaxed mb-6 max-w-lg text-pretty">{feature.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-white/65">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C4DFF] shrink-0" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-2 text-[#C084FC] font-semibold text-sm hover:text-white transition-colors group/lnk"
                    >
                      {feature.cta}
                      <ArrowRight className="w-4 h-4 group-hover/lnk:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mini cards row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {miniCards.map(({ id, icon: Icon, title, desc }) => (
            <div key={title} id={id} className="flex items-center gap-4 p-6 rounded-2xl border border-[#7C4DFF]/12 bg-[#120328]/40 hover:border-[#7C4DFF]/40 hover:bg-[#7C4DFF]/8 transition-all scroll-mt-20">
              <div className="w-10 h-10 rounded-xl bg-[#7C4DFF]/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#C084FC]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{title}</p>
                <p className="text-white/40 text-xs mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
