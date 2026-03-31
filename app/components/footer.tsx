import Link from "next/link"

const footerLinks = {
  "Tipos de negocio": [
    { label: "Saloes de Beleza", href: "/negocios/saloes-de-beleza" },
    { label: "Barbearias", href: "/negocios/barbearias" },
    { label: "Clinicas de Estetica", href: "/negocios/clinicas-esteticas" },
    { label: "Studios", href: "/negocios/studios" },
    { label: "Redes e Franquias", href: "/negocios/redes-e-franquias" },
    { label: "Academias e Fitness", href: "/negocios/fitness" },
  ],
  Solucoes: [
    { label: "Agenda Online", href: "/solucoes#agenda" },
    { label: "Controle Financeiro", href: "/solucoes#financeiro" },
    { label: "Comunicacao", href: "/solucoes#comunicacao" },
    { label: "Relatorios", href: "/solucoes#relatorios" },
    { label: "Controle de Estoque", href: "/solucoes#estoque" },
    { label: "Pagamentos", href: "/solucoes#pagamentos" },
  ],
  Empresa: [
    { label: "Sobre nos", href: "/sobre" },
    { label: "Blog", href: "/blog" },
    { label: "Casos de Sucesso", href: "/casos" },
    { label: "Parceiros", href: "/parceiros" },
    { label: "Treinamentos", href: "/treinamentos" },
    { label: "Contato", href: "/contato" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#080218] text-white/40 border-t border-[#7C4DFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-[#7C4DFF] flex items-center justify-center shadow-md shadow-[#7C4DFF]/40">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)"/>
                  <path d="M8 4.5L11.5 6.5V10.5L8 12.5L4.5 10.5V6.5L8 4.5Z" fill="white"/>
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                DEV<span className="text-[#7C4DFF]">2B</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-pretty text-white/35">
              A plataforma completa de gestao digital para negocios de servicos que querem crescer com tecnologia.
            </p>
            <div className="flex items-center gap-2.5">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram da DEV2B" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#7C4DFF]/30 hover:text-[#C084FC] text-white/30 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn da DEV2B" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#7C4DFF]/30 hover:text-[#C084FC] text-white/30 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube da DEV2B" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#7C4DFF]/30 hover:text-[#C084FC] text-white/30 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook da DEV2B" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#7C4DFF]/30 hover:text-[#C084FC] text-white/30 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white/70 font-semibold text-xs mb-5 uppercase tracking-widest">{category}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/35 hover:text-[#C084FC] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} DEV2B. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="text-xs text-white/20 hover:text-white/50 transition-colors">Politica de Privacidade</Link>
            <Link href="/termos" className="text-xs text-white/20 hover:text-white/50 transition-colors">Termos de Uso</Link>
            <Link href="/lgpd" className="text-xs text-white/20 hover:text-white/50 transition-colors">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
