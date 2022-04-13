import styled from "styled-components";

export const navyBlue = "#202A44"
export const usNavyBlue = "#002F6C"

interface MainContainerProps {
    afterDisplay?: string
}

export const MainContainer = styled.div<MainContainerProps>`
    display: flex;
    position: relative;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: ${navyBlue};
    padding-bottom: 3rem;
    &:after {
        display: ${props => props.afterDisplay === "true" ? "block" : "none"};
        z-index: 1000;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.7);
    }
`
export const SectionContainer = styled.div`
    width: 1100px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
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