import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

// * Cambia la URL, crea un evento y lo va a enviar
function navigate(href) {
  window.history.pushState({}, '',href) // nos permite cambiar la URL (añadimos la url como si fuese un array)
  // {} datos que pasamos entre url
  // '' no se usa
  // url

  // crear un evento personalizado.   'pushstate' -> nombre de nuestro evento
  const navigationEvent = new Event(NAVIGATION_EVENT)
  // enviamos el evento
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre Nosotros</button>
    </>
  )
}

function AboutPage() {
  return(
    <>
      <h1>AboutPage</h1>
      <p>Hola! Me llamo Rubén, esto es un clon de React Router</p>
      <button onClick={() => navigate('/')}>Ir a Home</button>
    </>
  )
}


function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname) 

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    
    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }

  }, [])
  
  return (
    <main>
    {  currentPath === '/' &&  <HomePage /> }
    {  currentPath === '/about' &&  <AboutPage /> }
    </main>
  )
}

export default App
