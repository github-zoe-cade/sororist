import { CSSObjectWithLabel } from "react-select";
import { css } from "styled-components";

export const inputHeight = css`
  height: 38px;
`;

// Style for matching react-select component
export const inputStyle = css<{ error?: boolean }>`
  border: 1px solid hsl(0, 0%, 80%);
  border-color: ${({ error }) =>
    error ? "var(--error100)" : "hsl(0, 0%, 80%)"};
  border-radius: 4px;
  padding: 0 8px;
  font-size: 1rem;
  flex-grow: 1;
  box-sizing: border-box;
  ${inputHeight};

  @media (prefers-color-scheme: dark) {
    background: var(--background1);
    border-color: var(--default1);
    color: var(--default2);
  }
`;

export const selectStyle = {
  clearIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    "@media (prefers-color-scheme: dark)": {
      color: "var(--default1)",
      ":hover": {
        color: "var(--default2)",
      },
    },
  }),
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    fontWeight: "400",
    "@media (prefers-color-scheme: dark)": {
      backgroundColor: "var(--background1)",
      borderColor: "var(--default1)",
      color: "var(--default1)",
      ":hover": {
        borderColor: "var(--default2)",
      },
    },
  }),
  dropdownIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    "@media (prefers-color-scheme: dark)": {
      color: "var(--default1)",
      ":hover": {
        color: "var(--default2)",
      },
    },
  }),
  indicatorSeparator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    "@media (prefers-color-scheme: dark)": {
      backgroundColor: "var(--default1)",
    },
  }),
  input: (provided: CSSObjectWithLabel) => ({
    ...provided,
    "@media (prefers-color-scheme: dark)": {
      color: "var(--default1)",
    },
  }),
  menuList: (provided: CSSObjectWithLabel) => ({
    ...provided,
    "@media (prefers-color-scheme: dark)": {
      backgroundColor: "var(--background1)",
    },
  }),
  multiValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    backgroundColor: "var(--beta100)",
  }),
  multiValueLabel: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "var(--default2)",
    "@media (prefers-color-scheme: dark)": {
      color: "var(--default4)",
    },
  }),
  multiValueRemove: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "var(--default2)",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "var(--beta50)",
    },
    "@media (prefers-color-scheme: dark)": {
      color: "var(--default4)",
    },
  }),
  option: (provided: CSSObjectWithLabel, state) => {
    const customStyle = {
      ...provided,
      fontWeight: "400",
      color: "var(--default2)",
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: "var(--background1)",
      },
    };
    if (state.isFocused) {
      customStyle["@media (prefers-color-scheme: dark)"] = {
        backgroundColor: "var(--background2)",
      };
    }
    return customStyle;
  },
  placeholder: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "var(--default2)",
    opacity: 0.5,
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "var(--default2)",
  }),
};
