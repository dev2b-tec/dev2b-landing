import Image from "next/image"
import { Star, Quote } from "lucide-react"

const depoimentos = [
  {
    name: "Rodrigo Guimaraes",
    role: "Club Men",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    text: "A DEV2B ao mesmo tempo que e uma grande empresa que atende todo o Brasil, e tambem uma empresa familiar, pois eles te acolhem. O sistema me atende aqui no negocio ou onde eu estiver, porque ele e online.",
  },
  {
    name: "Bruno Lotufo",
    role: "Studio Lotufo",
    avatar: "https://i.pravatar.cc/80?img=33",
    rating: 5,
    text: "De casa ou qualquer lugar eu tenho acesso, eu tenho controle. Consigo observar tudo que esta acontecendo no meu negocio, tanto a questao de agendamento como criar novas divulgacoes, marketing e vendas.",
  },
  {
    name: "Jane Muniz",
    role: "Spa das Sobrancelhas",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    text: "Se voce esta procurando um sistema para a gestao do seu negocio eu recomendo, porque eu uso a DEV2B. O sistema e perfeito para atender todas as minhas necessidades. Entao, se voce esta buscando um sistema, DEV2B e a solucao.",
  },
  {
    name: "Leonardo Benites",
    role: "Confraria da Barba",
    avatar: "https://i.pravatar.cc/80?img=52",
    rating: 5,
    text: "A DEV2B foi parte fundamental no crescimento da nossa rede. Sem ela, eu nao teria atingido o que atingi hoje. Foi uma decisao fundamental no momento em que eu quis expandir a empresa.",
  },
  {
    name: "Cleusa Valenca",
    role: "La Vie en Rose",
    avatar: "https://i.pravatar.cc/80?img=25",
    rating: 5,
    text: "Tive a necessidade de agilizar o nosso trabalho, e a DEV2B preenche exatamente a lacuna do que eu estava precisando. Os profissionais tambem ficaram felizes porque facilitou a vida de todo mundo.",
  },
  {
    name: "Vania Urias",
    role: "One Beaute",
    avatar: "https://i.pravatar.cc/80?img=60",
    rating: 5,
    text: "Mais que um software, a DEV2B e uma parceira de resultados! Hoje, em um clique temos uma dashboard com os principais numeros para que possamos tomar as melhores decisoes. Recomendamos porque estamos totalmente satisfeitos.",
  },
  {
    name: "Carina Arruda",
    role: "My Lash",
    avatar: "https://i.pravatar.cc/80?img=38",
    rating: 5,
    text: "Uso a DEV2B ha mais de 6 anos. Parei de usar, fiz a besteira de ir para outro sistema, mas me arrependi e em 6 meses voltei. A plataforma me ajuda muito no dia a dia, inclusive para acompanhar as vendas dos nossos franqueados.",
  },
  {
    name: "Gustavo Andrade",
    role: "Esmalteria Nacional",
    avatar: "https://i.pravatar.cc/80?img=67",
    rating: 5,
    text: "Sempre soube da importancia de um sistema que gerencie uma pequena empresa. Nenhum outro se equipara ao sistema que utilizamos hoje, a DEV2B. Facilita a vida do franqueado, do cliente e da franqueadora.",
  },
]

export default function Depoimentos() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--d2b-bg-surface)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#7C4DFF]/8 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C084FC] font-semibold text-xs uppercase tracking-widest mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--d2b-text-primary)] text-balance mb-4">
            Quem inova com a DEV2B
          </h2>
          <p className="text-[var(--d2b-text-muted)] text-lg max-w-xl mx-auto text-pretty">
            Mais de 44 mil negocios confiam na DEV2B. Voce esta esperando o que?
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {depoimentos.map((dep) => (
            <div
              key={dep.name}
              className="bg-[var(--d2b-card-bg)] border border-[var(--d2b-border-mid)] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#7C4DFF]/40 hover:bg-[var(--d2b-bg-elevated)] transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-0.5" aria-label={`Nota ${dep.rating} de 5`}>
                  {Array.from({ length: dep.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C084FC] text-[#C084FC]" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-[#7C4DFF]/30" aria-hidden="true" />
              </div>

              <p className="text-[var(--d2b-text-secondary)] text-sm leading-relaxed flex-1">{dep.text}</p>

                <div className="flex items-center gap-3 pt-3 border-t border-[var(--d2b-border)]">
                <Image
                  src={dep.avatar}
                  alt={dep.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-[var(--d2b-text-primary)] font-semibold text-sm">{dep.name}</p>
                  <p className="text-[var(--d2b-text-muted)] text-xs">{dep.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
