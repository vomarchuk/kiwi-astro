import styled from '@emotion/styled'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { theme } from 'src/theme'
import { IconButton } from '@mui/material'

interface IAddIconButton {
  onClick: () => void
}

export const AddIconButton = ({ onClick }: IAddIconButton) => (
  <ButtonStyled onClick={onClick}>
    <AddIconButtonStyled />
  </ButtonStyled>
)
const ButtonStyled = styled(IconButton)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
`
const AddIconButtonStyled = styled(AddCircleIcon)`
  cursor: pointer;
  fill: ${theme.accentColor};
  width: 100%;
  height: auto;
  &:hover {
    fill: green;
  }
`
