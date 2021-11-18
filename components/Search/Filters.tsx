import { useEffect, useState } from "react";
import styled from "styled-components";
import { Router } from "next/router";
import { Formik, Form, Field } from "formik";

import { LinkAsButton } from "../basics/LinkAsButton";

import { ThemeSelector } from "./ThemeSelector";

const FiltersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background1};
  color: ${({ theme }) => theme.colors.default1};
  border: 1px solid ${({ theme }) => theme.colors.default3};
  padding: 1rem 5rem;
`;

const StyledForm = styled(Form)`
  /* display: flex; */
`;

type Filters = {
  themes?: string | string[];
  platforms?: string | string[];
  searchTerms?: string | string[];
};

export const Filters = ({ router }: { router: Router }) => {
  const [filters, setFilters] = useState<Filters>();

  useEffect(() => {
    if (router.isReady) {
      const appliedFilters: Filters = {
        themes: router.query.themes,
        platforms: router.query.platforms,
        searchTerms: router.query.searchTerms,
      };
      setFilters(appliedFilters);
    }
  }, [router]);

  const onSubmit = async (values: Filters, { resetForm }) => {
    router.push({ pathname: router.pathname, query: values });
    resetForm({});
  };

  return (
    <FiltersContainer>
      {filters && (
        <>
          <Formik
            initialValues={{
              themes: filters.themes,
              platforms: filters.platforms,
            }}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue, submitForm, ...formikBag }) => (
              <StyledForm>
                <Field name="themes">
                  {({ field }) => {
                    const onChange = (options) => {
                      setFieldValue("themes", options);
                      submitForm();
                    };
                    return (
                      <ThemeSelector
                        {...field}
                        values={field.value || []}
                        setFieldValue={setFieldValue}
                        onChange={onChange}
                      />
                    );
                  }}
                </Field>

                <Field
                  name="searchTerms"
                  placeholder="Chercher par nom/pseudo"
                  value={values.searchTerms || ""}
                />
                <input type="submit" />
              </StyledForm>
            )}
          </Formik>
          Filters
          {Object.entries(filters).map(
            (filter, index) =>
              filter[1] && (
                <p key={index}>
                  {filter[0]}: {filter[1]}
                </p>
              )
          )}
          <LinkAsButton text="Au hasard" href="/search" />
        </>
      )}
    </FiltersContainer>
  );
};
