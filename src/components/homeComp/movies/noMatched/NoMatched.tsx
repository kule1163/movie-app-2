import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { Genre } from '../../../../utils/types'
import { MainContainer, TextBox, Text } from './styles'

const NoMatched = () => {
    
    const [genres, setGenres] = useState<Genre[]>()
    const [loading, setLoading] = useState<boolean>(true)

    const genre = useAppSelector(state => state.movie.genre)

    const getGenre = () => {
        setLoading(true)
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=31af07621087a710376eeeff33ef9885&language=en-US")
            .then(res => {
                setGenres(res.data.genres)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getGenre()
    }, [])
  
    return (
   <>
     {!loading && (
        <MainContainer>
        <TextBox>
            <Text>No Matched By {genres?.find(item => item.id === genre)?.name} Genre</Text>
        </TextBox>
    </MainContainer>
    )}
   </>
  )
}

export default NoMatched