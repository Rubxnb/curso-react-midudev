import './App.css'
import { useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

function App() {
  const [sort, setSort] = useState(false)
  const {search, setSearch, error} = useSearch()
  const {movies,loading, getMovies} = useMovies({search, sort})
  const inputRef = useRef()

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('debounce')
      getMovies({search})
    }, 300)
    , [getMovies])

  function handleSort() {
    setSort(!sort)
  }

  function handleSubmit(event) {
    event.preventDefault()
    getMovies(search)
   /*  const value = inputRef.current.value
    console.log(value)

    // con esto podemos recoger todos los campos del formulario
    // fields.title
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields.title) */
  }

  function handleChange(event) { 
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{border:'1px solid transparent',
                        borderColor: error ? 'red' : 'transparent'}}
          onChange={handleChange} value={search} name='title' ref={inputRef} placeholder='Avengers, Harry Potter, Star Wars ...'></input>
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          {/* Por defecto, el último botón es el type submit */}
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
      {loading ? <p>Cargando ...</p> :  <Movies movies={movies}/>}
       
      </main>
    </div>
  )
}

export default App
