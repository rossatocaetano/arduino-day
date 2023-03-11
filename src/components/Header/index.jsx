import { HeaderContainer, BurgerMenuIcon, LogoContainer, NavContainer } from "./style";
import logoArduino from "../../img/logo-arduino.svg";
import logoOrganizer from "../../img/logo-fablab-horizontal.png"
import burgerMenuIcon from "../../img/burger-menu-icon.svg";
import { useState } from "react";
import { Sidebar } from "./Sidebar"

/* TEST: first component of the project */
export const Header = ( props ) => {
  
  
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  { console.log(sidebar) }


  return (    
    <HeaderContainer>
      
        <img src= { logoOrganizer } alt="Logo entidade" />
        <img src={ logoArduino } alt="Logo arduino day" />
        <button onClick={ showSidebar }>
          <span>Menu</span>
          <BurgerMenuIcon src={ burgerMenuIcon } alt="Menu" ></BurgerMenuIcon>
          {sidebar && <Sidebar active={setSidebar} />}
        </button>
      
          
      <NavContainer>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Programação</a></li>
          <li><a href='#'>História</a></li>
        </ul>
      </NavContainer>
      
    </HeaderContainer>
  )
}