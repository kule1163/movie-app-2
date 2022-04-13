import { blue } from "@mui/material/colors";
import styled from "styled-components";
import { navyBlue, usNavyBlue } from "../../../styles";

export const MainContainer = styled.div`
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${usNavyBlue};
    /* height: 60px; */
    @media (max-width:700px) {
        flex-direction: column;
        align-items: stretch;
    }
`
export const SelectContainer = styled.div`
    display: inline-flex;
    z-index: 100;
    justify-content: space-between;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`
export const Select = styled.select`
    background-color: transparent;
    color: white;
    font-size: 1em;
    padding: .5rem;
    &:hover {
        background-color: ${navyBlue};
    };
    &:not(:last-child) {
        margin-right: 2rem;
    };
    &:focus>option:checked {
        background-color: ${navyBlue};
    };
    & > option:hover {
        color: red;
    }
    
`
export const Option = styled.option`
    font-size: 1em !important;
    background-color: ${usNavyBlue};
    border-bottom: 2px solid red;
`
export const FilterButtonBox = styled.div`
    display: none;
    @media (max-width: 700px) {
        display: inline-flex;
    }
`