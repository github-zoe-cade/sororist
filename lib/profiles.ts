import fakeProfiles from "./fakeProfiles";
import { FiltersType } from "./filters";

import { toArray } from "./helpers";

// type Sex = string & ("female" | "non-binary")

export type ProfileType = {
  uuid: string;
  name: string;
  sex?: string;
  description: string;
  commercial: string;
  pictureUrl?: string;
  themes: Array<{ uuid: number; name: string }>;
  links: Array<{ platform: string; url: string }>;
};

// Return the info to build the latest profiles on the homepage
export const getLatestProfiles = (): ProfileType[] => fakeProfiles.slice(0, 6);
export const getSimilarProfiles = (uuid: string): ProfileType[] => fakeProfiles.slice(0, 3);

// All the uuids to trigger static build of all profile pages on deploy
export const getAllProfilesUuid = (): string[] => {
  return [];
};

export const getMatchingProfiles = (filters: FiltersType): ProfileType[] => {
  if (!filters.themes) {
    return fakeProfiles;
  }

  const themesArray: string[] = toArray(filters.themes);
  if (themesArray.length == 0) {
    return fakeProfiles;
  }

  return fakeProfiles.filter((profile: ProfileType) => profile.themes.filter(
    (theme) => themesArray.includes(theme.name)).length > 0)
};

export const getProfile = (uuid: number): ProfileType => fakeProfiles[0];
