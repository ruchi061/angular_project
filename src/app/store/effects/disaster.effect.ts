// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { DisasterService } from '../../services/disaster.service';
// import * as DisasterActions from '../actions/disaster.action';
// import { catchError, map, mergeMap, tap } from 'rxjs/operators';
// import { of } from 'rxjs';

// @Injectable()
// export class DisasterEffects {

//   loadDisasters$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(DisasterActions.loadDisasters),
//       mergeMap(() =>
//         this.disasterService.getData().pipe(

//           map((res) =>
//             DisasterActions.loadDisastersSuccess({ disasters: res[0].disasters })
//           ),
//           catchError((error) => {
//             console.error('Error fetching data:', error);
//             return of(DisasterActions.loadDisastersFailure({ error }));
//           })
//         )
//       )
//     )
//   );


//   constructor(
//     private actions$: Actions,
//     private disasterService: DisasterService
//   ) {
//     console.log('DisasterEffects instantiated, actions$: ', actions$);}
// }
