import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import styled from "styled-components";
import { navyBlue, usNavyBlue } from "../../../styles";

export const MainContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: ${navyBlue};
    box-sizing: border-box;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    @media (max-width:700px) {
        display: none;
    }
`

export const SectionContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`

export const SingleBox = styled.div`
    display: inline-flex;
    cursor: pointer;
    height: 20px;
    box-sizing: border-box;
    &:not(:first-child) {
        margin-left: 1rem;
    };
    /* box-sizing: border-box; */
`
export const SingleText = styled(Typography)`
    color: ${blue[400]};
    z-index: 10;
`

interface LineProps {
    currentIndex: number
    left: number;
    width: number;
}
export const Line = styled.div<LineProps>`
    width: ${props => `${props.width + 16}px`};
    top: -8px;
    height: 36px;
    border-radius: 20px;
    background-color: ${usNavyBlue};
    position: absolute;
    left: ${props => `${props.left - 8}px`};
    bottom: 0;
    transition: all ease 1s;
`