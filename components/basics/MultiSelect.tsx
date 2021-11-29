import Select from "react-select";
import { theme } from "styles/theme";

import { toArray } from "lib/helpers";

type MultiSelect = {
  error?: boolean;
  options: Array<{ label: string; value: string | number }>;
  onChange: (e?: Event) => void;
};

export const MultiSelect = ({ error = false, options, onChange, ...field }) => {
  const customStyles = {
    control: (provided: object) =>
      error
        ? {
            ...provided,
            borderColor: theme.colors.error,
          }
        : { ...provided },
    multiValue: (provided: object) => ({
      ...provided,
      backgroundColor: theme.colors.beta100,
    }),
    multiValueLabel: (provided: object) => ({
      ...provided,
      color: theme.colors.default2,
    }),
    multiValueRemove: (provided: object) => ({
      ...provided,
      color: theme.colors.default2,
      cursor: "pointer",
      ":hover": {
        backgroundColor: theme.colors.beta50,
      },
    }),
  };

  const fieldValueToSelectValues = (value: string | string[]) =>
    toArray(value).map((value: string | string[]) => ({
      value,
      label: options.find(({ value: optionValue }) => value === optionValue)
        .label,
    }));

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
