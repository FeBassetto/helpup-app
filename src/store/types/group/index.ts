import { GROUPTYPES } from "@store/actions/groupActions";

export interface Group {
  id: string;
  title: string;
  description: string;
  created_at: Date;
  admin_id: string;
  city: string;
  distance: number;
}

export interface GroupState {
  totalGroups: number | null;
  totalPages: number | null;
  groups: Group[] | null;
  offset: number;
}

export interface FetchGroupRequest {
  totalGroups: number;
  totalPages: number;
  groups: Group[];
}

export interface FetchGroupResponse {
  type: typeof GROUPTYPES.FETCH_GROUP;
  payload: FetchGroupRequest;
}

export type GroupActions = FetchGroupResponse;
