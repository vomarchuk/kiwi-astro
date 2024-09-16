import { SOCIAL_LINKS } from '../../constants/SOCIAL_LINKS'
import { FacebookIcon } from '../Icons/FacebookIcon'
import { InstagramIcon } from '../Icons/InstagramIcon'
import { LogoType } from '../LogoType/LogoType'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../../theme'

export const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderStyled>
        <LogoType width={200} />
        <ListStyled>
          <ListItemStyled>
            <LinkStyled
              target="_blank"
              rel="nofollow"
              href={SOCIAL_LINKS.FACEBOOK}
            >
              <FacebookIcon />
            </LinkStyled>
          </ListItemStyled>
          <ListItemStyled>
            <LinkStyled
              href={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="nofollow"
            >
              <InstagramIcon />
            </LinkStyled>
          </ListItemStyled>
        </ListStyled>
      </HeaderStyled>
    </ThemeProvider>
  )
}
const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`
const ListStyled = styled.ul`
  list-style-type: none;
  display: flex;
`
const ListItemStyled = styled.li`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  padding: 0px;
  border-radius: 50%;
  transition: background-color 0.1s ease, box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 5px 5px ${({ theme }) => theme.accentColor};
    background-color: ${({ theme }) => theme.accentColor};
  }
`

const LinkStyled = styled.a`
  width: 20px;
  height: 20px;
  &:hover > svg {
  }
`
