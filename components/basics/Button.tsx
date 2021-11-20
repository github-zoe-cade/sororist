import styled from "styled-components";

import { backgroundTransition, buttonRadius } from "../../styles/utils";

const StyledButton = styled.button<{ isDisabled: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.default5};
  padding: 0.7rem 1rem;
  text-decoration: none;
  border: none;
  line-height: 1.5;
  font-weight: 700;
  display: inline-block;
  ${buttonRadius};
  ${backgroundTransition};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary1};
  }
`;


export const Button = ({ disabled = false, onClick, ...props }) => {
  const safeOnClick = !disabled ? onClick : (e: Event) => e.preventDefault();

  return (
    <StyledButton
      aria-disabled={disabled}
      isDisabled={disabled}
      onClick={safeOnClick}
      {...props}
    />
  );
};
