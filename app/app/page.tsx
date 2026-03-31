import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Segmentos from "@/components/segmentos"
import Funcionalidades from "@/components/funcionalidades"
import Depoimentos from "@/components/depoimentos"
import Planos from "@/components/planos"
import Blog from "@/components/blog"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Segmentos />
      <Funcionalidades />
      <Depoimentos />
      <Planos />
      <Blog />
      <CTA />
      <Footer />
    </main>
  )
}
