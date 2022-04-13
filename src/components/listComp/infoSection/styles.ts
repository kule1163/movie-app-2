import { Typography } from "@mui/material";
import styled from "styled-components";
import {blue} from "@mui/material/colors"
import { usNavyBlue } from "../../../styles";

export const MainContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: space-around;
    background-color: ${usNavyBlue};
    padding-block: 1.5rem;
    margin-top: 2rem;
    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1rem;
    }
`
export const SingleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

export const Text = styled(Typography)`
    color: ${blue[400]};
    font-size: 2em !important;
`
export const FooterText = styled(Typography)`
    color: ${blue[400]};
    font-size: 1.1em !important;
`
