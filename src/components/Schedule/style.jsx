import styled from "styled-components";
import { Palette, ScreenSizes } from "../UI/variables"

export const ScheduleContainer = styled.div`
    background-color: ${Palette.firstColor};
    padding: 2rem 3rem;
    color: ${Palette.fifthColor};
    h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: ${Palette.fifthColor};
    }
    ul{        
        li{
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 1rem 0;
            align-items: center;
            gap: 2rem;
            p {
                width: 12rem;
            }
        }
    }
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${Palette.fifthColor};
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        color: ${Palette.firstColor};
        font-weight: bold;
    }
    @media (min-width: ${ ScreenSizes.tablet }){
        h1{
            font-size: 2.5rem
        }
        span {
            width: 5rem;
            height: 5rem;
        }
        ul li {
            font-size: 1.25rem;
            p {
                width: 60%;
            }
        }
    }
`