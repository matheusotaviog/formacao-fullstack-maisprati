import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import NewsCard from './components/NewsCard/NewsCard'
import Footer from './components/Footer/Footer'
import { noticias } from './data/noticias'
import './App.css'

function App() {
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem('tema') || 'light'
    if (salvo) return salvo

    const preferenciaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (preferenciaEscuro) return 'dark'

    return 'light'
  })
  const [manchete, ...demais] = noticias

  function alterarTema() {
    setTema(tema => (tema === 'light' ? 'dark' : 'light'))
  }



  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  return (
    <>
      <Header tema={tema} aoAlterarTema={alterarTema} />

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
            titulo={noticia.titulo}
            resumo={noticia.resumo}
          />
          ))}
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
