import React, { useEffect, useState } from 'react'
import { ListProps, MovieType } from '../../../../utils/types'
import { ContentContainer, DetailBox, DetailText, Header, ImageBox, ImageDeviceBox, MainContainer, OverlayContainer } from './styles'
import DefaultImage from "../../../../assets/defaultPhoto.png"
import { Genre } from '../../../../utils/types'
import axios from 'axios';
import Overlay from './Overlay'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useAppSelector } from '../../../../app/hooks'
import LazyImage from './LazyImage'

interface SingleMovieProps {
    item: MovieType;
    display: "true" | "false";
}

const SingleMovie = ({ item, display}: SingleMovieProps) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [genres, setGenres] = useState<Genre[]>()



    const getMovieGenres = () => {
        setLoading(true)
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=31af07621087a710376eeeff33ef9885&language=en-US")
            .then(res => {
                setLoading(false)
                setGenres(res.data.genres)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getMovieGenres()

    }, [])



    return (
        <>
            {loading ? (
                <>

                </>
            ) : (
                <MainContainer>
                    <ImageBox className='imageBox' backgroud={(item.poster_path || item.backdrop_path) ? item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path}` : `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : DefaultImage}>
                        <LazyImage display={display} item={item} />
                    </ImageBox>
                    <ImageDeviceBox className='imageBox'>
                        <LazyImage display={display} item={item} />
                    </ImageDeviceBox>
                    <ContentContainer>
                        <Header>{item.original_title.slice(0, 15)}{item.original_title.length > 14 && "..."}</Header>
                        <DetailBox>
                            {item.original_title && (<DetailText>{item.original_language}</DetailText>)}
                            {genres && (
                                <DetailText>{genres?.find(genre => genre.id === item.genre_ids[0])?.name}</DetailText>    
                            )}
                            {item.release_date && (
                                <DetailText>{item.release_date.slice(0, 4)}</DetailText>
                            )}
                        </DetailBox>
                    </ContentContainer>
                </MainContainer>
            )}
        </>
    )
}

export default SingleMovie