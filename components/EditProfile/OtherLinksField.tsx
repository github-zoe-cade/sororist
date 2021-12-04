import React from "react";
import styled from "styled-components";
import PlusIcon from "public/icons/plus.svg"
import TrashIcon from "public/icons/trash.svg"

import { buttonRadius } from "styles/utils";
import { inputStyle } from "styles/forms";

const Input = styled.input`
  ${inputStyle};
  grid-column: 1;
`;

const LinkInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.3rem;
  gap: 1rem;
`;

const OutlineButton = styled.button`
  ${buttonRadius};
  background: none;
  border: solid 2px var(--alpha100);
  fill: var(--alpha100);
  cursor: pointer;
  padding: 0 0.6rem;
  display: flex;
  align-items: center;
  transition: border-color ease 0.3s, color ease 0.3s;

  &:hover {
    border-color: var(--alpha120);
    fill: var(--alpha120);
  }
`;

const DeleteButton = styled(OutlineButton)`
  border-color: var(--error100);
  fill: var(--error100);

  &:hover {
    border-color: var(--error120);
    fill: var(--error120);
  }
`;

export const OtherLinksField = ({ otherLinks, setFieldValue, ...field }) => (
  <LinkInputContainer>
    {otherLinks.map((link: string, index: number) => (
      <React.Fragment key={index}>
        <Input
          value={link}
          onChange={(e) => {
            const newValues = otherLinks.map((otherLink, i: number) =>
              i === index ? e.target.value : otherLink
            );
            setFieldValue(field.name, newValues);
          }}
          placeholder="https://website.com/great-resource"
        />
        {index === otherLinks.length - 1 ? (
          <OutlineButton
            type="button"
            title="Ajouter un autre lien"
            onClick={() => setFieldValue(field.name, [...field.value, ""])}
          >
            <PlusIcon aria-label="Ajouter un autre lien" />
          </OutlineButton>
        ) : (
          <DeleteButton
            type="button"
            title="Supprimer ce lien"
            onClick={() => {
              const newValues = [
                ...field.value.slice(0, index),
                ...field.value.slice(index + 1),
              ];
              setFieldValue(field.name, newValues);
            }}
          >
            <TrashIcon aria-label="Supprimer ce lien" />
          </DeleteButton>
        )}
      </React.Fragment>
    ))}
  </LinkInputContainer>
);
