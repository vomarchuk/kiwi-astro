import { Typography } from '@mui/material'
import styled from '@emotion/styled'
import { theme } from 'src/theme'
export const AboutSalon = () => {
  return (
    <section>
      <SectionTitle>
        <AccentWord>SALON </AccentWord>
        KOSMETYCZNY
      </SectionTitle>
      <p>
        Szanowni Państwo! Witamy serdecznie w naszym nowoczesnym Kiwi beauty
        center. Piękne wnętrze, przytulna atmosfera, obsługa i troskliwe ręce
        profesjonalistów zadowolą najbardziej wymagającego klienta.
      </p>
      <p>
        Zespól Kiwi beauty center, to wyszkolone kosmetyczki i kosmetolodzy
        które mają gust i wyczucie stylu aby stworzyć twój obraz. Naszym
        priorytetem jest sumienność, wysoka jakość i profesjonalizm,mający
        zapełnisz najwyższy poziom świadczonych przez nas usług.
      </p>
    </section>
  )
}

const AccentWord = styled.span`
  color: ${theme.accentColor};
`
const SectionTitle = styled.h2``
