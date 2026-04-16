import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Depoimentos from "@/components/depoimentos"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, Calendar, TrendingUp, MessageSquare, Star, CreditCard, Package, BarChart3, Zap, FileText } from "lucide-react"
import { REGISTER_URL } from "@/lib/register-url"

type IconType = typeof Calendar

interface SegmentoData {
  title: string
  subtitle: string
  description: string
  heroImage: string
  benefits: string[]
  features: { icon: IconType; title: string; desc: string }[]
  faq: { q: string; a: string }[]
}

const segmentosData: Record<string, SegmentoData> = {
  "clinicas-odontologicas": {
    title: "Clinicas Odontologicas",
    subtitle: "Gestao completa para sua clinica odontologica",
    description:
      "Do atendimento a nota fiscal, tenha controle total: agenda online, anamneses digitais, evolucoes clinicas, financeiro completo e comunicacao integrada ao WhatsApp.",
    heroImage: "/images/segmento-saude.jpg",
    benefits: [
      "Agenda online 24h por profissional",
      "Anamneses e evolucoes digitais",
      "NFS-e integrada",
      "Chat e WhatsApp integrado",
      "DRE e relatorios financeiros",
      "App para pacientes",
      "Prontuario digital completo",
      "Confirmacao automatica de consultas",
    ],
    features: [
      { icon: Calendar, title: "Agenda Online", desc: "Agenda completa por profissional e sala. Pacientes agendam 24h com confirmacao automatica e lembretes inteligentes." },
      { icon: FileText, title: "Anamneses Digitais", desc: "Crie fichas personalizadas para cada procedimento odontologico. Historico completo do paciente sempre acessivel." },
      { icon: TrendingUp, title: "Financeiro e DRE", desc: "Acompanhe valores recebidos, a receber, DRE completo e relatorios de faturamento por profissional e periodo." },
      { icon: Zap, title: "NFS-e Integrada", desc: "Emita notas fiscais de servico diretamente pelo sistema. Automatize o processo de faturamento da sua clinica." },
      { icon: MessageSquare, title: "Chat e WhatsApp", desc: "Comunicacao direta com pacientes via chat integrado ao WhatsApp. Envie lembretes, avisos e confirmacoes." },
      { icon: CreditCard, title: "Pagamentos Integrados", desc: "Parcelamentos, cobrancas recorrentes e controle de mensalidades dos tratamentos em andamento." },
    ],
    faq: [
      { q: "As anamneses sao personalizaveis para odontologia?", a: "Sim! Voce cria modelos para cada procedimento: implante, ortodontia, cirurgia e muito mais." },
      { q: "Como funciona o controle de evolucoes clinicas?", a: "Voce registra a evolucao de cada sessao diretamente no sistema, formando o prontuario digital completo do paciente." },
      { q: "A NFS-e funciona para todos os municipios?", a: "O sistema suporta NFS-e para os principais municipios do Brasil. Consulte nossa equipe para sua cidade." },
      { q: "E possivel ter multiplos dentistas na mesma clinica?", a: "Sim! Cadastre quantos profissionais precisar, cada um com sua propria agenda e restricoes de horario." },
    ],
  },
  "clinicas-esteticas": {
    title: "Clinicas de Estetica",
    subtitle: "Gestao profissional para sua clinica de estetica decolar",
    description:
      "Faca a gestao dos seus profissionais e atraia mais clientes com ferramentas de comunicacao e marketing exclusivas, criacao de pacotes e anamneses personalizadas para clinicas de estetica.",
    heroImage: "/images/segmento-estetica.jpg",
    benefits: [
      "Fichas de Anamnese personalizadas",
      "Gestao de pacotes de procedimentos",
      "Chat integrado ao WhatsApp",
      "Rotina de mensagens automaticas",
      "Relatorios financeiros detalhados",
      "App para clientes com historico",
      "NFS-e integrada",
      "Pesquisa de satisfacao automatica",
    ],
    features: [
      { icon: Calendar, title: "Agenda Online", desc: "Gestao de agenda com bloqueio de horarios, confirmacao automatica e visualizacao por profissional ou sala de atendimento." },
      { icon: FileText, title: "Anamneses Digitais", desc: "Crie fichas digitais personalizadas para cada tipo de procedimento estetico. Historico completo do cliente em um so lugar." },
      { icon: Package, title: "Gestao de Pacotes", desc: "Crie e gerencie pacotes de procedimentos com controle de sessoes realizadas e saldo disponivel por cliente." },
      { icon: TrendingUp, title: "Controle Financeiro", desc: "Acompanhe o faturamento por profissional, procedimento e periodo. Fluxo de caixa e relatorios completos." },
      { icon: MessageSquare, title: "Chat e WhatsApp", desc: "Comunicacao direta com clientes via WhatsApp integrado. Envie lembretes de retorno, confirmacoes e campanhas." },
      { icon: CreditCard, title: "Pagamentos Integrados", desc: "Maquininha com parcelamento, split de comissoes e controle de todas as formas de pagamento." },
    ],
    faq: [
      { q: "As fichas de anamnese sao personalizaveis?", a: "Sim! Voce pode criar quantos modelos de ficha precisar, com campos personalizados para cada tipo de procedimento estetico." },
      { q: "Como funciona o controle de pacotes?", a: "Voce cadastra o pacote com a quantidade de sessoes. A cada atendimento, o sistema da baixa automatica e avisa quando o saldo se encerra." },
      { q: "O sistema e adequado para clinicas com medicos esteticistas?", a: "Sim! O sistema atende clinicas de todos os portes, com suporte para multiplos profissionais e especialidades." },
      { q: "E possivel enviar lembretes de retorno para procedimentos recorrentes?", a: "Sim! A rotina de mensagens permite programar lembretes automaticos para retornos em datas especificas." },
    ],
  },
  "consultorios-medicos": {
    title: "Consultorios Medicos",
    subtitle: "Gestao completa para o seu consultorio medico",
    description:
      "Prontuario eletronico, agenda online e comunicacao direta com pacientes. Reduza faltas com confirmacoes automaticas e tenha o historico clinico completo de cada paciente a um clique.",
    heroImage: "/images/consultorio.png",
    benefits: [
      "Prontuario eletronico completo",
      "Agenda online com confirmacao automatica",
      "NFS-e integrada",
      "Evolucoes e historico clinico",
      "Chat e WhatsApp integrado",
      "DRE e controle financeiro",
      "Anamneses digitais personalizadas",
      "Relatorios de pacientes",
    ],
    features: [
      { icon: Calendar, title: "Agenda Online", desc: "Pacientes agendam consultas 24h pelo app ou site. Lembretes automaticos via WhatsApp reduzem as faltas." },
      { icon: FileText, title: "Prontuario Digital", desc: "Registre evolucoes clinicas, exames e historico de cada paciente de forma digital, segura e sempre acessivel." },
      { icon: TrendingUp, title: "Financeiro e DRE", desc: "DRE completo, contas a receber e a pagar, relatorios de faturamento por medico e convenio." },
      { icon: Zap, title: "NFS-e Integrada", desc: "Emissao automatica de notas fiscais de servico medico diretamente pelo sistema." },
      { icon: MessageSquare, title: "Chat e WhatsApp", desc: "Comunicacao direta com pacientes via WhatsApp integrado para resultados, orientacoes e lembretes." },
      { icon: BarChart3, title: "Relatorios Gerenciais", desc: "Acompanhe consultas realizadas, atendimentos por especialidade, taxa de retorno e muito mais." },
    ],
    faq: [
      { q: "O prontuario digital e adequado para todas as especialidades medicas?", a: "Sim! Voce personaliza os campos de anamnese e evolucao conforme a sua especialidade medica." },
      { q: "Como funciona a reducao de faltas?", a: "O sistema envia lembretes automaticos via WhatsApp no dia anterior e horas antes da consulta, com opcao de confirmacao." },
      { q: "O sistema suporta atendimentos por convenio?", a: "Sim! Voce pode cadastrar convenios, tabelas de precos e controlar os repasses financeiros." },
      { q: "Os dados dos pacientes sao protegidos conforme LGPD?", a: "Sim! A plataforma e desenvolvida em conformidade com a LGPD, com criptografia e controle de acesso por perfil." },
    ],
  },
  "psicologos-terapeutas": {
    title: "Psicologos e Terapeutas",
    subtitle: "Sistema completo para psicologos e terapeutas",
    description:
      "Organize sua agenda de sessoes, mantenha evolucoes sigilosas dos pacientes e automatize lembretes via WhatsApp. Mais tempo para o que importa: cuidar das pessoas.",
    heroImage: "/images/segmento-educacao.jpg",
    benefits: [
      "Evolucoes de sessoes por paciente",
      "Agenda online com confirmacao",
      "Lembretes automaticos via WhatsApp",
      "Controle financeiro e mensalidades",
      "Prontuario digital seguro",
      "NFS-e integrada",
      "App para pacientes",
      "Relatorios de atendimentos",
    ],
    features: [
      { icon: Calendar, title: "Agenda de Sessoes", desc: "Organize a agenda com recorrencia semanal, lembretes automaticos e confirmacao via WhatsApp para cada paciente." },
      { icon: FileText, title: "Evolucoes de Sessoes", desc: "Registre evolucoes de forma segura e sigilosa por paciente. Historico completo de todo o acompanhamento terapeutico." },
      { icon: TrendingUp, title: "Controle Financeiro", desc: "Controle mensalidades, sessoes avulsas e inadimplencia. Receba online com cobranca recorrente automatica." },
      { icon: MessageSquare, title: "Comunicacao com Pacientes", desc: "Chat integrado ao WhatsApp para confirmacoes, lembretes de sessao e comunicados importantes." },
      { icon: Zap, title: "NFS-e Integrada", desc: "Emita notas fiscais de servicos psicologicos e terapeuticos diretamente pelo sistema de forma simples." },
      { icon: BarChart3, title: "Relatorios de Atendimentos", desc: "Acompanhe total de sessoes por semana, taxa de comparecimento, faturamento e evolucao dos pacientes." },
    ],
    faq: [
      { q: "As evolucoes de sessoes sao sigilosas?", a: "Sim! O acesso e restrito por nivel de permissao. Apenas profissionais autorizados podem visualizar os registros clinicos." },
      { q: "Como funciona o agendamento recorrente?", a: "Voce configura sessoes recorrentes semanais ou quinzenais. O sistema preenche automaticamente a agenda e envia lembretes." },
      { q: "O sistema serve para clinicas com varios terapeutas?", a: "Sim! Cada psicologo ou terapeuta tem sua propria agenda e registro de evolucoes, com visao consolidada para o gestor." },
      { q: "Como funciona o controle de mensalidades?", a: "Voce configura o valor e a recorrencia. O sistema gera a cobranca automaticamente e controla os pagamentos em atraso." },
    ],
  },
  "fisioterapia": {
    title: "Fisioterapia e Reabilitacao",
    subtitle: "Gestao completa para clinicas de fisioterapia",
    description:
      "Gerencie sessoes, evolucoes clinicas, pacotes de tratamento e equipe de fisioterapeutas com uma plataforma completa e facil de usar.",
    heroImage: "/images/segmento-saude.jpg",
    benefits: [
      "Agenda de sessoes por fisioterapeuta",
      "Evolucoes e prontuario digital",
      "Controle de pacotes de sessoes",
      "Lembretes automaticos via WhatsApp",
      "DRE e controle financeiro",
      "Anamneses e avaliacao funcional",
      "NFS-e integrada",
      "Relatorios de evolucao dos pacientes",
    ],
    features: [
      { icon: Calendar, title: "Agenda de Sessoes", desc: "Controle completo da agenda por fisioterapeuta e sala. Lembretes automaticos e confirmacao de sessoes via WhatsApp." },
      { icon: Package, title: "Controle de Pacotes", desc: "Crie pacotes de sessoes por tipo de tratamento. Controle automatico das sessoes realizadas e saldo disponivel." },
      { icon: FileText, title: "Evolucoes Clinicas", desc: "Registre a evolucao clinica de cada sessao, com escalas de dor e indicadores de reabilitacao personalizados." },
      { icon: TrendingUp, title: "Controle Financeiro", desc: "Faturamento por sessao ou pacote, controle de convenios, DRE mensal e relatorios por fisioterapeuta." },
      { icon: MessageSquare, title: "Chat e WhatsApp", desc: "Comunicacao direta com pacientes: lembretes de sessao, orientacoes e confirmacoes via WhatsApp integrado." },
      { icon: BarChart3, title: "Relatorios de Evolucao", desc: "Acompanhe o progresso de reabilitacao com indicadores de evolucao por sessao e periodo de tratamento." },
    ],
    faq: [
      { q: "O controle de pacotes funciona para todos os tipos de tratamento?", a: "Sim! Voce configura pacotes por numero de sessoes, validade e valor. O sistema da baixa automatica a cada sessao." },
      { q: "E possivel registrar fotos no prontuario do paciente?", a: "Sim! Voce pode anexar fotos, laudos e documentos diretamente no prontuario digital de cada paciente." },
      { q: "O sistema atende clinicas com convenios?", a: "Sim! Voce cadastra os convenios, tabelas de precos e o sistema controla os repasses e autorizacoes." },
      { q: "Como funciona o lembrete de sessoes?", a: "O sistema envia lembretes automaticos via WhatsApp conforme a antecedencia que voce configurar." },
    ],
  },
  "redes-e-franquias": {
    title: "Redes e Franquias",
    subtitle: "Gestao centralizada para todas as suas unidades",
    description:
      "Visao consolidada de todas as unidades, DRE consolidado, Canal de Ideias com pacientes e padronizacao de processos. DEV2B para clinicas que querem crescer sem limites.",
    heroImage: "/images/hero-dashboard.jpg",
    benefits: [
      "Gestao centralizada de todas as unidades",
      "DRE e relatorios consolidados da rede",
      "Canal de Ideias com pacientes",
      "Padronizacao de anamneses e servicos",
      "Controle de comissoes por unidade",
      "Suporte especializado para franqueadoras",
      "Onboarding personalizado para franqueados",
      "Gestao financeira por unidade",
    ],
    features: [
      { icon: BarChart3, title: "Visao Centralizada", desc: "Acesse dados de todas as unidades em um unico painel. Faturamento, agendamentos e desempenho em tempo real." },
      { icon: TrendingUp, title: "DRE Consolidado", desc: "DRE de cada unidade individualmente ou consolidado para toda a rede. Tome decisoes com dados precisos." },
      { icon: Star, title: "Canal de Ideias", desc: "Colete sugestoes e feedbacks dos pacientes diretamente no sistema. Evolua com a voz de quem importa." },
      { icon: Calendar, title: "Padronizacao", desc: "Gerencie servicos, anamneses e processos de forma padronizada para todas as unidades da rede." },
      { icon: MessageSquare, title: "Comunicacao da Rede", desc: "Envie comunicados e campanhas para todas as unidades ou segmentados por regiao e perfil." },
      { icon: CreditCard, title: "Gestao Financeira", desc: "Acompanhe o financeiro de cada unidade individualmente e consolidado para a rede inteira." },
    ],
    faq: [
      { q: "Como funciona o controle de multiplas unidades?", a: "Cada unidade tem seu proprio acesso ao sistema, e a franqueadora tem visao consolidada de todas em um unico painel." },
      { q: "E possivel padronizar servicos e anamneses para toda a rede?", a: "Sim! Voce cria uma base padrao de servicos, precos e anamneses replicada para todas as unidades." },
      { q: "O que e o Canal de Ideias?", a: "E uma funcionalidade exclusiva onde pacientes sugerem melhorias. Voce vota e prioriza o que realmente importa para o negocio." },
      { q: "Existe suporte especifico para franqueadoras?", a: "Sim! Temos um time especializado em implementacoes para redes e franquias, com onboarding dedicado." },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(segmentosData).map((slug) => ({ slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function NegocioPage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const data = segmentosData[slug]
  if (!data) notFound()

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden bg-[var(--d2b-bg-main)]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#7C4DFF]/10 blur-[140px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-6">
                <span className="text-[#C084FC] text-xs font-semibold tracking-wide">
                  Negocios &rsaquo; {data.title}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--d2b-text-primary)] leading-[1.05] text-balance mb-6">
                {data.subtitle}
              </h1>
              <p className="text-[var(--d2b-text-secondary)] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
                {data.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C4DFF] text-white font-bold hover:bg-[#6B3FE8] transition-all shadow-xl shadow-[#7C4DFF]/40 hover:-translate-y-0.5"
                >
                  TESTE GRATIS
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#funcionalidades"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-[var(--d2b-border)] text-[var(--d2b-text-secondary)] font-medium hover:bg-[var(--d2b-bg-surface)] hover:text-[var(--d2b-text-primary)] transition-colors"
                >
                  Ver funcionalidades
                </Link>
              </div>
              <p className="mt-5 text-[var(--d2b-text-faint)] text-sm">
                Sem taxa de adesao &bull; 5 dias gratis &bull; Cancele quando quiser
              </p>
            </div>
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-[#7C4DFF]/20 shadow-2xl shadow-black/60">
                <Image
                  src={data.heroImage}
                  alt={data.title}
                  width={640}
                  height={420}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--d2b-bg-main)]/40 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-16 bg-[var(--d2b-bg-surface)] border-t border-[var(--d2b-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[var(--d2b-text-primary)] mb-8 text-center">
            Tudo que seu negocio precisa em um so lugar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.benefits.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--d2b-bg-main)] border border-[var(--d2b-border)]"
              >
                <CheckCircle className="w-4 h-4 text-[#C084FC] shrink-0" aria-hidden="true" />
                <span className="text-sm text-[var(--d2b-text-secondary)]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funcionalidades" className="py-20 lg:py-28 bg-[var(--d2b-bg-main)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
              Funcionalidades
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--d2b-text-primary)] text-balance">
              Recursos pensados para{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}
              >
                {data.title}
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-7 rounded-2xl border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-surface)] hover:border-[#7C4DFF]/35 hover:bg-[#7C4DFF]/5 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#7C4DFF]/20 border border-[#7C4DFF]/30 flex items-center justify-center mb-5 group-hover:bg-[#7C4DFF]/30 transition-colors">
                  <Icon className="w-5 h-5 text-[#C084FC]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[var(--d2b-text-primary)] text-lg mb-2">{title}</h3>
                <p className="text-[var(--d2b-text-secondary)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--d2b-bg-surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-black text-[var(--d2b-text-primary)] text-balance">Perguntas frequentes</h2>
          </div>
          <div className="flex flex-col gap-4">
            {data.faq.map(({ q, a }) => (
              <div
                key={q}
                className="p-6 rounded-2xl border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-main)] hover:border-[#7C4DFF]/30 transition-colors"
              >
                <h3 className="font-semibold text-[var(--d2b-text-primary)] mb-2">{q}</h3>
                <p className="text-[var(--d2b-text-secondary)] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Depoimentos />
      <CTA />
      <Footer />
    </main>
  )
}
