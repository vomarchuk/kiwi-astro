import { Link } from '@tanstack/react-router'
import { SOCIAL_LINKS } from '../../constants/SOCIAL_LINKS'
import styled from '@emotion/styled'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { List, ListItem } from '@mui/material'

export const SocialList = () => (
  <List sx={{ display: 'flex', gap: '10%' }}>
    <ListItem disablePadding>
      <LinkIconStyled target="_blank" rel="nofollow" to={SOCIAL_LINKS.FACEBOOK}>
        <FacebookIcon sx={{ fill: 'blue' }} />
      </LinkIconStyled>
    </ListItem>
    <ListItem disablePadding>
      <LinkIconStyled
        target="_blank"
        rel="nofollow"
        to={SOCIAL_LINKS.INSTAGRAM}
      >
        <InstagramIcon sx={{ fill: 'orange' }} />
      </LinkIconStyled>
    </ListItem>
  </List>
)

const LinkIconStyled = styled(Link)`
  display: flex;
  &:hover {
    scale: 1.3;
  }
`
