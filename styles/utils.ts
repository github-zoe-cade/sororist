import { css } from 'styled-components'

export const backgroundTransition = css`
  transition: background-color ease 0.3s;
`

export const buttonRadius = css`
  border-radius: 5px;
`

export const cardShadow = css`
  filter: drop-shadow(1px 2px 4px hsl(220deg 60% 50%));
`

export const cssQueries = {
  desktop: `(min-width: 960px)`,
  mobile: `(max-width: 959px)`,
};

export const cardStyle = css`
  background-color: ${({ theme }) => theme.colors.background1};
  color: ${({ theme }) => theme.colors.default1};
  border-radius: 2px;
  ${cardShadow}
`
