import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "Yup";
import { isEmpty } from "lib/helpers";
import { inputStyle } from "styles/forms";
import { FaRegCheckCircle } from "react-icons/fa";

import { Button } from "components/basics/Button";
import { PlatformSelect } from "components/Search/PlatformSelect";
import { ThemeSelect } from "components/Search/ThemeSelect";
import { LinkList } from "./LinkList";

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
  background: ${({ theme }) => theme.colors.success};
  color: var(--default1);
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Doit être rempli"),
  platforms: Yup.array().required().min(1, "Choisir au moins une"),
  links: Yup.mixed().test(
    "atLeastOneUrl",
    "Remplir au moins un",
    (val) => val.filter(({ url }) => !!url).length > 0
  ),
  themes: Yup.array().required().min(1, "Choisir au moins un"),
});

type Values = {
  name: string;
  platforms: string[];
  links: Array<{ platform: string; url: string }>;
  themes: string[];
};

export const NewProfileForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formikRef = useRef<FormikProps<Record<string, unknown>>>(null);
  const initialValues: Values = {
    name: "",
    platforms: [],
    links: [],
    themes: [],
  };

  const handleSubmit = async (values: Values) => {
    // post to API
    setSubmitSuccess(true);
    formikRef.current?.resetForm();
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000)
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
      }: FormikProps<Values>) => {
        const onPlatformSelectChange = (newValues: string[]) => {
          setFieldValue("platforms", newValues);
          const newLinks = newValues.map((value) => {
            const existingLink = values.links.find(
              ({ platform }) => platform === value
            );
            return {
              platform: value,
              url: existingLink ? existingLink.url : "",
            };
          });
          setFieldValue("links", newLinks);
        };

        return (
          <StyledForm>
            <Label htmlFor="name">Nom et/ou pseudo</Label>
            <Field name="name">
              {({ field }) => (
                <Input {...field} placeholder="Angie Neer (@AngieDev)" />
              )}
            </Field>

            <Label htmlFor="platforms">Plateformes</Label>
            <Field name="platforms">
              {({ field }) => (
                <PlatformSelect {...field} onChange={onPlatformSelectChange} />
              )}
            </Field>

            {values.links.length > 0 && (
              <LinkList setFieldValue={setFieldValue} values={values} />
            )}

            <Label>Thèmes d'expertise</Label>
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
                <FaRegCheckCircle />
                &nbsp; Suggestion bien reçue ! Vous pouvez continuer à suggérer
                des profils.
              </SuccessMessage>
            )}
          </StyledForm>
        );
      }}
    </Formik>
  );
};
