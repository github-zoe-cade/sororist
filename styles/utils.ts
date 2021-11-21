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
  box-sizing: content-box;
  opacity: 0.92;
  ${cardShadow}
`

export const marginSection = css`
  margin: ${({ theme }) => `4rem ${theme.spacings.mainHorizontal}`};
`

export const marginElement = css`
margin: ${({ theme }) => `0rem ${theme.spacings.mainHorizontal}`};
`

export const paddingSection = css`
  padding: ${({ theme }) => `4rem ${theme.spacings.mainHorizontal}`};
`

export const paddingElement = css`
  padding: ${({ theme }) => `0rem ${theme.spacings.mainHorizontal}`};
`

export const paddingBottomLastSection = css`
  padding-bottom: 7rem;
`
