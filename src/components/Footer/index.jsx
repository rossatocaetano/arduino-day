import { FooterContainer, LogoContainer, ContentContainer } from "./style";
import logoOrganizer from "../../img/logo-horizontal.png"
import logoOrganizer2 from "../../img/logo-horizontal2.png"
import logoOrganizer3 from "../../img/logo-horizontal3.png"

export const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <img src= { logoOrganizer } alt="Logo entidade" />
        <img src= { logoOrganizer2 } alt="Logo entidade" />
        <img src= { logoOrganizer3 } alt="Logo entidade" />
      </LogoContainer>
      <ContentContainer>
        <p>Secretaria Lorem ipsum dolor sit consectetur</p>
        <p>Rua Lorem ipsum dolor, 000 - 01º e 02º andar - Centro </p>
        <p><a href="rapharossato.com.br">rapharossato.com.br</a></p>
        <p><a href="mailto:rossato.caetano@gmail.com">rossato.caetano@gmail.com</a></p>
      </ContentContainer>
    </FooterContainer>
  )
}