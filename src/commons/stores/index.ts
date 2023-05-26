import { atom, RecoilState, RecoilValueReadOnly, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState: RecoilState<string> = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable: RecoilValueReadOnly<string> = selector(
  {
    key: "restoreAccessTokenLoadable",
    get: async () => {
      const newAccessToken = await getAccessToken();
      return newAccessToken;
    },
  }
);

export const selectedRegionState = atom<string | null>({
  key: "selectedRegionState",
  default: "",
});

export const selectService = atom<string | null>({
  key: "selectService",
  default: "",
});

export const selectServiceFromLanding = atom<string | null>({
  key: "selectServiceFirstFromLanding",
  default: "",
});
