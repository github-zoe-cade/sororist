import { useRef } from "react";
import Select from "react-select";

const themesOptions = [
  { label: "Data", value: "Data" },
  { label: "Ruby", value: "Ruby" },
  { label: "React", value: "React" },
  { label: "Développment", value: "Développment" },
];

export const ThemeSelector = ({ setFieldValue, onChange, values, ...field}) => {
    return (
    <Select
      {...field}
      name="themes"
      options={themesOptions}
      value={values.map((option) => ({ value: option, label: option}))}
      onChange={(options) =>
        onChange((options || []).map(({ value }) => value))
      }
      isMulti
      isSearchable
    />
  );
};
