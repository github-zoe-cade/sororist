import Select from "react-select";
import { selectStyle } from "styles/forms";

const stateOptions = [
  { label: "À valider", value: "notValidated" },
  { label: "En attente", value: "contacted" },
  { label: "Publié", value: "published" },
  { label: "Masqué", value: "hidden" },
];

export const StateSelect = ({ setFieldValue, fieldValue, ...field }) => (
  <Select
    {...field}
    id={field.name}
    value={stateOptions.find(({ value }) => value === fieldValue) || ""}
    options={stateOptions}
    onChange={(option: { label: string; value: string }) =>
      setFieldValue(field.name, option.value)
    }
    styles={selectStyle}
  />
);
