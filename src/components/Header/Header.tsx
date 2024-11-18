import styled from '@emotion/styled'
import Sidebar from '../Sidebar/Sidebar'
import { LogoType } from '../LogoType/LogoType'
import { HeaderAddress } from './HeaderAddress'
import { ButtonReservation } from '../Buttons/ButtonReservation'
import { Hero } from './Hero'
import { SocialList } from '../SocialList/SocialList'

export function Header() {
  return (
    <HeaderStyled>
      <LogoTypeContainer />
      <Hero />
      <ButtonReservationContainer>
        <ButtonReservation />
      </ButtonReservationContainer>
      <SocialListContainer />
      <HeaderAddress />
      <NavBarContainer>
        <Sidebar />
        <SocialList flexDirection="column" />
      </NavBarContainer>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: relative;
  height: 100vh;
  background-image: url('/images/DSC_2781.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
  & > * {
    z-index: 2;
  }
`
const LogoTypeContainer = styled(LogoType)`
  position: absolute;
  margin-left: 20px;
  margin-top: 20px;
  width: 100px;
  fill: white;
`
const NavBarContainer = styled.div`
  padding: 0px 10px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  border-left: 2px solid hsla(0, 0%, 100%, 0.1);
`
const ButtonReservationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const SocialListContainer = styled.div`
  position: absolute;
  right: 0;
  padding: 10px 10px;
`
