import React, {useCallback, useEffect, useState} from 'react'
import { IconBox, OverlayBox, PlayContainer, SectionContainer } from './styles'
import { FiPlayCircle } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { blue } from '@mui/material/colors';
import { MovieType } from '../../../../utils/types';
import axios from 'axios';
import { Typography } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {ListProps} from "../../../../utils/types"



interface OverlayProps {
    item: MovieType;
    display: "true" | "false";
    saved?: boolean;
}
const Overlay = ({item, display, saved}: OverlayProps) => {
    
    

    const addMovie = (id:number) => {
        const movie = {media_id: id}
        axios.post("https://api.themoviedb.org/3/list/8168486/add_item?api_key=31af07621087a710376eeeff33ef9885&session_id=1fbbc09376c4e69d6994c63aac6ebd732e3b129e", movie)
            .then(() => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
            })
    
    }

    const removeMovie = (id:number) => {
        const movie = {media_id: id}
        axios.post("https://api.themoviedb.org/3/list/8168486/remove_item?api_key=31af07621087a710376eeeff33ef9885&session_id=1fbbc09376c4e69d6994c63aac6ebd732e3b129e", movie)
            .then(() => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
            })
        
    }

    const handleClick = (movie:MovieType) => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=31af07621087a710376eeeff33ef9885&language=en-US`)
            .then(res => {
                window.open(`https://www.youtube.com/watch?v=${res.data.results[0].key}`)
            })
            .catch(err => {
                console.log(err);
            })  
    }


    
    return (
    <OverlayBox className='overlay'>
        <SectionContainer>
            {display.toString() === "true" ? (
            <IconBox style={{pointerEvents: saved ? "none" : "auto"}} onClick={() => addMovie(item.id)} className='icon'>
                <BsBookmark size={20} color={saved ? "green" : blue[400]}/>
            </IconBox>
            ) : (
            <IconBox onClick={() => removeMovie(item.id)} className='icon'>
                <AiOutlineCloseCircle size={20} color={blue[400]}/>
            </IconBox>
            )}
            <IconBox >
                <AiOutlineStar size={20} color={blue[400]}/>
                <Typography sx={{marginLeft: ".7rem", color: "white", fontSize: ".9em"}}>{item.vote_average}</Typography>
            </IconBox>
        </SectionContainer>
        <PlayContainer onClick={() => handleClick(item)} className='icon playIcon'>
            <FiPlayCircle color='white' size={40}/>
        </PlayContainer>
    </OverlayBox>
  )
}

export default Overlay