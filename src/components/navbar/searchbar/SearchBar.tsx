import React from 'react'
import { CloseIconBox, MainContainer,SearchBoxBig, SearchContainer, SearchContainerBig} from './styles'
import { CgCloseR } from 'react-icons/cg';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import SingleBar from './SingleBar';
import { setSearchToggle, setSearchValue } from '../../../features/movie/movieSlice';
import {blue} from "@mui/material/colors"


const SearchBar = () => {

    const searchToggle = useAppSelector(state => state.movie.searchToggle)
    const dispatch = useAppDispatch()

    return (
        <MainContainer>
            <SearchContainerBig searchToggle={searchToggle}>
                <SearchBoxBig >
                   <SingleBar />
                </SearchBoxBig>
                <CloseIconBox 
                    onClick={() => {
                        dispatch(setSearchToggle(false))
                        dispatch(setSearchValue(""))
                    }}
                    searchToggle={searchToggle}
                >
                    <CgCloseR color={blue[700]} size={25} />
                </CloseIconBox>
            </SearchContainerBig>
            <SearchContainer>
                <SingleBar />
            </SearchContainer>
        </MainContainer>
    )
}

export default SearchBar