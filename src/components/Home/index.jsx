import { BackgroundContainer, BottomContainer, ImageContainer, TopContainer, ContentContainer } from "./style";

export const Home = () => {
    return(
        <ImageContainer>
            <BackgroundContainer>
                <ContentContainer>
                <TopContainer>
                <h1>Venha <strong>aprender ou compartilhar </strong>conhecimentos no Arduino Day 2023 da rede Maplab Livre BH</h1>
                </TopContainer>
                
                <BottomContainer>
                <h2><strong>Dia 25/03 - 10h às 17h</strong></h2>
                <h2>Local: Lorem ipsum dolor, 99 - Lorem ipsum dolor, São Paulo - SP, 00000-000 </h2>
                </BottomContainer>
                </ContentContainer>
            </BackgroundContainer>
        </ImageContainer>
    )
}