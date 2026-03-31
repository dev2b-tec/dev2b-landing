import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

const segmentos = [
  {
    title: "Salao de beleza",
    description:
      "Seja qual for o tamanho do seu salao, tenha total controle dos agendamentos, gerencie seus profissionais, fidelize seus clientes e ganhe tempo automatizando a sua gestao.",
    image: "/images/segmento-estetica.jpg",
    href: "/negocios/saloes-de-beleza",
    bullets: ["Controle de agenda online", "Calculo e pagamento de comissoes", "Fluxo de caixa"],
    cta: "Solucoes para saloes de beleza",
  },
  {
    title: "Barbearia",
    description:
      "Libere tempo na sua rotina para vender mais com sistema de agendamento, gerenciamento de equipe, controle de estoque e clube de assinaturas para fidelizar seus clientes.",
    image: "/images/segmento-fitness.jpg",
    href: "/negocios/barbearias",
    bullets: ["Controle de agenda online", "App para profissionais", "Clube de Assinaturas"],
    cta: "Solucoes para barbearias",
  },
  {
    title: "Clinica de Estetica",
    description:
      "Faca a gestao dos seus profissionais e atraia mais clientes com ferramentas de comunicacao e marketing exclusivas, criacao de pacotes e clube de assinaturas.",
    image: "/images/segmento-saude.jpg",
    href: "/negocios/clinicas-esteticas",
    bullets: ["Gestao de pacotes", "Fichas de Anamnese", "Controle de estoque"],
    cta: "Solucoes para clinicas de estetica",
  },
  {
    title: "Studios",
    description:
      "Solucoes completas em gestao, pagamentos, comunicacao e marketing para lash designers, nail designers, esmalterias, studios de tatuagem e muito mais.",
    image: "/images/segmento-educacao.jpg",
    href: "/negocios/studios",
    bullets: ["Solucoes para captacao de clientes", "Calculo de comissoes", "Split de pagamentos"],
    cta: "Solucoes para studios",
  },
  {
    title: "Redes e Franquias",
    description:
      "Tudo para voce inovar na sua gestao e o seu negocio ir alem: gestao e controle de todas as unidades e mais de 130 tipos de relatorios personalizados.",
    image: "/images/hero-dashboard.jpg",
    href: "/negocios/redes-e-franquias",
    bullets: ["Gestao centralizada das unidades", "Relatorios consolidados", "Fidelizacao de clientes"],
    cta: "Solucoes para redes e franquias",
  },
]

export default function Segmentos() {
  return (
    <section id="segmentos" className="py-20 lg:py-28 bg-[#0D0520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
            Segmentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-balance mb-5">
            se tem negocio aqui,{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              tem DEV2B na gestao
            </span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto text-pretty">
            Seja qual for o seu negocio, a DEV2B e pra voce. Bora levar a sua gestao alem &mdash; o tipo de negocio muda, a parceria nao.
          </p>
          <Link href="/planos" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-[#7C4DFF] text-white font-semibold text-sm hover:bg-[#6B3FE8] transition-colors shadow-lg shadow-[#7C4DFF]/30">
            TESTE GRATIS
          </Link>
        </div>

        {/* Segmentos cards - alternating layout like Trinks */}
        <div className="flex flex-col gap-6">
          {segmentos.map((seg, idx) => (
            <div
              key={seg.title}
              className="group rounded-2xl border border-[#7C4DFF]/15 bg-[#120328]/60 hover:border-[#7C4DFF]/40 transition-all duration-300 overflow-hidden"
            >
              <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-stretch`}>
                {/* Image */}
                <div className="relative w-full lg:w-96 shrink-0 h-56 lg:h-auto">
                  <Image
                    src={seg.image}
                    alt={seg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120328]/80 lg:bg-gradient-to-r lg:from-transparent lg:to-[#120328]/60" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-3">{seg.title}</h3>
                  <p className="text-white/50 leading-relaxed mb-6 max-w-lg">{seg.description}</p>

                  <ul className="flex flex-col gap-2 mb-8">
                    {seg.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#C084FC] shrink-0" aria-hidden="true" />
                        <span className="text-sm text-white/70">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={seg.href}
                    className="inline-flex items-center gap-2 text-[#C084FC] font-semibold text-sm hover:text-white transition-colors group/link"
                  >
                    {seg.cta}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
