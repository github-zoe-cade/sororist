import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from "public/icons/search.svg";

import { FiltersType } from "lib/filters";
import { inputHeight, inputStyle } from "styles/forms";

import { Button } from "components/basics/Button";
import { RemovableTag } from "components/basics/RemovableTag";

const NameInputContainer = styled.div`
  display: flex;
  ${inputHeight}
`;

const StyledInput = styled.input<{ textHidden: boolean }>`
  ${inputStyle}
  color: ${({ textHidden }) => (textHidden ? "transparent" : "var(--defaut2)")};

  @media (prefers-color-scheme: dark) {
    color: ${({ textHidden }) => (textHidden ? "var(--background1)" : "var(--defaut2)")};
  }
`;

const StyledButton = styled(Button)`
  border-radius: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 10.5px;

  position: absolute;
  bottom: 1px;
  right: 1px;
  height: 36px; // inputHeight - 2

  &:focus {
    background: var(--beta100);
  }
`;

type SearchBar = {
  filters: FiltersType;
  setFieldValue: (name: string, value: any) => void;
  submitForm: () => void;
  // field props
  name: string;
  value: string;
};

export const SearchBar = ({
  filters,
  setFieldValue,
  submitForm,
  name,
  value,
  ...field
}: SearchBar) => {
  const [tag, setTag] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  // The router returns the query params only after it's ready
  useEffect(() => setTag(filters.searchTerms), [filters]);

  const clearInput = () => {
    if (!!tag) {
      setFieldValue(name, "");
      setTag(null);
    }
  };
  return (
    <>
      {tag && <RemovableTag label={tag} onRemove={clearInput} />}

      <NameInputContainer>
        <StyledInput
          {...field}
          id="searchTerms"
          placeholder="Chercher par nom/pseudo"
          value={value || ""}
          autoComplete="off"
          ref={inputRef}
          textHidden={!!tag}
          onFocus={clearInput}
        />

        <StyledButton
          type="submit"
          aria-label="Chercher par nom/pseudo"
          onClick={(e: Event) => {
            e.preventDefault()
            submitForm();
            setTag(value);
            (e.currentTarget as HTMLButtonElement).blur();
            inputRef.current.blur();
          }}
        >
          <SearchIcon aria-label="Chercher" />
        </StyledButton>
      </NameInputContainer>
    </>
  );
};
