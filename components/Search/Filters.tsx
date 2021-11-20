import { useEffect, useState } from "react";
import styled from "styled-components";
import { Router } from "next/router";
import { Formik, Form, Field } from "formik";
import { FaRandom } from "react-icons/fa";
import { FiltersType } from "../../lib/filters";

import { LinkAsButton } from "../basics/LinkAsButton";
import { ThemeSelect } from "./ThemeSelect";
import { PlatformSelect } from "./PlatformSelect";
import { SearchBar } from "./SearchBar";

const FiltersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background1};
  color: ${({ theme }) => theme.colors.default1};
  border: 1px solid ${({ theme }) => theme.colors.default3};
  padding: 1rem 5rem;
`;

const StyledForm = styled(Form)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
`;

const StyledLabel = styled.span`
  line-height: 2;
`;

const RandomButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
`;

export const Filters = ({ router }: { router: Router }) => {
  const [filters, setFilters] = useState<FiltersType>();

  useEffect(() => {
    if (router.isReady) {
      const appliedFilters: FiltersType = {
        themes: router.query.themes,
        platforms: router.query.platforms,
        searchTerms: new Array(router.query.searchTerms).flat().join(),
      };
      setFilters(appliedFilters);
    }
  }, [router]);

  const onSubmit = async (values: FiltersType) => {
    router.push({ pathname: router.pathname, query: values });
  };

  if (!filters) {
    return <div>Chargement...</div>;
  }

  const initialValues: FiltersType = {};
  if (!!filters.themes) initialValues["themes"] = filters.themes;
  if (!!filters.platforms) initialValues["platforms"] = filters.platforms;
  if (!!filters.searchTerms) initialValues["searchTerms"] = filters.searchTerms;

  return (
    <FiltersContainer>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {({ values, setFieldValue, submitForm, ...formikBag }) => {
          // Router refresh in 2 times, make sure we refresh once the router.isReady
          useEffect(() => {
            formikBag.setValues(initialValues);
          }, [filters]);

          const onChange = (fieldName: string) => (options: string[]) => {
            setFieldValue(fieldName, options);
            submitForm();
          };

          return (
            <StyledForm>
              <Field name="themes">
                {({ field }) => (
                  <label htmlFor="theme">
                    <StyledLabel>Filtrer par thème :</StyledLabel>
                    <ThemeSelect
                      {...field}
                      setFieldValue={setFieldValue}
                      onChange={onChange(field.name)}
                    />
                  </label>
                )}
              </Field>

              <Field name="platforms">
                {({ field }) => (
                  <label htmlFor="platforms">
                    <StyledLabel>Filtrer par plateforme :</StyledLabel>
                    <PlatformSelect
                      {...field}
                      setFieldValue={setFieldValue}
                      onChange={onChange(field.name)}
                    />
                  </label>
                )}
              </Field>

              <Field name="searchTerms">
                {({ field }) => (
                  <SearchBar
                    {...field}
                    filters={filters}
                    setFieldValue={setFieldValue}
                    submitForm={submitForm}
                  />
                )}
              </Field>

              <RandomButtonContainer>
                <LinkAsButton href="/search">
                  <FaRandom />
                    &nbsp;
                   Au hasard
                </LinkAsButton>
              </RandomButtonContainer>
            </StyledForm>
          );
        }}
      </Formik>
    </FiltersContainer>
  );
};
