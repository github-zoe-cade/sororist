import Select from "react-select";
import { theme } from "../../styles/theme";

const fieldValueToSelectValues = (value) =>
  ((value && new Array(value).flat()) || []).map((value) => ({
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
      backgroundColor: theme.colors.primary2,
    }),
    multiValueLabel: (provided: {}) => ({
      ...provided,
      color: theme.colors.default5,
    }),
    multiValueRemove: (provided: {}) => ({
      ...provided,
      color: theme.colors.default5,
      cursor: "pointer",
      ":hover": {
        backgroundColor: theme.colors.secondary2,
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
