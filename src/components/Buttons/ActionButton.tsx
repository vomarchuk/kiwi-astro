import { Button, Link } from '@mui/material'
import styled from '@emotion/styled'
import { theme } from '../../theme'
interface IProps {
  title: string
  href: string
  newWindow?: boolean
  customStyle?: React.CSSProperties
}
export const ActionButton = ({
  title,
  href,
  newWindow,
  customStyle,
}: IProps) => (
  <Link
    target={newWindow ? '_blank' : undefined}
    rel={newWindow ? 'nofollow' : undefined}
    href={href}
    component="a"
  >
    <ActionButtonStyled style={customStyle}>{title}</ActionButtonStyled>
  </Link>
)

const ActionButtonStyled = styled(Button)`
  max-width: 300px;
  padding: 12px 30px;
  font-weight: bold;
  font-size: 13px;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  background-color: ${theme.accentColor};
`
