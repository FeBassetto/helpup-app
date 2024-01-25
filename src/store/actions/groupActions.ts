import { FetchGroupRequest } from "@store/types/group";

export const GROUPTYPES = {
  FETCH_GROUP: "FETCH_GROUP",
};

export const fetchGroup = (payload: FetchGroupRequest) => ({
  type: GROUPTYPES.FETCH_GROUP,
  payload,
});
