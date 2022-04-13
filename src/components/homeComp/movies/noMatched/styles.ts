import styled from "styled-components";
import {Typography} from "@mui/material"

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const TextBox = styled.div`
    display: inline-flex;
`
export const Text = styled(Typography)`
    font-size: 1.3em;
    color: white;
    letter-spacing: 3px;
`