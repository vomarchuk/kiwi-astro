import NearMeIcon from '@mui/icons-material/NearMe'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'

import styled from '@emotion/styled'

export const HeaderAddress = () => {
  return (
    <AddressContainer>
      <Address>
        <NearMeIcon />
        <p>Floriańska 6/u7, Warszawa</p>
      </Address>
      <Phone href="tel:+48577205500">
        <PhoneIphoneIcon />
        +(48) 577 205 500
      </Phone>
      <WorkTime>
        <p>
          CODZIENNIE
          <br /> 9:00 - 20:00
        </p>
      </WorkTime>
    </AddressContainer>
  )
}

const AddressContainer = styled.address`
  position: absolute;
  width: 100%;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: hsla(0, 0%, 8%, 0.15);
  border-top: 1px solid hsla(0, 0%, 100%, 0.15);
  color: #54c263;
  padding: 15px 0px;
`
const Address = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Phone = styled.a`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #54c263;
`
const WorkTime = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: end;
`
