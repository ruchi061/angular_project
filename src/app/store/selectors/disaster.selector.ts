import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DisasterState } from '../reducers/disaster.reducer';

// Feature selector
export const selectDisasterState = createFeatureSelector<DisasterState>('disasters');

// Selector for all disasters
export const selectDisasters = createSelector(
  selectDisasterState,
  (state: DisasterState) => state.disasters
);

// Selector for disaster by category
export const selectDisasterByCategory = (category: string) =>
  createSelector(
    selectDisasters,
    (disasters) => disasters.find(disaster => disaster.category === category)
  );
