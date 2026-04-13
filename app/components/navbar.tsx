"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signIn } from "next-auth/react"
import { useTheme } from "@/hooks/use-theme"
import { REGISTER_URL } from "@/lib/register-url"
import {
  Menu, X, ChevronDown, Sun, Moon,
  Stethoscope, Scissors, UserRound, Brain, Activity, Building2,
  CalendarCheck, CreditCard, MessageSquare, BarChart3, FileText, Star, Zap,
  BookOpen, Users, Lightbulb, Info, Handshake, Mail
} from "lucide-react"

const negociosItems = [
  { href: "/negocios/clinicas-odontologicas", label: "Clinicas Odontologicas", icon: Stethoscope,  desc: "Gestao completa para dentistas" },
  { href: "/negocios/clinicas-esteticas",    label: "Clinicas de Estetica",  icon: Scissors,     desc: "Estetica facial e corporal" },
  { href: "/negocios/consultorios-medicos",  label: "Consultorios Medicos",  icon: UserRound,    desc: "Prontuario e agenda medica" },
  { href: "/negocios/psicologos-terapeutas", label: "Psicologos e Terapeutas", icon: Brain,       desc: "Sessoes e evolucoes clinicas" },
  { href: "/negocios/fisioterapia",          label: "Fisioterapia",           icon: Activity,    desc: "Reabilitacao e tratamentos" },
  { href: "/negocios/redes-e-franquias",     label: "Redes e Franquias",      icon: Building2,   desc: "Gestao centralizada de unidades" },
]

const solucoesItems = [
  { href: "/solucoes#agenda",      label: "Agenda Online",        icon: CalendarCheck, desc: "Agendamento digital 24h" },
  { href: "/solucoes#financeiro",  label: "Financeiro e DRE",     icon: CreditCard,    desc: "Caixa, DRE e relatorios" },
  { href: "/solucoes#comunicacao", label: "Chat e WhatsApp",      icon: MessageSquare, desc: "Comunicacao com pacientes" },
  { href: "/solucoes#anamneses",   label: "Anamneses Digitais",   icon: FileText,      desc: "Prontuario e evolucoes" },
  { href: "/solucoes#relatorios",  label: "Relatorios Gerenciais",icon: BarChart3,     desc: "Dados para decisoes" },
  { href: "/solucoes#ideias",      label: "Canal de Ideias",      icon: Lightbulb,     desc: "Feedback dos seus pacientes" },
  { href: "/solucoes#fidelidade",  label: "Mensalidades",         icon: Star,          desc: "Recorrencia e assinaturas" },
  { href: "/solucoes#nfse",        label: "NFS-e Integrada",      icon: Zap,           desc: "Emissao de notas fiscais" },
]

const dev2bItems = [
  { href: "/blog",       label: "Blog",              icon: BookOpen,  desc: "Dicas de gestao e negocios" },
  { href: "/casos",      label: "Casos de Sucesso",  icon: Users,     desc: "Historias de quem cresceu" },
  { href: "/sobre",      label: "Sobre nos",          icon: Info,      desc: "Conhea a DEV2B" },
  { href: "/parceiros",  label: "Parceiros",          icon: Handshake, desc: "Programa de parcerias" },
  { href: "/contato",    label: "Contato",            icon: Mail,      desc: "Fale com nosso time" },
  { href: "/treinamentos", label: "Treinamentos",     icon: Lightbulb, desc: "Webinars e tutoriais gratis" },
]

type DropdownKey = "negocios" | "solucoes" | "dev2b" | null

