import { useEffect, useState } from "react";
import styled from "styled-components";
import { NextRouter, Router } from "next/router";
import { Formik } from "formik";
import { FiltersType } from "lib/filters";
import { toArray } from "lib/helpers";
import CaretDown from "public/icons/caret-down.svg";
import CaretUp from "public/icons/caret-up.svg";
import { cssQueries } from "styles/utils";


import { FiltersForm } from "./FiltersForm";
import { Loading } from "components/basics/Loading";

const FiltersContainer = styled.div`
  background-color: var(--background2);
  color: var(--default2);
  border: 1px solid var(--default3);
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
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;

  & > svg {
    fill: var(--alpha100);
    height: 1.6rem;
  }
`;

export const Filters = ({
  router,
  className,
}: {
  router: NextRouter;
  className?: string;
}) => {
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
    router.push({ pathname: router.pathname, query: values }, undefined, {
      scroll: false,
    });
  };

  if (!filters) {
    return <Loading />;
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
    <FiltersContainer className={className}>
      <FiltersMenu
        role="button"
        onClick={() => setToggleOn(!toggleOn)}
        onKeyDown={(e) => e.key === "Enter" && setToggleOn(!toggleOn)}
        tabIndex={0}
      >
        Filters
        {filtersCount > 0 && <span>({filtersCount})</span>}
        {toggleOn ? <CaretUp aria-label="Fermer" /> : <CaretDown aria-label="Ouvrir"/>}
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
