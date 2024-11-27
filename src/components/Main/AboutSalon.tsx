import styled from '@emotion/styled'
import { theme } from 'src/theme'
import { GalleryCarousel } from '../GalleryCarousel/GalleryCarousel'
export const AboutSalon = () => {
  return (
    <AboutSalonSection>
      <SectionTitle>
        <AccentWord>SALON </AccentWord>
        KOSMETYCZNY
      </SectionTitle>
      <Description>
        <p>
          Szanowni Państwo! Witamy serdecznie w naszym nowoczesnym{' '}
          <AccentWord>Kiwi beauty center</AccentWord>. Piękne wnętrze, przytulna
          atmosfera, obsługa i troskliwe ręce profesjonalistów zadowolą
          najbardziej wymagającego klienta.
        </p>
        <p>
          Zespól <AccentWord>Kiwi beauty center</AccentWord>, to wyszkolone
          kosmetyczki i kosmetolodzy które mają gust i wyczucie stylu aby
          stworzyć twój obraz. Naszym priorytetem jest sumienność, wysoka jakość
          i profesjonalizm,mający zapełnisz najwyższy poziom świadczonych przez
          nas usług.
        </p>
      </Description>
      <GalleryCarousel />
    </AboutSalonSection>
  )
}

const AboutSalonSection = styled.section`
  position: relative;
  padding: 20px;
  background-image: url('/images/DSC_2639.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  & > * {
    z-index: 2;
    position: relative;
  }
`
const AccentWord = styled.span`
  color: ${theme.accentColor};
  font-weight: bold;
`
const Description = styled.div`
  margin: 15px 0px;
  p:not(first-child) {
    margin-top: 10px;
  }
`
const SectionTitle = styled.h2``