function ClienteButton() {
  return (
    <button
      onClick={() => signIn("keycloak", { callbackUrl: "https://app.dev2b.tec.br" })}
      className="text-sm font-medium text-[var(--d2b-text-muted)] hover:text-[var(--d2b-text-primary)] px-3 py-2 rounded-lg hover:bg-[var(--d2b-border)] transition-colors"
    >
      Já sou cliente
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  /* scroll + spy */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const ids = ["segmentos", "funcionalidades", "planos", "blog"]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const { top, bottom } = el.getBoundingClientRect()
          if (top <= 120 && bottom >= 120) { setActiveSection(id); return }
        }
      }
      setActiveSection("")
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const enter = (key: NonNullable<DropdownKey>) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setOpenDropdown(key)
  }
  const leave = () => {
    leaveTimer.current = setTimeout(() => setOpenDropdown(null), 180)
  }

  const isActive = (section: string) => {
    if (pathname !== "/") {
      if (section === "segmentos" && pathname.startsWith("/negocios")) return true
      if (section === "funcionalidades" && pathname.startsWith("/solucoes")) return true
      if (section === "planos" && pathname.startsWith("/planos")) return true
      if (section === "blog" && pathname.startsWith("/blog")) return true
    }
    return activeSection === section
  }

  const { theme, toggle } = useTheme()

  const linkCls = (section: string) =>
    `flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
      isActive(section)
        ? "text-[var(--d2b-brand-light)] bg-[var(--d2b-border)]"
        : "text-[var(--d2b-text-secondary)] hover:text-[var(--d2b-text-primary)] hover:bg-[var(--d2b-border)]"
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[var(--d2b-border)]" : ""
      }`}
      style={{ backgroundColor: scrolled ? 'var(--d2b-topbar-bg)' : 'var(--d2b-topbar-flat)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="DEV2B inicio">
            <div className="w-8 h-8 rounded-xl bg-[#7C4DFF] flex items-center justify-center shadow-md shadow-purple-600/40">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)"/>
                <path d="M8 4.5L11.5 6.5V10.5L8 12.5L4.5 10.5V6.5L8 4.5Z" fill="white"/>
              </svg>
            </div>
            <span className="text-[var(--d2b-text-primary)] font-bold text-xl tracking-tight leading-none">
              DEV<span className="text-[#7C4DFF]">2B</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">

            {/* Negocios */}
            <div className="relative" onMouseEnter={() => enter("negocios")} onMouseLeave={leave}>
              <button className={linkCls("segmentos")}>
                Negocios
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "negocios" ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {openDropdown === "negocios" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-[var(--d2b-bg-surface)] border border-[var(--d2b-border-mid)] rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
                  <div className="h-0.5 bg-gradient-to-r from-[#7C4DFF] via-[#C084FC] to-transparent" aria-hidden="true" />
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--d2b-text-muted)] mb-3 px-1">Tipos de Negocio</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {negociosItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#7C4DFF]/10 group transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-[#7C4DFF]/15 flex items-center justify-center shrink-0 group-hover:bg-[#7C4DFF]/25 transition-colors">
                            <item.icon className="w-4 h-4 text-[var(--d2b-brand-light)]" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[var(--d2b-text-secondary)] group-hover:text-[var(--d2b-text-primary)] transition-colors">{item.label}</p>
                            <p className="text-xs text-[var(--d2b-text-muted)] mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-[var(--d2b-border)] flex items-center justify-between px-1">
                      <p className="text-xs text-[var(--d2b-text-muted)]">Nao encontrou seu segmento?</p>
                      <Link href="/contato" onClick={() => setOpenDropdown(null)} className="text-xs text-[var(--d2b-brand-light)] hover:text-[var(--d2b-text-primary)] transition-colors font-medium">
                        Fale conosco
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solucoes */}
            <div className="relative" onMouseEnter={() => enter("solucoes")} onMouseLeave={leave}>
              <button className={linkCls("funcionalidades")}>
                Solucoes
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "solucoes" ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {openDropdown === "solucoes" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-[var(--d2b-bg-surface)] border border-[var(--d2b-border-mid)] rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
                  <div className="h-0.5 bg-gradient-to-r from-[#7C4DFF] via-[#C084FC] to-transparent" aria-hidden="true" />
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--d2b-text-muted)] mb-3 px-1">Funcionalidades da Plataforma</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {solucoesItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#7C4DFF]/10 group transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-[#7C4DFF]/15 flex items-center justify-center shrink-0 group-hover:bg-[#7C4DFF]/25 transition-colors">
                            <item.icon className="w-4 h-4 text-[var(--d2b-brand-light)]" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[var(--d2b-text-secondary)] group-hover:text-[var(--d2b-text-primary)] transition-colors">{item.label}</p>
                            <p className="text-xs text-[var(--d2b-text-muted)] mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-[var(--d2b-border)]">
                      <Link href="/solucoes" onClick={() => setOpenDropdown(null)}
                        className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#7C4DFF]/40 text-sm text-[var(--d2b-brand-light)] hover:bg-[#7C4DFF]/10 transition-colors font-medium">
                        Ver todas as solucoes
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Planos - link direto */}
            <Link href="/planos" className={linkCls("planos")}>Planos</Link>

            {/* Blog - link direto */}
            <Link href="/blog" className={linkCls("blog")}>Blog</Link>

            {/* DEV2B */}
            <div className="relative" onMouseEnter={() => enter("dev2b")} onMouseLeave={leave}>
              <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                openDropdown === "dev2b"
                  ? "text-[var(--d2b-brand-light)] bg-[var(--d2b-border)]"
                  : "text-[var(--d2b-brand-light)] hover:text-[var(--d2b-text-primary)] hover:bg-[var(--d2b-border)]"
              }`}>
                DEV2B
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "dev2b" ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {openDropdown === "dev2b" && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-[var(--d2b-bg-surface)] border border-[var(--d2b-border-mid)] rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
                  <div className="h-0.5 bg-gradient-to-r from-[#7C4DFF] via-[#C084FC] to-transparent" aria-hidden="true" />
                  <div className="p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--d2b-text-muted)] mb-3 px-1">A Empresa</p>
                    <div className="flex flex-col gap-1">
                      {dev2bItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#7C4DFF]/10 group transition-colors">
                          <div className="w-7 h-7 rounded-lg bg-[#7C4DFF]/15 flex items-center justify-center shrink-0 group-hover:bg-[#7C4DFF]/25 transition-colors">
                            <item.icon className="w-3.5 h-3.5 text-[var(--d2b-brand-light)]" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[var(--d2b-text-secondary)] group-hover:text-[var(--d2b-text-primary)] transition-colors">{item.label}</p>
                            <p className="text-xs text-[var(--d2b-text-muted)]">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA + Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              className="p-2 rounded-lg text-[var(--d2b-text-muted)] hover:text-[var(--d2b-text-primary)] hover:bg-[var(--d2b-border)] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <ClienteButton />
            <Link href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-[#7C4DFF] text-white hover:bg-[#6B3FE8] transition-all duration-200 shadow-lg shadow-[#7C4DFF]/30 hover:shadow-[#7C4DFF]/50">
              Teste gratis
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              className="p-2 rounded-lg text-[var(--d2b-text-muted)] hover:text-[var(--d2b-text-primary)] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              className="p-2 rounded-lg text-[var(--d2b-text-secondary)] hover:bg-[var(--d2b-border)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--d2b-bg-main)] border-t border-[var(--d2b-border)] overflow-y-auto max-h-[80vh]">
          <div className="px-4 py-4 flex flex-col gap-1">

            {/* Negocios */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "negocios" ? null : "negocios")}
              className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium text-[var(--d2b-text-secondary)] hover:bg-[var(--d2b-border)] transition-colors"
            >
              Negocios <ChevronDown className={`w-4 h-4 text-[var(--d2b-text-muted)] transition-transform ${mobileExpanded === "negocios" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "negocios" && (
              <div className="ml-3 flex flex-col gap-1 mb-2">
                {negociosItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#7C4DFF]/10 transition-colors">
                    <item.icon className="w-4 h-4 text-[var(--d2b-brand-light)] shrink-0" aria-hidden="true" />
                    <span className="text-sm text-[var(--d2b-text-secondary)]">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Solucoes */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "solucoes" ? null : "solucoes")}
              className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium text-[var(--d2b-text-secondary)] hover:bg-[var(--d2b-border)] transition-colors"
            >
              Solucoes <ChevronDown className={`w-4 h-4 text-[var(--d2b-text-muted)] transition-transform ${mobileExpanded === "solucoes" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "solucoes" && (
              <div className="ml-3 flex flex-col gap-1 mb-2">
                {solucoesItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#7C4DFF]/10 transition-colors">
                    <item.icon className="w-4 h-4 text-[var(--d2b-brand-light)] shrink-0" aria-hidden="true" />
                    <span className="text-sm text-[var(--d2b-text-secondary)]">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}

            <Link href="/planos" onClick={() => setMobileOpen(false)} className="px-3 py-3 rounded-xl text-sm font-medium text-[var(--d2b-text-secondary)] hover:bg-[var(--d2b-border)] transition-colors">
              Planos
            </Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="px-3 py-3 rounded-xl text-sm font-medium text-[var(--d2b-text-secondary)] hover:bg-[var(--d2b-border)] transition-colors">
              Blog
            </Link>

            {/* DEV2B */}
            <button
              onClick={() => setMobileExpanded(mobileExpanded === "dev2b" ? null : "dev2b")}
              className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-semibold text-[var(--d2b-brand-light)] hover:bg-[var(--d2b-border)] transition-colors"
            >
              DEV2B <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "dev2b" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "dev2b" && (
              <div className="ml-3 flex flex-col gap-1 mb-2">
                {dev2bItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#7C4DFF]/10 transition-colors">
                    <item.icon className="w-4 h-4 text-[var(--d2b-brand-light)] shrink-0" aria-hidden="true" />
                    <span className="text-sm text-[var(--d2b-text-secondary)]">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}

            <div className="border-t border-[var(--d2b-border)] mt-2 pt-3 flex flex-col gap-2">
              <Link href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-xl bg-[#7C4DFF] text-white font-semibold text-sm hover:bg-[#6B3FE8] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Teste gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
