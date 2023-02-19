import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const {search, setSearch, error} = useSearch()
  const {movies, getMovies} = useMovies({search})
  const inputRef = useRef()

  function handleSubmit(event) {
    event.preventDefault()
    getMovies()
   /*  const value = inputRef.current.value
    console.log(value)

    // con esto podemos recoger todos los campos del formulario
    // fields.title
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields.title) */
  }

  function handleChange(event) { 
    setSearch(event.target.value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{border:'1px solid transparent',
                        borderColor: error ? 'red' : 'transparent'}}
          onChange={handleChange} value={search} name='title' ref={inputRef} placeholder='Avengers, Harry Potter, Star Wars ...'></input>
          {/* Por defecto, el último botón es el type submit */}
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
