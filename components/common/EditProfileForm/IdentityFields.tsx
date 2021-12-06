import styled from "styled-components";
import { Field } from "formik";
import { cssQueries } from "styles/utils";
import { inputStyle } from "styles/forms";

import { ProfilePictureForm } from "./ProfilePictureForm";
import { GenderSelect } from "./GenderSelect";

const IdentityContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: stretch;
  gap: 3rem;

  @media ${cssQueries.mobile} {
    flex-direction: column-reverse;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 1rem;
`

const Input = styled.input`
  ${inputStyle};
`;

const Label = styled.label`
  margin-top: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const IdentityFields = ({ setFieldValue, values }) => (
  <IdentityContainer>
    <FieldContainer>
      <Label htmlFor="pictureUrl" style={{flexGrow: 0}}>Votre photo</Label>
      <Field name="pictureUrl">
        {({ field }) => (
          <ProfilePictureForm
            {...field}
            id={field.name}
            setFieldValue={setFieldValue}
          />
        )}
      </Field>
    </FieldContainer>

    <FieldContainer style={{flexGrow: 1}}>
      <Label htmlFor="name">
        Nom et/ou pseudo*
        <Field name="name">
          {({ field }) => (
            <Input
              {...field}
              placeholder="Angie Neer (@AngieDev)"
              id={field.name}
            />
          )}
        </Field>
      </Label>

      <Label htmlFor="gender">
        Votre genre
        <Field name="gender">
          {({ field }) => (
            <GenderSelect
              {...field}
              fieldValue={values.gender}
              setFieldValue={setFieldValue}
            />
          )}
        </Field>
      </Label>
    </FieldContainer>
  </IdentityContainer>
);
