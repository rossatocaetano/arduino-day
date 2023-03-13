import { Footer } from './components/Footer';
import { GlobalStyle } from './components/GlobalStyle';
import { Header } from './components/Header';
import { Home } from './components/Home'
import { Schedule } from './components/Schedule';
import { Story } from './components/Story'

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Header></Header>
    <Home></Home>
    <Schedule></Schedule>
    <Story></Story>
    <Footer></Footer>
    </>
    
  );
}

export default App;
