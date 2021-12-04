import { css } from "styled-components";

export const backgroundTransition = css`
  transition: background-color ease 0.3s;
`;

export const buttonRadius = css`
  border-radius: 5px;
`;

export const buttonStyle = css`
  background-color: var(--alpha100);
  color: var(--default4);
  padding: 0.7rem 1rem;
  text-decoration: none;
  border: none;
  line-height: 1.5;
  font-weight: 500;
  font-size: 1rem;
  display: inline-block;
  ${buttonRadius};
  ${backgroundTransition};

  &:hover {
    background-color: var(--alpha120);
    color: var(--default4);
    fill: var(--default4);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--default5);
    fill: var(--default5);

    &:hover, &:focus {
      color: var(--default5);
      fill: var(--default5);
    }
  }
`;

export const cardShadow = css`
  filter: drop-shadow(1px 2px 4px hsl(258.5, 29.8%, 74.3%));

  @media (prefers-color-scheme: dark) {
    filter: drop-shadow(1px 2px 4px hsl(257.1, 10.1%, 13.5%));
  }
`;

export const cssQueries = {
  desktop: `(min-width: 960px)`,
  mobile: `(max-width: 959px)`,
  large: `(min-width: 1800px)`,
};

export const cardStyle = css`
  background-color: var(--background2);
  color: var(--default2);
  border-radius: 2px;
  box-sizing: content-box;
  opacity: 0.92;
  ${cardShadow}

  @media (prefers-color-scheme: dark) {
    opacity: 1;
    border: 1px solid #2c273a;
  }
`;

export const marginSection = css`
  margin: 4rem 8%;
`;

export const marginElement = css`
  margin: 0 8%;
`;

export const paddingSection = css`
  padding: 4rem 8%;
`;

export const paddingElement = css`
  padding: 0 8%;
`;

export const paddingBottomLastSection = css`
  padding-bottom: 7rem;
`;
