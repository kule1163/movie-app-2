import styled from "styled-components";
import { indigo, blue } from "@mui/material/colors";
import {usNavyBlue} from "../../../styles"

interface SearchToggleProp {
    searchToggle: boolean
}

export const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const SearchContainer = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    @media (max-width: 1100px) {
        display: none;
    }
`
export const Search = styled.input`
    width: 100%;
    font-size: .8em;
    color: white;
    border-radius: 5px;
    background-color: ${usNavyBlue};
    border: none;
    outline: none;
    padding: .5rem 1rem;
    &::placeholder{
        color: white
    };
    &:active {
        border: none;
        outline: none;
    }
`
export const SearchIconBox = styled.div`
    position: absolute;
    right: 1rem;
    cursor: pointer;
    color: white !important;
`

interface CloseIconBoxProps {
    searchToggle: boolean
}
export const CloseIconBox = styled.div<CloseIconBoxProps>`
    margin-left: 2rem;
    display: none;
    cursor: pointer;
    @media (max-width: 1100px) {
        display: ${props => props.searchToggle ? "block" : "none"};
    }
`

export const SearchBoxBig = styled.div`
    width: 60rem;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
`
interface SearchContainerBigProps {
    searchToggle: boolean
}
export const SearchContainerBig = styled.div<SearchContainerBigProps>`
    width: 1100px;
    box-sizing: border-box;
    display: none;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1100px) {
        display: ${props => props.searchToggle ? "flex" : "none"};
        width: 900px;
    };
    @media (max-width: 900px) {
        width: 700px;
    };
    @media (max-width: 700px) {
        width: 500px;
    };
    @media (max-width: 500px) {
        width: 85vw;
    }
`