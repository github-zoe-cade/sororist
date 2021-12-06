import styled from "styled-components";
import { isEmpty } from "lib/helpers";

const CheckboxContainer = styled.div`
  margin: .5rem 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & input {
    margin-right: .5rem
  }
`;

export const StatesField = ({ changeStatesValue, ...field }) => (
  <CheckboxContainer>
    <label>
      <input
        type="checkbox"
        value="new"
        checked={!isEmpty(field.value) && field.value.includes("new")}
        onChange={() => changeStatesValue("new")}
      />
      À valider
    </label>

    <label>
      <input
        type="checkbox"
        value="new"
        checked={!isEmpty(field.value) && field.value.includes("waiting")}
        onChange={() => changeStatesValue("waiting")}
      />
      En attente
    </label>

    <label>
      <input
        type="checkbox"
        value="new"
        checked={!isEmpty(field.value) && field.value.includes("approved")}
        onChange={() => changeStatesValue("approved")}
      />
      Publiés
    </label>

    <label>
      <input
        type="checkbox"
        value="new"
        checked={!isEmpty(field.value) && field.value.includes("hidden")}
        onChange={() => changeStatesValue("hidden")}
      />
      Masqués
    </label>
  </CheckboxContainer>
);
