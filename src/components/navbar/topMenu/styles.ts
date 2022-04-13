import { Typography } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    display: inline-flex;
`

export const MenuContainer = styled.div`
    width: 1100px;
    padding-block: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 1100px) {
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
export const MenuItemText = styled(Typography)`
    font-size: .8em !important;
    color: white;
`
export const MenuItemBox = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 2rem;
    };
`

