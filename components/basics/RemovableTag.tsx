import styled from "styled-components";

// Style to match react-select value
const TagContainer = styled.div`
  color: #fff;
  fill: #fff;
  font-size: 85%;
  width: fit-content;
  position: absolute;
  bottom: 9px;
  left: 11px;
  background-color: orange;
  border-radius: 2px;
  display: flex;
  align-items: center;

  & > span {
    padding: 3px;
    padding-left: 6px;
  }

  & svg {
    padding: 3px 4px;
    border-radius: inherit;
    cursor: pointer;
  }

  & svg:hover {
    background-color: ${({ theme }) => theme.colors.beta2};
  }
`;

export const RemovableTag = ({ label, onRemove }) => (
  <TagContainer>
    <span>{label}</span>
    <svg
      role="button"
      onClick={onRemove}
      height="14"
      width="14"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <title>Supprimer</title>
      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
    </svg>
  </TagContainer>
);
