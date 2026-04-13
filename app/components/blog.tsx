import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    category: "Gestao",
    title: "Mais de 235 mil negocios surgiram no Brasil: voce esta preparado?",
    excerpt:
      "O mercado de servicos esta crescendo e rapido. Voce esta acompanhando esse crescimento? Veja como a tecnologia pode ser sua maior aliada.",
    image: "/images/segmento-estetica.jpg",
    date: "18 Mar 2026",
    href: "/blog",
  },
  {
    category: "Financeiro e contabil",
    title: "Pro-Labore: o que e, como funciona e como definir o valor ideal?",
    excerpt:
      "Se voce tem um negocio, ja deve ter se perguntado: afinal, o que e pro-labore e quanto eu devo tirar da minha empresa? Entenda de forma simples.",
    image: "/images/segmento-saude.jpg",
    date: "10 Mar 2026",
    href: "/blog",
  },
  {
    category: "Financeiro e contabil",
    title: "Simples Nacional para negocios de servicos: o que e e como evitar a exclusao!",
    excerpt:
      "Se voce tem um negocio de servicos, provavelmente ja ouviu falar no Simples Nacional. Mas afinal: o que e e como ele funciona? Saiba tudo aqui.",
    image: "/images/segmento-fitness.jpg",
    date: "02 Mar 2026",
    href: "/blog",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-[var(--d2b-bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-3">
              Blog
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[var(--d2b-text-primary)] text-balance">
              Ultimos conteudos do nosso blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[#C084FC] font-semibold text-sm hover:text-white transition-colors shrink-0 group"
          >
            Confira mais conteudos exclusivos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[var(--d2b-border-mid)] bg-[var(--d2b-bg-surface)] hover:border-[#7C4DFF]/40 hover:shadow-xl hover:shadow-[#7C4DFF]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[var(--d2b-bg-main)]/40" aria-hidden="true" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#7C4DFF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-[var(--d2b-text-faint)] text-xs mb-3">{post.date}</p>
                <h3 className="font-bold text-[var(--d2b-text-primary)] text-base leading-snug mb-3 group-hover:text-[var(--d2b-brand-light)] transition-colors text-balance">
                  {post.title}
                </h3>
                <p className="text-[var(--d2b-text-secondary)] text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <span className="mt-5 text-[#C084FC] font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Continuar leitura
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
