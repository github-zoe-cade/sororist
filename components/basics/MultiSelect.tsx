import Select from "react-select";

import { compact, toArray } from "lib/helpers";
import { selectStyle } from "styles/forms";

type MultiSelect = {
  options: Array<{ label: string; value: string | number }>;
  onChange: (e?: Event) => void;
};

export const MultiSelect = ({ options, onChange, ...field }) => {
  const fieldValueToSelectValues = (value: string | string[]) =>
    compact(toArray(value).map((value: string | string[]) => {
      const option = options.find(
        ({ value: optionValue }) => value === optionValue
      );
      return option
        ? {
            value,
            label: option.label,
          }
        : undefined;
    }));

  return (
    <Select
      {...field}
      styles={selectStyle}
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
