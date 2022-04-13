import styled from "styled-components";

export const MainContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SectionContainer = styled.div`
    display: grid;
    row-gap: 2rem;
    column-gap: 1rem;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    };
`


