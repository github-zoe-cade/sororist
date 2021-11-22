import { useEffect, useState } from "react";
import styled from "styled-components";
import { Router } from "next/router";
import { Formik } from "formik";
import { FiltersType } from "lib/filters";

import { toArray } from "lib/helpers";
import { cssQueries } from "styles/utils";

import { FiltersForm } from "./FiltersForm";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const FiltersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background2};
  color: ${({ theme }) => theme.colors.default2};
  border: 1px solid ${({ theme }) => theme.colors.default3};
  border-left: none;
  border-right: none;
  padding: 1rem 5rem;

  @media ${cssQueries.mobile} {
    padding: 1rem 2rem;
  }
`;

const FiltersMenu = styled.div`
  @media ${cssQueries.desktop} {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;

  & > svg {
    fill: ${({ theme }) => theme.colors.primary1};
    height: 1.6rem;
  }
`;

export const Filters = ({ router }: { router: Router }) => {
  const [filters, setFilters] = useState<FiltersType>();
  const [toggleOn, setToggleOn] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const appliedFilters: FiltersType = {
        themes: router.query.themes,
        platforms: router.query.platforms,
        searchTerms: toArray(router.query.searchTerms).join(),
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

  const filtersCount =
    toArray(initialValues.themes).length +
    toArray(initialValues.platforms).length +
    toArray(initialValues.searchTerms).length;

  return (
    <FiltersContainer>
      <FiltersMenu role="button" onClick={() => setToggleOn(!toggleOn)} tabIndex={0}>
        Filters
        {filtersCount > 0 && <span>({filtersCount})</span>}
        {toggleOn ? <FaCaretUp /> : <FaCaretDown />}
      </FiltersMenu>

      <FiltersForm
        closeForm={() => setToggleOn(false)}
        filters={filters}
        initialValues={initialValues}
        onSubmit={onSubmit}
        router={router}
        toggleOn={toggleOn}
      />
    </FiltersContainer>
  );
};
