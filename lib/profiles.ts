import fakeProfiles from "./fakeProfiles";

// type Sex = "female" | "non-binary"

export type ProfileType = {
  uuid: string;
  name: string;
  sex?: string;
  description: string;
  pictureUrl?: string;
  themes: Array<{ uuid: number; name: string }>;
  links: Array<{ platform: string; link: string }>;
};

// Return the info to build the latest profiles on the homepage
export const getLatestProfiles = (): ProfileType[] => fakeProfiles.slice(0, 6);

// All the uuids to trigger static build of all profile pages on deploy
export const getAllProfilesUuid = (): string[] => {
  return [];
};

export const getMatchingProfiles = (filters): ProfileType[] => {
  if (!filters.themes) {
    return fakeProfiles;
  }

  const themesArray = new Array(filters.themes).flat();
  if (themesArray.length == 0) {
    return fakeProfiles;
  }

  return fakeProfiles.filter(
    (profile) =>
      profile.themes.filter((theme) =>
        themesArray.includes(theme.name.toLowerCase())
      ).length > 0
  );
};

export const getProfile = (uuid: number): ProfileType => fakeProfiles[0];
