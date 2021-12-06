import { MultiSelect } from "components/basics/MultiSelect";

const options = [
  { label: "Twitter", value: "twitter" },
  { label: "Instagram", value: "instagram" },
  { label: "Twitch", value: "twitch" },
  { label: "Youtube", value: "youtube" },
  { label: "Github", value: "github" },
  { label: "Tiktok", value: "tiktok" },
];

type PlatformSelect = {
  error?: boolean,
  name: string,
  onChange: (options?: string[]) => void;
  value: string[]
  placeholder?: string,
};

export const PlatformSelect = ({ error, name, onChange, placeholder, value, ...field }: PlatformSelect) => (
  <MultiSelect
    {...field}
    value={value}
    name={name}
    error={error}
    placeholder={placeholder || "Twitter, Youtube, Github..."}
    options={options}
    onChange={onChange}
  />
);
