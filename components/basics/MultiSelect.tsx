import Select from "react-select";
import { theme } from "styles/theme";

import { toArray } from "lib/helpers";
import { cssQueries } from "styles/utils";

const fieldValueToSelectValues = (value: string | string[]) =>
  toArray(value).map((value: string | string[]) => ({
    value,
    label: value,
  }));

type MultiSelect = {
  options: Array<{ label: string; value: string | number }>;
  onChange: (e?: Event) => void;
};

export const MultiSelect = ({ options, onChange, ...field }) => {
  const customStyles = {
    multiValue: (provided: {}) => ({
      ...provided,
      backgroundColor: theme.colors.beta100,
    }),
    multiValueLabel: (provided: {}) => ({
      ...provided,
      color: theme.colors.default4,
    }),
    multiValueRemove: (provided: {}) => ({
      ...provided,
      color: theme.colors.default4,
      cursor: "pointer",
      ":hover": {
        backgroundColor: theme.colors.beta50,
      },
    }),
  };

  return (
    <Select
      {...field}
      styles={customStyles}
      options={options}
      value={fieldValueToSelectValues(field.value)}
      onChange={(options) =>
        onChange((options || []).map(({ value }) => value))
      }
      isMulti
      isSearchable
    />
  );
};
