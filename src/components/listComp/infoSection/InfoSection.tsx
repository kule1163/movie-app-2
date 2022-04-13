import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ListProps, MovieType } from '../../../utils/types'
import { MainContainer, SingleContainer, Text, FooterText } from "./styles"

interface InfoSectionProps {
    data: ListProps;
}

const InfoSection = ({data}:InfoSectionProps) => {
    
    const [movies, setMovies] = useState([] as MovieType[])
    
    const avaragePoint = data.items.reduce((arr, item) => {
        return arr += item.vote_average
    }, 0)

    const totalTime = movies?.reduce((arr, item) => {
        return arr += Number(item.runtime)
    }, 0)

    const totalRevanue =  movies?.reduce((arr, item) => {
        return arr += Number(item.revenue)
    }, 0)

    const getMovies = () => {
        data.items.forEach(item => {
            axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=31af07621087a710376eeeff33ef9885&language=en-US`)
                .then(res => {
                    setMovies(prev => [...prev, res.data])
                    
                })
                .catch(err => {
                    console.log(err);
                    
                })
        })
    } 

    useEffect(() => {
        getMovies()
    }, [])

    return (
    <MainContainer>
        <SingleContainer>
            <Text>{data.items.length}</Text>
            <FooterText>Total Element</FooterText>
        </SingleContainer>
        <SingleContainer>
            <Text>{data.items.length === 0 ? 0 : (avaragePoint / data.items.length).toFixed(1)}</Text>
            <FooterText>Avarage Point</FooterText>
        </SingleContainer>
        <SingleContainer>
            <Text>{Math.floor(totalTime / 60)}H {totalTime % 60}M</Text>
            <FooterText>Total Time</FooterText>
        </SingleContainer>
        <SingleContainer>
            <Text>{totalRevanue.toString().length > 9 ? (totalRevanue / 1000000000).toFixed(1) : (totalRevanue / 1000000).toFixed(1)}{totalRevanue.toString().length > 9 ? "B" : "M"}</Text>
            <FooterText>Total Income</FooterText>
        </SingleContainer>
    </MainContainer>
  )
}

export default InfoSection