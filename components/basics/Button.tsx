import styled from "styled-components";

import { backgroundTransition, buttonRadius } from "styles/utils";

const getBackgroundColor = ({theme, color }) => {
  if (color === "warning") {
    return theme.colors.warning100
  }
  return theme.colors.alpha100
}

const getHoverBackgroundColor = ({theme, color}) => {
  if (color === "warning") {
    return theme.colors.warning100
  }
  return theme.colors.alpha120
}

const StyledButton = styled.button<{ isDisabled: boolean }>`
  background-color: ${({ isDisabled, theme }) => isDisabled ? theme.colors.alpha50 : getBackgroundColor};
  color: var(--default4);
  padding: 0.7rem 1rem;
  text-decoration: none;
  border: none;
  line-height: 1.5;
  font-weight: 700;
  font-size: 1rem;
  display: inline-block;
  ${buttonRadius};
  ${backgroundTransition};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ isDisabled, theme }) => !isDisabled && theme.colors.alpha120};
  }

  /* @media (prefers-color-scheme: dark) {
    color: var(--default1);
    fill: var(--default1);
  } */
`;


export const Button = ({ disabled = false, onClick, color = 'default',...props }) => {
  const safeOnClick = !disabled ? onClick : (e: Event) => e.preventDefault();

  return (
    <StyledButton
      aria-disabled={disabled}
      isDisabled={disabled}
      onClick={safeOnClick}
      color={color}
      {...props}
    />
  );
};
