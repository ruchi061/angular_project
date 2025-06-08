import { createAction, props } from '@ngrx/store';

// export const loadDisasters = createAction('[Dashboard] Load Disasters');

export const loadDisastersSuccess = createAction(
  '[Dashboard] Load Disasters Success',
  props<{ disasters: any[] }>()
);

// export const loadDisastersFailure = createAction(
//   '[Dashboard] Load Disasters Failure',
//   props<{ error: any }>()
// );
