import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { OverlayContainer } from './styles';
import Overlay from './Overlay';
import { MovieType } from '../../../../utils/types';
import DefaultImage from "../../../../assets/defaultPhoto.png"


interface LazyImageProps {
    item: MovieType;
    display: "true" | "false";
}

const LazyImage = ({ item, display }: LazyImageProps) => {
    return (
        <>
            <LazyLoadImage
                width="100%"
                height="100%"
                src={(item.poster_path || item.backdrop_path) ? item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path}` : `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : DefaultImage}
                effect="blur"
            />
            <OverlayContainer style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0" }}>
                <Overlay saved={item.contain} display={display} item={item} />
            </OverlayContainer>
        </>
    )
}

export default LazyImage