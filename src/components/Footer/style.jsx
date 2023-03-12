import styled from "styled-components"
import { Palette, ScreenSizes } from "../UI/variables"

export const FooterContainer = styled.footer`
  background-color: ${ Palette.secondColor };
  color: ${ Palette.fifthColor };
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-top: 1px solid ${ Palette.fifthColor };
  img {
    max-width: 5rem;
    object-fit: contain;
  }
  @media (min-width: ${ ScreenSizes.tablet} ){
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:2rem;
    img {
      max-width: 6rem;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    padding: .2rem 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    transition: .2s;
  }
  a:hover {
    color: ${Palette.thirdColor};
  }
  @media (min-width: ${ScreenSizes.tablet} ) {
    font-size: 1.2rem;
  }
  
`