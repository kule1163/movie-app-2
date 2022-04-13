import React, {useState, useEffect} from 'react'
import { MainContainer } from './styles'
import Movies from '../../components/homeComp/movies/Movies'
import axios from 'axios'
import { MovieType } from '../../utils/types'
import Spining from '../../components/spining/Spining'
import { useAppSelector } from '../../app/hooks'
import NoMatchedSearch from '../../components/homeComp/movies/noMatched/NoMatchedSearch'

const Search = () => {
  const [movies, setMovies] = useState<MovieType[]>([] as MovieType[])
    const [loading, setLoading] = useState<boolean>(true) 

  const searchValue = useAppSelector(state => state.movie.searchValue)

  const getPopulerMovies = () => {
    setLoading(true)
        setLoading(true)
        axios.get(`
        https://api.themoviedb.org/3/search/movie?api_key=31af07621087a710376eeeff33ef9885&language=en-US&query=${searchValue}&page=1&include_adult=false`)
        .then(res => {
            setLoading(false)
            setMovies(res.data.results)
        })
        .catch(err => {
            console.log(err);
            
        })   
} 

useEffect(() => {
  getPopulerMovies()
}, [])

  return (
    <>
     {loading ? (
       <Spining />
     ) : (
      <MainContainer>
      {movies.length === 0 ? (
        <NoMatchedSearch />
      ) : (
        <Movies movies={movies}/>
      )}
  </MainContainer>
     )}
    </>
  )
}

export default Search