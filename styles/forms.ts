import { css } from "styled-components"

export const inputHeight = css`
  height: 38px;
`

// Style for matching react-select component
export const inputStyle = css<{error?: boolean}>`
  border: 1px solid hsl(0, 0%, 80%);
  border-color: ${({ error, theme}) => error ? theme.colors.error100 : "hsl(0, 0%, 80%)"};
  border-radius: 4px;
  padding: 0 8px;
  font-size: 1rem;
  flex-grow: 1;
  box-sizing: border-box;
  ${inputHeight};

`
