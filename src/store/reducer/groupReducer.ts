import { GROUPTYPES } from "@store/actions/groupActions";
import {
  FetchGroupResponse,
  GroupActions,
  GroupState,
} from "@store/types/group";

const initialState: GroupState = {
  totalGroups: null,
  totalPages: null,
  groups: null,
  offset: 0,
};

export function groupReducer(
  state = initialState,
  action: GroupActions
): GroupState {
  switch (action.type) {
    case GROUPTYPES.FETCH_GROUP:
      const { payload: fetchPayload } = action as FetchGroupResponse;
      return {
        ...state,
        groups: fetchPayload.groups,
        totalGroups: fetchPayload.totalGroups,
        totalPages: fetchPayload.totalPages,
      };
    default:
      return state;
  }
}
