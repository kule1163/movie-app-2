import { Typography } from "@mui/material";
import styled from "styled-components";
import { navyBlue, usNavyBlue } from "../../../../styles";

export const MainContainer = styled.div`
    display: inline-flex;
    width: 100%;
    flex-direction: column;
    & .imageBox {
        height: 340px;
        background-color: ${usNavyBlue};
        width: 100%;
        border-radius: 20px;
        position: relative;
        overflow: hidden;
    };
    @media (max-width: 450px) {
        height: 260px;
    }
`
interface ImageBoxProps {
    backgroud: string;
}
export const ImageBox = styled.div<ImageBoxProps>`
    display: block;
    &:hover img {
        transform: scale(1.1);
        filter: blur(4px);
    };
    & img {
        transition: ease 1s all !important;
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    };
    & .overlay {
        opacity: 0;
        transition: all 1s ease;
    };
    &:hover .overlay {
        opacity: 1;
    };
    @media (max-device-width: 1365px) {
        display: none;
    }
    
`
export const ImageDeviceBox = styled.div`
    display: none;
    @media (max-device-width: 1365px) {
        display: block;
    }
`

export const ContentContainer = styled.div`
    margin-top: .5rem;
    display: flex !important;
    flex-direction: column;
    @media (max-width: 600px) {
        display: none;
    };
    @media only screen and (max-device-width: 1365px) {
        display: none !important;
    };
`
export const DetailBox = styled.div`
    display: flex;
`
export const Header = styled(Typography)`
    font-size: 1em !important;
    color: white;
`
export const DetailText = styled(Typography)`
    font-size: .8em !important;
    color: white;
    &:not(:last-child) {
        margin-right: 1rem !important;
    }
`
export const OverlayContainer = styled.div`
    z-index: 10;
    position: absolute;
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0;
`
export const OverlayBox = styled.div`
    position: relative;
    z-index: 1000;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    @media (max-device-width: 1365px) {
        & .playIcon {
            display: none !important;
        }
    };
`
export const SectionContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    padding-inline: .5rem;
    box-sizing: border-box;
    top: 10px;
    width: 100%;
    & .icon {
        cursor: pointer !important;
    };
`
export const PlayContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`
export const IconBox = styled.div`
    display: flex;
    border-radius: 20px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    background-color: ${navyBlue};
    padding: .3rem;
    box-sizing: border-box;
    /* cursor: pointer; */
`