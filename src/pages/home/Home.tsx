import React from 'react'
import FilterSection from '../../components/homeComp/filterSelectSection/FilterSection'
import Movies from '../../components/homeComp/movies/Movies'
import { MainContainer } from './styles'

const Home = () => {
  return (
    <MainContainer>
        <FilterSection />
        <Movies />
    </MainContainer>
  )
}

export default Home