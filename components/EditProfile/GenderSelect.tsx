import Select from "react-select";
import { selectStyle } from "styles/forms";

const genderOptions = [
  { label: "Femme", value: "female" },
  { label: "Non-binaire", value: "non-binary" },
  { label: "Homme", value: "male" },
];

export const GenderSelect = ({ setFieldValue, fieldValue, ...field }) => (
  <Select
    {...field}
    value={genderOptions.find(({ value }) => value === fieldValue) || ""}
    options={genderOptions}
    onChange={(option: { label: string; value: string }) =>
      setFieldValue(field.name, option.value)
    }
    styles={selectStyle}
  />
);
