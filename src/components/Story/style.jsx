import styled from "styled-components";
import { Palette, ScreenSizes } from "../UI/variables"
import backgroundImage from "../../img/background-image2.svg"

export const StoryContainer = styled.div`
    background-image: url(${ backgroundImage} );
    background-color: ${ Palette.firstColor };
    padding: 2rem 4rem;
    border-top: 1px solid ${ Palette.secondColor };
    color: ${ Palette.fifthColor };
    h1{
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: bold;
    }
    p{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }
    @media (min-width: ${ ScreenSizes.tablet }){
        padding: 2rem 3rem;
        h1{
            font-size: 2.5rem
        }
        p{
            font-size: 1.25rem;
            padding: 0 5.5rem 1.5rem;
            line-height: 2rem;
        }
    }
    @media (min-width: ${ ScreenSizes.desktop }){
        p{
            font-size: 1.5rem;
            padding: 2rem 16rem;
        }
    }
`