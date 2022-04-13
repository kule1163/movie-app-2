import styled from "styled-components"
import { blue } from "@mui/material/colors"
import { Typography } from "@mui/material"
import { usNavyBlue } from "../../../styles"

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background-color: ${usNavyBlue};
    box-sizing: border-box;
    padding: 1.5rem 0 1.5rem 1.5rem;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: stretch;
    }
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
    @media (max-width: 600px) {
        margin-right: 0;
        margin-bottom: 1rem;
    }
`
export const ListByContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`
export const ListByBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`
export const ButtonContainer = styled.div`
    display: flex;
    position: relative;
`
export const SingleButton = styled.div`
    padding: .7rem 1.2rem;
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${blue[400]};
    background-color: white;
    border-radius: 20px;
    cursor: pointer;
    &:not(:last-child) {
        margin-right: 2rem;
    };
    &:hover {
        color: black;
    };
   
`
export const Header = styled(Typography)`
    color: white;
`
export const IdText = styled(Typography)`
    color: ${blue[400]};
`
interface SortItemsContainerProps {
    display: "true" | "false";
}

export const SortItemsContainer = styled.div<SortItemsContainerProps>`
    display: ${props => props.display === "false" ? "none" : "inline-flex"};
    position: absolute;
    top: 35px;
    z-index: 100;
    padding: .5rem 1rem;
    border-radius: 20px;
    flex-direction: column;
    background-color: white;
`
export const SortItemText = styled(Typography)`
    color: black;
    cursor: pointer;
    z-index: 101;
    &:hover {
        color: ${blue[400]} !important;
    }
`
export const SortBox = styled.div`
    display: inline-flex;
    flex-direction: column;
`