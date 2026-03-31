import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Contato | DEV2B",
  description: "Fale com o time da DEV2B. Estamos prontos para ajudar o seu negocio a crescer.",
}

export default function ContatoPage() {
  return (
    <main>
      <Navbar />
      <section className="relative pt-32 pb-20 bg-[#0D0520] overflow-hidden min-h-screen">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C4DFF]/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-6">
              <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Contato</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white text-balance mb-4">
              Vamos conversar sobre o{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
                seu negocio
              </span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto text-pretty">
              Nosso time de especialistas esta pronto para ajudar voce a encontrar a melhor solucao para o seu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="p-8 rounded-2xl border border-[#7C4DFF]/15 bg-[#120328]/60">
              <h2 className="text-xl font-bold text-white mb-6">Envie uma mensagem</h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/50 uppercase tracking-wider" htmlFor="nome">Nome completo</label>
                  <input id="nome" type="text" placeholder="Seu nome" className="w-full px-4 py-3 rounded-xl bg-[#0D0520] border border-[#7C4DFF]/20 text-white placeholder-white/20 focus:outline-none focus:border-[#7C4DFF]/60 transition-colors text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/50 uppercase tracking-wider" htmlFor="email">E-mail</label>
                  <input id="email" type="email" placeholder="seu@email.com" className="w-full px-4 py-3 rounded-xl bg-[#0D0520] border border-[#7C4DFF]/20 text-white placeholder-white/20 focus:outline-none focus:border-[#7C4DFF]/60 transition-colors text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/50 uppercase tracking-wider" htmlFor="negocio">Tipo de negocio</label>
                  <input id="negocio" type="text" placeholder="Ex: Salao de beleza, Barbearia..." className="w-full px-4 py-3 rounded-xl bg-[#0D0520] border border-[#7C4DFF]/20 text-white placeholder-white/20 focus:outline-none focus:border-[#7C4DFF]/60 transition-colors text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white/50 uppercase tracking-wider" htmlFor="mensagem">Mensagem</label>
                  <textarea id="mensagem" rows={4} placeholder="Como podemos ajudar?" className="w-full px-4 py-3 rounded-xl bg-[#0D0520] border border-[#7C4DFF]/20 text-white placeholder-white/20 focus:outline-none focus:border-[#7C4DFF]/60 transition-colors text-sm resize-none" />
                </div>
                <button type="submit" className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#7C4DFF] text-white font-bold hover:bg-[#6B3FE8] transition-all shadow-lg shadow-[#7C4DFF]/30 mt-2">
                  Enviar mensagem <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5">
              {[
                { icon: MessageSquare, title: "Chat ao vivo", desc: "Converse em tempo real com nossos especialistas pelo chat dentro da plataforma.", action: "Abrir chat" },
                { icon: Mail, title: "E-mail", desc: "Prefere escrever? Nos envie um e-mail e responderemos em ate 24 horas.", action: "contato@dev2b.com.br" },
                { icon: Phone, title: "Suporte telefonico", desc: "Ligue para nosso time de suporte de segunda a sexta, das 8h as 18h.", action: "Ver horarios" },
              ].map(({ icon: Icon, title, desc, action }) => (
                <div key={title} className="flex gap-4 p-6 rounded-2xl border border-[#7C4DFF]/12 bg-[#120328]/60 hover:border-[#7C4DFF]/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-[#7C4DFF]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C084FC]" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">{title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-3">{desc}</p>
                    <button className="text-sm text-[#C084FC] font-semibold hover:text-white transition-colors">{action}</button>
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-[#7C4DFF]/10 border border-[#7C4DFF]/25">
                <p className="text-white font-bold mb-2">Quer testar antes?</p>
                <p className="text-white/50 text-sm mb-4">Acesse gratis por 5 dias sem cartao de credito.</p>
                <Link href="/planos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7C4DFF] text-white font-semibold text-sm hover:bg-[#6B3FE8] transition-colors">
                  TESTE GRATIS <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
