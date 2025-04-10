import styled from "@emotion/styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";

interface IGoBackIconButton {
  onClick: () => void;
}

export const GoBackIconButton = ({ onClick }: IGoBackIconButton) => (
  <ButtonStyled onClick={onClick}>
    <StyledIcon />
  </ButtonStyled>
);

const ButtonStyled = styled(IconButton)`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  padding: 5px;

`;

const StyledIcon = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
  fill: black;
  width: 100%;
  height: auto;
  &:hover {
    fill: green;
  }
`;
