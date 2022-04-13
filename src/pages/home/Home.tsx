import React, {useState, useEffect} from 'react'
import FilterSection from '../../components/homeComp/filterSelectSection/FilterSection'
import Movies from '../../components/homeComp/movies/Movies'
import { MainContainer } from './styles'
import axios from 'axios'
import { MovieType } from '../../utils/types'
import Spining from '../../components/spining/Spining'
import { useAppSelector } from '../../app/hooks'

const Home = () => {
  const [movies, setMovies] = useState<MovieType[]>([] as MovieType[])
  const [loading, setLoading] = useState<boolean>(true)
  
  const filterButton = useAppSelector(state => state.movie.filterButton)

  const getPopulerMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${filterButton.replaceAll(" ", "_").toLowerCase()}?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=1`)
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
}, [filterButton])
  
  return (
   <>
    {loading ? (
      <Spining />
    ) : (
      <MainContainer>
      <FilterSection />
      <Movies movies={movies}/>
  </MainContainer>
    )}
   </>
  )
}

export default Home