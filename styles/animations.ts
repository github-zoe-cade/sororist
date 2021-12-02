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
