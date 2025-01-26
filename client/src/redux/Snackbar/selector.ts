import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';
import { RootState } from 'components/Snackbar/types';

const selectSlice = (state: RootState) => state.toast || initialState;

export const selectToast = createSelector([selectSlice], (state) => state);
export const selectToastMessage = createSelector([selectSlice], (state) => state?.messages || []);
