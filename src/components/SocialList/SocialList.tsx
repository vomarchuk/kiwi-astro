import { SOCIAL_LINKS } from '../../constants/SOCIAL_LINKS'
import styled from '@emotion/styled'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { List, ListItem, Link } from '@mui/material'

export const SocialList = () => (
  <List
    sx={{
      display: 'inline-flex',
      gap: '10px',
      p: '0',
    }}
  >
    <ListItem disablePadding>
      <LinkIconStyled
        target="_blank"
        rel="nofollow"
        href={SOCIAL_LINKS.FACEBOOK}
        aria-label="facebook icon"
      >
        <FacebookIcon sx={{ fill: '#0866FF', width: '36px', height: '36px' }} />
      </LinkIconStyled>
    </ListItem>
    <ListItem disablePadding>
      <LinkIconInstagramStyled
        target="_blank"
        rel="nofollow"
        href={SOCIAL_LINKS.INSTAGRAM}
        aria-label="instagram icon"
      >
        <InstagramIcon sx={{ fill: 'white' }} />
      </LinkIconInstagramStyled>
    </ListItem>
  </List>
)

const LinkIconStyled = styled(Link)`
  display: flex;
  justify-content: center;
  &:hover {
    scale: 1.2;
  }
`

const LinkIconInstagramStyled = styled(Link)`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%,
    #833ab4
  );

  &:hover {
    scale: 1.2;
  }
`
