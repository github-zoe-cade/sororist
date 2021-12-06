import { useEffect } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { NextRouter } from "next/router";
import { FiltersType } from "lib/filters";
import { toArray } from "lib/helpers";

import { cssQueries } from "styles/utils";

import { Button } from "components/basics/Button";
import { ThemeSelect } from "components/common/ThemeSelect";
import { PlatformSelect } from "components/common/PlatformSelect";
import { SearchBar } from "components/common/SearchBar";
import { StatesField } from "./StatesField";

const StyledForm = styled(Form)<{ open: boolean }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media ${cssQueries.mobile} {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    padding-top: 1rem;
  }
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;

  @media ${cssQueries.mobile} {
    justify-content: space-between;
    padding-top: 1rem;
  }
`;

const ApplyButton = styled(Button)`
  @media ${cssQueries.desktop} {
    display: none;
  }
`;

type FiltersForm = {
  closeForm: () => void;
  filters: FiltersType;
  initialValues: FiltersType;
  onSubmit: (values: FiltersType) => void;
  router: NextRouter;
  toggleOn: boolean;
};

export const FiltersForm = ({
  closeForm,
  filters,
  initialValues,
  onSubmit,
  toggleOn,
}: FiltersForm) => {
  return (
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
          <StyledForm open={toggleOn}>
            <Field name="themes">
              {({ field }) => (
                <label htmlFor="theme">
                  <ThemeSelect
                    {...field}
                    placeholder="Filtrer par thème"
                    setFieldValue={setFieldValue}
                    onChange={onChange(field.name)}
                  />
                </label>
              )}
            </Field>

            <Field name="platforms">
              {({ field }) => (
                <label htmlFor="platforms">
                  <PlatformSelect
                    {...field}
                    onChange={onChange(field.name)}
                    placeholder="Filtrer par plateforme"
                  />
                </label>
              )}
            </Field>

            <Field name="searchTerms">
              {({ field }) => (
                <label htmlFor="searchTerms" style={{ position: "relative" }}>
                  <SearchBar
                    {...field}
                    filters={filters}
                    setFieldValue={setFieldValue}
                    submitForm={submitForm}
                  />
                </label>
              )}
            </Field>

            <Field name="states">
              {({ field }) => {
                const changeStatesValue = (value) => {
                  if (!field.value) {
                    setFieldValue(field.name, [value]);
                  } else if (field.value.includes(value)) {
                    setFieldValue(
                      field.name,
                      toArray(field.value).filter((x) => x !== value)
                    );
                  } else {
                    setFieldValue(field.name, [...toArray(field.value), value]);
                  }
                  submitForm()
                };
                return (
                  <StatesField
                    {...field}
                    changeStatesValue={changeStatesValue}
                  />
                );
              }}
            </Field>

            <ButtonContainer>
              <ApplyButton
                onClick={() => {
                  submitForm();
                  closeForm();
                }}
              >
                Appliquer
              </ApplyButton>
            </ButtonContainer>
          </StyledForm>
        );
      }}
    </Formik>
  );
};
