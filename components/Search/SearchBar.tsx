import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import { FiltersType } from "lib/filters";
import { inputHeight, inputStyle } from "styles/forms";

import { Button } from "components/basics/Button";
import { RemovableTag } from "components/basics/RemovableTag";

const StyledLabel = styled.span`
  line-height: 2;
`;

const NameInputContainer = styled.div`
  display: flex;
  ${inputHeight}
`;

const StyledInput = styled.input<{ textHidden: boolean }>`
  ${inputStyle}
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: ${({ textHidden }) => textHidden && "white"};
`;

const StyledButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 0.75rem;

  position: absolute;
  bottom: 0;
  right: 0;
  ${inputHeight}

  &:focus {
    background: ${({ theme }) => theme.colors.beta100};
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
    <label htmlFor="searchTerms" style={{ position: "relative" }}>
      {tag && <RemovableTag label={tag} onRemove={clearInput} />}

      <StyledLabel>Filtrer par nom :</StyledLabel>

      <NameInputContainer onFocus={clearInput}>
        <StyledInput
          {...field}
          id="searchTerms"
          placeholder="Chercher par nom/pseudo"
          value={value || ""}
          autoComplete="off"
          ref={inputRef}
          textHidden={!!tag}
        />

        <StyledButton
          type="submit"
          onClick={(e: Event) => {
            submitForm();
            setTag(value);
            (e.currentTarget as HTMLButtonElement).blur();
            inputRef.current.blur();
          }}
        >
          <FaSearch title="Chercher" />
        </StyledButton>
      </NameInputContainer>
    </label>
  );
};
