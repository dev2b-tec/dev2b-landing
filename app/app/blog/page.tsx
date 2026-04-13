import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTA from "@/components/cta"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | DEV2B",
  description: "Dicas de gestao, marketing e financeiro para negocios de servicos. Conteudo exclusivo para empreendedores.",
}

const posts = [
  {
    category: "Gestao",
    title: "Mais de 235 mil negocios surgiram no Brasil: voce esta preparado?",
    excerpt: "O mercado de servicos esta crescendo e rapido. Voce esta acompanhando esse crescimento? Veja como a tecnologia pode ser sua maior aliada para se destacar.",
    image: "/images/segmento-estetica.jpg",
    date: "18 Mar 2026",
    readTime: "5 min",
  },
  {
    category: "Financeiro e contabil",
    title: "Pro-Labore: o que e, como funciona e como definir o valor ideal?",
    excerpt: "Se voce tem um negocio, ja deve ter se perguntado: afinal, o que e pro-labore e quanto eu devo tirar da minha empresa? Entenda de forma simples.",
    image: "/images/segmento-saude.jpg",
    date: "10 Mar 2026",
    readTime: "7 min",
  },
  {
    category: "Financeiro e contabil",
    title: "Simples Nacional para negocios de servicos: o que e e como evitar a exclusao!",
    excerpt: "Se voce tem um negocio de servicos, provavelmente ja ouviu falar no Simples Nacional. Mas afinal: o que e e como ele funciona? Saiba tudo aqui.",
    image: "/images/segmento-fitness.jpg",
    date: "02 Mar 2026",
    readTime: "6 min",
  },
  {
    category: "Marketing",
    title: "5 estrategias para fidelizar clientes no seu negocio de servicos",
    excerpt: "Descubra como usar tecnologia e relacionamento para transformar clientes esporadicos em fas do seu servico e aumentar sua receita recorrente.",
    image: "/images/segmento-educacao.jpg",
    date: "24 Fev 2026",
    readTime: "4 min",
  },
  {
    category: "Gestao",
    title: "Como precificar seus servicos corretamente e lucrar mais",
    excerpt: "Aprenda a calcular seus custos, definir margens saudaveis e precificar com confianca sem perder clientes para a concorrencia.",
    image: "/images/hero-dashboard.jpg",
    date: "15 Fev 2026",
    readTime: "8 min",
  },
  {
    category: "Tecnologia",
    title: "Por que a agenda online e o futuro dos negocios de servicos",
    excerpt: "Empresas que adotam agenda digital aumentam em media 35% seus agendamentos. Veja por que isso acontece e como implementar no seu negocio.",
    image: "/images/feature-agenda.jpg",
    date: "08 Fev 2026",
    readTime: "5 min",
  },
]

const categories = ["Todos", "Gestao", "Financeiro e contabil", "Marketing", "Tecnologia"]

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-14 bg-[#0D0520] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C4DFF]/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/15 border border-[#7C4DFF]/30 mb-6">
            <span className="text-[#C084FC] text-xs font-semibold tracking-wide">Blog DEV2B</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white text-balance mb-4">
            Conteudo para seu negocio{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#7C4DFF,#C084FC)" }}>
              crescer de verdade
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto text-pretty">
            Dicas praticas de gestao, financeiro e marketing para empreendedores do setor de servicos.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-16 z-40 bg-[#0D0520]/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  cat === "Todos"
                    ? "bg-[#7C4DFF] text-white"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 lg:py-20 bg-[#0D0520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Featured post */}
          <div className="mb-10">
            <Link href="#" className="group flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-[#7C4DFF]/12 bg-[#120328]/50 hover:border-[#7C4DFF]/40 transition-all duration-300">
              <div className="relative h-64 lg:h-auto lg:w-[55%] shrink-0">
                <Image src={posts[0].image} alt={posts[0].title} fill priority loading="eager" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#0D0520]/30" aria-hidden="true" />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#7C4DFF] text-white text-xs font-semibold px-3 py-1.5 rounded-full">{posts[0].category}</span>
                </div>
              </div>
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-white/30 text-xs mb-4">
                  <span>{posts[0].date}</span>
                  <span>&bull;</span>
                  <span>{posts[0].readTime} de leitura</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-white leading-snug mb-4 group-hover:text-[#C084FC] transition-colors text-balance">
                  {posts[0].title}
                </h2>
                <p className="text-white/45 leading-relaxed mb-6 text-pretty">{posts[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 text-[#C084FC] font-semibold text-sm group-hover:gap-3 transition-all">
                  Ler artigo <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link
                key={post.title}
                href="#"
                className="group flex flex-col rounded-2xl overflow-hidden border border-[#7C4DFF]/12 bg-[#120328]/50 hover:border-[#7C4DFF]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#0D0520]/30" aria-hidden="true" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#7C4DFF] text-white text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-white/30 text-xs mb-3">
                    <span>{post.date}</span><span>&bull;</span><span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white text-base leading-snug mb-3 group-hover:text-[#C084FC] transition-colors flex-1 text-balance">
                    {post.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[#C084FC] font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Ler artigo <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
