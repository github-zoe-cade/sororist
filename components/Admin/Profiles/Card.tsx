import styled from "styled-components";
import { Formik, Form, Field } from "formik";

import { LinkAsButton } from "components/basics/LinkAsButton";
import { StateSelect } from "./StateSelect";

const Container = styled.div`
  border: 1px solid var(--default1);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  align-items: center;
`;

export const Card = ({ profile, state }) => (
  <Container>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        width: "50rem",
      }}
    >
      <p>{profile.name}</p>
      <p>2021-12-06</p>
      <Formik initialValues={{ state: state }} onSubmit={() => {}}>
        {({ setFieldValue, values, ...formikBag }) => (
          <Form>
            <Field name="state">
              {({ field }) => (
                <StateSelect
                  {...field}
                  setFieldValue={setFieldValue}
                  fieldValue={values.state}
                />
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </div>

    <LinkAsButton href={`/admin/profiles/${profile.uuid}`} text="Voir" />
  </Container>
);
