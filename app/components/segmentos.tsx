import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { REGISTER_URL } from "@/lib/register-url"

const segmentos = [
  {
    title: "Clinicas Odontologicas",
    description:
      "Gerencie consultas, tratamentos e pacientes com agenda inteligente, anamneses digitais, evolucoes clinicas e controle financeiro completo. Tudo o que seu consultorio odontologico precisa.",
    image: "/images/segmento-saude.jpg",
    href: "/negocios/clinicas-odontologicas",
    bullets: ["Anamneses e evolucoes digitais", "Agenda com controle por sala/profissional", "DRE e relatorios financeiros"],
    cta: "Solucoes para clinicas odontologicas",
  },
  {
    title: "Clinicas de Estetica",
    description:
      "Faca a gestao dos seus profissionais e atraia mais clientes com ferramentas de comunicacao e marketing exclusivas, criacao de pacotes e anamneses personalizadas para procedimentos esteticos.",
    image: "/images/segmento-estetica.jpg",
    href: "/negocios/clinicas-esteticas",
    bullets: ["Fichas de Anamnese personalizadas", "Gestao de pacotes de procedimentos", "Chat integrado ao WhatsApp"],
    cta: "Solucoes para clinicas de estetica",
  },
  {
    title: "Consultorios Medicos",
    description:
      "Prontuario eletronico, agenda online e comunicacao direta com pacientes. Reduza faltas com confirmacoes automaticas e tenha o historico clinico completo de cada paciente a um clique.",
    image: "/images/segmento-fitness.jpg",
    href: "/negocios/consultorios-medicos",
    bullets: ["Prontuario e evolucoes clinicas", "Confirmacao automatica de consultas", "NFS-e integrada"],
    cta: "Solucoes para consultorios medicos",
  },
  {
    title: "Psicologos e Terapeutas",
    description:
      "Organize sua agenda de sessoes, mantenha evolucoes sigilosas dos pacientes e automatize lembretes de consultas via WhatsApp. Mais tempo para o que realmente importa: seus pacientes.",
    image: "/images/segmento-educacao.jpg",
    href: "/negocios/psicologos-terapeutas",
    bullets: ["Evolucoes de sessoes", "Lembretes automaticos via WhatsApp", "Controle financeiro e mensalidades"],
    cta: "Solucoes para psicologos e terapeutas",
  },
  {
    title: "Redes e Franquias",
    description:
      "Gestao centralizada de todas as unidades com visao consolidada de faturamento, atendimentos e desempenho de profissionais. Escale sua clinica sem perder o controle.",
    image: "/images/hero-dashboard.jpg",
    href: "/negocios/redes-e-franquias",
    bullets: ["Gestao centralizada das unidades", "Relatorios consolidados por unidade", "Padronizacao de processos"],
    cta: "Solucoes para redes e franquias",
  },
]

export default function Segmentos() {
  return (
    <section id="segmentos" className="py-20 lg:py-28 bg-[var(--d2b-bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
            Segmentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--d2b-text-primary)] text-balance mb-5">
            se tem clinica aqui,{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              tem DEV2B na gestao
            </span>
          </h2>
          <p className="text-[var(--d2b-text-secondary)] text-lg max-w-2xl mx-auto text-pretty">
            Da odontologia a estetica, da psicologia a fisioterapia &mdash; a DEV2B e a plataforma de gestao para clinicas de saude e bem-estar.
          </p>
          <Link href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-[#7C4DFF] text-white font-semibold text-sm hover:bg-[#6B3FE8] transition-colors shadow-lg shadow-[#7C4DFF]/30">
            TESTE GRATIS
          </Link>
        </div>

        {/* Segmentos cards - alternating layout */}
        <div className="flex flex-col gap-6">
          {segmentos.map((seg, idx) => (
            <div
              key={seg.title}
              className="group rounded-2xl border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-surface)] hover:border-[#7C4DFF]/40 transition-all duration-300 overflow-hidden"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--d2b-bg-surface)]/80 lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--d2b-bg-surface)]/60" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[var(--d2b-text-primary)] mb-3">{seg.title}</h3>
                  <p className="text-[var(--d2b-text-secondary)] leading-relaxed mb-6 max-w-lg">{seg.description}</p>

                  <ul className="flex flex-col gap-2 mb-8">
                    {seg.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#C084FC] shrink-0" aria-hidden="true" />
                        <span className="text-sm text-[var(--d2b-text-secondary)]">{b}</span>
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
