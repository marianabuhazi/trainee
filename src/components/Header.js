import logo from '/Users/marianabuhazi/trainee/src/imgs/spectator-logo.jpeg'
import styled from 'styled-components'

const Nav= styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  
`
const Logo= styled.img`
  width:32vw;
  height:auto;
`


const Title= styled.h1`
  font-size:3vw;
  font-family:Roboto;
  font-weight: normal;

`

const Header = () => {
    return (
        <Nav>
            <Logo src={logo} alt="Spectator Publishing Company Logo" />
             <Title>Spec's Sources</Title>
        </Nav>
        
    )
}

export default Header
