import styled from "styled-components";
import { Typography } from "@mui/material";

export const MainContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`
export const TopMenuContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`
interface TopMenuBoxProps {
    topMenuToggle: boolean;
    height: number;
}
export const TopMenuBox = styled.div<TopMenuBoxProps>`
    height: 0px;
    width: 100%;
    overflow: hidden;
    transition: all 1s ease;
    @media (max-width: 1100px) {
        height: ${props => props.topMenuToggle ? `${props.height}px` : "0px"};
    }
`

export const MainBox = styled.div`
    width: 100%;
    height: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`
interface MainContentProps {
    searchToggle: boolean
}
export const MainContent = styled.div<MainContentProps>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1100px) {
        display: ${props => props.searchToggle ? "none" : "flex"};
    }
   
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
`
export const ImageBox = styled.div`
    width: 130px;
    cursor: pointer;
    display: flex;
    height: auto;
    z-index: 10;
    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        margin-right: auto;
    };
    @media (max-width: 1100px) {
        width: 110px;
    }
`
export const MenuIconBox = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 1100px) {
        display: block;
    }
`
export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1100px) {
        display: none;
    }
`
export const MenuItemBox = styled.div`
    display: inline-flex;
    align-items: center;
    &:not(:last-child) {
        margin-right: 5rem !important;
    }
`
export const MenuItemText = styled(Typography)`
    color: white;
    cursor: pointer;
`
export const InSearchBarBox = styled.div`
    display: block;
    @media (max-width: 1000px) {
        display: none;
    }
`
interface OutSearchBarBoxProps {
    searchToggle: boolean
}
export const OutSearchBarBox = styled.div<OutSearchBarBoxProps>`
    display: none;
    @media (max-width: 1100px) {
        display: ${props => props.searchToggle ? "block" : "none"};
    }
`
interface SearchIconOpenProps {
    searchToggle: boolean
}
export const SearchIconOpen = styled.div<SearchIconOpenProps>`
    display: none;
    cursor: pointer;
    z-index: 100;
    @media (max-width: 1100px) {
        display: ${props => props.searchToggle ? "none" : "block"};
    }
`