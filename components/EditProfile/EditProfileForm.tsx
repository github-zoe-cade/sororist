import styled from "styled-components";
import router from "next/router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { isEmpty } from "lib/helpers";
import { EditProfileType } from "lib/profiles";
import { inputStyle } from "styles/forms";
import { cssQueries } from "styles/utils";

import { Button } from "components/basics/Button";
import { LinksField } from "components/common/LinksFields";
import { ThemeSelect } from "components/common/ThemeSelect";

import { GenderSelect } from "./GenderSelect";
import { OtherLinksField } from "./OtherLinksField";
import { HideOrDeleteButton } from "./HideOrDeleteButtons";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const IdentityContainer = styled.div`
  display: grid;
  column-gap: 2rem;

  @media ${cssQueries.desktop} {
    grid-template-columns: 60% 1fr;
  }
`;

const Label = styled.label`
  margin-top: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  flex-grow: 1;
`;

const Input = styled.input`
  ${inputStyle};
`;

const TextArea = styled.textarea`
  ${inputStyle};
  height: 100%;
  font-family: inherit;
  padding-top: 0.5rem;
  resize: none;
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
  width: 100%;
`;

const placeholders = {
  description:
    "Développeuse web en Ruby on Rails et React, je m'intéresse à l'actu de la tech et j'en parle sur Twitter et Twitch. Je stream du live coding sur des projets web, parfois seule parfois en pair programming.",
  commercial:
    "Je suis dispo pour participer à des meetups ou podcasts (Ruby, JS ou généralistes) à Paris ou en distanciel.",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Doit être rempli"),
  gender: Yup.string(),
  description: Yup.string().required("Doit être rempli"),
  links: Yup.mixed().test(
    "atLeastOneUrl",
    "Remplir au moins un",
    (val) => val.filter(({ url }) => !!url).length > 0
  ),
  themes: Yup.array().required().min(1, "Choisir au moins un"),
  commercial: Yup.string(),
  otherLinks: Yup.array(),
});

type EditProfileForm = {
  profile: EditProfileType;
};

type Values = {
  name: string;
  gender?: string;
  description: string;
  links: Array<{ platform: string; url: string }>;
  themes: string[];
  commercial: string;
  otherLinks: string[];
};

export const EditProfileForm = ({ profile }: EditProfileForm) => {
  const handleSubmit = (values: Values) => {
    console.log(values);
    router.push(`/profiles/${profile.uuid}`);
  };

  const initialValues: Values = {
    ...profile,
    themes: profile.themes.map((theme) => theme.name),
    otherLinks: [""],
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue, values, ...formikBag }) => (
        <StyledForm>
          <IdentityContainer>
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
          </IdentityContainer>

          <Label htmlFor="description">Présentez-vous en quelques mots*</Label>
          <Field name="description">
            {({ field }) => (
              <TextArea
                {...field}
                rows={5}
                id={field.name}
                placeholder={placeholders.description}
              />
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

          <Label htmlFor="commercial">
            Vous êtes disponibles pour des talks ou des interventions ?
          </Label>
          <Field name="commercial">
            {({ field }) => (
              <TextArea
                {...field}
                rows={5}
                id={field.name}
                placeholder={placeholders.commercial}
              />
            )}
          </Field>

          <Label htmlFor="otherLinks">
            Vos autres liens (articles, podcasts, ressources...)
          </Label>
          <Field name="otherLinks">
            {({ field }) => (
              <OtherLinksField
                {...field}
                otherLinks={values.otherLinks}
                setFieldValue={setFieldValue}
              />
            )}
          </Field>

          <div style={{ marginTop: "3rem" }}>
            <small>
              En publiant vos données, vous acceptez de paraître sur ce site,
              conformement aux <a href="/terms-of-services">mentions légales</a>
              .
            </small>

            <StyledButton
              type="Submit"
              onClick={handleSubmit}
              disabled={formikBag.isSubmitting || !isEmpty(formikBag.errors)}
            >
              {profile.published ? "Editer mon profil" : "Publier mon profil"}
            </StyledButton>
          </div>

          <HideOrDeleteButton hidden={profile.hidden} />
        </StyledForm>
      )}
    </Formik>
  );
};
