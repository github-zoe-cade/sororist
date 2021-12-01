import styled from "styled-components";

import { LinkList } from "./LinkList";
import { PlatformSelect } from "./PlatformSelect";

const Label = styled.label`
  margin-top: 1rem;
  font-weight: 600;
`;

export const LinksField = ({ links, setFieldValue, ...field }) => {
  const onPlatformSelectChange = (newValues: string[]) => {
    const newLinks = newValues.map((value) => {
      const existingLink = links.find(({ platform }) => platform === value);
      return {
        platform: value,
        url: existingLink ? existingLink.url : "",
      };
    });
    setFieldValue("links", newLinks);
  };

  return (
    <>
      <Label htmlFor="platforms">Plateformes*</Label>

      <PlatformSelect
        {...field}
        value={links.map(({ platform }) => platform)}
        name="platforms"
        onChange={onPlatformSelectChange}
      />

      {links.length > 0 && (
        <LinkList {...field} setFieldValue={setFieldValue} links={links} />
      )}
    </>
  );
};
