import { MultiSelect } from "components/basics/MultiSelect";

const options = [
  { label: "Twitter", value: "twitter" },
  { label: "Instagram", value: "instagram" },
  { label: "Twitch", value: "twitch" },
  { label: "Youtube", value: "youtube" },
];

type PlatformSelect = {
  error?: boolean,
  onChange: (options?: string[]) => void;
};

export const PlatformSelect = ({ error, onChange, ...field }: PlatformSelect) => (
  <MultiSelect
    {...field}
    error={error}
    placeholder="Twitter, Youtube, Github..."
    options={options}
    onChange={onChange}
  />
);
