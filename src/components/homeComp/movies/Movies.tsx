import React, { useEffect, useState } from 'react'
import { MainContainer, SectionContainer } from './styles'
import axios from 'axios'
import { MovieType } from '../../../utils/types'
import SingleMovie from './singleMovie/SingleMovie'
import { ListProps } from '../../../utils/types'
import { useAppSelector } from '../../../app/hooks'
import NoMatched from './noMatched/NoMatched'
import Spining from '../../spining/Spining'

const Movies = () => {

    const searchValue = useAppSelector(state => state.movie.searchValue)

    const [movies, setMovies] = useState<MovieType[]>([] as MovieType[])
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingList, setLoadingList] = useState<boolean>(true)
    const [savedList, setSavedList] = useState([] as MovieType[])
    const [data, setData] = useState<ListProps>({} as ListProps)

    const genre = useAppSelector(state => state.movie.genre)
    const filterButtton = useAppSelector(state => state.movie.filterButton)

    const getList = () => {
        setLoadingList(true)
        axios.get("https://api.themoviedb.org/3/list/8168486?api_key=31af07621087a710376eeeff33ef9885&language=en-US")
            .then(res => {
                setData(res.data)
                setLoadingList(false)

            })
            .catch(err => {
                console.log(err);
            })
    }

    const getPopulerMovies = () => {
        setLoading(true)
        if(searchValue.length > 0) {
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
        } else {
            axios.get(`https://api.themoviedb.org/3/movie/${filterButtton.replaceAll(" ", "_").toLowerCase()}?api_key=31af07621087a710376eeeff33ef9885&language=en-US&page=1`)
            .then(res => {
                setLoading(false)
                setMovies(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    useEffect(() => {
        getList()
    }, [])

    useEffect(() => {
        getPopulerMovies()
    }, [filterButtton, searchValue])


    useEffect(() => {
        if (!loading && !loadingList) {
            if (data.items.length > 0) {
                const ids = data.items.map(movie => movie.id)
                const a = movies.reduce((arr, item) => {
                    if (ids.includes(item.id)) {
                        return [...arr, { ...item, contain: true }]
                    } else {
                        return [...arr, { ...item, contain: false }]
                    }
                }, [] as MovieType[])

                setSavedList(a)
            } else {
                setSavedList(movies)
            }
        }
    }, [data, movies])

    const filteredList = genre === "all" ? savedList : savedList.filter(item => item.genre_ids[0] === genre)
    
    return (
        <>
            {loading ? (
                <Spining />
            ) : (
                <MainContainer>
                    {filteredList.length > 0 ? (
                        <SectionContainer>
                            {filteredList.map(item => (
                                <SingleMovie display="true" key={item.id} item={item} />
                            ))}
                        </SectionContainer>
                    ) : (
                        <NoMatched />
                    )}
                </MainContainer>
            )}
        </>
    )
}

export default Movies