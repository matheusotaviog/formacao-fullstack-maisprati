import Header from './components/Header/Header'
import NewsCard from './components/NewsCard/NewsCard'
import Footer from './components/Footer/Footer'
import { noticias } from './data/noticias'
import './App.css'

function App() {
  const [manchete, ...demais] = noticias

  return (
    <>
      <Header />

      <main className="container">
        <section className="manchete">
          <NewsCard
            key={manchete.id}
            categoria={manchete.categoria}
            titlo={manchete.titulo}
            resumo={manchete.resumo}
          />
        </section>

        <section className="grade">
          {demais.map((noticia) => (
            <NewsCard
            key={noticia.id}
            categoria={noticia.categoria}
            titlo={noticia.titulo}
            resumo={noticia.resumo}
          />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
