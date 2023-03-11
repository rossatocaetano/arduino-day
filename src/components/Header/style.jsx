import styled from "styled-components"
import { Palette, ScreenSizes } from "../UI/variables"

/* TEST: first component of the project */
export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${Palette.firstColor};    
    color: ${Palette.fourthColor};
    border-bottom: 1px solid ${Palette.secondColor};
    > div {
        width: 100%;
        display: flex;
        
    }
    img {
        max-width: 8rem;
        max-height: 2.9rem;
    }
    button {
        display: flex;
        align-items: center;
        height: min-content;
        padding: .5rem;
        cursor: pointer;
        background-color: inherit;
        color: ${Palette.fifthColor};
        border-color: ${Palette.secondColor};
        span {
            margin-right: .5rem;
        }
        @media (min-width: ${ScreenSizes.desktop}) {
            display: none;
        }
    }
    @media (min-width: ${ScreenSizes.desktop}) {
        padding: 1rem 15rem;
        justify-content: center;
        
        gap:4rem;
        

    }
`

export const NavContainer = styled.nav`
    display: none;
    @media (min-width: ${ScreenSizes.desktop}) {
        display: flex;
        ul {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            a {
                text-decoration: none;
                color: ${Palette.fifthColor};
                
            }
        }
    }

        
    
    
`

export const BurgerMenuIcon = styled.img`
    height: 18px;
    width: 18px;
`
