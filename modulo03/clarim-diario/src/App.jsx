import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem('tema') || 'light'
    if (salvo) return salvo

    const preferenciaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (preferenciaEscuro) return 'dark'

    return 'light'
  })

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

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <Footer /> */}
    </>
  )
}

export default App
