import { createReducer, on } from '@ngrx/store';
import * as DisasterActions from '../actions/disaster.action';

export interface DisasterState {
  disasters: any[];
  // error: any;
}

export const initialState: DisasterState = {
  disasters: [],
  // error: null,
};

export const disasterReducer = createReducer(
  initialState,
  on(DisasterActions.loadDisastersSuccess, (state, { disasters }) => ({
    ...state,
    disasters
    // error: null
  })),
  // on(DisasterActions.loadDisastersFailure, (state, { error }) => ({
  //   ...state,
  //   error
  // }))
);


