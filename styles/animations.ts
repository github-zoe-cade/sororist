import { css } from "styled-components";

export const bounceOnHover = css`
  &:hover {
    animation: 0.3s ease-in 1 forwards jumping;
  }

  @keyframes jumping {
    0% {
      transform: scale(100%);
    }
    70% {
      transform: scale(108%);
    }
    95% {
      transform: scale(104%);
    }
    100% {
      transform: scale(105%);
    }
  }
`;

export const upOnHover = css`
  transition: transform ease 0.3s;

  &:hover {
    transform: translateY(-3%);
  }
`;

export const slideDown = css`
  animation: .3s ease-out 1 forwards slideDown;

  @keyframes slideDown {
    0% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;
