import GlobalStyle from "../css/global"
import styled from 'styled-components'
import Header from "./Header"
import Container from "./Container"
import Footer from "./Footer"

function App() {
 return(
  <StyledMain>
    <GlobalStyle/>
    <Header/>
    <Container/>
    <Footer/>
  </StyledMain>
 )
}

export default App

const StyledMain=styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;


