import { MultiSelect } from "components/basics/MultiSelect";

const options = [
  { label: "Twitter", value: "Twitter" },
  { label: "Instagram", value: "Instagram" },
  { label: "Twitch", value: "Twitch" },
  { label: "Youtube", value: "Youtube" },
];

type PlatformSelect = {
  onChange: (e?: Event) => void;
};

export const PlatformSelect = ({ onChange, ...field }: PlatformSelect) => (
  <MultiSelect
    {...field}
    placeholder="Twitter, Youtube, Github..."
    options={options}
    onChange={onChange}
  />
);
