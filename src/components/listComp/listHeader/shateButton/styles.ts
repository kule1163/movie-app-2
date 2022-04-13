import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import styled from "styled-components";

interface MainContainerProps {
    display: string
}

export const MainContainer = styled.div<MainContainerProps>`
    display: ${props => props.display === "true" ? "inline-flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: white;
    position: fixed;
    width: 450px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    @media (max-width: 600px) {
        width: 80vw;
    }
`
export const HeaderContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    margin-block: 1rem;
    width: 90%;
    justify-content: space-between;
    border-bottom: 1px solid grey;
`
export const UrlContainer = styled.div`
    width: 90%;
    margin-bottom: 1rem;
`
export const UrlTextBox = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
`
export const Text = styled(Typography)`
    font-size: 1.2em !important;
`
export const Input = styled.input`
width: 100%;
border: 1px solid gray;
font-size: 1em;
padding: .5rem;
box-sizing: border-box;
&:focus {
    border: none;
    outline: .5px solid ${blue[400]};
}
`
export const CopiedText = styled(Typography)`
    color: ${blue[400]};
    margin-right: 1rem;
`

interface CopiedBoxProps {
    copiedDisplay: boolean;
}
export const CopiedBox = styled.div<CopiedBoxProps>`
    display: ${props => props.copiedDisplay ? "flex" : "none"};
    align-items: center;
`