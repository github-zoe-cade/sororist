import styled from "styled-components";

import { buttonStyle } from "styles/utils";

export const getBackgroundColor = ({ color }) => {
  if (color === "warning") {
    return "var(--warning100)"
  }
  if (color === "error") {
    return "var(--error100)"
  }
  return "var(--alpha100)"
}

export const getDisabledBackgroundColor = ({ color }) => {
  if (color === "warning") {
    return "var(--warning50)"
  }
  if (color === "error") {
    return "var(--error50)"
  }
  return "var(--alpha50)"
}

export const getHoverBackgroundColor = ({ color}) => {
  if (color === "warning") {
    return  "var(--warning120)"
  }
  if (color === "error") {
    return "var(--error120)"
  }
  return "var(--alpha120)"
}


const StyledButton = styled.button<{ isDisabled: boolean, color: string }>`
  ${buttonStyle}
  background-color: ${({ isDisabled }) => isDisabled ? getDisabledBackgroundColor : getBackgroundColor};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ isDisabled }) => isDisabled ? getDisabledBackgroundColor : getHoverBackgroundColor};
  }
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
