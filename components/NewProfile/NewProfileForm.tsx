import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import { isEmpty } from "lib/helpers";
import { inputStyle } from "styles/forms";
import CheckIcon from "public/icons/check.svg";

import { Button } from "components/basics/Button";
import { ThemeSelect } from "components/common/ThemeSelect";
import { LinksField } from "components/common/LinksFields";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Label = styled.label`
  margin-top: 1rem;
  font-weight: 600;
`;

const Input = styled.input`
  ${inputStyle};
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const SuccessMessage = styled.div`
  background: var(--success100);
  color: var(--default1);
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    color: var(--default4);
  }
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Doit être rempli"),
  links: Yup.mixed().test(
    "atLeastOneUrl",
    "Remplir au moins un",
    (val) => val.filter(({ url }) => !!url).length > 0
  ),
  themes: Yup.array().required().min(1, "Choisir au moins un"),
});

type Values = {
  name: string;
  links: Array<{ platform: string; url: string }>;
  themes: string[];
};

export const NewProfileForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formikRef = useRef<FormikProps<Record<string, unknown>>>(null);
  const initialValues: Values = {
    name: "",
    links: [],
    themes: [],
  };

  const handleSubmit = async (values: Values) => {
    // post to API
    setSubmitSuccess(true);
    formikRef.current?.resetForm();
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnMount
      innerRef={formikRef}
    >
      {({
        errors,
        touched,
        setTouched,
        setFieldValue,
        values,
        ...formikBag
      }: FormikProps<Values>) => (
        <StyledForm>
          <Label htmlFor="name">Nom et/ou pseudo*</Label>
          <Field name="name">
            {({ field }) => (
              <Input {...field} placeholder="Angie Neer (@AngieDev)" id={field.name} />
            )}
          </Field>

          <Field name="links">
            {({ field }) => (
              <LinksField
                {...field}
                links={values.links}
                setFieldValue={setFieldValue}
              />
            )}
          </Field>

          <Label>Thèmes d'expertise*</Label>
          <Field name="themes">
            {({ field }) => (
              <ThemeSelect
                {...field}
                onChange={(newValues) => setFieldValue("themes", newValues)}
              />
            )}
          </Field>

          <StyledButton
            type="submit"
            onClick={handleSubmit}
            disabled={formikBag.isSubmitting || !isEmpty(errors)}
          >
            Ajouter ce profil
          </StyledButton>

          {submitSuccess && (
            <SuccessMessage>
              <CheckIcon />
              &nbsp; Suggestion bien reçue ! Vous pouvez continuer à suggérer
              des profils.
            </SuccessMessage>
          )}
        </StyledForm>
      )}
    </Formik>
  );
};
