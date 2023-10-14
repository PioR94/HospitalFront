// import { UserState } from '../types/redux/user-state';

export const selectActiveLogin = (state: any) => state.user.activeLogin;

export const selectUserId = (state: any) => state.user.id;

export const selectCity = (state: any) => state.search.city;

export const selectSpecialization = (state: any) => state.search.specialization;
