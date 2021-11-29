import styled from "styled-components";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "Yup";

import { isEmpty } from "lib/helpers";
import { EditProfileType } from "lib/profiles";
import { inputStyle } from "styles/forms";

import { Button } from "components/basics/Button";
import { ThemeSelect } from "components/Search/ThemeSelect";

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

const TextArea = styled.textarea`
  ${inputStyle};
  height: 100%;
  font-family: inherit;
  padding-top: .5rem;
  resize: none;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const placeholders = {
  description:
    "Développeuse web en Ruby on Rails et React, je m'intéresse à l'actu de la tech et j'en parle sur Twitter et Twitch. Je stream du live coding sur des projets web, parfois seule parfois en pair programming.",
  commercial:
    "Je suis dispo pour participer à des meetups ou podcasts (Ruby, JS ou généralistes) à Paris ou en distanciel.",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Doit être rempli"),
  description: Yup.string().required("Doit être rempli"),
  links: Yup.mixed().test(
    "atLeastOneUrl",
    "Remplir au moins un",
    (val) => val.filter(({ url }) => !!url).length > 0
  ),
  commercial: Yup.string(),
  themes: Yup.array().required().min(1, "Choisir au moins un"),
});

type EditProfileForm = {
  profile: EditProfileType;
};

export const EditProfileForm = ({ profile }: EditProfileForm) => {
  const handleSubmit = (values: EditProfileType) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={profile}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue, ...formikBag }) => {
        return (
          <StyledForm>
            <Label htmlFor="name">Nom et/ou pseudo</Label>
            <Field name="name">
              {({ field }) => (
                <Input {...field} placeholder="Angie Neer (@AngieDev)" />
              )}
            </Field>

            <Label htmlFor="description">Présentez-vous en quelques mots</Label>
            <Field name="description">
              {({ field }) => (
                <TextArea {...field} rows={5} placeholder={placeholders.description} />
              )}
            </Field>

            <p>mes réseaux sociaux</p>

            <Label htmlFor="commercial">Vous êtes disponibles pour des talks ou des interventions ?</Label>
            <Field name="commercial">
              {({ field }) => (
                <TextArea {...field} rows={5} placeholder={placeholders.commercial} />
              )}
            </Field>

            <Label>Thèmes d'expertise</Label>
            <Field name="themes">
              {({ field }) => (
                <div>ThemeSelect</div>
                // <ThemeSelect
                //   {...field}
                //   onChange={(newValues) => setFieldValue("themes", newValues)}
                // />
              )}
            </Field>

            <p>mes liens (articles, ressources) </p>

            <StyledButton
              type="Submit"
              onClick={handleSubmit}
              disabled={formikBag.isSubmitting || !isEmpty(formikBag.errors)}
            >
              Publier mon profil
            </StyledButton>

            <p>
              <small>
                En publiant vos données, vous acceptez de paraitre sur ce site,
                conformement aux mentions légales
              </small>
            </p>

            <StyledButton
              type="Submit"
              onClick={handleSubmit}
              disabled={formikBag.isSubmitting || !isEmpty(formikBag.errors)}
            >
              Masquer mon profil
            </StyledButton>

            <p>
              <small>
                Votre profil sera caché du répertoire, nous ne vous demanderons
                plus si vous êtes à nouveau suggéré·e
              </small>
            </p>

            <StyledButton
              type="Submit"
              onClick={handleSubmit}
              disabled={formikBag.isSubmitting || !isEmpty(formikBag.errors)}
            >
              Supprimer mes données
            </StyledButton>
            <p>
              Si vous le souhaitez, vous pouvez supprimer totalement vos
              données. Dans ce cas, nous risquons de vous contacter à nouveau si
              une autre personne suggère votre profil.
            </p>
          </StyledForm>
        );
      }}
    </Formik>
  );
};
