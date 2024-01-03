// import { UserState } from '../types/redux/user-state';

import { RootState } from './store';

export const selectActiveLogin = (state: RootState) => state.user.login;

export const selectId = (state: RootState) => state.user.id;

export const selectCity = (state: RootState) => state.search.city;

export const selectSpecialization = (state: RootState) => state.search.specialization;

export const selectHours = (state: RootState) => state.schedule.hours;

export const selectLogin = (state: RootState) => state.user.login;

export const selectName = (state: RootState) => state.user.name;

export const selectLastName = (state: RootState) => state.user.lastName;

export const selectMail = (state: RootState) => state.user.mail;

export const selectStreet = (state: RootState) => state.user.street;

export const selectCode = (state: RootState) => state.user.code;

export const selectPrice = (state: RootState) => state.user.price;

