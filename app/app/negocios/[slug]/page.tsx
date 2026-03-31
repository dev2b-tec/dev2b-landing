import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Depoimentos from "@/components/depoimentos"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, Calendar, TrendingUp, MessageSquare, Star, CreditCard, Package, BarChart3, Zap } from "lucide-react"

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
  "saloes-de-beleza": {
    title: "Saloes de Beleza",
    subtitle: "Gestao completa para o seu salao crescer",
    description: "Seja qual for o tamanho do seu salao, tenha total controle dos agendamentos, gerencie seus profissionais, fidelize seus clientes e ganhe tempo automatizando a sua gestao com a DEV2B.",
    heroImage: "/images/segmento-estetica.jpg",
    benefits: [
      "Controle de agenda online 24h",
      "Calculo e pagamento de comissoes",
      "Fluxo de caixa e relatorios financeiros",
      "App personalizado para clientes",
      "Controle de estoque de produtos",
      "Rotina de mensagens via WhatsApp",
      "Programa de fidelidade e clube de assinaturas",
      "Pesquisa de satisfacao automatica",
    ],
    features: [
      { icon: Calendar, title: "Agenda Online", desc: "Permita que seus clientes agendem 24h por dia pelo app ou site. Reduza faltas com lembretes automaticos e confirmacoes em tempo real." },
      { icon: TrendingUp, title: "Gestao Financeira", desc: "Controle entradas e saidas, acompanhe comissoes dos profissionais e tenha relatorios completos para tomar decisoes com seguranca." },
      { icon: MessageSquare, title: "Comunicacao com Clientes", desc: "Envie mensagens automaticas de confirmacao, lembretes de retorno, promocoes e felicitacoes de aniversario pelo WhatsApp." },
      { icon: Star, title: "Fidelizacao", desc: "Crie clubes de assinatura, programas de fidelidade e pacotes de servicos para manter seus clientes voltando sempre." },
      { icon: CreditCard, title: "Pagamentos Integrados", desc: "Maquininha integrada ao sistema com split automatico de comissoes. Aceite todos os meios de pagamento sem complicacao." },
      { icon: Package, title: "Controle de Estoque", desc: "Gerencie seus produtos com alertas de reposicao, relatorios de consumo e inventario completo em tempo real." },
    ],
    faq: [
      { q: "A DEV2B funciona para saloes de qualquer porte?", a: "Sim! Temos planos para saloes com 1 ate mais de 10 profissionais, incluindo solucoes para redes e franquias." },
      { q: "Posso personalizar o aplicativo com a identidade do meu salao?", a: "Sim, o app para clientes pode ser personalizado com o nome e as cores do seu negocio." },
      { q: "Como funciona o calculo de comissoes?", a: "Voce configura as porcentagens de comissao por profissional e servico. O sistema calcula automaticamente no fechamento do dia." },
      { q: "E possivel migrar meus dados de outro sistema?", a: "Sim! Nosso time de onboarding ajuda na migracao dos seus dados de forma assistida e sem perda de informacoes." },
    ],
  },
  "barbearias": {
    title: "Barbearias",
    subtitle: "Do agendamento ao caixa, tudo no seu controle",
    description: "Libere tempo na sua rotina para vender mais com sistema de agendamento, gerenciamento de equipe, controle de estoque e clube de assinaturas para fidelizar seus clientes barbeiros.",
    heroImage: "/images/segmento-fitness.jpg",
    benefits: [
      "Controle de agenda online 24h",
      "App para profissionais com agenda propria",
      "Clube de Assinaturas para clientes fieis",
      "Calculo de comissoes automatico",
      "Controle de estoque de produtos",
      "Rotina de mensagens via WhatsApp",
      "Pagamentos integrados com split",
      "Relatorios de faturamento por barbeiro",
    ],
    features: [
      { icon: Calendar, title: "Agenda Online", desc: "Seus clientes agendam 24h pelo app, site ou WhatsApp. Confirmacao automatica e reducao de faltas com lembretes inteligentes." },
      { icon: Zap, title: "App para Barbeiros", desc: "Cada profissional tem acesso a propria agenda no celular, podendo visualizar e gerenciar seus agendamentos de onde estiver." },
      { icon: Star, title: "Clube de Assinaturas", desc: "Crie planos mensais com servicos inclusos e garanta receita recorrente para a sua barbearia todo mes." },
      { icon: TrendingUp, title: "Comissoes e Faturamento", desc: "Configure comissoes por servico e profissional. O sistema calcula automaticamente no fechamento de caixa." },
      { icon: CreditCard, title: "Pagamentos Integrados", desc: "Aceite todos os meios de pagamento com maquininha integrada e split automatico entre os barbeiros." },
      { icon: BarChart3, title: "Relatorios Completos", desc: "Acompanhe o desempenho de cada profissional, os servicos mais realizados e o faturamento com mais de 130 relatorios." },
    ],
    faq: [
      { q: "O sistema funciona para barbearias com varios barbeiros?", a: "Sim! Voce pode cadastrar quantos profissionais quiser, cada um com sua agenda e comissoes individualizadas." },
      { q: "Como funciona o clube de assinaturas?", a: "Voce cria planos mensais com servicos inclusos (ex: 4 cortes por mes). O cliente paga mensalmente e agenda quando quiser." },
      { q: "Posso controlar os produtos usados em cada servico?", a: "Sim! O sistema tem controle de estoque integrado com baixa automatica dos produtos utilizados nos servicos." },
      { q: "Existe app para os clientes agendarem?", a: "Sim! Seus clientes podem agendar pelo app personalizado com a identidade da sua barbearia, pelo site ou pelo link de agendamento." },
    ],
  },
  "clinicas-esteticas": {
    title: "Clinicas de Estetica",
    subtitle: "Gestao profissional para sua clinica decolar",
    description: "Faca a gestao dos seus profissionais e atraia mais clientes com ferramentas de comunicacao e marketing exclusivas, criacao de pacotes e clube de assinaturas para clinicas de estetica.",
    heroImage: "/images/segmento-saude.jpg",
    benefits: [
      "Fichas de Anamnese digitais",
      "Gestao de pacotes de procedimentos",
      "Controle de estoque de insumos",
      "Rotina de mensagens via WhatsApp",
      "Programa de fidelidade",
      "Relatorios financeiros detalhados",
      "App para clientes com historico",
      "Pesquisa de satisfacao automatica",
    ],
    features: [
      { icon: Calendar, title: "Agenda Online", desc: "Gestao de agenda com bloqueio de horarios, confirmacao automatica e visualizacao por profissional ou sala de atendimento." },
      { icon: MessageSquare, title: "Fichas de Anamnese", desc: "Crie fichas digitais personalizadas para cada tipo de procedimento. Historial completo do cliente em um so lugar." },
      { icon: Package, title: "Gestao de Pacotes", desc: "Crie e gerencie pacotes de procedimentos com controle de sessoes realizadas e saldo disponivel por cliente." },
      { icon: TrendingUp, title: "Controle Financeiro", desc: "Acompanhe o faturamento por profissional, procedimento e periodo. Fluxo de caixa e relatorios completos." },
      { icon: Star, title: "Fidelizacao", desc: "Programa de fidelidade e clube de assinaturas para garantir a recorrencia e engajamento dos seus clientes." },
      { icon: CreditCard, title: "Pagamentos Integrados", desc: "Maquininha integrada com parcelamento, split de comissoes e controle de todas as formas de pagamento." },
    ],
    faq: [
      { q: "As fichas de anamnese sao personalizaveis?", a: "Sim! Voce pode criar quantos modelos de ficha precisar, com campos personalizados para cada tipo de procedimento." },
      { q: "Como funciona o controle de pacotes?", a: "Voce cadastra o pacote com a quantidade de sessoes. A cada atendimento, o sistema da baixa automatica e avisa quando o pacote esta se esgotando." },
      { q: "O sistema e adequado para clinicas com medicos esteticistas?", a: "Sim! O sistema atende clinicas de todos os portes, com suporte para multiplos profissionais e especialidades." },
      { q: "E possivel enviar lembretes de retorno para procedimentos recorrentes?", a: "Sim! A rotina de mensagens permite programar lembretes automaticos para retornos em datas especificas." },
    ],
  },
  "studios": {
    title: "Studios",
    subtitle: "Solucoes completas para lash, nail e tattoo",
    description: "Solucoes completas em gestao, pagamentos, comunicacao e marketing para lash designers, nail designers, esmalterias, studios de tatuagem e muito mais.",
    heroImage: "/images/segmento-educacao.jpg",
    benefits: [
      "Solucoes para captacao de clientes",
      "Calculo e pagamento de comissoes",
      "Split de pagamentos entre profissionais",
      "Controle de agenda online",
      "Fichas de anamnese digitais",
      "Rotina de mensagens via WhatsApp",
      "App personalizado para clientes",
      "Relatorios de desempenho",
    ],
    features: [
      { icon: Calendar, title: "Agenda Online", desc: "Clientes agendam 24h pelo app ou site. Confirmacao e lembretes automaticos para reduzir faltas e no-shows." },
      { icon: Zap, title: "Split de Pagamentos", desc: "Divida automaticamente o valor dos servicos entre os profissionais do studio conforme as regras que voce configurar." },
      { icon: MessageSquare, title: "Captacao de Clientes", desc: "Integracoes com Google, Instagram e Facebook para atrair novos clientes e converter seguidores em agendamentos." },
      { icon: TrendingUp, title: "Gestao Financeira", desc: "Controle completo do financeiro do studio com fluxo de caixa, relatorios por profissional e periodo." },
      { icon: Star, title: "Fidelizacao", desc: "Programas de fidelidade e clube de assinaturas para manter seus clientes sempre voltando ao studio." },
      { icon: Package, title: "Controle de Estoque", desc: "Gerencie todos os insumos do studio com alertas de reposicao e controle de consumo por servico." },
    ],
    faq: [
      { q: "O sistema funciona para studios de tatuagem?", a: "Sim! Voce pode configurar agendamentos por sessao, controlar depositos e gerenciar a agenda de cada tatuador." },
      { q: "Como funciona o split de pagamentos?", a: "Voce define as regras de divisao (ex: 50% para o studio, 50% para o profissional) e o sistema faz a divisao automaticamente." },
      { q: "E possivel ter varios profissionais no mesmo studio?", a: "Sim! Cada profissional tem sua propria agenda e os gestores tem visao completa de todos os atendimentos." },
      { q: "Existe suporte para agenda de clientes recorrentes?", a: "Sim! Voce pode configurar agendamentos recorrentes e avisos de retorno para manutencoes periodicas." },
    ],
  },
  "redes-e-franquias": {
    title: "Redes e Franquias",
    subtitle: "Gestao centralizada para todas as suas unidades",
    description: "Tudo para voce inovar na sua gestao e o seu negocio ir alem: gestao e controle de todas as unidades e mais de 130 tipos de relatorios personalizados para redes e franquias.",
    heroImage: "/images/hero-dashboard.jpg",
    benefits: [
      "Gestao centralizada de todas as unidades",
      "Relatorios consolidados da rede",
      "Fidelizacao de clientes entre unidades",
      "Padronizacao de processos",
      "Controle de comissoes por unidade",
      "Suporte especializado para franqueadoras",
      "Onboarding personalizado para franqueados",
      "Mais de 130 relatorios gerenciais",
    ],
    features: [
      { icon: BarChart3, title: "Visao Centralizada", desc: "Acesse os dados de todas as unidades em um unico painel. Faturamento, agendamentos e desempenho em tempo real." },
      { icon: TrendingUp, title: "Relatorios Gerenciais", desc: "Mais de 130 tipos de relatorios para acompanhar o desempenho de cada unidade e da rede como um todo." },
      { icon: Star, title: "Fidelizacao da Rede", desc: "Programa de fidelidade compartilhado entre todas as unidades. Cliente fiel a rede, nao so a uma unidade." },
      { icon: Calendar, title: "Padronizacao", desc: "Gerencie servicos, precos e processos de forma padronizada para todas as unidades da sua rede ou franquia." },
      { icon: MessageSquare, title: "Comunicacao", desc: "Envie comunicados e campanhas de marketing para todas as unidades ou de forma segmentada por regiao." },
      { icon: CreditCard, title: "Gestao Financeira", desc: "Acompanhe o financeiro de cada unidade individualmente e de forma consolidada para a rede inteira." },
    ],
    faq: [
      { q: "Como funciona o controle de multiplas unidades?", a: "Cada unidade tem seu proprio acesso ao sistema, e a franqueadora tem visao consolidada de todas elas em um unico painel." },
      { q: "E possivel padronizar precos e servicos para toda a rede?", a: "Sim! Voce pode criar uma base padrao de servicos e precos que e replicada para todas as unidades." },
      { q: "Como funciona o programa de fidelidade na rede?", a: "Os pontos ou beneficios do cliente sao validos em qualquer unidade da rede, aumentando a fidelidade ao negocio." },
      { q: "Existe suporte especifico para franqueadoras?", a: "Sim! Temos um time especializado em implementacoes para redes e franquias, com onboarding dedicado." },
    ],
  },
  "fitness": {
    title: "Academias e Fitness",
    subtitle: "Gestao completa para seu espaco fitness crescer",
    description: "Solucoes completas para academias, studios de pilates, crossfit, yoga e personal trainers. Controle de matriculas, agendamento de aulas e financeiro em um so lugar.",
    heroImage: "/images/segmento-fitness.jpg",
    benefits: [
      "Controle de matriculas e renovacoes",
      "Agendamento de aulas coletivas",
      "App para alunos com horarios",
      "Planos e mensalidades automaticas",
      "Rotina de mensagens via WhatsApp",
      "Relatorios de frequencia",
      "Gestao de avaliacao fisica",
      "Controle de acesso integrado",
    ],
    features: [
      { icon: Calendar, title: "Agendamento de Aulas", desc: "Alunos agendam aulas coletivas pelo app com limite de vagas, lista de espera e confirmacao automatica." },
      { icon: Star, title: "Planos e Mensalidades", desc: "Crie diferentes planos com cobranca automatica recorrente e controle de inadimplencia em tempo real." },
      { icon: TrendingUp, title: "Controle Financeiro", desc: "Acompanhe mensalidades, pagamentos avulsos e faturamento total com relatorios completos por periodo." },
      { icon: MessageSquare, title: "Comunicacao", desc: "Envie lembretes de renovacao, avisos de cancelamento e incentivos para alunos que nao aparecem ha dias." },
      { icon: BarChart3, title: "Relatorios de Frequencia", desc: "Acompanhe a frequencia dos alunos por aula, horario e periodo para tomar decisoes mais inteligentes." },
      { icon: CreditCard, title: "Pagamentos Integrados", desc: "Aceite todos os meios de pagamento com cobranca automatica de mensalidades e controle de debitadas." },
    ],
    faq: [
      { q: "O sistema funciona para studios de pilates e yoga?", a: "Sim! Qualquer espaco fitness com aulas agendadas e alunos mensalistas se beneficia de todas as funcionalidades." },
      { q: "Como funciona o controle de vagas nas aulas?", a: "Voce define o limite de alunos por aula. Quando a turma lotar, o sistema cria automaticamente uma lista de espera." },
      { q: "E possivel cobrar mensalidades automaticamente?", a: "Sim! Configure os planos e o sistema cobra automaticamente no vencimento via cartao de credito recorrente." },
      { q: "Existe app para os alunos?", a: "Sim! Os alunos tem um app personalizado com a identidade do seu espaco para agendar aulas, ver historico e muito mais." },
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
      <section className="relative pt-20 overflow-hidden bg-[#0D0520]">
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] text-balance mb-6">
                {data.subtitle}
              </h1>
              <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
                {data.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/planos"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#7C4DFF] text-white font-bold hover:bg-[#6B3FE8] transition-all shadow-xl shadow-[#7C4DFF]/40 hover:-translate-y-0.5"
                >
                  TESTE GRATIS
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#funcionalidades"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/12 text-white/70 font-medium hover:bg-white/5 hover:text-white transition-colors"
                >
                  Ver funcionalidades
                </Link>
              </div>
              <p className="mt-5 text-white/25 text-sm">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0520]/40 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-16 bg-[#120328] border-t border-[#7C4DFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-white mb-8 text-center">
            Tudo que seu negocio precisa em um so lugar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.benefits.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0D0520] border border-[#7C4DFF]/10"
              >
                <CheckCircle className="w-4 h-4 text-[#C084FC] shrink-0" aria-hidden="true" />
                <span className="text-sm text-white/70">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funcionalidades" className="py-20 lg:py-28 bg-[#0D0520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
              Funcionalidades
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white text-balance">
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
                className="p-7 rounded-2xl border border-[#7C4DFF]/12 bg-[#120328]/60 hover:border-[#7C4DFF]/35 hover:bg-[#7C4DFF]/5 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#7C4DFF]/20 border border-[#7C4DFF]/30 flex items-center justify-center mb-5 group-hover:bg-[#7C4DFF]/30 transition-colors">
                  <Icon className="w-5 h-5 text-[#C084FC]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#120328]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-black text-white text-balance">Perguntas frequentes</h2>
          </div>
          <div className="flex flex-col gap-4">
            {data.faq.map(({ q, a }) => (
              <div
                key={q}
                className="p-6 rounded-2xl border border-[#7C4DFF]/12 bg-[#0D0520] hover:border-[#7C4DFF]/30 transition-colors"
              >
                <h3 className="font-semibold text-white mb-2">{q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{a}</p>
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
