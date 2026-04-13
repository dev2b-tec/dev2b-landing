import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Funcionalidades from "@/components/funcionalidades"
import { FileText } from "lucide-react"

export const metadata = {
  title: "Solucoes | DEV2B",
  description: "Agenda online, controle financeiro, comunicacao com clientes, relatorios e muito mais. Conhea todas as solucoes da DEV2B.",
}

export default function SolucoesPage() {
  return (
    <main>
      <Navbar />
      <section className="relative pt-32 pb-16 bg-[var(--d2b-bg-main)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C4DFF]/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-6">
            <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Solucoes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[var(--d2b-text-primary)] text-balance mb-5">
            Seu sistema de gestao{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              completo
            </span>
          </h1>
          <p className="text-[var(--d2b-text-secondary)] text-lg max-w-2xl mx-auto text-pretty">
            Da agenda online a solucoes em pagamentos, do clube de assinaturas as rotinas de mensagens, tudo em um so lugar.
          </p>
        </div>
      </section>
      <Funcionalidades />

      {/* Notas Fiscais */}
      <section id="notas" className="py-16 bg-[var(--d2b-bg-main)] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-surface)] p-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-[#7C4DFF]/20 border border-[#7C4DFF]/30 flex items-center justify-center shrink-0">
              <FileText className="w-7 h-7 text-[#C084FC]" aria-hidden="true" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="text-[#C084FC] text-xs font-bold uppercase tracking-widest">Notas Fiscais</span>
              <h2 className="text-2xl font-black text-[var(--d2b-text-primary)] mt-1 mb-2">Emissao de Notas Fiscais integrada</h2>
              <p className="text-[var(--d2b-text-secondary)] leading-relaxed max-w-2xl">
                Emita notas fiscais diretamente pelo sistema DEV2B sem precisar acessar outro software. Integrado com a prefeitura, simples e automatico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
