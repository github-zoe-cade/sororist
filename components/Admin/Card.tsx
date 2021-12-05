import { useState } from "react";
import TrashIcon from "public/icons/trash.svg";

import { Button } from "components/basics/Button";
import styled from "styled-components";
import { inputStyle } from "styles/forms";
import { Field, Form, Formik } from "formik";
import { buttonStyle, cssQueries } from "styles/utils";

const CardContainer = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  border: 1px solid var(--default1);
  padding: 0.5rem 1rem;

  @media ${cssQueries.desktop} {
    padding: 0.5rem 2rem;
  }
`;

const Info = styled.div`
  @media ${cssQueries.desktop} {
    width: 35rem;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, 15rem);
  }
`;

const Input = styled(Field)`
  ${inputStyle};
  margin: 0.4rem 0;

  @media ${cssQueries.mobile} {
    width: 80%;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  @media ${cssQueries.mobile} {
    flex-direction: column;
  }
`;

const SubmitButton = styled.button`
  ${buttonStyle}
`;

export const Card = ({ item, setItems, saveItem }) => {
  const [showForm, setShowForm] = useState(false);
  const handleSumit = async (values) => {
    try {
      saveItem(values);
      setItems((prev) =>
        prev.map((x) => (x.uuid === item.uuid ? { ...item, ...values } : x))
      );
      setShowForm(false);
    } catch (e) {
      console.log("error", e);
    }
  };
  const deleteItem = () => {
    const confirm = window.confirm(
      "Êtes-vous sûr·e ? Cette action est définitive."
    );
    if (confirm) {
      // Post to api
      setItems((prev) => prev.filter((x) => x.uuid !== item.uuid));
    }
  };

  const initialValues = {
    uuid: item.uuid,
    description: item.description,
    name: item.name,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSumit}>
      {() => (
        <CardContainer>
          <Info>
            {!showForm && (
              <>
                <p>{item.description}</p>
                <p>{item.name}</p>
              </>
            )}
            {showForm && (
              <>
                <Input
                  name="description"
                  type="text"
                  value={item.description}
                />
                <Input name="name" type="text" value={item.name} />
              </>
            )}

            <p>{item.registrationDate}</p>
          </Info>

          <Buttons>
            {!showForm ? (
              <Button
                onClick={() => {
                  setShowForm(true);
                }}
              >
                Edit
              </Button>
            ) : (
              <SubmitButton type="submit">Save</SubmitButton>
            )}
            <Button onClick={deleteItem}>
              <TrashIcon />
            </Button>
          </Buttons>
        </CardContainer>
      )}
    </Formik>
  );
};
