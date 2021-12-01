import { MultiSelect } from "components/basics/MultiSelect";

const themesOptions = [
  { label: "Data", value: "Data" },
  { label: "Ruby", value: "Ruby" },
  { label: "React", value: "React" },
  { label: "Développement", value: "Développement" },
  { label: "Accessibilité", value: "Accessibilité" },
  { label: "Sécurité", value: "Sécurité" },
  { label: "Python", value: "Python" },
];

type ThemeSelect = {
  error?: boolean,
  onChange: (options?: string[]) => void;
};

export const ThemeSelect = ({ error, onChange, ...field }: ThemeSelect) => (
  <MultiSelect
    {...field}
    error={error}
    placeholder="Python, sécurité, accessibilité..."
    options={themesOptions}
    onChange={onChange}
  />
);
