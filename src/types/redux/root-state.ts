import { UserState } from './user-state';
import { SearchState } from './search-state';
import { ScheduleState } from './schedule-state';

export interface RootState {
  user: UserState;
  search: SearchState;
  schedule: ScheduleState;
}
