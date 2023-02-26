import { useRef, useState, useMemo} from 'react';
import { searchMovies } from '../services/movies';


export function useMovies({search, sort}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Usamos referfencia por que no se cambia por renderidazos
    const previousSearch = useRef({search})

    const getMovies =useMemo(() => {
      return async ({search}) => {
      if(search === previousSearch.current) return
      try{
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)
      } catch(ex) {
        setError(ex.message)
      } finally{
        setLoading(false)
      }
    }
  },[])

    // useMemo memoriza un valor para no tener que volver a calcular una función del componente
    // Solo queremos que esto se ejecute cuando sort o movies cambie
    const sortedMovies = useMemo( () => {
      return sort?
      [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    }, [sort, movies])

    return {movies: sortedMovies , loading, getMovies}
  }
  