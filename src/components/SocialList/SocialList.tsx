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
        <FacebookIcon sx={{ fill: '#0866FF' }} />
      </LinkIconStyled>
    </ListItem>
    <ListItem disablePadding>
      <LinkIconStyled
        target="_blank"
        rel="nofollow"
        href={SOCIAL_LINKS.INSTAGRAM}
        aria-label="instagram icon"
      >
        <InstagramIcon sx={{ fill: 'orange' }} />
      </LinkIconStyled>
    </ListItem>
  </List>
)

const LinkIconStyled = styled(Link)`
  display: flex;
  justify-content: center;
  &:hover {
    scale: 1.3;
  }
`
