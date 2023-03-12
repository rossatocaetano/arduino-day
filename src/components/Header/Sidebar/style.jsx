import styled from 'styled-components';
import { Palette } from "../../UI/variables"

export const Container = styled.div`
  background-color: ${Palette.fifthColor};
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 200px;
  z-index:99;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 200px;
    }
  }
`;


export const Itens = styled.nav`  
  ul{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 2rem;
    li{
      padding: .75rem;
      a{
        color: ${Palette.firstColor};
        text-decoration: none;
      }
      
    }
  }
  

`