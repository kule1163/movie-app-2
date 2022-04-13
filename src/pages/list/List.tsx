import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListProps, MovieType } from "../../utils/types"
import { MainContainer } from './styles';
import ListHeader from '../../components/listComp/listHeader/ListHeader';
import { MainContainer as MoviesMain, SectionContainer } from '../../components/homeComp/movies/styles';
import SingleMovie from '../../components/homeComp/movies/singleMovie/SingleMovie';
import InfoSection from '../../components/listComp/infoSection/InfoSection';
import { useAppSelector } from '../../app/hooks';
import Spining from '../../components/spining/Spining';


const List = () => {

    const [data, setData] = useState({} as ListProps)
    const [loading, setLoading] = useState<boolean>(true)
    const [sortedList, setSortedList] = useState([] as MovieType[])

    const sortBy = useAppSelector(state => state.movie.sortBy)


    const getList = () => {
        setLoading(true)
        axios.get("https://api.themoviedb.org/3/list/8168486?api_key=31af07621087a710376eeeff33ef9885&language=en-US")
            .then(res => {
                setLoading(false)
                setData(res.data)

            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getList()
    }, [])

    useEffect(() => {
        if(!loading) {
            localStorage.setItem("data", JSON.stringify(data.items))
        }
    }, [loading])

    useEffect(() => {
        const staticData = localStorage.getItem("data") && JSON.parse(localStorage.getItem("data") || "")
        if(!loading) {
            if(sortBy === "o") {
                setSortedList(staticData ? staticData : data.items)
            };
            if(sortBy === "r") {
                setSortedList([...data.items.sort((a,b) => Number(a.release_date.replaceAll("-", "")) - Number(b.release_date.replaceAll("-", "")))])       
                
            };
            if(sortBy === "v") {
                setSortedList([...data.items.sort((a,b) => a.vote_average - b.vote_average)])
            };
            if(sortBy === "t") {
                setSortedList([...data.items.sort((a,b) => a.original_title.toLowerCase().localeCompare(b.original_title.toLocaleLowerCase()))])
            };
        }
    }, [sortBy, loading])

    return (
        <>
            {loading ? (
                <Spining />
            ) : (
                <MainContainer>
                    <ListHeader data={data} />
                    <InfoSection data={data}/>
                    <MoviesMain>
                        <SectionContainer>
                            {sortedList.map(item => (
                                <SingleMovie display="false" key={item.id} item={item} />
                            ))}
                        </SectionContainer>
                    </MoviesMain>
                </MainContainer>
            )}
        </>
    )
}

export default List