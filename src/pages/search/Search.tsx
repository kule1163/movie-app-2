import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { MovieType } from '../../utils/types'
import NoMatched from '../../components/homeComp/movies/noMatched/NoMatched'
import SingleMovie from '../../components/homeComp/movies/singleMovie/SingleMovie'
import { ListProps } from '@mui/material'
import { MainContainer } from './styles'
import Movies from '../../components/homeComp/movies/Movies'
import { useNavigate } from 'react-router-dom'

const Search = () => {
   
  return (
    <>
      <MainContainer>
          <Movies />
      </MainContainer>
    </>
  )
}

export default Search