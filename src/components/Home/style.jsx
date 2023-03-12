import styled from "styled-components"
import { Palette, ScreenSizes } from "../UI/variables"
import backgroundImage from "../../img/background-image.jpg"

export const ImageContainer = styled.div`
    position: relative;
    &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: cover;
        
    }
    @media (min-width: ${ScreenSizes.tablet}) {
        &:before{
            height: 65vh;
        }
    }
    @media (min-width: ${ScreenSizes.desktop}) {
        &:before{
            height: 90vh;
        }
    }
`

export const BackgroundContainer = styled.div`   
    position: relative;
    color: ${Palette.firstColor};
    display: flex;
    &:before{
        content: '';
        background-color: ${Palette.secondColor};
        top: 0;
        left: 0;
        opacity: .75;
        height: 80vh;
        width: 100%;    
    }
    @media (min-width: ${ScreenSizes.tablet}) {
        &:before{
            height: 65vh;
        }
    }
    @media (min-width: ${ScreenSizes.desktop}) {
        &:before{
            height: 90vh;
        }
    }
    `
export const ContentContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    justify-content: space-evenly  ;
    height: 80vh;
    padding: 1rem;
    strong {
        color: ${Palette.fifthColor};
    }
    @media (min-width: ${ScreenSizes.tablet}) {
        height: 65vh
    }
    @media (min-width: ${ScreenSizes.desktop}) {
        height: 90vh;
        justify-content: center;
    }    
`

export const TopContainer = styled.div`
    font-size: 2.5rem;
    padding: 0rem .5rem;
    @media (min-width: ${ScreenSizes.desktop}) {
        font-size: 5rem;
        padding: 5rem;
    }    
`

export const BottomContainer = styled.div`
    font-size: 1.75rem;
    text-align: right;
    padding: 3rem .5rem;
    @media (min-width: ${ScreenSizes.desktop}) {
        font-size: 2.5rem;
        padding: 5rem;
    }    
`