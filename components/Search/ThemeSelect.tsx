import { MultiSelect } from "../basics/MultiSelect";

const themesOptions = [
  { label: "Data", value: "Data" },
  { label: "Ruby", value: "Ruby" },
  { label: "React", value: "React" },
  { label: "Développment", value: "Développment" },
  { label: "Accessibilité", value: "Accessibilité" },
  { label: "Sécurité", value: "Sécurité" },
  { label: "Python", value: "Python" },
];

type ThemeSelect = {
  onChange: (e?: Event) => void;
};

export const ThemeSelect = ({ onChange, ...field }: ThemeSelect) => (
  <MultiSelect
    {...field}
    placeholder="Python, sécurité, accessibilité..."
    options={themesOptions}
    onChange={onChange}
  />
);
